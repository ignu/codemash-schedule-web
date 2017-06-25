import React, { Component } from "react";
import logo from "./logo.svg";
import R from "ramda";
import "./App.css";
import glamorous from 'glamorous'

import sessions from "./data/sessions.js";

const SessionTitle = glamorous.div({
  fontSize: '1.5em',
  fontWeight: 'bold'
})

const Detail = glamorous.div({
  fontSize: '0.8em',
  opacity: '0.5'
})

const SessionWrapper = glamorous.div({
  borderBottom: "1px solid #999",
  padding: 20
})

const Speaker = props => {
  const { FirstName, LastName, GravatarUrl } = props;
  return <div>
    <img src={GravatarUrl} />
    { FirstName } { LastName }
  </div>
}

const Session = props => {
  console.log("😎 props", props);
  const { Speakers, Title, Abstract, Category, Tags } = props;
  console.log("😎 Speakers", Speakers);

  return (
    <SessionWrapper>
      <SessionTitle>{Title}</SessionTitle>

      { Speakers.map(s => <Speaker id={s.Id} {...s}/>) }

      <div>{Abstract}</div>
      <Detail>{Category}</Detail>
      <Detail>{Tags.join(', ')}</Detail>
    </SessionWrapper>
  );
};

const SessionList = props => {
  console.log("😎 props", props);
  return (<div>
    <div>
     { R.map(s => <Session key={s.Id} {...s} />, sessions) }
    </div>
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
