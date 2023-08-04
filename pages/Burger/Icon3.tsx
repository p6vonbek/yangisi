import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Kun() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top31}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Kun" />}
    />
  );
}

const top31 = [

  { label: '1', year:1},
  { label: '2', year:2},
  { label: '3', year:3},
  { label: '4', year:4},
  { label: '5', year:5},
  { label: '6', year:6},
  { label: '7', year:7},
  { label: '8', year:8},
  { label: '9', year:9},
  { label: '10', year:10},
  { label: '11', year:11},
  { label: '12', year:12},
  { label: '13', year:13},
  { label: '14', year:14},
  { label: '15', year:15},
  { label: '16', year:16},
  { label: '17', year:17},
  { label: '18', year:18},
  { label: '19', year:19},
  { label: '20', year:20},
  { label: '21', year:21},
  { label: '22', year:22},
  { label: '23', year:23},
  { label: '24', year:24},
  { label: '25', year:25},
  { label: '26', year:26},
  { label: '27', year:27},
  { label: '28', year:28},
  { label: '29', year:29},
  { label: '30', year:30},
  { label: '31', year:31},
];