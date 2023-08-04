import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


export default function Oy() {
  return (
    <div>
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top12}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label=" Oy" />}
    />

  </div>
  );
}

const top12 = [
  { label: 'Yanvar', year:1 },
  { label: 'Febral', year:2 },
  { label: 'Mart', year:3 },
  { label: 'Aprel', year:4 },
  { label: 'May', year:5 },
  { label: 'Iyun', year:6 },
  { label: 'Iyul', year:7 },
  { label: 'Ovgus', year:8 },
  { label: 'Sentabr', year:9 },
  { label: 'Oktiyabr', year:10 },
  { label: 'Noyabr', year:11 },
  { label: 'Dekabr', year:12 },
];


