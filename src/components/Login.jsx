import { Dialog, DialogTitle, DialogActions, Button, DialogContent, DialogContentText, TextField, Alert, Collapse } from '@mui/material';
import React, { useState } from 'react';
import CustomButton from "./CustomButton";
import { useNavigate } from 'react-router-dom';

export default function Login({ setShowAdminButton, authData, setAuthData }) {
    //needed to navigate to a new site onClick, without using a Link
    //this enables to check the login data and wait for the respone before navigating to the admin view
    const navigate = useNavigate();

    //indicates wheather the dialog for the login input is shown or not
    const [show, setShow] = useState(false);
    //set true when the server does not give a status 200 respone
    var [error, setError] = useState(false);
    //set with the login data
    const [loginData, setLoginData] = useState({
        usermail: "",
        password: ""
    })

    //handles the open and close action of the login popup
    const handleClose = () => setShow(false);
    const handleShow = () => { setShow(true); };
    //changes the login button to the logout button
    const handleShowAdminButton = () => { setShowAdminButton(false);};

    //sends the POST request to the backend
    //if the resone is status 200, the button layout is changed, and errors are set back to false
    //if the status is not 200, error is set true
    //if no error is set, the session token and admin mail are saved and send with every admin GET, PUT or DELETE request
    //then the site navigates to the admin view via the useNavigate hook
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
                    setAuthData({...authData, token: data, usermail: loginData.usermail});
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
                            Bitte überprüfen Sie Ihre Eingaben.
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
                    <Button onClick={handleClose}>Zurück</Button>
                    <Button onClick={handleLogin}>Login</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}
