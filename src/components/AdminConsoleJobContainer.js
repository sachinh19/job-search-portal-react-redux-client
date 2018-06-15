import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from "../actions/index";

class AdminConsoleJob extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="wbdv-all-jobs">
            <h1>Jobs</h1>
                <div className="wbdv-jobs-list">
                    <div className="wbdv-job-details">
                        <h3></h3>
                    </div>
                </div>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({})

export const dispatcherToPropsMapper = (dispatch) => ({})

const AdminConsoleJobContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(AdminConsoleJob)

export default AdminConsoleJobContainer