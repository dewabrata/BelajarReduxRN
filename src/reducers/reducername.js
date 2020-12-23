
const defaultuserstate = {username:'dewi'}

const defaultpassstate = {password:'dewi'}
export const userReducer = (state=defaultuserstate, action) => {
  switch (action.type) {
  
  case "SETUSERNAME" :
  
  return state = action.username;



  default : 
  return state
  
  
  
  }
  
}
  export const passReducer = (state=defaultpassstate, action) => {
    switch (action.type) {
    
    
  
    case "SETPASSWORD" :
    return state.password = action.password;
  
    default : 
    return state
    
    
    
    }

  }
