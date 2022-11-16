import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import MapView from './MapView';

export default function AddressForm() {

  const [checked, setChecked] = React.useState(false)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
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
        <FormControlLabel control={<Switch checked={checked} onChange={handleChange} />} label="Auf Map auswählen" />
      </Grid>

    </React.Fragment>
  );
}