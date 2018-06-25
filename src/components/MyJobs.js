import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from "../actions";
import {Link} from 'react-router-dom'

class MyJobs extends Component {
    constructor(props) {
        super(props)
        this.props.getJobsForUser();
        if(localStorage.getItem("userRole") !== 'JobSeeker')
            this.props.getPersonJobs();
    }

    renderJobs() {

        let jobList = null;
        if (this.props.jobs != null && this.props.jobs.length >0) {
            jobList = this.props.jobs.map(job=>{
                return (
                    <tr key={job.id}>
                        <td>
                            <Link to={`/job/${job.id}`}>{job.position}</Link>
                        </td>
                    </tr>
                )}
            )

            return jobList;
        }else {
            return(
                <tr>
                    <td>
                        <h3>You have not applied to any jobs, Apply Now!</h3>
                    </td>
                </tr>
            );
        }
    }

    renderEmployerJobs()    {
        let jobList = null;
        if (this.props.personJobs != null && this.props.personJobs.length >0) {
            jobList = this.props.personJobs.map(job=>{
                return (<tr key={job.id}>
                        <td>
                            <Link to={`/job/${job.id}`}>{job.position}</Link>
                        </td>
                    </tr>)})
            return jobList;
        }else {
            return(
                <tr>
                    <td>
                        <h3>There are no job listings for your company, Create One now!</h3>
                    </td>
                </tr>);
        }
    }

    render() {
        return (
            <div className="wbdv-all-jobs">
                <div className={"row"}>
                    <h1>Jobs Applied</h1>
                    <div className={"col-md-6"}></div>
                </div>
                <br/>
                <div className="wbdv-jobs-list col-md-10 card">
                    <table className="table table-hover">
                        <tbody>
                        {this.renderJobs()}
                        </tbody>
                    </table>
                </div>
                {(localStorage.getItem("userRole") === 'Employer' ||
                    localStorage.getItem("userRole") === 'Admin' ||
                    localStorage.getItem("userRole") === 'Moderator') &&
                    <div>
                    <div className={"row"}>
                        <h1>Jobs Posted</h1>
                        <div className={"col-md-6"}></div>
                    </div>
                    <div className="wbdv-jobs-list col-md-10 card">
                        <table className="table table-hover">
                            <tbody>
                                {this.renderEmployerJobs()}
                            </tbody>
                        </table>
                    </div></div>}
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    jobs: state.ProfileReducer.jobs,
    personJobs : state.ProfileReducer.personJobs
})

export const dispatcherToPropsMapper = (dispatch) => ({
    getJobsForUser: () => actions.getJobsForUser(dispatch),
    getPersonJobs: () => actions.getPersonJobs(dispatch)
    // deleteJob: (jobId) => actions.deleteJob(dispatch,jobId),
    // getNewJobs: () => actions.getNewJobs(dispatch)
})

const MyJobsContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(MyJobs)

export default MyJobsContainer