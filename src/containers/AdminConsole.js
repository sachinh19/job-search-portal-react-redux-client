import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from "../actions";


class AdminConsole extends Component{
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <div> <h1>Hi admin</h1>
                <button onClick={()=>{this.props.getNewJobs()}}>Get New Jobs</button>

            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
})

export const dispatcherToPropsMapper = (dispatch) => ({

    getNewJobs: () => actions.getNewJobs(dispatch)
})

const AdminConsoleContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(AdminConsole)

export default AdminConsoleContainer