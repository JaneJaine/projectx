import * as React from "react";
import {Box, Typography} from "@mui/material/Box";
import {MenuIcon, FeaturedPlayListIcon, HomeIcon, ContactsIcon} from "@mui/icons-material";
import { Container } from "@mui/system";
import logoImg from "../media/Frankfurt_am_Main_logo_small.png";
import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    styled,
} from "@mui/material";
import { useState } from "react";
import Login from "./Login";

export const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.type === "Tab" || event.type === "Shift")
        ) {
            return;
        }

        setMobileMenu({ ...mobileMenu, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {["Home", "Contact", "Impressum"].map(
                    (text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index === 0 && <HomeIcon />}
                                    {index === 1 && <ContactsIcon />}
                                    {index === 2 && <FeaturedPlayListIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    )
                )}
            </List>
        </Box>
    );

    const NavLink = styled(Typography)(({ theme }) => ({
        fontSize: "14px",
        color: "#4F5361",
        fontWeight: "bold",
        cursor: "pointer",
        "&:hover": {
            color: "#0F1B4C",
        },
    }));

    const NavbarLinksBox = styled(Box)(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: theme.spacing(3),
        [theme.breakpoints.down("md")]: {
            display: "none",
        },
    }));

    const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
        cursor: "pointer",
        display: "none",
        marginRight: theme.spacing(2),
        [theme.breakpoints.down("md")]: {
            display: "block",
        },
    }));

    const NavbarContainer = styled(Container)(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: theme.spacing(3),
        [theme.breakpoints.down("md")]: {
            padding: theme.spacing(2),
        },
    }));

    const NavbarLogo = styled("img")(({ theme }) => ({
        cursor: "pointer",
        [theme.breakpoints.down("md")]: {
            display: "none",
        },
    }));

    return (
        <NavbarContainer>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "2.5rem",
                }}
            >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <CustomMenuIcon onClick={toggleDrawer("left", true)} />
                    <Drawer
                        anchor="left"
                        open={mobileMenu["left"]}
                        onClose={toggleDrawer("left", false)}
                    >
                        {list("left")}
                    </Drawer>
                    <NavbarLogo src={logoImg} alt="logo" />
                </Box>

                <NavbarLinksBox>
                    <NavLink to="/" variant="body2">Home</NavLink>
                    <NavLink to="contact" variant="body2">Contact</NavLink>
                    <NavLink variant="body2">Impressum</NavLink>
                </NavbarLinksBox>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                }}>
                <Login />
            </Box>
        </NavbarContainer>
    );
};

export default Navbar;