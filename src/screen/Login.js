import React, { Component } from 'react';
import {connect} from 'react-redux'
import {View,TextInput,Text,Button,StyleSheet} from 'react-native'
import { loginFirebase } from '../action';

class Login extends Component {


  state = {
  username:'',
  password:''
  
  }

  


  componentDidMount(){
  
  console.log("ini props", this.props)
  
  }


    render() {
        return (
            <View>
                {this.props.isLogin? ( <Text> {this.props.username} {this.props.password}</Text>):null}
               
                <Text>Username</Text>
                <TextInput name ="username" style = {styles.textInput} onChangeText={(text)=>this.setState({username:text})} />
                <Text>Password</Text>
                <TextInput name ="password"  secureTextEntry={true} 
                onChangeText={(text)=>this.setState({password:text})} style = {styles.textInput} />
                <Button title = "Login" onPress={()=>this.props.loginFirebase(this.state.username,this.state.password)}/>
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
      loginFirebase : (username, password) =>dispatch(loginFirebase(username,password)),
      
    
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