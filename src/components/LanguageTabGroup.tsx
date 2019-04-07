import * as React from 'react';
import { connect } from 'react-redux';
import "src/styles/LanguageTabGroup.css";
import LanguageTypeMap from 'src/util/LanguageTypeMap';
import { ILanguage, ILanguageTypeMap, IStoreState } from "../types";
import { Action, ActionType, ISelectLanguage } from '../types/actions';
import LanguageTab from './LanguageTab';

export interface IPropsState {
  languagesByType: ILanguageTypeMap<ILanguage[]>;
}

export interface IPropsActions {
  selectLanguage(language: ILanguage): void;
};

export type IProps = IPropsState & IPropsActions;

// tslint:disable:no-construct
function LanguageTabGroup({ languagesByType, selectLanguage }: IProps) {
  return (
    <div className="LanguageTabGroup">
      {LanguageTypeMap.flatten(LanguageTypeMap.map(languagesByType, (languages, type) => (
        <div className="LanguageTabGroup-section">
          <div className="LanguageTabGroup-section-content">
            {languages.map(language => {
              function onSelect() {
                selectLanguage(language);
              }
              return (
                <div
                  className="LanguageTabGroup-item"
                  key={language.name}
                  onClick={onSelect}
                >
                  <LanguageTab language={language} isClosable={false} isSticky={false} />
                  <div className="LanguageTabGroup-item-shadow" />
                </div>
              );
            })}
          </div>
          <div className="LanguageTabGroup-section-footer" />
        </div>
      )))}
    </div>
  )
}

export function mapStateToProps({ languages }: IStoreState): IPropsState {
  return {
    languagesByType: languages
  };
}

export function mapDispatchToProps(dispatch: React.Dispatch<Action>): IPropsActions {
  return {
    selectLanguage: language => {
      const action: ISelectLanguage = {
        type: ActionType.SelectLanguage,
        language
      };
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageTabGroup);
