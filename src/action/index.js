
import auth from '@react-native-firebase/auth';
import { Alert} from 'react-native';
import {TYPES} from '../constanta'







export const setResult = (nilai) => {
   
    return {
        type: TYPES.SET_USER_FIREBASE,
        nilai 
    }
}

export const loginSuccess = (success) => {
   
    return {
        type: TYPES.SET_LOGIN_SUCCESS,
        success 
    }
}


export const loginFirebase =(username, password) => {

   return (dispatch) => {
    console.log("Login dijalankan")
    auth()
   .signInWithEmailAndPassword(username, password)
   .then(() => {
     console.log('User account created & signed in!');
     dispatch(loginSuccess({username: username, password: password,isLogin:true}))
   })
   .catch(error => {
     if (error.code === 'auth/email-already-in-use') {
       Alert.alert('That email address is already in use!');
     }
 
     if (error.code === 'auth/invalid-email') {
       Alert.alert('That email address is invalid!');
     }
 
     Alert.alert("Failed",error.message);
   });
   
   
   }


}

export const registerFirebase = (username, password) => {

  console.log("mulai register", username+password)
    
    return(dispatch)=>{
     
         auth()
        .createUserWithEmailAndPassword(username, password)
        .then(()=> {
        console.log("berhasil register", username+password)
        Alert.alert("User Created")
        
          dispatch(setResult({username:username, password:password,isLogin:true}))
        
        
        })
        .catch(error => { 
        console.log("error register",error)
        Alert.alert("Failed",error.message)
        dispatch(setResult({username:"", password:"",isLogin:false}))
       
        } )
    }
       

}

export const logoutFirebase = () => {
    
    return (dispatch) =>{
        
        auth()
        .signOut()
        .then(() => {

     
        Alert.alert("Berhasil Keluar")
        dispatch(setResult({username:"", password:"",isLogin:false}))
        
        }).catch(error => { 
            console.log("error register",error)
            Alert.alert("Failed",error.message)
            dispatch(setResult({username:"", password:"",isLogin:false}))
           
            } );
    
    
    }
 
 }

