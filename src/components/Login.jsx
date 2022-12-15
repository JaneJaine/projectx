import { Dialog } from '@mui/material';
import React, { useState } from 'react';
import CustomButton from "./CustomButton";

export default function Login() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showAdminButton, setShowAdminButton] = useState(true);
    const handleShowAdminButton = () => setShowAdminButton (false);
    
   // const handleShowAdminButton = () => console.log('Clicked3');
    return (
        <React.Fragment>
            <CustomButton
                backgroundColor="#0F1B4C"
                color="#fff"
                buttonText="Admin LogIn"
                onClick={handleShow}
            />

            <Dialog show={show} onHide={handleClose}>

            </Dialog>
        </React.Fragment>
    )
}
