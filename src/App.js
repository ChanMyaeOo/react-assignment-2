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

  removeCharHandler = index => {
    const charArr = this.state.charText.split("");
    charArr.splice(index, 1);

    this.setState({
      charText: charArr.join(""),
      textLength: charArr.join("").length
    });
  };

  render() {
    const charArr = this.state.charText.split("");

    const charText = charArr.map((char, index) => {
      return (
        <Char
          key={index}
          charText={char}
          removeChar={() => this.removeCharHandler(index)}
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
