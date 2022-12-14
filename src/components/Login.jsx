import { Dialog, DialogTitle, DialogActions, Button, DialogContent, DialogContentText, TextField, Alert, Collapse } from '@mui/material';
import React, { useState } from 'react';
import CustomButton from "./CustomButton";
import { useNavigate } from 'react-router-dom';

export default function Login({ setShowAdminButton, token, setToken }) {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => { setShow(true); };
    const [loginData, setLoginData] = useState({
        usermail: "",
        password: ""
    })
    var [error, setError] = useState(false);
    const handleShowAdminButton = () => { setShowAdminButton(false);};
    const handleLogin = () => {
        fetch('http://localhost:8080/api/v1/damageReport/adminLogin', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(loginData)
        }).then(res => {
            if (res.status === 200) {
                handleShowAdminButton();
                setError(false);
                error=false;
                return res.text();
            } else{
                setError(true);
                error=true;
            }
            console.log(res.status)
        })
            .then(data => {
                if (!error) {
                    setToken(data);
                    navigate('/admin');
                }
            })
            .catch(error => console.log('ERROR' + error))
    }
    return (
        <React.Fragment>
            <CustomButton
                backgroundColor="#0F1B4C"
                color="#fff"
                buttonText="Admin Login"
                onClickFunction={handleShow}
            />
            <Dialog open={show} onClose={handleClose}>
                <DialogTitle>Login</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Um zur Mitarbeiter-Ansicht Zugang zu bekommen, melden Sie sich bitte an.
                    </DialogContentText>
                    <Collapse in={error}>
                        <Alert sx={{ mb: 2 }} severity="error">
                            Bitte ??berpr??fen Sie Ihre Eingaben.
                        </Alert>
                    </Collapse>
                    <TextField
                        margin="dense"
                        id="mail"
                        label="Email Address"
                        type="email"
                        fullWidth
                        variant="standard"
                        value={loginData.usermail}
                        onChange={(e) => { setLoginData({ ...loginData, usermail: e.target.value }) }}
                    />
                    <TextField
                        margin="dense"
                        id="passord"
                        label="Password"
                        type="password"
                        fullWidth
                        variant="standard"
                        value={loginData.password}
                        onChange={(e) => { setLoginData({ ...loginData, password: e.target.value }) }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Zur??ck</Button>
                    <Button onClick={handleLogin}>Login</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}
