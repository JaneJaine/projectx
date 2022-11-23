import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export default function PaymentForm({data, setData}) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={data.firstname}
            onChange={(e)=>setData({...data, firstname: e.target.value})}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            value={data.lastname}
            onChange={(e)=>setData({...data, lastname: e.target.value})}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email Addresse"
            fullWidth
            autoComplete="name@mail.de"
            variant="standard"
            value={data.email}
            onChange={(e)=>setData({...data, email: e.target.value})}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}