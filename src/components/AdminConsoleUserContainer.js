import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from "../actions";
import {Link} from 'react-router-dom'

class AdminConsoleUser extends Component {
    constructor(props) {
        super(props)
        this.props.updateUserList();
    }

    renderUsers() {

        let userList = null;
        if (this.props.users) {
            userList = this.props.users.map(user=>{
                return (
                    <tr key={user.id}>
                        <td><Link to={`/user/${user.id}`}>{user.username}</Link></td>
                        <td>{user.roleType}</td>
                        <td><button type="button" className="btn btn-danger" onClick={()=>{this.props.deleteUser(user.id)}}><i className="fa fa-trash"></i></button></td></tr>
                )}
            )

            return userList
        }else {
            return(<h3>No Data</h3>)
        }
    }

    render() {
        return (
            <div className="wbdv-all-users">
                <h1>Users</h1><br/>
                <div className="wbdv-users-list col-10 card">
                    <table className="table table-hover">
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
    users: state.AdminUserListReducer.users
})

export const dispatcherToPropsMapper = (dispatch) => ({
    updateUserList: () => actions.updateUserList(dispatch),
    deleteUser: (userId) => actions.deleteUser(dispatch,userId)
})

const AdminConsoleUserContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(AdminConsoleUser)

export default AdminConsoleUserContainer