import * as React from 'react';
import { connect } from 'react-redux';
import "../styles/FeatureTabGroup.css";
import { IFeature, IFeatureTypeMap, IStoreState } from "../types";
import { Action, ActionType, ISelectFeature } from '../types/actions';
import * as FeatureType from "../util/FeatureType";
import FeatureTypeMap from '../util/FeatureTypeMap';
import FeatureTab from './FeatureTab';

export interface IPropsState {
  featuresByType: IFeatureTypeMap<IFeature[]>;
  hasSelectedFeature: boolean;
}

export interface IPropsActions {
  selectFeature(feature: IFeature): void;
};

export type IProps = IPropsState & IPropsActions;

// tslint:disable:no-construct
function FeatureTabGroup({ featuresByType, selectFeature }: IProps) {
  return (
    <div className="FeatureTabGroup">
      {FeatureTypeMap.flatten(FeatureTypeMap.map(featuresByType, (features, type) => (
        <div className="FeatureTabGroup-section" key={type}>
          <h2 className="FeatureTabGroup-section-header">{FeatureType.title(type)}</h2>
          <div className="FeatureTabGroup-section-content">
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
          <div className="FeatureTabGroup-section-footer" />
        </div>
      )))}
    </div>
  )
}

export function mapStateToProps({ features, selected }: IStoreState): IPropsState {
  return {
    featuresByType: features,
    hasSelectedFeature: selected.length !== 0
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
