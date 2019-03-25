import { IFeature, IStoreState } from './types';
import { Action, ActionType } from './types/actions';

export function reduce(state: IStoreState, action: Action): IStoreState {
  switch (action.type) {
    case ActionType.SelectFeature: {
      const selected: IFeature[] = Array.from(state.selected);
      selected.push(action.feature);
      return { ...state, selected };
    }
    case ActionType.DeselectFeature: {
      const selected = state.selected.filter(caseFeature => caseFeature.id !== action.feature.id);
      return { ...state, selected };
    }
    default:
      return state;
  }
}
