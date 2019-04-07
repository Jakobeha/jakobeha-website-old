import * as React from 'react';
import ScriptImage from '../resources/script.svg';
import '../styles/App.css';
import Comparison from './Comparison';
import Intro from './Intro';
import NotFound from './NotFound';

export default function App({}: {}): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-icon" src={ScriptImage} />
        <h1 className="App-title">Programming Language Comparison</h1>
      </header>
      {specificContent()}
    </div>
  );
}

function specificContent(): JSX.Element[] {
  switch (window.location.pathname) {
    case "/":
    case "/index.html":
      return [
        <Intro key="intro" />,
        <Comparison key="comparison" />
      ];
    default:
    return [<NotFound key="not-found" path={window.location.pathname} />];
  }
}
