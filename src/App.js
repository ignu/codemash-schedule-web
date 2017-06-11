import React, { Component } from "react";
import logo from "./logo.svg";
import R from "ramda";
import "./App.css";

import sessions from "./data/sessions.js";

const Session = props => {
  const { Title, Abstract, Category, Tags } = props;

  return (
    <li>
      <div>{Title}</div>
      <div>{Abstract}</div>
      <div>{Category}</div>
      <div>{Tags.join(',')}</div>
    </li>
  );
};

const SessionList = props => {
  return (<div>
    <ul>
     { R.map(s => <Session key={s.Id} {...s} />, sessions) }
    </ul>
  </div>)
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <SessionList />
      </div>
    );
  }
}

export default App;
