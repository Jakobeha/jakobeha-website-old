import * as assert from 'assert';
import * as React from 'react';
import { connect } from 'react-redux';
import { NULL_FEATURE_COLOR } from 'src/constants';
import { Action, ActionType, IDeselectFeature } from 'src/types/actions';
import "../styles/FeatureTab.css";
import { IFeature, IStoreState } from '../types';

export interface IPropsActions {
  close(): void;
};

export interface IPropsExtra {
  feature: IFeature | null;
  isClosable: boolean;
  isSticky: boolean;
};

export type IProps = IPropsActions & IPropsExtra;

function FeatureTab({ feature, isClosable, isSticky, close }: IProps) {
  assert(feature !== null || !isClosable);
  return (
    <div
      className={`FeatureTab ${isSticky ? "sticky-navbar" : ""}`}
      style={{ backgroundColor: feature !== null ? feature.color : NULL_FEATURE_COLOR }}
    >
      {isClosable ? (
        <div className="FeatureTab-closeButton" onClick={close}>
          x
        </div>
      ) : null}
      { feature !== null ? <h2 className="FeatureTab-title">{feature.name}</h2> : null }
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
        feature: feature!
      };
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeatureTab);
