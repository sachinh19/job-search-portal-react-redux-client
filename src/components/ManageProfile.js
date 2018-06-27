import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from "../actions";
import '../styles/Profile.css'


class ManageProfile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            errorMessageFld: ''
        }
        this.validateFields = this.validateFields.bind(this);
    }

    componentDidMount() {
        this.props.fetchUserProfile(this.props.match.params.username);
    }

    validateFields(password, role, companyName) {

        let returnVal = false;
        this.setState(() => {return {errorMessageFld: ''}});
        if(password === '') {
            this.setState(() => {return {errorMessageFld: 'Password field is required!'}});
        }
        else if(role === 'Employer' && companyName === '') {
            this.setState(() => {return {errorMessageFld: 'Company field is mandatory for Employer!'}});
        }
        else {
            returnVal = true;
        }
        return returnVal;
    }

    render() {
        let usernameFld;
        let passwordFld;
        let firstNameFld;
        let lastNameFld;
        let emailFld;
        let aboutMeFld;
        let expDescriptionFld;
        let roleFld;
        let companyNameFld;
        let positionFld;
        let tenureFld;
        let interestedPositionFld;
        let totalExperienceFld;

        if (this.props.localUsername === this.props.match.params.username ||
            this.props.localRole === "Admin") {
        return (
            <div className="container-profile">
                <div className={"card container wbdv-profile-container"}>
                    <form>
                        {this.state.errorMessageFld!=='' &&
                        <span>
                            <div id="errorMessage" className="alert alert-danger" role="alert">{this.state.errorMessageFld}</div>
                        </span>
                        }
                        {this.props.successMessageFld!=='' &&
                            <span>
                                <div id="errorMessage" className="alert alert-success" role="alert">{this.props.successMessageFld}</div>
                            </span>
                        }
                        <div className="form-group row">
                            <label htmlFor="usernameFld" className="col-sm-3 col-form-label">
                                Username
                            </label>
                            <div className="col-sm-9">
                                <input className="form-control"
                                       id="usernameFld"
                                       readOnly="readOnly"
                                       type={"text"}
                                       placeholder='Username'
                                       value={this.props.username}
                                       onChange={() => {this.props.changeProfileUsername(usernameFld.value)}}
                                       ref={node => usernameFld = node} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="passwordFld" className="col-sm-3 col-form-label">
                                Password
                            </label>
                            <div className="col-sm-9">
                                <input type="password"
                                       className="form-control wbdv-password-fld"
                                       id="passwordFld"
                                       placeholder='Password'
                                       value={this.props.password} onChange={() => {this.props.changeProfilePassword(passwordFld.value)}}
                                       ref={node => passwordFld = node}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="firstNameFld" className="col-sm-3 col-form-label">
                                First Name
                            </label>
                            <div className="col-sm-9">
                                <input className="form-control"
                                       id="firstNameFld"
                                       type={"text"}
                                       placeholder='First Name'
                                       value={this.props.firstName}
                                       onChange={() => {
                                           this.props.changeProfileFirstName(firstNameFld.value)
                                       }}
                                       ref={node => firstNameFld = node}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="lastNameFld" className="col-sm-3 col-form-label">
                                Last Name
                            </label>
                            <div className="col-sm-9">
                                <input className="form-control"
                                       id="lastNameFld"
                                       type={"text"}
                                       placeholder='Last Name'
                                       value={this.props.lastName}
                                       onChange={() => {
                                           this.props.changeProfileLastName(lastNameFld.value)
                                       }}
                                       ref={node => lastNameFld = node}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="emailFld" className="col-sm-3 col-form-label">
                                Email
                            </label>
                            <div className="col-sm-9">
                                <input className="form-control"
                                       id="emailFld"
                                       type={"email"}
                                       placeholder='Email Id'
                                       value={this.props.email}
                                       onChange={() => {
                                           this.props.changeProfileEmail(emailFld.value)
                                       }}
                                       ref={node => emailFld = node}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="aboutMeFld" className="col-sm-3 col-form-label">
                                About Me
                            </label>
                            <div className="col-sm-9">
                                <textarea  className="form-control"
                                           id="aboutMeFld"
                                           placeholder='About Me'
                                           rows={"5"}
                                           value={this.props.aboutMe}
                                           onChange={() => {
                                           this.props.changeProfileAboutMe(aboutMeFld.value)
                                       }}
                                       ref={node => aboutMeFld = node}/>
                            </div>
                        </div>
                        {this.props.role==='JobSeeker' &&
                        <div className="form-group row">
                            <label htmlFor="expDescriptionFld" className="col-sm-3 col-form-label">
                                Past Experience
                            </label>
                            <div className="col-sm-9">
                                <textarea  className="form-control"
                                           id="expDescriptionFld"
                                           placeholder='Describe your past experience in brief'
                                           rows={"15"}
                                           value={this.props.expDescription}
                                           onChange={() => {
                                               this.props.changeProfileExpDescription(expDescriptionFld.value)
                                           }}
                                           ref={node => expDescriptionFld = node}/>
                            </div>
                        </div>}
                        <div className="form-group row">
                            <label htmlFor="roleFld" className="col-sm-3 col-form-label">
                                Role
                            </label>
                            <div className="col-sm-9">
                                <select className="form-control wbdv-role-fld"
                                        id="roleFld"
                                        disabled={"true"}
                                        value={this.props.role}
                                        onChange={() => {this.props.changeProfileRole(roleFld.value)}}
                                        ref={node => roleFld = node}>
                                    <option value={"Employer"}>Employer</option>
                                    <option value={"JobSeeker"}>Job Seeker</option>
                                </select>
                            </div>
                        </div>

                        {this.props.role==='Employer' &&
                        <div className="form-group row">
                            <label htmlFor="companyFld" className="col-sm-3 col-form-label">
                                Company
                            </label>
                            <div className="col-sm-9">
                                <input className="form-control"
                                       id="companyFld"
                                       type={"text"}
                                       placeholder='Company Name'
                                       value={this.props.companyName}
                                       onChange={() => {this.props.changeProfileCompanyName(companyNameFld.value)}}
                                       ref={node => companyNameFld = node} />
                            </div>
                        </div>}
                        {this.props.role==='Employer' &&
                        <div className="form-group row">
                            <label htmlFor="positionFld" className="col-sm-3 col-form-label">
                                Position
                            </label>
                            <div className="col-sm-9">
                                <input className="form-control"
                                       id="positionFld"
                                       type={"text"}
                                       placeholder='Position'
                                       value={this.props.position}
                                       onChange={() => {this.props.changeProfilePosition(positionFld.value)}}
                                       ref={node => positionFld = node} />
                            </div>
                        </div>}
                        {this.props.role==='Employer' &&
                        <div className="form-group row">
                            <label htmlFor="tenureFld" className="col-sm-3 col-form-label">
                                Tenure
                            </label>
                            <div className="col-sm-9">
                                <input className="form-control"
                                       id="tenureFld"
                                       type={"text"}
                                       placeholder='Tenure'
                                       value={this.props.tenure}
                                       onChange={() => {this.props.changeProfileTenure(tenureFld.value)}}
                                       ref={node => tenureFld = node} />
                            </div>
                        </div>}
                        {this.props.role==='JobSeeker' &&
                        <div className="form-group row">
                            <label htmlFor="interestedPositionFld" className="col-sm-3 col-form-label">
                                Interested Position
                            </label>
                            <div className="col-sm-9">
                                <input className="form-control"
                                       id="interestedPositionFld"
                                       type={"text"}
                                       placeholder='Interested Position'
                                       value={this.props.interestedPosition}
                                       onChange={() => {this.props.changeProfileInterestedPosition(interestedPositionFld.value)}}
                                       ref={node => interestedPositionFld = node} />
                            </div>
                        </div>}

                        {this.props.role==='JobSeeker' &&
                        <div className="form-group row">
                            <label htmlFor="totalExperience" className="col-sm-3 col-form-label">
                                Total Experience
                            </label>
                            <div className="col-sm-9">
                                <input className="form-control"
                                       id="totalExperience"
                                       type={"text"}
                                       placeholder='Total Experience'
                                       value={this.props.totalExperience}
                                       onChange={() => {this.props.changeProfileTotalExperience(totalExperienceFld.value)}}
                                       ref={node => totalExperienceFld = node} />
                            </div>
                        </div>}
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label"></label>
                            <div className="col-sm-9">
                                <button id="updateUser"
                                        className="btn btn-outline-success btn-block"
                                        type="button"
                                        onClick={()=>{
                                            if(this.validateFields(
                                                this.props.password,
                                                this.props.role,
                                                this.props.companyName))    {
                                                this.props.updateProfile(
                                                    this.props.username,
                                                    this.props.password,
                                                    this.props.firstName,
                                                    this.props.lastName,
                                                    this.props.email,
                                                    this.props.aboutMe,
                                                    this.props.expDescription,
                                                    this.props.role,
                                                    this.props.companyName,
                                                    this.props.position,
                                                    this.props.tenure,
                                                    this.props.interestedPosition,
                                                    this.props.totalExperience)
                                            }}}>
                                    Update Profile
                                </button>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label"></label>
                            <div className="col-sm-9">
                                <button id=""
                                        className="btn btn-outline-danger btn-block"
                                        type="button"
                                        onClick={()=>{this.props.deleteProfile(this.props.userId)}}>
                                    Delete Profile
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )} else {
            return(<div><h1 className={"wbdv-access-forbidden"}><i>Access Forbidden</i></h1></div>)
        }
    }
}



const stateToPropertyMapper = (state) => ({
    userId: state.ProfileReducer.userId,
    username: state.ProfileReducer.username,
    password: state.ProfileReducer.password,
    firstName: state.ProfileReducer.firstName,
    lastName: state.ProfileReducer.lastName,
    email: state.ProfileReducer.email,
    aboutMe: state.ProfileReducer.aboutMe,
    expDescription: state.ProfileReducer.expDescription,
    role: state.ProfileReducer.role,
    companyName: state.ProfileReducer.companyName,
    position: state.ProfileReducer.position,
    tenure: state.ProfileReducer.tenure,
    interestedPosition: state.ProfileReducer.interestedPosition,
    totalExperience: state.ProfileReducer.totalExperience,
    successMessageFld: state.ProfileReducer.successMessageFld,
    localUsername: state.LocalStorageReducer.localUsername,
    localRole: state.LocalStorageReducer.localRole
});

export const dispatcherToPropsMapper = (dispatch) => ({
    changeProfileUsername: (username) => actions.changeProfileUsername(dispatch,username),
    changeProfilePassword: (password) => actions.changeProfilePassword(dispatch,password),
    changeProfileFirstName: (firstName) => actions.changeProfileFirstName(dispatch, firstName),
    changeProfileLastName: (lastName) => actions.changeProfileLastName(dispatch,lastName),
    changeProfileEmail: (email) => actions.changeProfileEmail(dispatch,email),
    changeProfileAboutMe: (aboutMe) => actions.changeProfileAboutMe(dispatch, aboutMe),
    changeProfileExpDescription: (expDescription) => actions.changeProfileExpDescription(dispatch, expDescription),
    changeProfileRole: (role) => actions.changeProfileRole(dispatch,role),
    changeProfileCompanyName: (companyName) => actions.changeProfileCompanyName(dispatch,companyName),
    changeProfilePosition: (position) => actions.changeProfilePosition(dispatch, position),
    changeProfileTenure: (tenure) => actions.changeProfileTenure(dispatch, tenure),
    changeProfileInterestedPosition: (interestedPosition) => actions.changeProfileInterestedPosition(dispatch, interestedPosition),
    changeProfileTotalExperience: (totalExperience) => actions.changeProfileTotalExperience(dispatch, totalExperience),
    updateProfile: (username,password, firstName, lastName, email, aboutMe,
                    expDescription, role, companyName, position, tenure, interestedPosition, totalExperience) =>
        actions.updateProfile(dispatch,username,password, firstName, lastName, email, aboutMe,
            expDescription, role, companyName, position, tenure, interestedPosition, totalExperience),
    deleteProfile: (userId) => actions.deleteProfile(dispatch,userId),
    fetchUserProfile: (username) => actions.fetchUserProfile(dispatch, username)
});

const ManageProfileContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(ManageProfile)

export default ManageProfileContainer
