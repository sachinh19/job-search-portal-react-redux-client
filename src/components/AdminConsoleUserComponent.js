import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from "../actions";
import {Link} from 'react-router-dom'

class AdminConsoleUser extends Component {
    constructor(props) {
        super(props);
        this.props.updateUserList();
    }

    renderUsers() {

        let userList = null;
        if (this.props.users != null && this.props.users.length > 0) {
            userList = this.props.users.map(user => {
                    return (
                        <tr key={user.id}>
                            <td><Link to={`/profile/${user.username}/view`}>{user.username}</Link></td>
                            <td>{user.roleType}</td>
                            <td>
                                <button type="button" className="btn btn-outline-danger" onClick={() => {
                                    this.props.deleteUser(user.id)
                                }}><i className="fa fa-trash"/></button>
                            </td>
                            <td>
                                <button type="button" className="btn btn-outline-warning" onClick={() => {
                                    this.props.editUser(user.username)
                                }}><i className="fa fa-edit"/></button>
                            </td>
                        </tr>
                    )
                }
            );

            return userList
        } else {
            return (<h3>No Data</h3>)
        }
    }

    render() {
        let usernameFld;
        let passwordFld;
        let roleFld;
        let companyNameFld;
        return (
            <div className="wbdv-all-users col row">
                <h1>Users</h1>
                <div className={"col-md-5"}/>
                <button type="button" className={"col-md-3 btn btn-success wdbv-create-user-btn"}
                        onClick={() => this.props.createUser()}>
                    <i className={"fa fa-user-plus"}/> Create New User
                </button>
                <br/>
                <div className={"wbdv-create-user-form card col-md-10"} hidden={!this.props.createFlag}>
                    <div className="form-group row">
                        <label htmlFor="usernameFld" className="col-sm-3 col-form-label">
                            Username
                        </label>
                        <div className="col-sm-9">
                            <input className="form-control"
                                   id="usernameFld"
                                   placeholder='Username'
                                   value={this.props.username}
                                   onChange={() => {
                                       this.props.changeRegisterUsername(usernameFld.value)
                                   }}
                                   ref={node => usernameFld = node}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="passwordFld" className="col-sm-3 col-form-label">
                            Password </label>
                        <div className="col-sm-9">
                            <input type="password"
                                   className="form-control wbdv-password-fld"
                                   id="passwordFld"
                                   placeholder='Password'
                                   value={this.props.password} onChange={() => {
                                this.props.changeRegisterPassword(passwordFld.value)
                            }}
                                   ref={node => passwordFld = node}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="roleFld" className="col-sm-3 col-form-label">
                            Role
                        </label>
                        <div className="col-sm-9">
                            <select className="form-control wbdv-role-fld"
                                    id="roleFld"
                                    value={this.props.role} onChange={() => {
                                this.props.changeRegisterRole(roleFld.value)
                            }}
                                    ref={node => roleFld = node}>
                                <option value={"Employer"}>Employer</option>
                                <option value={"JobSeeker"}>Job Seeker</option>
                                <option value={"Moderator"}>Moderator</option>
                                <option value={"Admin"}>Admin</option>
                            </select>
                        </div>
                    </div>
                    {this.props.role === 'Employer' && <div className="form-group row">
                        <label htmlFor="companyFld" className="col-sm-3 col-form-label">
                            Company
                        </label>
                        <div className="col-sm-9">
                            <input className="form-control"
                                   id="companyFld"
                                   placeholder='Company Name'
                                   value={this.props.companyName}
                                   onChange={() => {
                                       this.props.changeCompanyName(companyNameFld.value)
                                   }}
                                   ref={node => companyNameFld = node}/>
                        </div>
                    </div>}
                    <div className={"row"}>
                        <div className={"col-md-9"}/>
                        <button id="registerUser"
                                className="btn btn-success wbdv-btn"
                                type="button"
                                onClick={() => {
                                    this.props.createNewUser(this.props.username,
                                        this.props.password,
                                        this.props.role,
                                        this.props.companyName)
                                }}>
                            Create
                        </button>
                        <button id="cancel"
                                className="btn btn-danger wbdv-btn"
                                type="button"
                                onClick={() => {
                                    this.props.resetCreateFlag()
                                }}>
                            Cancel
                        </button>
                    </div>
                </div>
                <div className="wbdv-users-list col-md-10">
                    <table className="table table-hover">
                        <thead className={"thead-dark"}>
                            <tr>
                                <th>Username</th>
                                <th>User Type</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.renderUsers()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    users: state.AdminUserListReducer.users,
    createFlag: state.AdminUserListReducer.createFlag,
    username: state.RegisterReducer.username,
    password: state.RegisterReducer.password,
    password2: state.RegisterReducer.password2,
    role: state.RegisterReducer.role,
    companyName: state.RegisterReducer.companyName,
})

export const dispatcherToPropsMapper = (dispatch) => ({
    updateUserList: () => actions.updateUserList(dispatch),
    deleteUser: (userId) => actions.deletePerson(dispatch, userId),
    createUser: () => actions.createUser(dispatch),
    resetCreateFlag: () => actions.resetCreateFlag(dispatch),
    changeRegisterRole: (role) => actions.changeRegisterRole(dispatch, role),
    changeRegisterUsername: (username) => actions.changeRegisterUsername(dispatch, username),
    changeRegisterPassword: (password) => actions.changeRegisterPassword(dispatch, password),
    changeCompanyName: (companyName) => actions.changeCompanyName(dispatch, companyName),
    createNewUser: (username, password, role, companyName) => actions.createNewUser(dispatch, username, password, role, companyName),
    editUser: (username) => actions.editUser(dispatch,username)
})

const AdminConsoleUserComponent = connect(stateToPropertyMapper, dispatcherToPropsMapper)(AdminConsoleUser)

export default AdminConsoleUserComponent