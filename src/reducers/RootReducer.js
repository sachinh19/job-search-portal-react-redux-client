import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer'
import UserReducer from './UserReducer'
import AlertReducer from './AlertReducer'
import JobReducer from './JobReducer'


const RootReducer = combineReducers({
    LoginReducer,
    UserReducer,
    AlertReducer,
    JobReducer
})

export default RootReducer;