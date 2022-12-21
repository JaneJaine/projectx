import {Button, styled} from '@mui/material';
import React from 'react';

const CustomButton1 = ({backgroundColor, color, buttonText, heroBtn, guideBtn, getStartedBtn, onClickFunction, marginTop1}) => {
    const CustomButton1 = styled(Button)(({theme}) => ({
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
        marginTop: marginTop1,
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
    return <CustomButton1 onClick={onClickFunction}>{buttonText}</CustomButton1>
}
export default CustomButton1;