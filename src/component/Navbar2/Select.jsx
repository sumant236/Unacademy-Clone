import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectAutoWidth() {
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <FormControl sx={{ m: 0, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">NDA</InputLabel>
        <Select>
          <MenuItem value={10}>NDA</MenuItem>
          <MenuItem value={21}>BANK</MenuItem>
          <MenuItem value={22}> + Add another goal</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
