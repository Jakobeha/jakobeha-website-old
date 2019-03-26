import * as ANON_FEATURES from './resources/features.json';
import { IAnonFeature, IFeature, IFeatureTypeMap } from './types';
import * as FeatureType_ from './util/FeatureType';
import FeatureTypeMap from './util/FeatureTypeMap';

export const NULL_FEATURE_COLOR: string = "#888888";

const FEATURE_HUES: IFeatureTypeMap<number> = {
  language: 100,
  paradigm: 30
}

export const FEATURES: IFeatureTypeMap<IFeature[]> = FeatureTypeMap.map(
  ANON_FEATURES as IFeatureTypeMap<IAnonFeature[]>,
  (features, type) =>
    features.map((anon, idx) => {
      const ratio = idx / features.length;
      const color = `hsl(${FEATURE_HUES[type]}, 100%, ${ratio * 50 + 25}%)`;

      const feature: IFeature = {
        ...anon,
        color,
        id: idx * FeatureType_.length + FeatureType_.indexOf(type),
        type
      };
      return feature;
    })
);
