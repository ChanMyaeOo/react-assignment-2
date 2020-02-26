import React, { Component } from "react";
import "./App.css";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";

class App extends Component {
  state = {
    textLength: 0,
    charText: ""
  };
  changeInputHandler = event => {
    this.setState({
      textLength: event.target.value.length,
      charText: event.target.value
    });
  };

  removeCharHandler = char => {
    const charArr = this.state.charText.split("");
    const charIndex = charArr.findIndex(charVal => {
      return charVal === char;
    });

    const chars = this.state.charText.split("");
    chars.splice(charIndex, 1);
    this.setState({
      charText: chars.join(""),
      textLength: chars.join("").length
    });
  };

  render() {
    const charArr = this.state.charText.split("");

    const charText = charArr.map((char, index) => {
      return (
        <Char
          key={index}
          charText={char}
          removeChar={() => this.removeCharHandler(char)}
        />
      );
    });
    return (
      <div className="App">
        <h1>React Assignment 2</h1>
        <input
          type="text"
          onChange={this.changeInputHandler}
          value={this.state.charText}
        />
        <Validation textLength={this.state.textLength} />
        {charText}
      </div>
    );
  }
}

export default App;
