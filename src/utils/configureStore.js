import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import history from '../history';
import createSagaMiddleware from 'redux-saga';
import Saga from 'sagas';

const routerMiddleware = createRouterMiddleware(history);
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
  process.env.NODE_ENV !== 'production'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

const middleware = composeEnhancers(
  applyMiddleware(routerMiddleware, sagaMiddleware)
);

const configureStore = () => {
  const store = createStore(rootReducer, middleware);
  sagaMiddleware.run(Saga);
  return store;
};

export default configureStore;