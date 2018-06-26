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

    render() {
        let url = "https://picsum.photos/300/300?" + localStorage.getItem("username")
        return (
            <div className="row">
                <div className="col-md-3">
                    <div className="container wbdv-options-container">
                        <img className="card-img-top" src={url} alt="Card cap"/>
                        <ul className="list-group">
                            <li className="list-group-item wbdv-options">
                                <Link to={"/profile/"  + this.props.match.params.username+ "/view"} className="wbdv-options-item active">My Jobs</Link>
                            </li>
                            <li className="list-group-item wbdv-options">
                                <Link to={"/profile/" + this.props.match.params.username + "/update"} className="wbdv-options-item">Manage Profile</Link>
                            </li>
                        </ul>
                        {this.props.match.params.username !== localStorage.getItem("username") &&
                        <div className="container wbdv-follow-container">
                            <button type="button" className="btn btn-primary btn-block"
                                    onClick={() => {return}}>
                                Follow
                            </button>
                        </div>}
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
    username: state.ProfileReducer.username
});

export const dispatcherToPropsMapper = (dispatch) => ({

});

const ProfileContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(Profile)

export default ProfileContainer
