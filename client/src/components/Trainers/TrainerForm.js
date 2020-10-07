import React from "react";
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
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="standard-select-currency"
          select
          label="Gender"
          value={currency}
          onChange={handleChange}
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
          id="standard-select-currency-native"
          select
          label="City"
          value={currency}
          onChange={handleChange}
          helperText="Please Select City Name"
        >
          {cities.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
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
