import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from "../actions";

class Home extends Component {

    constructor(props) {
        super(props)
    }



    render() {
        return (
            <div className={"container"}>
                <h1>Home Page</h1>
                <div>

                </div>
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


const HomeContainer = connect()(Home)

export default HomeContainer