import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer'
import UserReducer from './UserReducer'
import AlertReducer from './AlertReducer'
import JobReducer from './JobReducer'
import AdminJobListReducer from "./AdminJobListReducer";


const RootReducer = combineReducers({
    JobReducer,
    LoginReducer,
    UserReducer,
    AlertReducer,
    AdminJobListReducer
})

export default RootReducer;