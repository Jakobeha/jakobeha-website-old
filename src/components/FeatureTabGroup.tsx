import * as React from 'react';
import { connect } from 'react-redux';
import "../styles/FeatureTabGroup.css";
import { FeatureType, IFeature, IStoreState } from "../types";
import { Action, ActionType, ISelectFeature } from '../types/actions';
import * as FeatureType_ from '../util/FeatureType';
import FeatureTab from './FeatureTab';

export interface IPropsExtra {
  type: FeatureType;
}

export interface IPropsState {
  features: IFeature[];
}

export interface IPropsActions {
  selectFeature(feature: IFeature): void;
};

export type IProps = IPropsExtra & IPropsState & IPropsActions;

// tslint:disable:no-construct
function FeatureTabGroup({ type, features, selectFeature }: IProps) {
  return (
    <div className="FeatureTabGroup">
        <h2 className="FeatureTabGroup-header">{FeatureType_.title(type)}</h2>
        <div className="FeatureTabGroup-content">
          {features.map((feature, idx) => {
            function onSelect() {
              selectFeature(feature);
            }
            return (
              <div
                className="FeatureTabGroup-item"
                key={feature.name}
                onClick={onSelect}
              >
                <FeatureTab feature={feature} isClosable={false} isSticky={false} />
                <div className="FeatureTabGroup-item-shadow" />
              </div>
            );
          })}
        </div>
        <div className="FeatureTabGroup-footer" />
    </div>
  )
}

export function mapStateToProps({ features }: IStoreState, { type }: IPropsExtra): IPropsState {
  return {
    features: features[type]
  };
}

export function mapDispatchToProps(dispatch: React.Dispatch<Action>): IPropsActions {
  return {
    selectFeature: feature => {
      const action: ISelectFeature = {
        type: ActionType.SelectFeature,
        feature
      };
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeatureTabGroup);
