import { LanguageType } from '../types';

export const length: number = 4;

export function indexOf(self: LanguageType): number {
  switch (self) {
    case LanguageType.Scripting:
      return 0;
    case LanguageType.General:
      return 1;
    case LanguageType.Efficient:
      return 2;
    case LanguageType.Other:
      return 3;
  }
}

export function title(self: LanguageType): string {
  switch (self) {
    case LanguageType.Scripting:
      return "Scripting";
    case LanguageType.General:
      return "General-Purpose";
    case LanguageType.Efficient:
      return "Efficient";
    case LanguageType.Other:
      return "Other";
  }
}
