import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from "../actions";
import '../styles/Profile.css'
import ViewProfileContainer from "./PublicProfile";
import PersonalProfileContainer from "./PersonalProfile";
import {Link, Route} from 'react-router-dom';


class Profile extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }

    renderFollowButton() {
        if (localStorage.getItem("username") !== this.props.match.params.username) {
            return (
                <button type="button" className="btn btn-primary btn-block"
                        onClick={() => {
                            return
                        }}>
                    Follow
                </button>)
        }
    }

    renderPersonalInfoOption() {
        if (localStorage.getItem("username") === this.props.match.params.username ||
            localStorage.getItem("userRole") === "Admin") {
            return (<li className="list-group-item wbdv-options">
                        <Link to={"/profile/" + this.props.match.params.username + "/update"} className="wbdv-options-item">
                            Personal Profile
                        </Link>
                    </li>)
        }
    }

    render() {
        let url = "https://picsum.photos/300/300?" + localStorage.getItem("username")
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
                        <Route path={"/profile/:username/update"} component={PersonalProfileContainer}/>
                    </div>
                </div>
                <div className="col-md-1">
                </div>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({});

export const dispatcherToPropsMapper = (dispatch) => ({});

const ProfileContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(Profile)

export default ProfileContainer
