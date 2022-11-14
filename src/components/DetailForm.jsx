import * as React from 'react';
import { Autocomplete, TextField, Typography, Grid } from '@mui/material';

export default function AddressForm() {
  const detailOptions = [
    'Defekt', 'Verschmutzung', 'Parkverstoß', 'Anderes'
  ]
  return (
    <React.Fragment>
      {/* <MapComp /> */}
      <Typography variant="h6" gutterBottom>
        Details zum Mangel
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={detailOptions}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Mangelart" />}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}