import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

export default class Search extends React.Component {
  state = {
    trainers: [],
    //trainerLocations: [],
  };

  componentDidMount() {
    axios
      .get("api/trainers")
      .then((result) => {
        this.setState({ trainers: result.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        Search Component
        <SearchBar trainers={this.state.trainers} />
      </div>
    );
  }
}
