import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from "../actions";
import {Link} from 'react-router-dom'

class PublicProfile extends Component {
    constructor(props) {
        super(props)

        this.props.findFollowers(this.props.match.params.username);
        this.props.findFollowing(this.props.match.params.username);
        this.props.getJobsForUser(this.props.match.params.username);

        if (this.props.match.params.username && this.props.localRole !== 'JobSeeker')
            this.props.getPersonJobs(this.props.match.params.username);
    }

    renderJobs() {

        let jobList = null;
        if (this.props.jobs != null && this.props.jobs.length > 0) {
            jobList = this.props.jobs.map(job => {
                    return (
                        <tr key={job.id}>
                            <td>
                                <Link to={`/job/${job.id}`}>{job.position}</Link>
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
                        <h3>No jobs applied</h3>
                    </td>
                </tr>
            );
        }
    }

    renderfollowers() {

        if (this.props.followers) {
            let followersList = null;
            if (this.props.followers!= null && this.props.followers.length > 0) {
                followersList = this.props.followers.map(user => {
                    return (<tr key={user.id}>
                        <td>
                            <a href={`/profile/${user.username}/view`}>{user.username}</a>
                        </td>
                    </tr>)
                })
                return followersList;
            } else {
                return (
                    <tr>
                        <td>
                            <h3>Not followed By any user</h3>
                        </td>
                    </tr>);
            }
        }
    }

    renderfollowing() {

        if (this.props.following) {
            let followingList = null;
            if (this.props.following != null && this.props.following.length > 0) {
                followingList = this.props.following.map(user => {
                    return (<tr key={user.id}>
                        <td>
                            <a href={`/profile/${user.username}/view`}>{user.username}</a>
                        </td>
                    </tr>)
                })
                return followingList;
            } else {
                return (
                    <tr>
                        <td>
                            <h3>Not following any other user</h3>
                        </td>
                    </tr>);
            }
        }
        }

    renderEmployerJobs() {
        let jobList = null;
        if (this.props.personJobs != null && this.props.personJobs.length > 0) {
            jobList = this.props.personJobs.map(job => {
                return (<tr key={job.id}>
                    <td>
                        <Link to={`/job/${job.id}`}>{job.position}</Link>
                    </td>
                </tr>)
            })
            return jobList;
        } else {
            return (
                <tr>
                    <td>
                        <h3>No job listings available</h3>
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
                <br/>
                    <div className={"row"}>
                        <h1>Followers</h1>
                        <div className={"col-md-6"}></div>
                    </div>
                    <br/>
                <div className="wbdv-followedBy-list col-md-10 card">
                        <table className="table table-hover">
                            <tbody>
                            {this.renderfollowers()}
                            </tbody>
                        </table>
                    </div>
                <br/>
                        <div className={"row"}>
                            <h1>Following</h1>
                            <div className={"col-md-6"}></div>
                        </div>
                        <br/>
                        <div className="wbdv-following-list col-md-10 card">
                            <table className="table table-hover">
                                <tbody>
                                {this.renderfollowing()}
                                </tbody>
                            </table>
                        </div><br/>

                {(this.props.localRole === 'Employer' ||
                    this.props.localRole === 'Admin' ||
                    this.props.localRole === 'Moderator') &&
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
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    jobs: state.ProfileReducer.jobs,
    personJobs: state.ProfileReducer.personJobs,
    localUsername: state.LocalStorageReducer.localUsername,
    localRole: state.LocalStorageReducer.localRole,
    followers: state.FollowReducer.followers,
    following: state.FollowReducer.following
})

export const dispatcherToPropsMapper = (dispatch) => ({
    getJobsForUser: (username) => actions.getJobsForUser(dispatch, username),
    getPersonJobs: (username) => actions.getPersonJobs(dispatch, username),
    findFollowers: (username) => actions.findFollowers(dispatch, username),
    findFollowing: (username) => actions.findFollowing(dispatch, username)

})

const PublicProfileContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(PublicProfile)

export default PublicProfileContainer