import * as React from 'react';
import { connect } from 'react-redux';
import logo from '../resources/logo.svg';
import '../styles/App.css';
import { IFeature, IStoreState } from '../types';
import { Action } from '../types/actions';
import FeatureTabGroup from './FeatureTabGroup';
import FeatureWindow from './FeatureWindow';

export interface IProps {
  selected: IFeature[];
}

function App({ selected }: IProps): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Programming Encyclopedia</h1>
      </header>
      <p className="App-intro">
        Code is incredibly diverse. Two pieces of code might perform the same
        task, but be completely different in syntax, structure, and more.
      </p>
      { (selected.length !== 0) ? <FeatureWindow features={selected} /> : null }
      <FeatureTabGroup />
    </div>
  );
}

export function mapStateToProps({ selected }: IStoreState): IProps {
  return {
    selected
  };
}

export function mapDispatchToProps(dispatch: React.Dispatch<Action>): {} {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
