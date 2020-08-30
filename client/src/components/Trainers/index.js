import React from "react";
import TrainerList from "./TrainerList";
import axios from "axios";
import { Button, Row } from "react-bootstrap";

class Trainers extends React.Component {
  state = {
    trainers: [],
    trainerLocations: [],
    cityInput: "",
  };

  handleSearchSubmit = () => {
    axios
      .get(`api/trainerlocation?city=${this.state.cityInput}`)
      .then((result) => {
        this.setState({ trainers: result.data });
      })
      .catch((err) => console.log(err));
  };

  handleSearchChange = (e) => {
    this.setState({
      cityInput: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <Row>
          <input
            onChange={this.handleSearchChange}
            value={this.state.cityInput}
            placeholder="Enter City"
          />
          <Button
            onClick={this.handleSearchSubmit}
            variant="outline-secondary"
            size="lg"
          >
            Search
          </Button>
        </Row>
        <Row>
          <TrainerList trainers={this.state.trainers} />
        </Row>
      </div>
    );
  }
}

export default Trainers;
