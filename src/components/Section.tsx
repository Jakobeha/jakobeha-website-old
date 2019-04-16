import * as React from 'react';
import 'src/styles/Section.css';
import ListEntry from './ListEntry';

export enum SectionStyle {
  Roulette = "roulette",
  Row = "row"
}

export interface IProps {
  style: SectionStyle,
  title: string,
  children: JSX.Element[]
}

interface IState {
  listExpanded: boolean;
  selected: number;
}

export default class Section extends React.Component<IProps, IState, {}> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      listExpanded: false,
      selected: 0,
    };
  }

  public render() {
    const { style, title } = this.props;
    return (
      <div className={`Section Section-${style}`}>
        <h2 className="Section-title">{title}</h2>
        {this.displayedChildren()}
      </div>
    );
  }

  private displayedChildren(): JSX.Element[] {
    const { style, children } = this.props;
    const { listExpanded, selected } = this.state;
    const self = this;
    function setRouletteExpand(listExpandFactor: boolean): (newExpand: boolean) => void {
      return (newExpand: boolean) => {
        self.setState(prevState => ({
          ...prevState,
          listExpanded: newExpand === listExpandFactor
        }));
      }
    }
    function setRowExpand(idx: number): (newExpand: boolean) => void {
      return (newExpand: boolean) => {
        self.setState(prevState => ({
          ...prevState,
          selected: newExpand ? idx : -1,
        }))
      };
    }
    function selectRow(idx: number) {
      self.setState(prevState => ({
        listExpanded: false,
        selected: idx,
      }));
    }
    switch (style) {
      case SectionStyle.Roulette:
        return [
          React.cloneElement(children[selected], {
            expand: !listExpanded,
            setExpand: setRouletteExpand(false),
          }),
          <ListEntry key="list" expand={listExpanded} setExpand={setRouletteExpand(true)} entries={children.map(child => child.props)} selectEntry={selectRow} />
        ];
      case SectionStyle.Row:
        return children.map((child, idx) => React.cloneElement(child, {
          expand: (idx === selected),
          setExpand: setRowExpand(idx)
        }));
    }
  }
}
