
import auth from '@react-native-firebase/auth';
import { Alert} from 'react-native';


export const setUsername = (username) => {

    return {
        type: "SETUSERNAME",
        username 
    }
}


export const setPassword = (password) => {
   
    return {
        type: "SETPASSWORD",
        password 
    }
}


export const setResult = (nilai) => {
   
    return {
        type: "SETRESULT",
        nilai 
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
        
          dispatch(setResult({username:username, password:password}))
        
        
        })
        .catch(error => { 
        console.log("error register",error)
        Alert.alert("Failed",error.message)
        dispatch(setResult({username:"", password:""}))
       
        } )
    }
     
    



}