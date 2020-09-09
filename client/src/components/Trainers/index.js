import React from "react";
import TrainerList from "./TrainerList";
import axios from "axios";
import { Button, Row } from "react-bootstrap";

class Trainers extends React.Component {
  state = {
    trainers: [],
    city: "",
    state: "",
    email: "",
  };

  handleCitySearchSubmit = () => {
    axios
      .get(`api/trainer/city/city=${this.state.city}`)
      //.get(`api/trainer`)
      .then((result) => {
        console.log("result", result.data);
        this.setState({ trainers: result.data });
      })
      .catch((err) => console.log(err));
  };

  handleCitySearchChange = (e) => {
    this.setState({
      city: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <Row>
          <input
            onChange={this.handleCitySearchChange}
            value={this.state.city}
            placeholder="Enter City"
          />
          <Button
            onClick={this.handleCitySearchSubmit}
            variant="outline-secondary"
            size="lg"
          >
            Search
          </Button>
        </Row>

        <Row>
          <input
            onChange={this.handleSearchChange}
            value={this.state.cityInput}
            placeholder="Enter State"
          />
          <Button variant="outline-secondary" size="lg">
            Search
          </Button>
        </Row>

        <Row>
          <input
            onChange={this.handleSearchChange}
            value={this.state.cityInput}
            placeholder="Enter Email"
          />
          <Button variant="outline-secondary" size="lg">
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
