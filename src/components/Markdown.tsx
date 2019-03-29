import * as React from "react";
import FancyText from "src/util/FancyText";
import "../styles/Markdown.css";

interface IProps {
  content: string,
  visitLink: boolean
}

export default function Markdown({ content, visitLink }: IProps): JSX.Element {
  return (
    <div className="Markdown">
      <div className="Markdown-message">
        <FancyText content={content} inline={false} />
      </div>
      { visitLink ? <a href="./main.html" className="Markdown-visit">Visit Site</a> : null }
    </div>
  );
}
