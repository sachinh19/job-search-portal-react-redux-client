import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from "../actions";
import {Link} from 'react-router-dom'

class PublicProfile extends Component {
    constructor(props) {
        super(props)
        this.props.getJobsForUser(this.props.match.params.username);
        this.props.getFollowers();
        this.props.getFollowing();
        if(this.props.match.params.username && this.props.match.params.username !== 'JobSeeker')
            this.props.getPersonJobs(this.props.match.params.username);
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
                        <h3>No jobs applied</h3>
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
                        <h3>No job listings available</h3>
                    </td>
                </tr>);
        }
    }
    renderFollowers() {
        let userList = null;
        if (this.props.followers != null && this.props.followers.length >0) {
            userList = this.props.followers.map(user=>{
                return (<tr key={user.id}>
                    <td>
                        <Link to={`/user/${user.id}`}>{user.username}</Link>
                    </td>
                </tr>)})
            return userList;
        }else {
            return(
                <tr>
                    <td>
                        <h3>No User listings available</h3>
                    </td>
                </tr>);
        }
    }

    renderFollowing() {
        let userList = null;
        if (this.props.following != null && this.props.following.length >0) {
            userList = this.props.following.map(user=>{
                return (<tr key={user.id}>
                    <td>
                        <Link to={`/user/${user.id}`}>{user.username}</Link>
                    </td>
                </tr>)})
            return userList;
        }else {
            return(
                <tr>
                    <td>
                        <h3>No User listings available</h3>
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
                {(this.props.username === 'Employer' ||
                this.props.username === 'Admin' ||
                this.props.username === 'Moderator') &&
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
                    </div>
                </div>}
                <div className="wbdv-jobs-list col-md-10 card">
                <h3><i>Followers</i></h3>
                    <table className="table table-hover">
                        <tbody>
                        {this.renderFollowers()}
                        </tbody>
                    </table>
                </div>
                <div className="wbdv-jobs-list col-md-10 card">
                    <h3><i>Following</i></h3>
                    <table className="table table-hover">
                        <tbody>
                        {this.renderFollowing()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    jobs: state.ProfileReducer.jobs,
    personJobs : state.ProfileReducer.personJobs,
    username: state.ProfileReducer.username,
    followers: state.ProfileReducer.followers,
    following: state.ProfileReducer.following
})

export const dispatcherToPropsMapper = (dispatch) => ({
    getJobsForUser: (username) => actions.getJobsForUser(dispatch, username),
    getPersonJobs: (username) => actions.getPersonJobs(dispatch, username),
    getFollowers: () => actions.getFollowers(dispatch),
    getFollowing: () => actions.getFollowing(dispatch)
})

const PublicProfileContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(PublicProfile)

export default PublicProfileContainer