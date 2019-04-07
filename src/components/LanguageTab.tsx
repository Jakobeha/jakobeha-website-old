import * as assert from 'assert';
import * as React from 'react';
import { connect } from 'react-redux';
import { NULL_LANGUAGE_COLOR, NULL_LANGUAGE_ICON } from 'src/constants';
import { Action, ActionType, IDeselectLanguage } from 'src/types/actions';
import "../styles/LanguageTab.css";
import { ILanguage, IStoreState } from '../types';

const icons: { [key: string]: string } = {}

function importIcons(req: __WebpackModuleApi.RequireContext) {
  req.keys().forEach(key => icons[key] = req(key));
}

importIcons(require.context(
  "../resources/icons/",
  false,
  /\.svg$/
));

// tslint:disable-next-line:no-console
console.log(icons);

function getIcon(name: string): string {
  return icons[`./${name}.svg`];
}

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
        <div className="LanguageTab-left LanguageTab-closeButton" onClick={close}>
          x
        </div>
      ) : null}
      <img className="LanguageTab-left LanguageTab-icon" src={getIcon(language !== null ? language.icon : NULL_LANGUAGE_ICON)} />
      <h2 className="LanguageTab-title">{language !== null ? language.name : "No Languages Selected" }</h2>
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
