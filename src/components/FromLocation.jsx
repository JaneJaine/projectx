import React, { useState } from 'react';
import { Grid, Typography, TextField, FormControlLabel, Switch } from '@mui/material';
import MapView from './MapView';

export default function FormLocation({ data, setData }) {

  const [checked, setChecked] = useState(false);
  const [mapLabel, setLabel] = useState(true);
  const [streetError, setStreetError] = useState(false);
  const [strNrError, setstrNrError] = useState(false);
  const [zipError, setZipError] = useState(false);
  const [strNrErrorText, setstrNrErrorText] = useState('');

  const handleChange = (e) => {
    setChecked(e.target.checked)
    setLabel(mapLabel => !mapLabel)
  }

  const setDataString = (origin, value) => {
    return (`${origin}:${value}`);
  }

  const handleFieldCheck = (origin, value) => {
    if (origin === "street") {
      if (!(RegExp("^(?!\s*$).+", "g").test(value))) {
        setStreetError(true);
      } else setStreetError(false);
    }
    if (origin === "strNr") {
      if (!(RegExp(".*[0-9].*", "g").test(value))) {
        setstrNrError(true);
        setstrNrErrorText("Bitte geben Sie mindestens eine Nummer ein");
      } else if (!(RegExp("^(?!\s*$).+", "g").test(value))) {
        setstrNrError(true);
        setstrNrErrorText("Bitte lassen Sie das Feld nicht leer");
      } else { setstrNrError(false); setstrNrErrorText(""); }
    }
    if (origin === "zip") {
      if (!(RegExp("^(?!01000|99999)(0[1-9]\d{3}|[1-9]\d{4})$", "g").test(value))) {
        setZipError(true);
      } else { setZipError(false); }
    }
  }
  //.*[0-9].*
  return (
    <React.Fragment>
      <Typography variant="h6">
        Ortsangabe
      </Typography>
      <Typography variant='b2' sx={{ my: 10 }} gutterBottom>Bitte geben Sie genauere Details zum Ort des Mangels an.</Typography>
      {checked ? (
        <React.Fragment>
          <MapView data={data} setData={setData} />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                error={streetError}
                required
                label="Addresse"
                fullWidth
                variant="standard"
                helperText={streetError ? "Bitte nicht leer lassen" : ""}
                value={data.street}
                //onChange={(e) => setData({ ...data, street: e.target.value })}
                onChange={(e) => { setData({ ...data, street: e.target.value }); handleFieldCheck("street", e.target.value) }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                error={strNrError}
                required
                id="strNr"
                label="Hausnummer"
                fullWidth
                variant="standard"
                helperText={strNrError ? strNrErrorText : ""}
                value={data.strNr}
                onChange={(e) => { setData({ ...data, strNr: e.target.value }); handleFieldCheck("strNr", e.target.value) }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                error={zipError}
                id="zip"
                label="PLZ"
                fullWidth
                variant="standard"
                helperText={zipError ? "Bitte eine gültige PLZ angeben" : ""}
                value={data.zip}
                onChange={(e) => { setData({ ...data, zip: e.target.value }); handleFieldCheck("zip", e.target.value) }}
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