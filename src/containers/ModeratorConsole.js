import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route,Link} from 'react-router-dom'
import '../styles/AdminConsole.css'
import AdminConsoleJobComponent from '../components/AdminConsoleJobComponent'
import AdminConsoleCompaniesComponent from '../components/AdminConsoleCompaniesComponent'
import AdminConsoleUsersContainer from "../components/AdminConsoleUserComponent";


class ModeratorConsole extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (localStorage.getItem("userRole") === "Moderator") {
            return (
                <div className="row">
                    <div className="col-md-3">
                        <div className="container wbdv-options-container">
                            <ul className="list-group">
                                <li className="list-group-item wbdv-options">
                                    <Link to={`/moderatorConsole/jobs`} className="wbdv-options-item">View All
                                        Jobs</Link>
                                </li>
                                <li className="list-group-item wbdv-options">
                                    <Link to={`/moderatorConsole/companies`} className="wbdv-options-item">View All
                                        Companies</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="wbdv-option-list-container">
                            <Route path={"/moderatorConsole/jobs"} component={AdminConsoleJobComponent}/>
                            <Route path={"/moderatorConsole/companies"} component={AdminConsoleCompaniesComponent}/>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (<div><h1 className={"wbdv-access-forbidden"}><i>Access Forbidden</i></h1></div>)
        }
    }
}

const stateToPropertyMapper = (state) => ({})

export const dispatcherToPropsMapper = (dispatch) => ({})

const ModeratorConsoleContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(ModeratorConsole)

export default ModeratorConsoleContainer