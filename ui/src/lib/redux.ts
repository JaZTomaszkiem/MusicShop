import { createStore, applyMiddleware, Store } from 'redux';
import Thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { State } from 'types/redux/Redux';

import reducers from 'store/reducers';

export function createAppStore(): Store<State> {
  const composer = composeWithDevTools({});
  const store = createStore(reducers, {}, composer(applyMiddleware(Thunk)));

  return store;
}
