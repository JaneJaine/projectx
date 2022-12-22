import { Box, styled, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import CustomButton from './CustomButton';
import HeroImg from '../media/Frankfurt_Sky.png'
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

//creates the headline and the image on the homepage
//is the homepage's main element
const Hero = () => {
    //component to set the styling of the hero component
    const CustomBox = styled(Box)(({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        gap: theme.spacing(5),
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
        },
    }));
    //component used for the title
    const Title = styled(Typography)(({ theme }) => ({
        fontSize: "64px",
        color: "#000336",
        fontWeight: "bold",
        margin: theme.spacing(4, 0, 4, 0),
        [theme.breakpoints.down("sm")]: {
            fontSize: "40px",
        },
    }));
    return (
        <React.Fragment>
            <Box sx={{ backgroundColor: "#E6F0FF", minHeight: "80vh" }}>
                <Container>
                    <CustomBox>
                        <Box sx={{ flex: "1" }}>
                            <Typography variant="body2" sx={{ fontSize: "18px", color: "#687690", fontWeight: "500", mt: 10, mb: 4 }}>
                                Mangelmelder Frankfurt
                            </Typography>
                            <Title variant='h1' >Helfen Sie uns, eine schöne Stadt zu erhalten!</Title>
                            <Typography variant='body2' sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}>
                                Melden Sie jetzt Defekte, Verschmutzungen oder Verstöße an die Stadt Frankfurt. Unkompliziert und schnell!
                            </Typography>
                            <Link to="/report" style={{textDecoration: 'none'}}>
                                <CustomButton
                                    backgroundColor="#001BC3" color="#fff" buttonText="Hier Melden" heroBtn={true}>
                                </CustomButton>
                            </Link>
                        </Box>
                        <Box sx={{ flex: "1.5" }}>
                            <img src={HeroImg} alt="heroImg" style={{ maxWidth: "100%", marginBottom: "2rem" }} />
                        </Box>
                    </CustomBox>
                    <Footer />
                </Container>
            </Box>
        </React.Fragment>
    )
};
export default Hero;