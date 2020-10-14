import React from "react";
import SearchBar from "./SearchBar";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

export default class Locations extends React.Component {
  state = {
    trainers: [],
    locations: [],
  };

  handleSubmit = async (data) => {
    console.log("coming from location index");

    const response = await axios.get(
      `api/trainer/city/city?=${data.toString()}`
    );
    console.log("response:", response);
  };

  render() {
    return (
      <Grid container direction="row" justify="center">
        <SearchBar
          onSubmit={this.handleSubmit}
          locations={this.state.locations}
        />
      </Grid>
    );
  }
}
