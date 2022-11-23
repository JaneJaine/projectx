import React, { useState } from 'react';
import { Grid, Typography, TextField, FormControlLabel, Switch } from '@mui/material';
import MapView from './MapView';

export default function FormLocation({ data, setData }) {

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
          <MapView data={data} setData={setData} />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                id="street"
                label="Addresse"
                fullWidth
                variant="standard"
                value={data.street}
                onChange={(e) => setData({ ...data, street: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="streetNr"
                label="Hausnummer"
                fullWidth
                variant="standard"
                value={data.strNr}
                onChange={(e) => setData({ ...data, strNr: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="zip"
                label="PLZ"
                fullWidth
                variant="standard"
                value={data.zip}
                onChange={(e) => setData({ ...data, zip: e.target.value })}
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