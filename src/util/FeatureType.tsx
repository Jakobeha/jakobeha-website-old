import { FeatureType } from '../types';

export const length: number = 4;

export function indexOf(self: FeatureType): number {
  switch (self) {
    case FeatureType.Language:
      return 0;
    case FeatureType.Paradigm:
      return 1;
    case FeatureType.Library:
      return 2;
    case FeatureType.IDE:
      return 3;
  }
}

export function title(self: FeatureType): string {
  switch (self) {
    case FeatureType.Language:
      return "Languages";
    case FeatureType.Paradigm:
      return "Paradigms";
    case FeatureType.Library:
      return "Libraries";
    case FeatureType.IDE:
      return "IDEs";
  }
}
