import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer'
import UserReducer from './UserReducer'
import AlertReducer from './AlertReducer'
import JobsReducer from './JobsReducer'
import JobReducer from './JobReducer'
import AdminJobListReducer from "./AdminJobListReducer";
import AdminCompanyListReducer from "./AdminCompanyListReducer";
import AdminUserListReducer from "./AdminUserListReducer";
import QueriesReducer from "./QueriesReducer"


const RootReducer = combineReducers({
    JobsReducer,
    LoginReducer,
    UserReducer,
    AlertReducer,
    AdminJobListReducer,
    AdminCompanyListReducer,
    AdminUserListReducer,
    JobReducer,
    QueriesReducer
})

export default RootReducer;