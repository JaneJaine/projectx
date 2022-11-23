import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


export default function Review({ data }) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Bitte überprüfen sie Ihre Eingaben
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography>Name: {data.firstname} {data.lastname}</Typography>
          <Typography>Email: {data.email}</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}