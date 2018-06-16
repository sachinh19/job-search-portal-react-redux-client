import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from "../actions";


class User extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div>
                    <h1>User Details</h1>
                </div>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
});

export const dispatcherToPropsMapper = (dispatch) => ({
});

const UserContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(User)

export default UserContainer

