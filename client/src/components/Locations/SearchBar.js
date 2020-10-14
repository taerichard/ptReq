import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

export default class SearchBar extends React.Component {
  state = {
    inputValues: [],
  };

  handleOnChange = (e) => {
    console.log(e.target.value);
    this.setState({ inputValues: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValues);
    console.log();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.inputValues}
          onChange={this.handleOnChange}
          style={{ width: 300 }}
        />
        <input type="submit" />
      </form>
    );
  }
}

const locations = [
  { city: "Kirkland" },
  { city: "Kenmore" },
  { city: "Seattle" },
  { city: "Woodinville" },
  { city: "Redmond" },
  { city: "Snohomish" },
];
