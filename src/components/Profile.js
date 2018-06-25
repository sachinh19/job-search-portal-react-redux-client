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
        this.props.fetchUserProfile();
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
                                <Link to={"/profile/view/" + localStorage.getItem("username")} className="wbdv-options-item active">My Jobs</Link>
                            </li>
                            <li className="list-group-item wbdv-options">
                                <Link to={"/profile/update/" + localStorage.getItem("username")} className="wbdv-options-item">Manage Profile</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="container wbdv-option-list-container align-content-center">
                        <Route path={"/profile/view/" + localStorage.getItem("username")} component={ViewProfileContainer}/>
                        <Route path={"/profile/update/" + localStorage.getItem("username")} component={ManageProfileContainer}/>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="container wbdv-follow-container">
                        <button type="button" className="btn btn-primary btn-block"
                                onClick={() => {return}}>
                            Follow
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}



const stateToPropertyMapper = (state) => ({
});

export const dispatcherToPropsMapper = (dispatch) => ({
    fetchUserProfile: () => actions.fetchUserProfile(dispatch)
});

const ProfileContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(Profile)

export default ProfileContainer
