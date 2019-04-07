import * as ANON_LANGUAGES from './resources/languages.json';
import { IAnonLanguage, ILanguage, ILanguageTypeMap } from './types';
import * as LanguageType_ from './util/LanguageType';
import LanguageTypeMap from './util/LanguageTypeMap';

export const NULL_LANGUAGE_COLOR: string = "#888888";
export const NULL_LANGUAGE_ICON: string = "credits";

const LANGUAGE_HUES: ILanguageTypeMap<number> = {
  general: 100,
  scripting: 290,
  efficient: 210,
  other: 30
};

const LANGUAGE_HEADER_COLOR: string = "#333";

export const LANGUAGES: ILanguageTypeMap<ILanguage[]> = LanguageTypeMap.map(
  ANON_LANGUAGES as ILanguageTypeMap<IAnonLanguage[]>,
  (languages, type) =>
    languages.map((anon, idx) => {
      const ratio = idx / languages.length;
      const color = (idx === 0) ? LANGUAGE_HEADER_COLOR : `hsl(${LANGUAGE_HUES[type]}, 100%, ${ratio * 50 + 25}%)`;

      const language: ILanguage = {
        ...anon,
        color,
        id: idx * LanguageType_.length + LanguageType_.indexOf(type),
        type
      };
      return language;
    })
);

export const MAX_SELECTED_LANGUAGES: number = 3;
