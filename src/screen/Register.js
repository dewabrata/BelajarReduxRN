import React, { Component } from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native'
import {connect} from 'react-redux'
import { registerFirebase } from '../action';
class Register extends Component {

state = {
username: '',
password:''

}

    render() {
        return (
            <View >
            <Text>{this.props.nilai}</Text>
            <Text>Username</Text>
            <TextInput name ="username" style = {styles.textInput} onChangeText= {(text)=>{this.setState({username:text})}}/>
            <Text>Password</Text>
            <TextInput name ="password" style = {styles.textInput} onChangeText= {(text)=>{this.setState({password:text})}}/>
            <Button   title ="Register" onPress={()=>this.props.userRegister(this.state.username,this.state.password)} />
                
            </View>
        );
    }
}


const styles = StyleSheet.create({

    textInput: {
      height: 40,
      borderColor: 'black',
      borderBottomWidth : StyleSheet.hairlineWidth
    
    
    }
})

const  mapStateToProps= (state) => {
    console.log("ini state" ,state)
       return {
       
       nilai :  state.registerFirebase.username
     
       }
    
    }
    
    const mapDispatchToProps = (dispatch) =>{
    
       console.log("ini dispatch firebase" )
    
      return{
        userRegister : (username,password)=>dispatch(registerFirebase(username,password)),
     
      
      }
    }
    
    export default connect(mapStateToProps,mapDispatchToProps) (Register);