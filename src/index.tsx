import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import { FEATURES } from './constants';
import registerServiceWorker from './events/registerServiceWorker';
import { reduce } from './reducers';
import './styles/index.css';
import { IStoreState } from './types';
import { Action } from './types/actions';
import * as StickyNavbar from "./util/StickyNavbar";

const initialState: IStoreState = {
  features: FEATURES,
  selected: []
};
const store = createStore<IStoreState, Action, {}, {}>(reduce, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
StickyNavbar.updateOnScroll();
store.subscribe(() => {
  // TODO: After timeout
  StickyNavbar.updateAll()
});
