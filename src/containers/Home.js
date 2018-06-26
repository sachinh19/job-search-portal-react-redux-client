import React, {Component} from 'react'
import {connect} from 'react-redux'
import JobListContainer from "../containers/JobList"
import * as actions from "../actions"
import '../styles/Home.css'
import {Link} from 'react-router-dom'

class Home extends Component {

    constructor(props) {
        super(props)
        this.props.getTenMostAppliedJobs();
        this.props.getTenMostRecentlyJoinedUsers();
    }

    renderUsers() {

        let userList = null;
        if (this.props.topTenUsers != null && this.props.topTenUsers.length > 0) {
            userList = this.props.topTenUsers.map(user => {
                    return (
                        <tr key={user.id}>
                            <td><Link to={`/profile/${user.username}/view`}>{user.username}</Link></td>
                            <td>{user.created.split(" ")[0]}</td>
                        </tr>
                    )
                }
            );

            return userList
        } else {
            return (<tr>
                    <td>
                        <h3>Sorry, no user data found</h3>
                    </td>
                </tr>)
        }
    }

    renderJobs() {

        let jobList = null;
        if (this.props.topTenJobs != null && this.props.topTenJobs.length > 0) {
            jobList = this.props.topTenJobs.map(job => {
                    return (
                        <tr key={job.id}>
                            <td>
                                <Link to={`/job/${job.id}`}>{job.position}</Link>
                            </td>
                            <td>
                                {job.totalApplications}
                            </td>
                        </tr>
                    )
                }
            )

            return jobList;
        } else {
            return (
                <tr>
                    <td>
                        <h3>Sorry, no jobs data found</h3>
                    </td>
                </tr>);
        }
    }

    render() {
        return (
            <div>
                <div className={"row"}>
                    <img className="wbdv-home-page-image"
                         src={require('../images/HomePage.jpg')}
                         alt={"Home Page Banner"}/>
                </div>
                <div className={"row wbdv-job-row"}>
                    <div className={"col-md-6"}>
                        <h4><i>Top Ten Most Applied Jobs</i></h4>
                        <table className="table table-hover">
                            <thead className={"thead-dark"}>
                                <tr>
                                    <th>Jobs</th>
                                    <th>No. of Applicants</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderJobs()}
                            </tbody>
                        </table>
                    </div>
                    <div className={"col-md-6"}>
                        <h4><i>Most Recently Joined Job Seekers</i></h4>
                        <table className="table table-hover">
                            <thead className={"thead-dark"}>
                                <tr>
                                    <th>Username</th>
                                    <th>Joined On</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.renderUsers()}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className={"row wbdv-job-row"}>
                    <div className={"col-md-6"}>
                    </div>
                    <div className={"col-md-6"}>
                    </div>
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
    topTenJobs: state.HomeReducer.topTenJobs,
    topTenUsers: state.HomeReducer.topTenUsers
});

export const dispatcherToPropsMapper = (dispatch) => ({
    getTenMostAppliedJobs: () => actions.getTenMostAppliedJobs(dispatch),
    getTenMostRecentlyJoinedUsers: () => actions.getTenMostRecentlyJoinedUsers(dispatch)
});

const HomeContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(Home)

export default HomeContainer