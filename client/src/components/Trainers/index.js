import React from "react";
import TrainerForm from "./TrainerForm";
import axios from "axios";
import TrainerList from "./TrainerList";
import TrainerCity from "./TrainerCity";
import Grid from "@material-ui/core/Grid";

class Trainers extends React.Component {
  state = {
    trainers: [],
    city: [],
  };

  onTrainerSubmit = async (data) => {
    console.log("coming form index", data);
    try {
      const response = await axios.get(`api/trainer/gender/${data[0]}`);
      console.log(response);
      this.setState({ trainers: response.data });
    } catch (err) {
      console.log(err);
    }
  };

  searchSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get("api/trainer");
      console.log("clicked", response);
      this.setState({ trainers: response.data });
    } catch (err) {
      console.log(err);
    }
  };

  searchByCitySubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`api/trainer/city/city?=ass`);
      console.log("clicked", response);
      this.setState({ trainers: response.data });
    } catch (err) {
      console.log(err);
    }
  };

  handleCitySearchChange = (e) => {
    this.setState({
      city: e.target.value,
    });
  };

  render() {
    return (
      <Grid container direction="column" alignContent="center">
        <Grid item>
          <TrainerForm onSubmit={this.onTrainerSubmit} />
        </Grid>
        <Grid item>Data displayed here</Grid>
      </Grid>
    );
  }
}

export default Trainers;
