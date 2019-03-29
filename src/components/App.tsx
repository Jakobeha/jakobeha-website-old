import contextNote from "!raw-loader!../resources/contextNote.md";
import intro from "!raw-loader!../resources/intro.md";
import worksCited from "!raw-loader!../resources/worksCited.md";
import * as React from 'react';
import '../styles/App.css';
import Comparison from './Comparison';
import Markdown from './Markdown';
import NotFound from './NotFound';

export default function App({}: {}): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Programming Language Comparison</h1>
        <div className="App-links">
          <a className="App-link App-link-intro" href="./index.html">Introduction</a>
          <a className="App-link App-link-main" href="./main.html">Main</a>
          <a className="App-link App-link-works-cited" href="./worksCited.html">Works Cited</a>
          <a className="App-link App-link-context-note" href="./contextNote.html">Context Note</a>
        </div>
      </header>
      {specificContent()}
    </div>
  );
}

function specificContent(): JSX.Element {
  switch (window.location.pathname) {
    case "/":
    case "/index.html":
      return <Markdown content={intro} visitLink={true} />
    case "/main.html":
      return <Comparison />
    case "/worksCited.html":
      return <Markdown content={worksCited} visitLink={false} />
    case "/contextNote.html":
      return <Markdown content={contextNote} visitLink={false} />
    default:
      return <NotFound path={window.location.pathname} />;
  }
}
