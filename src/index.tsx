import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './events/registerServiceWorker';
import './styles/index.css';
import * as StickyNavbar from "./util/StickyNavbar";

// const initialState: IStoreState = {};
// const store = createStore<IStoreState, Action, {}, {}>(reduce, initialState);

ReactDOM.render(
  // <Provider store={store}>
    <App />
  // </Provider>,
  ,document.getElementById('root') as HTMLElement
);
registerServiceWorker();
StickyNavbar.updateOnScroll();
// store.subscribe(() => {
//  requestAnimationFrame(() => StickyNavbar.updateAll());
// });
