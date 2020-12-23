import { TYPES } from "../constanta"
import AsyncStorage from '@react-native-async-storage/async-storage';
  
  
const storeData = async (value) => {
  try {
  
    console.log("nilai storage",value);
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('@firebaseuser', jsonValue)
  } catch (e) {
   console.log("error",e)
  }
}
  
  const userFirebase = {username:"",password:"",isLogin:false}
  export const registerFirebase = (state=userFirebase, action) => {
  
    
    switch (action.type) {
    case TYPES.SET_USER_FIREBASE :
    storeData(action.nilai)
    return {...state, username: action.nilai.username,password: action.nilai.password,isLogin: action.nilai.isLogin}
    
    case TYPES.SET_LOGIN_SUCCESS :
    storeData(action.success)
    return {...state, username: action.success.username,password: action.success.password,isLogin: action.success.isLogin}
    default : 
    return state
    
    
    
    }

  }
