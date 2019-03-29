import * as assert from 'assert';
import * as React from 'react';
import { connect } from 'react-redux';
import { NULL_LANGUAGE_COLOR } from 'src/constants';
import { Action, ActionType, IDeselectLanguage } from 'src/types/actions';
import "../styles/LanguageTab.css";
import { ILanguage, IStoreState } from '../types';

export interface IPropsActions {
  close(): void;
};

export interface IPropsExtra {
  language: ILanguage | null;
  isClosable: boolean;
  isSticky: boolean;
};

export type IProps = IPropsActions & IPropsExtra;

function LanguageTab({ language, isClosable, isSticky, close }: IProps) {
  assert(language !== null || !isClosable);
  return (
    <div
      className={`LanguageTab ${isSticky ? "sticky-navbar" : ""}`}
      style={{ backgroundColor: language !== null ? language.color : NULL_LANGUAGE_COLOR }}
    >
      {isClosable ? (
        <div className="LanguageTab-closeButton" onClick={close}>
          x
        </div>
      ) : null}
      { language !== null ? <h2 className="LanguageTab-title">{language.name}</h2> : null }
    </div>
  );
}

export function mapStateToProps({ }: IStoreState): {} {
  return {};
}

export function mapDispatchToProps(dispatch: React.Dispatch<Action>, { language }: IPropsExtra): IPropsActions {
  return {
    close: () => {
      const action: IDeselectLanguage = {
        type: ActionType.DeselectLanguage,
        language: language!
      };
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageTab);
