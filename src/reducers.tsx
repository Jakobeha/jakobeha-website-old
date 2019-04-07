import { MAX_SELECTED_LANGUAGES } from './constants';
import { ILanguage, IStoreState } from './types';
import { Action, ActionType } from './types/actions';

export function reduce(state: IStoreState, action: Action): IStoreState {
  switch (action.type) {
    case ActionType.SelectLanguage: {
      const selected: ILanguage[] = Array.from(state.selected);
      if (!selected.includes(action.language)) {
        if (selected.length === MAX_SELECTED_LANGUAGES) {
          selected.shift();
        }
        selected.push(action.language);
      }
      return { ...state, selected };
    }
    case ActionType.DeselectLanguage: {
      const selected = state.selected.filter(caseLanguage => caseLanguage.id !== action.language.id);
      return { ...state, selected };
    }
    default:
      return state;
  }
}
