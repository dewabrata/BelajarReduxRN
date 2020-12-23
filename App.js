/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */







import React, { Component } from 'react';
import { Provider } from 'react-redux';

import configureStore from './src/store/configureStore';
import Routes from './src/routes/Routes';


const store = configureStore()
class App extends Component {
  

  render() {
    return (
      <Provider store={store}>
        <Routes/>
      </Provider>
    )
  }
}

export default App;
