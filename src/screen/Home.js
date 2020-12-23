import React, { Component } from 'react';
import {View,TextInput,Text,Button,StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import { logoutFirebase } from '../action';


class Home extends Component {


    render() {
        return (
            <View>
                <Text>Selamat datang {this.props.username}</Text>
                <Button onPress={()=>this.props.logout()} title="Logout" />
            </View>
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
     logout : () =>dispatch(logoutFirebase()),
        
   }
 }
 

export default connect(mapStateToProps,mapDispatchToProps) ( Home);