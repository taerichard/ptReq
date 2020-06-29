import React from "react";
import Search from "./Search";
import axios from "axios";
import Button from "react-bootstrap/Button";

class Trainers extends React.Component {
  state = {
    trainers: [],
    trainerLocations: [],
    locations: [],
  };

  handleClick = () => {
    axios
      .get("api/trainers")
      .then((result) => {
        this.setState({ trainers: result.data });
      })
      .catch((err) => console.log(err));
  };

  onChange(e) {}

  render() {
    return (
      <div className="trainer container">
        <input type="search" placeholder="search trainers" />
        <Search trainers={this.state.trainers} />
        <Button
          onClick={this.handleClick}
          variant="outline-secondary"
          size="lg"
        >
          Show Trainers
        </Button>
      </div>
    );
  }
}

export default Trainers;
