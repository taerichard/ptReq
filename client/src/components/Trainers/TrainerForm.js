import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import yogaImg from "../../images/yoga.jpg";
import axios from "axios";
import TrainerList from "./TrainerList";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "8em",
    backgroundColor: "#E5E5E5",
    height: "50vh",
    width: "100vh",
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

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

export default function TrainerForm(props) {
  const classes = useStyles();
  const [genderValue, setGenderValue] = useState("");
  const [cityValue, setCityValue] = useState("");
  const [trainers, setTrainerValues] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    getTrainers(genderValue);
  };
  const handleGenderChange = (e) => {
    setGenderValue(e.target.value);
  };

  const handleCityChange = (e) => {
    setCityValue(e.target.value);
  };

  const getTrainers = async (gender) => {
    try {
      const response = await axios.get(`api/trainer/gender/${gender}`);
      console.log("axios get");
      setTrainerValues(response.data);
      console.log("coming from form for trainer value", trainers);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Grid container direction="row">
      <Grid container direction="column" justify="flex-start">
        <Grid item>
          <Typography>Choose Your Trainer</Typography>
        </Grid>
        <Grid container direction="column" justify="flex-start">
          <form
            className={classes.root}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}>
            <Grid item>
              <TextField
                id="standard-secondary"
                select
                label="Gender"
                value={genderValue}
                onChange={handleGenderChange}
                helperText="Please Select Trainer Gender">
                {genders.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item>
              <TextField
                id="standard-select-currency"
                select
                label="City"
                value={cityValue}
                onChange={handleCityChange}
                helperText="Please Select City Name">
                {cities.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Button
              onClick={handleSubmit}
              variant="contained"
              color="secondary">
              Search Trainers
            </Button>
          </form>
        </Grid>
        <Grid item>
          <TrainerList trainers={trainers} />
        </Grid>
        {/* <Grid item>
          <Card classes={{ root: classes.imageCard }}>
            <CardMedia
              classes={{ root: classes.image }}
              image={yogaImg}
              title="high knees"
              component="img"
            />
          </Card>
        </Grid> */}
      </Grid>
    </Grid>
  );
}
