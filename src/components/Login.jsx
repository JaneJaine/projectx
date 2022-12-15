import { Dialog } from '@mui/material';
import React, { useState } from 'react';
import CustomButton from "./CustomButton";

export default function Login({ showAdminButton, setShowAdminButton} ) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleShowAdminButton = () => {setShowAdminButton(false); console.log("Change")};
    
   // const handleShowAdminButton = () => console.log('Clicked3');
    return (
        <React.Fragment>
            <CustomButton
                backgroundColor="#0F1B4C"
                color="#fff"
                buttonText="Admin LogIn"
                onClickFunction={handleShowAdminButton}
            />
        </React.Fragment>
    )
}
