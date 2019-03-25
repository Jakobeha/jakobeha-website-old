import { IFeature } from '.';

export enum ActionType {
  SelectFeature = "selectFeature",
  DeselectFeature = "deselectFeature"
}

export interface ISelectFeature {
  type: typeof ActionType.SelectFeature;
  feature: IFeature;
}

export interface IDeselectFeature {
  type: typeof ActionType.DeselectFeature;
  feature: IFeature;
}

export type Action = ISelectFeature | IDeselectFeature;
