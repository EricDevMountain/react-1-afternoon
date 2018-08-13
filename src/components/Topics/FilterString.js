import React, { Component } from "react";

export default class FilterString extends Component {
  constructor() {
    super();

    this.state = {
      names: [
        "Snickers",
        "Reeses",
        "Kit Kat",
        "Carmelo",
        "Whatchamacallit",
        "Butterfinger"
      ],
      userInput: "",
      filteredNames: []
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  filterNames(userInput) {
    var names = this.state.names;
    var filteredNames = [];

    for (var i = 0; i < names.length; i++) {
      if (names[i].startsWith(userInput)) {
        filteredNames.push(names[i]);
      }
    }

    this.setState({ filteredNames: filteredNames });
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4> Filter String </h4>
        <span className="puzzleText">
          {" "}
          Candy Bars: {JSON.stringify(this.state.names, null, 10)}{" "}
        </span>
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.filterNames(this.state.userInput)}
        >
          {" "}
          Filter{" "}
        </button>
        <span className="resultsBox filterStringRB">
          {" "}
          Filtered Deliciousness:{" "}
          {JSON.stringify(this.state.filteredNames, null, 10)}{" "}
        </span>
      </div>
    );
  }
}
