import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from "../actions";
import JobListContainer from "../containers/JobList"
import '../styles/Home.css'

class Home extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className={"row"}>
                    <img class="wbdv-home-page-image"
                        src={"http://manpowerillinois.com/wp-content/uploads/2016/03/MP_UnderpageHeader_People-1500x300.jpg"}/>
                </div>
                <div className={"row wbdv-job-row"}>
                    <div className={"col-md-2"}>

                    </div>
                    <div className={"col-md-8"}>
                        <JobListContainer/>
                    </div>
                    <div className={"col-md-2"}>

                    </div>
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


const HomeContainer = connect(stateToPropertyMapper,dispatcherToPropsMapper)(Home)

export default HomeContainer