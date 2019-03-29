import * as ANON_LANGUAGES from './resources/languages.json';
import { IAnonLanguage, ILanguage, ILanguageTypeMap } from './types';
import * as LanguageType_ from './util/LanguageType';
import LanguageTypeMap from './util/LanguageTypeMap';

export const NULL_LANGUAGE_COLOR: string = "#888888";

const LANGUAGE_HUES: ILanguageTypeMap<number> = {
  general: 100,
  scripting: 30,
  efficient: 210,
  other: 290
};

export const LANGUAGES: ILanguageTypeMap<ILanguage[]> = LanguageTypeMap.map(
  ANON_LANGUAGES as ILanguageTypeMap<IAnonLanguage[]>,
  (languages, type) =>
    languages.map((anon, idx) => {
      const ratio = idx / languages.length;
      const color = `hsl(${LANGUAGE_HUES[type]}, 100%, ${ratio * 50 + 25}%)`;

      const language: ILanguage = {
        ...anon,
        color,
        id: idx * LanguageType_.length + LanguageType_.indexOf(type),
        type
      };
      return language;
    })
);
