import { FeatureType } from '../types';

export const length: number = 2;

export function indexOf(self: FeatureType): number {
  switch (self) {
    case FeatureType.Language:
      return 0;
    case FeatureType.Paradigm:
      return 1;
  }
}

export function title(self: FeatureType): string {
  switch (self) {
    case FeatureType.Language:
      return "Languages";
    case FeatureType.Paradigm:
      return "Paradigms";
  }
}
