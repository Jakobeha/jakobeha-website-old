import * as React from "react";

interface IProps {
  path: string
}

export default function NotFound({ path }: IProps): JSX.Element {
  return (
    <div className="NotFound">
      Not found: {path}
    </div>
  );
}
