import React, { Component } from 'react';
import {connect} from 'react-redux'
import {View,TextInput,Text,Button,StyleSheet} from 'react-native'
import { setUsername ,setPassword} from '../action';

class Login extends Component {



  componentDidMount(){
  
  console.log("ini props", this.props)
  
  }


    render() {
        return (
            <View>
                <Text>Hello {this.props.username} {this.props.password}</Text>
                <Text>Username</Text>
                <TextInput name ="username" style = {styles.textInput} onChangeText={(text)=>this.props.sukasukagw({username:text})} />
                <Text>Password</Text>
                <TextInput name ="password"  secureTextEntry={true} 
                onChangeText={(text)=>this.props.setPassword({password:text}) } style = {styles.textInput} />
                <Button title = "Login"/>
            </View>
        );
    }
}


 const  mapStateToProps= (state) => {
  console.log("ini state" ,state)
     return {
     
     username : state.userReducer.username,
     password : state.passReducer.password
     }
  
  }
  
  const mapDispatchToProps = (dispatch) =>{
  
     console.log("ini dispatch", dispatch)
  
    return{
      sukasukagw : (text)=>dispatch(setUsername(text)),
      setPassword : (text)=> dispatch(setPassword(text))
    
    }
  }
  

const styles = StyleSheet.create({

  textInput: {
    height: 40,
    borderColor: 'black',
    borderBottomWidth : StyleSheet.hairlineWidth
  
  
  }
  
  


})


export default connect(mapStateToProps,mapDispatchToProps) ( Login);