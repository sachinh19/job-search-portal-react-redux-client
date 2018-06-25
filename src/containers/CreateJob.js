import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from "../actions";
import '../styles/UpdateProfile.css'
import history from "../History";

class CreateJob extends Component {

    constructor(props) {
        super(props)
        this.state = {
            errorMessageFld: ''
        }
        this.validateFields = this.validateFields.bind(this);
    }

    componentDidMount() {
        if(localStorage.getItem("jobId")!==null) {
            this.props.fetchJobDetails(localStorage.getItem("jobId"));
        }
    }

    validateFields(position, description, keywords, jobType) {

        let returnVal = false;
        this.setState(() => {return {errorMessageFld: ''}});
        if(position === '' || description === '' || keywords === '') {
            this.setState(() => {return {errorMessageFld: 'All fields are required!'}});
        } else {
            returnVal = true;
        }
        return returnVal;
    }

    render() {

        let positionFld
        let descriptionFld
        let keywordsFld
        let jobTypeFld

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
                                <div id="successMessage" className="alert alert-success" role="alert">{this.props.successMessageFld}</div>
                            </span>
                        }
                        <div className="form-group row">
                            <label htmlFor="positionFld" className="col-sm-3 col-form-label">
                                Job Position
                            </label>
                            <div className="col-sm-9">
                                <input className="form-control"
                                       id="positionFld"
                                       type={"text"}
                                       placeholder='Job Position'
                                       value={this.props.position}
                                       onChange={() => {this.props.changeJobPosition(positionFld.value)}}
                                       ref={node => positionFld = node} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="descriptionFld" className="col-sm-3 col-form-label">
                                Job Description
                            </label>
                            <div className="col-sm-9">
                                <textarea  className="form-control"
                                           id="descriptionFld"
                                           placeholder='Enter Job Description in HTML Format'
                                           rows={"20"}
                                           value={this.props.description}
                                           onChange={() => {
                                               this.props.changeJobDescription(descriptionFld.value)
                                           }}
                                           ref={node => descriptionFld = node}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="keywordsFld" className="col-sm-3 col-form-label">
                                Keywords
                            </label>
                            <div className="col-sm-9">
                                <input className="form-control"
                                       id="keywordsFld"
                                       type={"text"}
                                       placeholder='Enter Search Keywords related to job'
                                       value={this.props.keywords}
                                       onChange={() => {this.props.changeJobKeywords(keywordsFld.value)}}
                                       ref={node => keywordsFld = node}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="jobTypeFld" className="col-sm-3 col-form-label">
                                Job Type
                            </label>
                            <div className="col-sm-9">
                                <select className="form-control wbdv-job-fld"
                                        id="jobTypeFld"
                                        value={this.props.jobType.name}
                                        onChange={() => {this.props.changeProfileJobType(jobTypeFld.value)}}
                                        ref={node => jobTypeFld = node}>
                                    <option value={"Full-time"} default>Full Time</option>
                                    <option value={"Part-time"}>Part Time</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label"></label>
                            <div className="col-sm-9">
                                <button id="registerUser"
                                        className="btn btn-outline-success btn-block"
                                        type="button"
                                        onClick={()=>{
                                            if(this.validateFields(
                                                this.props.position,
                                                this.props.description,
                                                this.props.keywords,
                                                this.props.jobType))   {
                                                this.props.saveJob(
                                                    this.props.jobId,
                                                    this.props.position,
                                                    this.props.description,
                                                    this.props.keywords,
                                                    this.props.jobType)
                                            }}}>
                                    Save Job
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
    position: state.CreateJobReducer.position,
    description: state.CreateJobReducer.description,
    keywords: state.CreateJobReducer.keywords,
    jobType: state.CreateJobReducer.jobType,
    jobId: state.CreateJobReducer.jobId,
    successMessageFld: state.CreateJobReducer.successMessageFld
});

export const dispatcherToPropsMapper = (dispatch) => ({
    fetchJobDetails: (jobId) => actions.fetchJobDetails(dispatch,jobId),
    changeJobDescription: (description) => actions.changeJobDescription(dispatch, description),
    changeJobPosition: (position) => actions.changeJobPosition(dispatch, position),
    changeJobKeywords: (keywords) => actions.changeJobKeywords(dispatch, keywords),
    changeProfileJobType: (jobType) => actions.changeProfileJobType(dispatch, {name: jobType}),
    saveJob: (position, description, keywords, jobType) => actions.saveJob(dispatch, position, description, keywords, jobType)
});

const CreateJobContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(CreateJob)

export default CreateJobContainer
