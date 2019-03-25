import * as React from 'react';
import { connect } from 'react-redux';
import { Action, ActionType, IDeselectFeature } from 'src/types/actions';
import "../styles/FeatureTab.css";
import { IFeature, IStoreState } from '../types';

export interface IPropsActions {
  close(): void;
};

export interface IPropsExtra {
  feature: IFeature;
  isClosable: boolean;
  isSticky: boolean;
};

export type IProps = IPropsActions & IPropsExtra;

function FeatureTab({ feature, isClosable, isSticky, close }: IProps) {
  return (
    <div
      className={`FeatureTab ${isSticky ? "sticky-navbar" : ""}`}
      style={{ backgroundColor: feature.color }}
    >
      {isClosable ? (
        <div className="FeatureTab-closeButton" onClick={close}>
          x
        </div>
      ) : null}
      <h2 className="FeatureTab-title">{feature.name}</h2>
    </div>
  );
}

export function mapStateToProps({ }: IStoreState): {} {
  return {};
}

export function mapDispatchToProps(dispatch: React.Dispatch<Action>, { feature }: IPropsExtra): IPropsActions {
  return {
    close: () => {
      const action: IDeselectFeature = {
        type: ActionType.DeselectFeature,
        feature
      };
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeatureTab);
