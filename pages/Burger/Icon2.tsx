import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Yil() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top33}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label=" Yil" />}
    />
  );
}

const top33 = [
  { label: '1991', year:1},
  { label: '1992', year:2},
  { label: '1993', year:3},
  { label: '1994', year:4},
  { label: '1995', year:5},
  { label: '1996', year:6},
  { label: '1997', year:7},
  { label: '1998', year:8},
  { label: '1999', year:9},
  { label: '2000', year:10},
  { label: '2001', year:11},
  { label: '2002', year:12},
  { label: '2003', year:13},
  { label: '2004', year:14},
  { label: '2005', year:15},
  { label: '2006', year:16},
  { label: '2007', year:17},
  { label: '2008', year:18},
  { label: '2009', year:19},
  { label: '2010', year:20},
  { label: '2011', year:21},
  { label: '2012', year:22},
  { label: '2013', year:23},
  { label: '2014', year:24},
  { label: '2015', year:25},
  { label: '2016', year:26},
  { label: '2017', year:27},
  { label: '2018', year:28},
  { label: '2019', year:29},
  { label: '2020', year:30},
  { label: '2021', year:31},
  { label: '2022', year:32},
  { label: '2023', year:33},


];