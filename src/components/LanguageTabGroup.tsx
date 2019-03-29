import * as React from 'react';
import { connect } from 'react-redux';
import { Action, ActionType, ISelectLanguage } from 'src/types/actions';
import LanguageTypeMap from 'src/util/LanguageTypeMap';
import "../styles/LanguageTabGroup.css";
import { ILanguage, ILanguageTypeMap, IStoreState } from "../types";
import * as LanguageType_ from '../util/LanguageType';
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
            <h2 className="LanguageTabGroup-section-header">{LanguageType_.title(type)}</h2>
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
