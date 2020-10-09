import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const genders = [
  {
    value: "Male",
    label: "Male",
  },
  {
    value: "Female",
    label: "Female",
  },
];
const cities = [
  {
    value: "Kenmore",
    label: "Kenmore",
  },
  {
    value: "Kirkland",
    label: "Kirkland",
  },
  {
    value: "Redmond",
    label: "Redmond",
  },
  {
    value: "Seattle",
    label: "Seattle",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));



export default function TrainerForm() {
  const classes = useStyles();
  const [genderValue, setGenderValue] = useState("");
  const [cityValue, setCityValue] = useState("");

  const handleGenderChange = (e) => {
    setGenderValue(e.target.value);
  };

  const handleCityChange = (e) => {
    setCityValue(e.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="standard-select-currency"
          select
          label="Gender"
          value={genderValue}
          onChange={handleGenderChange}
          helperText="Please Select Trainer Gender"
        >
          {genders.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div>
        <TextField
          id="standard-select-currency"
          select
          label="City"
          value={cityValue}
          onChange={handleCityChange}
          helperText="Please Select City Name"
        >
          {cities.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      {/* <div>
        <TextField
          id="filled-select-currency"
          select
          label="Select"
          value={currency}
          onChange={handleChange}
          helperText="Please select your currency"
          variant="filled"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div> */}
      {/* <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={currency}
          onChange={handleChange}
          helperText="Please select your currency"
          variant="outlined"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div> */}
    </form>
  );
}
