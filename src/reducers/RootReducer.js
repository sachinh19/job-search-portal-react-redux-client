import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer'
import UserReducer from './UserReducer'
import AlertReducer from './AlertReducer'


const RootReducer = combineReducers({
    LoginReducer,
    UserReducer,
    AlertReducer
})

export default RootReducer;