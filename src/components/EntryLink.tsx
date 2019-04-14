import * as React from 'react';
import 'src/styles/EntryLink.css';

export interface IProps {
  link: string,
  icon: string,
  children: string,
}

export default function EntryLink({link, icon, children}: IProps): JSX.Element {
  return (
    <a className="EntryLink" href={link}>
      <span className="EntryLink-text">{children}</span>
      <span>{" "}</span>
      <i className="EntryLink-icon material-icons-sharp">{icon}</i>
    </a>
  )
}
