/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */







import Login from './src/screen/Login';
import Home from './src/screen/Home';


import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import configureStore from './src/store/configureStore';
import Register from './src/screen/Register';

const Stack = createStackNavigator();
const store = configureStore()
class App extends Component {
  
  
   home = () => {
  
     return(
     <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Register" component={Register} />
          <Stack.Screen
            name="Login"
            component={Login}
          />
          <Stack.Screen name="Home" component={Home} />
         
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
     )
    
  
  }




  render() {
    return (
     this.home()
    );
  }
}

export default App;
