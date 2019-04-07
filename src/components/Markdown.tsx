import * as React from "react";
import "src/styles/Markdown.css";
import FancyText from "src/util/FancyText";

interface IProps {
  content: string,
}

export default function Markdown({ content }: IProps): JSX.Element {
  return (
    <div className="Markdown">
      <FancyText content={content} inline={false} />
    </div>
  );
}
