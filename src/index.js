import React from 'react';
import PropTypes from 'prop-types';
import { Root } from 'native-base';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { addNavigationHelpers } from 'react-navigation';
import { connect, Provider } from 'react-redux';
import RootNav from 'routes';
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import reducers from './reducers';
import sagas from './sagas';

const AppNavigator = RootNav;

// Note: createReactNavigationReduxMiddleware must be run before createReduxBoundAddListener
const navMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);

// Store config
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(navMiddleware, createLogger(), sagaMiddleware));
sagaMiddleware.run(sagas);

const addListener = createReduxBoundAddListener('root');

const App = props => (
  <AppNavigator navigation={addNavigationHelpers({
    dispatch: props.dispatch,
    state: props.nav,
    addListener,
  })}
  />
);

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.shape({
    index: PropTypes.number.isRequired,
    key: PropTypes.string.isRequired,
    isTransitioning: PropTypes.bool.isRequired,
    routes: PropTypes.array.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({ nav: state.nav });

const AppWithNavigationState = connect(mapStateToProps)(App);

const RootApp = () => (
  <Provider store={store}>
    <Root>
      <AppWithNavigationState />
    </Root>
  </Provider>
);

export default RootApp;
