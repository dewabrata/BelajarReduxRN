import React, { Component } from 'react';

import Login from '../screen/Login'
import Home from '../screen/Home';
import Register from '../screen/Register';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {connect} from 'react-redux'
import { loginFirebase,setResult } from '../action';

import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createStackNavigator();

class Routes extends Component {

    getData = async () => {
      console.log("Get Data Dijalankan")
        try {
          const value = await AsyncStorage.getItem('@firebaseuser')
          console.log("nilai ketika dibuka", value)
          if(value !== null) {
          console.log("nilai storage dibuka",JSON.parse(value))
            return value != null ?  this.props.setResult (JSON.parse(value)) : null;
          }
        } catch(e) {
         console.log("error",e)
        }
      }


     componentDidMount(){
     
       this.getData();
     
     }



    render() {
        return (
       <NavigationContainer>
        <Stack.Navigator>
        
        {this.props.isLogin ? 
        
        (<Stack.Screen name="Home" component={Home} />) :
        
        (
          <>
        <Stack.Screen
            name="Login"
            component={Login}
          />
          <Stack.Screen name="Register" component={Register} />
          </>
        )
        
        }
          
          
          
        </Stack.Navigator>
      </NavigationContainer>
        );
    }
}

const  mapStateToProps= (state) => {
    return {
    username : state.registerFirebase.username,
    password : state.registerFirebase.password,
    isLogin : state.registerFirebase.isLogin
    }
 
 }
 
 const mapDispatchToProps = (dispatch) =>{
 
   return{
     loginFirebase : (username, password) =>dispatch(loginFirebase(username,password)),
     setResult : (nilai) => dispatch(setResult(nilai))
        
   }
 }
 

export default connect(mapStateToProps,mapDispatchToProps) ( Routes);