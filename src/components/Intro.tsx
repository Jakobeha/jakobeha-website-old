import intro from "!raw-loader!../resources/intro.md";
import * as React from "react";
import "src/styles/Intro.css";
import Markdown from './Markdown';

export default function Intro({}: {}): JSX.Element {
  return (
    <div className="Intro">
      <Markdown key="intro" content={intro} />
    </div>
  );
}
