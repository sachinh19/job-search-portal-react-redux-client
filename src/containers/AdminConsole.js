import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route,Link} from 'react-router-dom'
import '../styles/AdminConsole.css'
import AdminConsoleJobComponent from '../components/AdminConsoleJobComponent'
import AdminConsoleCompaniesComponent from '../components/AdminConsoleCompaniesComponent'
import AdminConsoleUsersContainer from '../components/AdminConsoleUserComponent'


class AdminConsole extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.localRole === "Admin") {
        return (
                <div className="row">
                    <div className="col-md-3">
                        <div className="container wbdv-options-container">
                            <ul className="list-group">
                                <li className="list-group-item wbdv-options ">
                                    <Link to={`/console/jobs`} className="wbdv-options-item">View All Jobs</Link>
                                </li>
                                <li className="list-group-item wbdv-options">
                                    <Link to={`/console/companies`} className="wbdv-options-item">View All Companies</Link>
                                </li>
                                <li className="list-group-item wbdv-options">
                                    <Link to={`/console/users`} className="wbdv-options-item">View All Users</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="wbdv-option-list-container">
                            <Route path={"/console/jobs"} component={AdminConsoleJobComponent}/>
                            <Route path={"/console/users"} component={AdminConsoleUsersContainer}/>
                            <Route path={"/console/companies"} component={AdminConsoleCompaniesComponent}/>
                        </div>
                    </div>
                </div>
        )
    } else {
            return(<div><h1 className={"wbdv-access-forbidden"}><i>Access Forbidden</i></h1></div>)
        }}
}

const stateToPropertyMapper = (state) => ({
    localRole: state.LocalStorageReducer.localRole
})

export const dispatcherToPropsMapper = (dispatch) => ({})

const AdminConsoleContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(AdminConsole)

export default AdminConsoleContainer