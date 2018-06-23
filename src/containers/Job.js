import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from "../actions";
import '../styles/Job.css'
import {Link} from 'react-router-dom'


class Job extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getJobDetails(this.props.match.params.jobId);
    }

    renderCompany() {
        if (this.props.job.company !== undefined) {
           return ( <div className="card">
                <div className="card-body">
                    <h5 className={"card-title"}>Company</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{this.props.job.company.name}</h6>
                    <Link to={`/company/${this.props.job.company.id}`}>
                    <button type="button" className="btn btn-success btn-block">Details</button>
                </Link>
                </div>
            </div>)
        }
    }

    render() {
        let description = this.props.job.description
        return (
            <div className={"row wbdv-job-details"}>
                <div className={"col-md-2"}></div>
                <div className={"col-md-6"}>
                    <h2>{this.props.job.position}</h2>
                    <button type="button" className="btn btn-primary">Apply Now</button><br/>
                    <div dangerouslySetInnerHTML={{__html: description}}/>
                </div>
                <div className={"col-md-4"}>
                    {this.renderCompany()}
                </div>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    job: state.JobReducer.job
});

export const dispatcherToPropsMapper = (dispatch) => ({
    getJobDetails: (jobId) => actions.getJobDetails(dispatch, jobId)
});

const JobContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(Job)

export default JobContainer

