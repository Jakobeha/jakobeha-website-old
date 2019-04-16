import * as React from 'react';
import 'src/styles/ListEntry.css';
import Entry, * as entry from './Entry';
import EntryLink from './EntryLink';

export interface IProps {
  expand: boolean,
  entries: entry.IProps[],
  setExpand(expand: boolean): void,
  selectEntry(idx: number): void,
}

export default function ListEntry({ expand, entries, setExpand, selectEntry }: IProps): JSX.Element {
  return (
    <Entry expand={expand} setExpand={setExpand} title="All Projects" extraClass="ListEntry">
      {entries.map(({ title, link }, idx) => {
        function selectThisEntry() {
          return selectEntry(idx);
        }
        return (
          <div key={`entry-${idx}`} className="ListEntry-item Entry-header" onClick={selectThisEntry}>
            <h2 className="Entry-title">{title}</h2>
            {link ? <EntryLink link={link} icon="link">Link</EntryLink> : null}
          </div>
        );
      })}
    </Entry>
  );
}
