import React, { useState } from 'react';
import {Grid, Typography, TextField, FormControlLabel, Switch} from '@mui/material';
import MapView from './MapView';

export default function AddressForm() {

  const [checked, setChecked] = useState(false);
  const [mapLabel, setLabel] = useState(true)
  const handleChange = (e) => {
    setChecked(e.target.checked)
    setLabel(mapLabel => !mapLabel)
  }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Ortsangabe
      </Typography>
      {checked ? (
        <React.Fragment>
          <MapView />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                id="address"
                name="address"
                label="Addresse"
                fullWidth
                autoComplete="address"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="number"
                name="number"
                label="Hausnummer"
                fullWidth
                autoComplete="number"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="zip"
                name="zip"
                label="PLZ"
                fullWidth
                autoComplete="shipping postal-code"
                variant="standard"
              />
            </Grid>
          </Grid>
        </React.Fragment>
      )}
      <Grid item xs={12}>
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleChange} />}
          label={mapLabel ? "Auf Map auswählen" : "Manuell eingeben"} />
      </Grid>
    </React.Fragment>
  );
}