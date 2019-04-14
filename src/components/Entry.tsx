import * as assert from 'assert';
import * as React from 'react';
import 'src/styles/Entry.css';
import EntryLink from './EntryLink';

export interface IProps {
  expand?: boolean,
  setExpand?: (expand: boolean) => void,
  title: string,
  link?: string,
  resume?: string,
  email?: string,
  date?: string,
  children: any,
  extraClass?: string,
}

export default function Entry({ expand, title, link, resume, email, children, extraClass, setExpand }: IProps): JSX.Element {
  assert(typeof expand !== "undefined" && typeof setExpand !== "undefined");
  const expandStr = expand ? "expanded" : "collapsed";
  function updateExpand() { setExpand!(!expand); }
  return (
    <div className={`Entry Entry-${expandStr} ${extraClass ? extraClass : ""}`}>
      <div className="Entry-header" onClick={updateExpand}>
        <h2 className="Entry-title">
          <span className={`Entry-pointer Entry-pointer-${expandStr}`}>►</span> {title}
        </h2>
        {link ? <EntryLink link={link} icon="link">Link</EntryLink> : null}
        {resume ? <EntryLink link={resume} icon="description">Resume</EntryLink> : null}
        {email ? <EntryLink link={`mailto:${email}`} icon="email">{email}</EntryLink> : null}
      </div>
      {expand ? <div className="Entry-content">{children}</div> : null}
    </div>
  );
}
