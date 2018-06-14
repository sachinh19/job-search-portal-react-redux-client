import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from "../actions";
import LoginReducer from "../reducers/LoginReducer";

class Login extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        let usernameFld
        let passwordFld

        return (
            <div>
                <h1>Login Page</h1>
                <input placeholder='Username' value={this.props.username} onChange={() => {
                    this.props.changeUsername(usernameFld.value)
                }}
                       ref={node => usernameFld = node} />

                <input placeholder='Password' type='password' value={this.props.password} onChange={() => {
                    this.props.changePassword(passwordFld.value)
                }}
                       ref={node => passwordFld = node} />

                <button onClick={()=>{this.props.doLogin(this.props.username, this.props.password)}}>
                    Login
                </button>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    username: state.LoginReducer.username,
    password: state.LoginReducer.password
});

export const dispatcherToPropsMapper = (dispatch) => ({
    changeUsername: (username) => actions.changeUsername(dispatch,username),
    changePassword: (password) => actions.changePassword(dispatch,password),
    doLogin: (username,password) => actions.doLogin(dispatch,username,password)
});


const LoginContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(Login)

export default LoginContainer
