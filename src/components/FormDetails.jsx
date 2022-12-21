import React, { useState } from 'react';
import { Autocomplete, TextField, Typography, Grid, Button } from '@mui/material';
import MultiFormData from './MultiFormData';

export default function AddressForm({ data, setData, validationError, checkInput, files, setFiles, filesNull }) {
  const detailOptions = [
    'Defekt', 'Verschmutzung', 'Parkverstoß', 'Anderes'
  ]
  const [inputValue, setInputValue] = useState('');

  return (
    <React.Fragment>
      <div>
        <Typography variant="h6" gutterBottom>
          Details zum Mangel
        </Typography>
        <Typography variant='b2' sx={{ my: 4 }}>
          Bitte geben Sie weitere Details zum Mangel an, um eine besser Bearbeitung zu ermöglichen.
        </Typography>
      </div>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={detailOptions}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Mangelart" />}
            value={data.type}
            onChange={(e, newValue) => {
              setData({ ...data, type: newValue })
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
         { <MultiFormData files={files} setFiles={setFiles} filesNull={filesNull} />}
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            error={validationError.descriptionError}
            id="outlined-required-multiline"
            label="Beschreibung"
            placeholder="Bitte geben Sie eine Beschreibung ein"
            helperText={validationError.descriptionError ? "Bitte dieses Feld nicht leer lassen" : ""}
            value={data.description}
            onChange={(e) => { setData({ ...data, description: e.target.value }); checkInput("description", e.target.value) }}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}