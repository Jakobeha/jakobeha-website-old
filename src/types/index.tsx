export enum LanguageType {
  General = "general",
  Scripting = "scripting",
  Efficient = "efficient",
  Other = "other"
};

export interface ILanguageTypeMap<T> {
  general: T,
  scripting: T
  efficient: T
  other: T
}

export type AttrString = string;

export interface IAnonLanguage {
  name: string;
  icon: string;
  summary?: AttrString;
  keyFeatures?: AttrString[];
  benefits?: AttrString[];
  drawbacks?: AttrString[];
  useCases?: AttrString[];
  history?: AttrString;
  example?: AttrString;
  tutorials?: string[];
};

export type LanguageId = number

export interface ILanguage extends IAnonLanguage {
  color: string;
  id: LanguageId;
  type: LanguageType;
}

export interface IStoreState {
  languages: ILanguageTypeMap<ILanguage[]>;
  selected: ILanguage[];
}
