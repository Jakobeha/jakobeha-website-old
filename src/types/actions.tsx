import { ILanguage } from '.';

export enum ActionType {
  SelectLanguage = "selectLanguage",
  DeselectLanguage = "deselectLanguage"
}

export interface ISelectLanguage {
  type: typeof ActionType.SelectLanguage;
  language: ILanguage;
}

export interface IDeselectLanguage {
  type: typeof ActionType.DeselectLanguage;
  language: ILanguage;
}

export type Action = ISelectLanguage | IDeselectLanguage;
