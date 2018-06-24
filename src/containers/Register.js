import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from "../actions";
import '../styles/Register.css'


class Register extends Component {

    constructor(props) {
        super(props)
        this.state = {
            errorMessageFld: ''
        }
        this.validateFields = this.validateFields.bind(this);
    }
    validateFields(username, password, password2, role, companyName) {
        let returnVal = false;
        this.setState(() => {
            return {errorMessageFld: ''}
        });
        if(username === '' || password === '' || password2 === '' || role === '') {
            this.setState(() => {
                return {errorMessageFld: 'All fields are mandatory!'}
            });
        }
        else if(role === 'Employer' && companyName === '') {
            this.setState(() => {
                return {
                    errorMessageFld: 'Company field is mandatory for Employer!'
                }});
        }
        else if(password!==password2){
            this.setState(() => {
                return {errorMessageFld: 'Passwords do not match!'}
            });
        }
        else {
            returnVal = true;
        }
        return returnVal;
    }

    render() {
        let usernameFld
        let passwordFld
        let password2Fld
        let roleFld
        let companyNameFld

        return (
            <div className="container-register">
                <div className={"card container wbdv-register-container"}>
                    <form>
                        {this.state.errorMessageFld!=='' &&
                        <span>
                            <div id="errorMessage" className="alert alert-danger" role="alert">{this.state.errorMessageFld}</div>
                        </span>
                        }
                        <div className="form-group row">
                            <label htmlFor="usernameFld" className="col-sm-3 col-form-label">
                                Username
                            </label>
                            <div className="col-sm-9">
                                <input className="form-control"
                                       id="usernameFld"
                                       placeholder='Username'
                                       value={this.props.username}
                                       onChange={() => {this.props.changeRegisterUsername(usernameFld.value)}}
                                       ref={node => usernameFld = node} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="passwordFld" className="col-sm-3 col-form-label">
                                Password </label>
                            <div className="col-sm-9">
                                <input type="password"
                                       className="form-control wbdv-password-fld"
                                       id="passwordFld"
                                       placeholder='Password'
                                       value={this.props.password} onChange={() => {this.props.changeRegisterPassword(passwordFld.value)}}
                                       ref={node => passwordFld = node}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="password2Fld" className="col-sm-3 col-form-label">
                                Verify Password </label>
                            <div className="col-sm-9">
                                <input type="password"
                                       className="form-control wbdv-password-fld"
                                       id="password2Fld"
                                       placeholder='Verify Password'
                                       value={this.props.password2} onChange={() => {this.props.changeRegisterPassword2(password2Fld.value)}}
                                       ref={node => password2Fld = node}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="roleFld" className="col-sm-3 col-form-label">
                                Role
                            </label>
                            <div className="col-sm-9">
                                <select className="form-control wbdv-role-fld"
                                        id="roleFld"
                                        value={this.props.role} onChange={() => {this.props.changeRegisterRole(roleFld.value)}}
                                        ref={node => roleFld = node}>
                                    <option value={"Employer"}>Employer</option>
                                    <option value={"JobSeeker"}>Job Seeker</option>
                                </select>
                            </div>
                        </div>
                        {this.props.role==='Employer' && <div className="form-group row">
                            <label htmlFor="companyFld" className="col-sm-3 col-form-label">
                                Company
                            </label>
                            <div className="col-sm-9">
                                <input className="form-control"
                                       id="companyFld"
                                       placeholder='Company Name'
                                       value={this.props.companyName}
                                       onChange={() => {this.props.changeCompanyName(companyNameFld.value)}}
                                       ref={node => companyNameFld = node} />
                            </div>
                        </div>}
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label"></label>
                            <div className="col-sm-9">
                                <button id="registerUser"
                                        className="btn btn-outline-success btn-block"
                                        type="button"
                                        onClick={()=>{
                                            if(this.validateFields(
                                                this.props.username,
                                                this.props.password,
                                                this.props.password2,
                                                this.props.role,
                                                this.props.companyName))    {
                                                    this.props.doRegister(
                                                        this.props.username,
                                                        this.props.password,
                                                        this.props.password2,
                                                        this.props.role,
                                                        this.props.companyName)
                                            }}}>
                                        Register
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    username: state.RegisterReducer.username,
    password: state.RegisterReducer.password,
    password2: state.RegisterReducer.password2,
    role: state.RegisterReducer.role,
    companyName: state.RegisterReducer.companyName
});

export const dispatcherToPropsMapper = (dispatch) => ({
    changeRegisterUsername: (username) => actions.changeRegisterUsername(dispatch,username),
    changeRegisterPassword: (password) => actions.changeRegisterPassword(dispatch,password),
    changeRegisterPassword2: (password2) => actions.changeRegisterPassword2(dispatch,password2),
    changeRegisterRole: (role) => actions.changeRegisterRole(dispatch,role),
    changeCompanyName: (companyName) => actions.changeCompanyName(dispatch,companyName),
    doRegister: (username,password, password2, role, companyName) =>
        actions.doRegister(dispatch,username,password, password2, role, companyName)
});

const RegisterContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(Register)

export default RegisterContainer
