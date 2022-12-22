import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}
export default function SearchBarAsynchronous({onChangeFunction}) {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;
    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3);

      if (active) {
        setOptions([...zipData]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);
  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);
  return (
    <Autocomplete
      id="asynchronous-demo"
      sx={{ width: 300 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option.title === value.title}
      getOptionLabel={(option) => option.title}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          onChange = {onChangeFunction}
          label="PLZ"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}
const zipData = [
 {title:"60306"}, {title:"60308"}, {title:"60310"}, {title:"60311"}, {title:"60312"},
 {title:"60313"}, {title:"60314"}, {title:"60316"}, {title:"60318"}, {title:"60320"},
 {title:"60322"}, {title:"60323"}, {title:"60325"}, {title:"60326"}, {title:"60327"},
 {title:"60329"}, {title:"60385"}, {title:"60386"}, {title:"60388"}, {title:"60389"},
 {title:"60431"}, {title:"60433"}, {title:"60435"}, {title:"60437"}, {title:"60438"},
 {title:"60439"}, {title:"60486"}, {title:"60487"}, {title:"60488"}, {title:"60489"},
 {title:"60528"}, {title:"60529"}, {title:"60549"}, {title:"60594"}, {title:"60596"},
 {title:"60598"}, {title:"60599"}, {title:"65929"}, {title:"65931"}, {title:"65933"},
 {title:"65934"}, {title:"65936"}, {title:"61352"},
];



