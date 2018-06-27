import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from "../actions";
import '../styles/Profile.css'
import ViewProfileContainer from "./MyJobs";
import ManageProfileContainer from "./ManageProfile";
import {Link, Route} from 'react-router-dom';


class Profile extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        if (this.props.localUsername !== this.props.match.params.username) {
            this.props.isFollowing(this.props.match.params.username)}
    }

    componentWillReceiveProps(newProps) {
        if (newProps.localUsername !== newProps.match.params.username) {
            this.props.isFollowing(newProps.match.params.username)}
    }

    renderFollowButton() {
        if (this.props.localUsername !== this.props.match.params.username) {
            this.props.isFollowing(this.props.match.params.username)
            if (!this.props.isFollowingUser) {
                return (
                    <button type="button" className="btn btn-primary btn-block"
                            onClick={() => {
                                this.props.followUser(this.props.match.params.username);
                            }}>
                        Follow
                    </button>)
            } else {
                return (
                    <button type="button" className="btn btn-primary btn-block"
                            onClick={() => {
                                this.props.unfollowUser(this.props.match.params.username);
                            }}>
                        Unfollow
                    </button>)
            }
        }
    }

    renderPersonalInfoOption() {
        if (this.props.localUsername === this.props.match.params.username ||
            this.props.localRole === "Admin") {
            return (<li className="list-group-item wbdv-options">
                <Link to={"/profile/" + this.props.match.params.username + "/update"} className="wbdv-options-item">Personal
                    Profile</Link>
            </li>)
        }
    }

    render() {
        let url = "https://picsum.photos/300/300?" + this.props.localUsername
        return (
            <div className="row">
                <div className="col-md-3">
                    <div className="container wbdv-options-container">
                        <img className="card-img-top" src={url} alt="Card cap"/>
                        <ul className="list-group">
                            <li className="list-group-item wbdv-options">
                                <Link to={"/profile/" + this.props.match.params.username + "/view"}
                                      className="wbdv-options-item active">Public Profile</Link>
                            </li>
                            {this.renderPersonalInfoOption()}
                        </ul>

                        <div className="container wbdv-follow-container">
                            {this.renderFollowButton()}
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="container wbdv-option-list-container align-content-center">
                        <Route path={"/profile/:username/view"} component={ViewProfileContainer}/>
                        <Route path={"/profile/:username/update"} component={ManageProfileContainer}/>
                    </div>
                </div>
                <div className="col-md-1">
                </div>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    isFollowingUser: state.ProfileReducer.isFollowingUser,
    localUsername: state.LocalStorageReducer.localUsername,
    localRole: state.LocalStorageReducer.localRole
});

export const dispatcherToPropsMapper = (dispatch) => ({
    followUser: (followUsername) => actions.followUser(dispatch, followUsername),
    unfollowUser: (unfollowUsername) => actions.unfollowUser(dispatch, unfollowUsername),
    isFollowing: (username) => actions.isFollowing(dispatch,username),
    findFollowers: (username) => actions.findFollowers(dispatch, username),
    findFollowing: (username) => actions.findFollowing(dispatch, username)

});

const ProfileContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(Profile)

export default ProfileContainer
