import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

import fbIcon from "../media/fbicon.png";
import twitterIcon from "../media/twittericon.png";
import linkedinIcon from "../media/linkedinicon.png";

const Footer = () => {
    const CustomContainer = styled(Container)(({ theme }) => ({
        display: "flex",
        justifyContent: "space-around",
        gap: theme.spacing(5),
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            textAlign: "center",
        },
    }));

    const IconBox = styled(Box)(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        [theme.breakpoints.down("sm")]: {
            justifyContent: "center",
        },
    }));

    const FooterLink = styled("span")(({ theme }) => ({
        fontSize: "16px",
        color: "#7A7A7E",
        fontWeight: "300",
        cursor: "pointer",
        "&:hover": {
            color: "#000",
        },
    }));

    return (
        <React.Fragment>
            <Box sx={{ py: 10 }}>
                <CustomContainer>
                    <CustomContainer>
                        <Box>
                            <Typography
                                sx={{
                                    fontSize: "20px",
                                    color: "#1C1C1D",
                                    fontWeight: "700",
                                    mb: 2,
                                }}
                            >
                                Aktuelles
                            </Typography>

                            <FooterLink>Bildung</FooterLink>
                            <br />
                            <FooterLink>Wirtschaft</FooterLink>
                            <br />
                            <FooterLink>Kultur</FooterLink>
                            <br />
                            <FooterLink>Tourismus</FooterLink>
                        </Box>

                        <Box>
                            <Typography
                                sx={{
                                    fontSize: "20px",
                                    color: "#1C1C1D",
                                    fontWeight: "700",
                                    mb: 2,
                                }}
                            >
                                Service
                            </Typography>

                            <FooterLink>Kontakformular</FooterLink>
                            <br />
                            <FooterLink>Stadtkarte</FooterLink>
                            <br />
                            <FooterLink>Aktuelle Mitteilungen</FooterLink>
                            <br />
                            <FooterLink>Stellenangebote</FooterLink>
                        </Box>

                        <Box>
                            <Typography
                                sx={{
                                    fontSize: "20px",
                                    color: "#1C1C1D",
                                    fontWeight: "700",
                                    mb: 2,
                                }}
                            >
                                Website
                            </Typography>

                            <FooterLink>Impressum</FooterLink>
                            <br />
                            <FooterLink>Datenschutz</FooterLink>
                            <br />
                            <FooterLink>Nutzungsbedingungen</FooterLink>
                        </Box>

                        <Box>
                            <Typography
                                sx={{
                                    fontSize: "20px",
                                    color: "#1C1C1D",
                                    fontWeight: "700",
                                    mb: 2,
                                }}
                            >
                                Get in touch
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: "16px",
                                    color: "#7A7A7E",
                                    fontWeight: "500",
                                    mb: 2,
                                }}
                            >
                                Bleibe auf dem neuesten Stand.
                            </Typography>

                            <IconBox>
                                <img src={fbIcon} alt="fbIcon" style={{ cursor: "pointer" }} />
                                <img
                                    src={twitterIcon}
                                    alt="twitterIcon"
                                    style={{ cursor: "pointer" }}
                                />
                                <img
                                    src={linkedinIcon}
                                    alt="linkedinIcon"
                                    style={{ cursor: "pointer" }}
                                />
                            </IconBox>
                        </Box>
                    </CustomContainer>
                </CustomContainer>
            </Box>
        </React.Fragment>
    );
};

export default Footer;