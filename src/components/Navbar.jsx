import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import logoImg from "../media/Frankfurt_am_Main_logo_small.png";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";
import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Box,
    Typography,
    styled,
} from "@mui/material";
import Login from "./Login";
import CustomButton from "./CustomButton";

export const Navbar = ({ token, setToken }) => {
    const [mobileMenu, setMobileMenu] = useState({
        left: false,
    });

    const [showAdminButton, setShowAdminButton] = useState(true);

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

    const NavLink = styled(Typography)(() => ({
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
        backgroundColor: "#E6F0FF",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: theme.spacing(3),
        [theme.breakpoints.down("md")]: {
            padding: theme.spacing(2),
        },
    }));

    const NavbarLogo = styled("img")(({ theme }) => ({
        [theme.breakpoints.down("md")]: {
            display: "none",
        },
    }));

    const handleLogout = () => {
        setToken(null);
        setShowAdminButton(true);
    }
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
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <NavLink>Home</NavLink>
                    </Link>
                    <Link to="/contact" style={{ textDecoration: 'none' }}>
                        <NavLink to="contact" variant="body2">Contact</NavLink>
                    </Link>
                    <Link to="/impressum" style={{ textDecoration: 'none' }}>
                        <NavLink variant="body2">Impressum</NavLink>
                    </Link>
                </NavbarLinksBox>
            </Box>

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                }}>
                {(showAdminButton) ? (
                    <Login setShowAdminButton={setShowAdminButton} token={token} setToken={setToken} />
                ) : (
                    <React.Fragment>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <CustomButton onClickFunction={handleLogout} backgroundColor="#0F1B4C"
                                color="#fff" buttonText={"Logout"} > </CustomButton>
                        </Link>
                    </React.Fragment>
                )
                }
            </Box>
        </NavbarContainer>
    );
};

export default Navbar;