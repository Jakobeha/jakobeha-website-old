import * as React from 'react';
import 'src/styles/ListEntry.css';
import Entry from './Entry';

export interface IProps {
  expand: boolean,
  entries: string[],
  setExpand(expand: boolean): void,
  selectEntry(idx: number): void,
}

export default function ListEntry({ expand, entries, setExpand, selectEntry }: IProps): JSX.Element {
  return (
    <Entry expand={expand} setExpand={setExpand} title="All Projects" extraClass="ListEntry">
      {entries.map((title, idx) => {
        function selectThisEntry() {
          return selectEntry(idx);
        }
        return (
          <div key={`entry-${idx}`} className="ListEntry-item Entry-header" onClick={selectThisEntry}>
            <h2 className="Entry-title">{title}</h2>
          </div>
        );
      })}
    </Entry>
  );
}
