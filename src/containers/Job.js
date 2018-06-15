import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from "../actions";


class Job extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Job Details</h1>
                </div>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
});

export const dispatcherToPropsMapper = (dispatch) => ({
});

const JobContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(Job)

export default JobContainer

