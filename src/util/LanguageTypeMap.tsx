import { ILanguage, ILanguageTypeMap, LanguageType } from "../types";

export default class LanguageTypeMap {
  public static group(languages: ILanguage[]): ILanguageTypeMap<ILanguage[]> {
    const map: ILanguageTypeMap<ILanguage[]> = {
      general: [],
      scripting: [],
      efficient: [],
      other: []
    };
    languages.forEach(language => {
      map[language.type].push(language);
    });
    return map;
  }

  public static map<T, T2>(self: ILanguageTypeMap<T>, f: (value: T, type: LanguageType) => T2): ILanguageTypeMap<T2> {
    return {
      general: f(self.general, LanguageType.General),
      scripting: f(self.scripting, LanguageType.Scripting),
      efficient: f(self.efficient, LanguageType.Efficient),
      other: f(self.other, LanguageType.Other)
    };
  }

  public static flatten<T>(self: ILanguageTypeMap<T>): T[] {
    return [
      self.general,
      self.scripting,
      self.efficient,
      self.other
    ]
  }
}
