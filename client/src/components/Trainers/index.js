import React from "react";
import axios from "axios";
import TrainerList from "./TrainerList";
import TrainerCity from "./TrainerCity";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    paddingTop: "10em",
    direction: "row",
  },
  firstRowText: {
    ...theme.typography.tab,
    marginLeft: "16em",
  }
}))

class Trainers extends React.Component {
  state = {
    trainers: [],
    city: [],
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
    //const classes = useStyles();
    return (
      <div>
        {/* <Grid container direction="column">
      <Grid container direction="column" justify="center">
        <Grid item className={classes.firstRow}>
          <Grid item>
            <span className={classes.firstRowText}>About Us</span>
          </Grid>
        </Grid>
      </Grid>
      </Grid> */}
        <button
          onClick={this.searchSubmit}
          variant="outline-secondary"
          size="lg"
        >
          Show All Trainers
        </button>

        <input onChange={this.handleCitySearchChange} />
        <button onClick={this.searchByCitySubmit}>Get Trainers By City</button>
        <TrainerCity city={this.state.city} />

        <TrainerList trainers={this.state.trainers} />
      </div>
    )
  }
}

export default Trainers;
