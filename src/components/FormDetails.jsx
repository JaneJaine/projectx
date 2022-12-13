import React, {useState} from 'react';
import { Autocomplete, TextField, Typography, Grid, Button } from '@mui/material';

export default function AddressForm({ data, setData }) {
  const detailOptions = [
    'Defekt', 'Verschmutzung', 'Parkverstoß', 'Anderes'
  ]
  const [descriptionError, setDescriptionError] = useState(false);
  const handleDescriptionCheck = (value) => {
    if (!(RegExp("^(?!\s*$).+", "g").test(value))) {
      setDescriptionError(true);
    } else{ setDescriptionError(false);}
  }

  const [inputValue, setInputValue] = React.useState('');
  const checkInput = (e) => {
    console.log("image" + e.target.value)
    //setData({data, image: e.target.files[0]});
  }

  return (
    <React.Fragment>
      <div>  
        <Typography variant="h6" gutterBottom>
          Details zum Mangel
        </Typography>
        <Typography variant='b2' sx={{ my: 4 }}>Bitte geben Sie weitere Details zum Mangel an, um eine besser Bearbeitung zu ermöglichen.</Typography>
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
          <Button variant="contained" component="label">
            Upload File
            <input type="file" hidden onChange={(e) => checkInput(e)} />
          </Button>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            error={descriptionError}
            id="outlined-required-multiline"
            label="Beschreibung"
            placeholder="Bitte geben Sie eine Beschreibung ein"
            helperText={descriptionError ? "Bitte dieses Fled nicht leer lassen" : ""}
            value={data.description}
            onChange={(e) => {setData({ ...data, description: e.target.value }); handleDescriptionCheck(e.target.value)}}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}