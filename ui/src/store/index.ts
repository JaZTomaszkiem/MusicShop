import { createStore, applyMiddleware, Store } from 'redux';
import Thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { State } from 'types/Redux';

import shopApp from '../reducers/index';

export function createAppStore(): Store<State> {
  const composer = composeWithDevTools({});
  const store = createStore(shopApp, {}, composer(applyMiddleware(Thunk)));

  return store;
}
