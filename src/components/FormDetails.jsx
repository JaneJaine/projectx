import * as React from 'react';
import { Autocomplete, TextField, Typography, Grid } from '@mui/material';

export default function AddressForm({ data, setData }) {

  const detailOptions = [
    'Defekt', 'Verschmutzung', 'Parkverstoß', 'Anderes'
  ]
  const [value, setValue] = React.useState(detailOptions[data.typeInt]);
  const [inputValue, setInputValue] = React.useState('');
  return (
    <React.Fragment>
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
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            inputValue={data.typeString}
            onInputChange={(e, newInputValue) => {
              setData({...data, typeString: newInputValue});
            }}
            /* 
            value={detailOptions[data.type]}
            onChange={(e) => setData({ ...data, type: e.target.value })} */
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="outlined-required-multiline"
            label="Beschreibung"
            placeholder="Bitte geben Sie eine Beschreibung ein"
            value={data.description}
            onChange={(e) => setData({ ...data, description: e.target.value })}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}