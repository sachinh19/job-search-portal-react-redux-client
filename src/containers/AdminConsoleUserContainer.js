import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from "../actions";

class AdminConsoleUser extends Component {
    constructor(props) {
        super(props)
    }

    render(){
        return(<h1>Hello User</h1>)
    }
}

const stateToPropertyMapper = (state) => ({})

export const dispatcherToPropsMapper = (dispatch) => ({

})

const AdminConsoleUsersContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(AdminConsoleUser)

export default AdminConsoleUsersContainer