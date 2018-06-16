import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from "../actions";
import {Link} from 'react-router-dom'

class AdminConsoleJob extends Component {
    constructor(props) {
        super(props)
        this.props.updateJobList();
    }

    renderJobs() {

        let jobList = null;
        if (this.props.jobs) {
            jobList = this.props.jobs.map(job=>{
                return (
                    <tr key={job.id}>
                        <td><Link to={`/job/${job.id}`}>{job.position}</Link></td>
                        <td><button type="button" className="btn btn-danger" onClick={()=>{this.props.deleteJob(job.id)}}><i className="fa fa-trash"></i></button></td></tr>
                )}
            )

            return jobList
        }else {
            return(<h3>No Data</h3>)
        }
    }

    render() {
        return (
            <div className="wbdv-all-jobs">
                <h1>Jobs</h1><br/>
                <div className="wbdv-jobs-list col-10 card">
                    <table className="table table-hover">
                        <tbody>
                        {this.renderJobs()}
                        </tbody>
                    </table>

                </div>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    jobs: state.AdminJobListReducer.jobs
})

export const dispatcherToPropsMapper = (dispatch) => ({
    updateJobList: () => actions.updateJobList(dispatch),
    deleteJob: (jobId) => actions.deleteJob(dispatch,jobId)
})

const AdminConsoleJobContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(AdminConsoleJob)

export default AdminConsoleJobContainer