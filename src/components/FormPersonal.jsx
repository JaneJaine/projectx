import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function FormPersonal({ data, setData }) {
  const [userErrorFirst, setUserErrorFirst] = useState(false);
  const [userErrorLast, setUserErrorLast] = useState(false);
  const [mailError, setMailError] = useState(false);
  const handleUserCheck = (origin, value) => {
    if (!(RegExp("^(?!\s*$).+", "g").test(value))) {
      if (origin === "first") {
        setUserErrorFirst(true);
      }
      else if (origin === "last") {
        setUserErrorLast(true);
      }
    } else { setUserErrorFirst(false); setUserErrorLast(false);}
  }
  const handleMailCheck = (value) => {
    if(!(RegExp("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$", "g").test(value))){
      setMailError(true);
    }else{
      setMailError(false);
    }
  }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Nutzerdaten
      </Typography>
      <Typography variant='b2' sx={{ my: 5 }} gutterBottom>Um eventuelle Nachfragen zu ermöglichen, geben Sie bitte Ihre Kontaktdaten an.</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            error={userErrorFirst}
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            helperText={userErrorFirst ? "Bitte nicht leer lassen" : ""}
            variant="standard"
            value={data.firstname}
            onChange={(e) => {setData({ ...data, firstname: e.target.value }); handleUserCheck("first", e.target.value);}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            error={userErrorLast}
            id="lastName"
            label="Last name"
            fullWidth
            helperText={userErrorLast ? "Bitte nicht leer lassen" : ""}
            variant="standard"
            value={data.lastname}
            onChange={(e) => {setData({ ...data, lastname: e.target.value }); handleUserCheck("last", e.target.value);}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            error={mailError}
            id="email"
            name="email"
            label="Email Addresse"
            fullWidth
            helperText={mailError ? "Bitte geben sie eine gültige E-Mail ein" : ""}
            variant="standard"
            value={data.email}
            onChange={(e) => {setData({ ...data, email: e.target.value }); handleMailCheck(e.target.value)}}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}