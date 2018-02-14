import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import Navigator from './src/navigator';
import cryptoReducer from './src/store/cryptocurrencies';

const reducers = combineReducers({
  crypto: cryptoReducer
});

const middleware = applyMiddleware(thunk);

const store = createStore(reducers, middleware);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}

