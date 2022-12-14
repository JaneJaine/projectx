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
  const zipFrank = ["60306","60308","60310","60311","60312","60313","60314","60316","60318","60320","60322","60323","60325","60326","60327","60329","60385","60386","60388","60389","60431","60433","60435","60437","60438","60439","60486","60487","60488","60489","60528","60529","60549","60594","60596","60598","60599","65929","65931","65933","65934","65936","61352"]

  const handleChange = (e) => {
    setChecked(e.target.checked)
    setLabel(mapLabel => !mapLabel)
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
      if ((!zipFrank.includes(value)) || (!value.length === 5)) {
        setZipError(true);
      } else { setZipError(false); }
    }
  }
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