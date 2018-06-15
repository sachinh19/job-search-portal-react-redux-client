import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer'
import UserReducer from './UserReducer'
import AlertReducer from './AlertReducer'
import JobReducer from './JobReducer'


const RootReducer = combineReducers({
    JobReducer,
    LoginReducer,
    UserReducer,
    AlertReducer
})

export default RootReducer;