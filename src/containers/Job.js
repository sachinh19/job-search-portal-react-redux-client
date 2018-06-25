import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from "../actions";
import '../styles/Job.css'
import {Link} from 'react-router-dom'


class Job extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getJobDetails(this.props.match.params.jobId);
        this.props.getQueries(this.props.match.params.jobId);
    }

    renderCompany() {
        if (this.props.job.company !== undefined) {
            return (<div className="card">
                <div className="card-body">
                    <h5 className={"card-title"}>Company</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{this.props.job.company.name}</h6>
                    <Link to={`/company/${this.props.job.company.id}`}>
                        <button type="button" className="btn btn-success btn-block">Details</button>
                    </Link>
                </div>
            </div>)
        }
    }

    renderQueries() {
        let updatedPostFld = ''
        if (this.props.queries !== undefined && this.props.queries.length > 0) {
            return (
                <div className={"wbdv-queries"}>
                    {this.props.queries.map(query => {
                        return (
                            <div className={"card wbdv-query"} key={query.id}>

                                <div className={"card-header row wdbv-status-options"}>
                                    <label>
                                        <input type={"radio"} name={"Query" + query.id} value="true"
                                               checked={query.status}
                                               onChange={() => this.props.changeQueryStatus(query.id, !query.status, this.props.job.id)}/>
                                        &nbsp; Resolved
                                    </label>&nbsp;&nbsp;
                                    <label>
                                        <input type={"radio"} name={"Query" + query.id} value="false"
                                               checked={!query.status}
                                               onChange={() => this.props.changeQueryStatus(query.id, !query.status, this.props.job.id)}/>
                                        &nbsp; Unresolved
                                    </label>
                                    <div className={"wbdv-query-update-option"} hidden={!query.isAuthenticated}>
                                            <button type="button" className="btn btn-success wbdv-right-element wbdv-query-btn"
                                                    onClick={() => {this.props.updateQueryCall(query.id, query.post)}}>
                                                <i className={"fa fa-edit"}></i>
                                            </button>
                                            <button type="button" className="btn btn-danger wbdv-right-element wbdv-query-btn"
                                                    onClick={() => {this.props.deleteQuery(query.id)}}>
                                                <i className={"fa fa-trash"}></i>
                                            </button>
                                    </div>
                                </div>
                                <div className={"card-body"}>
                                    <br/>
                                    <div hidden={query.isPreview}>
                                        <textarea className="form-control" rows="3" name="updatedQueryText"
                                                  value={this.props.updatedPost}
                                                  onChange={(event) => {
                                                      this.props.changeUpdatePost(event.target.value)}}
                                                  ref={node => updatedPostFld = node}/>
                                        <button onClick={() => {this.props.updatePost(this.props.updatedPost, this.props.id)}} type="button" className="btn btn-outline-primary wbdv-submit-btn">
                                            Save Changes
                                        </button>
                                    </div>
                                    <p className="card-text">
                                        {query.post}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )
        }
    }

    renderApplyButton() {
        if (this.props.currentUser === undefined) {
            return (<button type="button" className="btn btn-primary wbdv-right-element"
                            onClick={() => this.props.addApplicant(this.props.job.id)}>
                Apply Now
            </button>)
        }
        if (this.props.currentUser !== undefined) {

            this.props.getApplicationStatus(this.props.job.id)

            if (this.props.hasApplied) {

                return (<button type="button" className="btn btn-primary wbdv-right-element"
                                onClick={() => {
                                    alert("You have already applied for this position")}}>
                    Applied
                </button>)
            } else {
                return (<button type="button" className="btn btn-primary wbdv-right-element"
                                onClick={() => this.props.addApplicant(this.props.job.id)}>
                    Apply Now
                </button>)
            }
        }

    }

    render() {
        let description = this.props.job.description
        let postFld
        return (
            <div className={"row wbdv-job-details"}>
                <div className={"col-md-2"}></div>
                <div className={"col-md-6"}>
                    <h2>
                        {this.props.job.position}
                        {this.renderApplyButton()}
                        <br/>
                    </h2>
                    <div dangerouslySetInnerHTML={{__html: description}}/>
                    <div className={"wbdv-queries-section"}>
                        <br/><h4>Job Queries</h4><br/>
                        <h6>Post your queries:</h6>
                        <div className={"row wbdv-post-queries"}>
                            <textarea className="form-control" rows="3" name="querytext"
                                      value={this.props.post}
                                      ref={node => postFld = node}
                                      onChange={() => this.props.changePost(postFld.value)}>

                            </textarea>
                            <button onClick={() => {
                                this.props.submitPost(this.props.post, this.props.job.id)
                            }} type="button" className="btn btn-outline-primary wbdv-submit-btn">
                                Submit
                            </button>
                        </div>
                        {this.renderQueries()}
                    </div>
                </div>
                <div className={"col-md-4 wbdv-company-link"}>
                    {this.renderCompany()}
                </div>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    job: state.JobReducer.job,
    queries: state.QueriesReducer.queries,
    currentUser: localStorage.getItem("username"),
    hasApplied: state.JobReducer.hasApplied,
    post: state.JobReducer.post,
    id: state.EditQueryReducer.id,
    updatedPost: state.EditQueryReducer.updatedPost
});

export const dispatcherToPropsMapper = (dispatch) => ({
    getJobDetails: (jobId) => actions.getJobDetails(dispatch, jobId),
    getQueries: (jobId) => actions.getQueries(dispatch, jobId),
    changeQueryStatus: (queryId, newStatus, jobId) => actions.changeQueryStatus(dispatch, queryId, newStatus, jobId),
    addApplicant: (jobId) => actions.addApplicant(dispatch, jobId),
    getApplicationStatus: (jobId) => actions.getApplicationStatus(dispatch, jobId),
    changePost: (post) => actions.changePost(dispatch, post),
    submitPost: (post, jobId) => actions.submitPost(dispatch, post, jobId),
    updatePost: (post, queryId) => actions.updatePost(dispatch, post, queryId),
    deleteQuery: (queryId) => actions.deleteQuery(dispatch, queryId),
    updateQueryCall: (queryId, post) => actions.updateQueryCall(dispatch, queryId, post),
    changeUpdatePost: (updatedPost) => actions.changeUpdatePost(dispatch,updatedPost)
});

const JobContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(Job)

export default JobContainer

