export enum FeatureType {
  Language = "language",
  Paradigm = "paradigm"
};

export interface IFeatureTypeMap<T> {
  language: T,
  paradigm: T
}

export type AttrString = string;
export type CodeString = string;

export interface IAnonFeature {
  name: string;
  summary: AttrString;
  keyFeatures: AttrString[];
  benefits: AttrString[];
  drawbacks: AttrString[];
  useCases: AttrString[];
  background: AttrString;
  examples: CodeString[];
};

export type FeatureId = number

export interface IFeature extends IAnonFeature {
  color: string;
  id: FeatureId;
  type: FeatureType;
}

export interface IStoreState {
  features: IFeatureTypeMap<IFeature[]>;
  selected: IFeature[];
}
