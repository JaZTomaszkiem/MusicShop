import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import shopApp from '../reducers/index';

// const composeEnhancer = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE;
const composeEnhancers =
  (process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null) || compose;
const store = createStore(
  shopApp,
  compose(composeEnhancers(applyMiddleware(thunk.withExtraArgument())))
);

export default store;
