import React from "react";
import axios from "axios";
import TrainerList from "./TrainerList";
import TrainerCity from "./TrainerCity";

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
    return (
      <div>
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
    );
  }
}

export default Trainers;
