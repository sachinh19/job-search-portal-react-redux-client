import React, {Component} from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'
import * as actions from "../actions";
import './AdminConsole.css'
import AdminConsoleJobContainer from './AdminConsoleJobContainer'
import AdminConsoleCompaniesContainer from './AdminConsoleCompaniesContainer'
import AdminConsoleUsersContainer from './AdminConsoleUserContainer'


class AdminConsole extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Router>
                <div className="row">
                    <div className="col-3">
                        <div className="container wbdv-options-container">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <Link to={`/console/jobs`}>View All Jobs</Link>
                                </li>
                                <li className="list-group-item">
                                    <Link to={`/console/companies`}>View All Companies</Link>
                                </li>
                                <li className="list-group-item">
                                    <Link to={`/console/users`}>View All Users</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="wbdv-option-list-container">
                            <Route path={"/console/jobs"} component={AdminConsoleJobContainer}/>
                            <Route path={"/console/users"} component={AdminConsoleUsersContainer}/>
                            <Route path={"/console/companies"} component={AdminConsoleCompaniesContainer}/>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}

const stateToPropertyMapper = (state) => ({})

export const dispatcherToPropsMapper = (dispatch) => ({

    getNewJobs: () => actions.getNewJobs(dispatch)
})

const AdminConsoleContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(AdminConsole)

export default AdminConsoleContainer