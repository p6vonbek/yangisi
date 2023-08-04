import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Ism() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label=" Familya va Ism" />}
    />
  );
}

const top = [
  { label: 'Tohirov Polvonbek', year:1},
];