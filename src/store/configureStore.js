import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'

import Reducers from '../reducers'


export default configureStore = (initialState) =>{

    return createStore(Reducers,initialState,applyMiddleware(thunk))

}
