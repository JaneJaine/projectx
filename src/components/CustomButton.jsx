import {Button, styled} from '@mui/material';
import React from 'react';

//creates a button component with custom styling, wich is the main button used in the UI
const CustomButton = ({backgroundColor, color, buttonText, heroBtn, guideBtn, getStartedBtn, onClickFunction, marginTop, marginLeft, minWidth, width}) => {
    //styled components is used to create custom components
    const CustomButton = styled(Button)(({theme}) => ({
        backgroundColor: backgroundColor,
        color: color,
        fontWeight: "700",
        fontSize: "14px",
        cursor: "pointer",
        padding: "0.5rem 1.25rem",
        borderRadius: "7px",
        textTransform: "none",
        display: "block",
        border: "2px solid transparent",
        marginTop: marginTop,
        marginLeft: marginLeft,
        minWidth: minWidth,
        width: width,
        "&:hover":{
            backgroundColor: color,
            color: backgroundColor
        },
        [theme.breakpoints.down("md")]: {
            margin: (heroBtn || getStartedBtn) && theme.spacing(0, "auto", 3, "auto"),
            width: (heroBtn || getStartedBtn) && "90%"
        },
        [theme.breakpoints.down("sm")]: {
            marginTop: (guideBtn) && theme.spacing(3),
            width: guideBtn && "90%"
        },
    }));
    return <CustomButton onClick={onClickFunction}>{buttonText}</CustomButton>
}
export default CustomButton;