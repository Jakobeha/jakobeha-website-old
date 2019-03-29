import intro from '!raw-loader!../resources/intro.md';
import * as React from 'react';
import { connect } from 'react-redux';
import '../styles/Comparison.css';
import { ILanguage, IStoreState } from '../types';
import { Action } from '../types/actions';
import LanguageTabGroup from './LanguageTabGroup';
import LanguageWindow from './LanguageWindow';

export interface IProps {
  selected: ILanguage[];
}

function Comparison({ selected }: IProps): JSX.Element {
  // tslint:disable-next-line:no-console
  console.log(intro);
  return (
    <div className="Comparison">
      <LanguageWindow languages={selected} />
      <LanguageTabGroup />
    </div>
  );
}

export function mapStateToProps({ selected }: IStoreState): IProps {
  return {
    selected
  };
}

export function mapDispatchToProps({ }: React.Dispatch<Action>): {} {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Comparison);
