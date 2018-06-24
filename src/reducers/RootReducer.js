import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer'
import AlertReducer from './AlertReducer'
import JobsReducer from './JobsReducer'
import JobReducer from './JobReducer'
import AdminJobListReducer from "./AdminJobListReducer";
import AdminCompanyListReducer from "./AdminCompanyListReducer";
import AdminUserListReducer from "./AdminUserListReducer";
import RegisterReducer from './RegisterReducer'
import QueriesReducer from "./QueriesReducer"
import CompanyReducer from "./CompanyReducer"


const RootReducer = combineReducers({
    JobsReducer,
    LoginReducer,
    RegisterReducer,
    AlertReducer,
    AdminJobListReducer,
    AdminCompanyListReducer,
    AdminUserListReducer,
    JobReducer,
    QueriesReducer,
    CompanyReducer
})

export default RootReducer;