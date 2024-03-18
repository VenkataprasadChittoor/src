import React from 'react';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
// import FormLabel from '@mui/material/FormLabel';

function Excercise() {
  return (
    <div >
        <form>
        <div>
        <FormControl>
      
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
       
      >
        <FormControlLabel value="wave off" control={<Radio />} label="waveoff" />
       
      </RadioGroup>
    </FormControl>

      </div>
      <div>
      <label>
        <h2>due date</h2>
        <input type="date"/>
      </label>
      </div>
      <div>
        <label>
          
            <textarea rows="15" cols="50"
            renderInput={(params) => <TextField {...params} label="Controllable" />}/>
        
        </label>
      </div>
      <div>
      <Button variant="contained">submit</Button>
<Button variant="contained" disabled>
  cancel
</Button>
      </div>
      </form>
    </div>
  )
}
export default Excercise;
