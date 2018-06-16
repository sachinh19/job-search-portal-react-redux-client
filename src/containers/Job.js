import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from "../actions";
import '../styles/Job.css'


class Job extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.getJobDetails(this.props.match.params.jobId);
    }

    renderCompany(){

    }

    render() {
        let description = this.props.job.description
        return (
            <div>
                <div className={"row wbdv-job-details"}>
                    <div className={"col-md-2"}></div>
                    <div className={"col-md-6"}>
                        <h2>{this.props.job.position}</h2>
                        <div dangerouslySetInnerHTML={{__html: description}}/>
                    </div>
                    <div className={"col-md-4"}>
                        {this.renderCompany()}
                    </div>


                </div>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    job: state.JobReducer.job
});

export const dispatcherToPropsMapper = (dispatch) => ({
    getJobDetails: (jobId) => actions.getJobDetails(dispatch,jobId)
});

const JobContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(Job)

export default JobContainer

