import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route,Link} from 'react-router-dom'
import * as actions from "../actions";
import '../styles/AdminConsole.css'
import AdminConsoleJobContainer from '../components/AdminConsoleJobContainer'
import AdminConsoleCompaniesContainer from '../components/AdminConsoleCompaniesContainer'
import AdminConsoleUsersContainer from '../components/AdminConsoleUserContainer'


class AdminConsole extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
                <div className="row">
                    <div className="col-md-3">
                        <div className="container wbdv-options-container">
                            <ul className="list-group">
                                <li className="list-group-item wbdv-options">
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
                            <Route path={"/console/jobs"} component={AdminConsoleJobContainer}/>
                            <Route path={"/console/users"} component={AdminConsoleUsersContainer}/>
                            <Route path={"/console/companies"} component={AdminConsoleCompaniesContainer}/>
                        </div>
                    </div>
                </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({})

export const dispatcherToPropsMapper = (dispatch) => ({})

const AdminConsoleContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(AdminConsole)

export default AdminConsoleContainer