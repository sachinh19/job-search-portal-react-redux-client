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
        if (this.props.job.company !== undefined && this.props.job.company.length > 0) {
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
        if (this.props.queries !== undefined && this.props.queries.length > 0) {
            return (<ul className={"list-group"}>
                {this.props.queries.map(query => {
                    return (<li className={"list-group-item"} key={query.id}>
                            <div className={"wdbv-status-options"}>
                                <label>
                                    <input type={"radio"} name={"statusTrue"} value="true"
                                           checked={query.status}
                                           onChange={()=> this.props.changeQueryStatus(query.id, !query.status, this.props.job.id)}/>
                                    Resolved
                                </label>
                                <label>
                                    <input type={"radio"} name={"statusFalse"} value="false"
                                           checked={!query.status}
                                           onChange={() =>this.props.changeQueryStatus(query.id, !query.status, this.props.job.id)}/>
                                    Unresolved
                                </label>
                            </div><br/>
                            {query.post}
                        </li>
                    )
                })}
            </ul>)
        }
    }

    render() {
        let description = this.props.job.description
        return (
            <div className={"row wbdv-job-details"}>
                <div className={"col-md-2"}></div>
                <div className={"col-md-6"}>
                    <h2>
                        {this.props.job.position}
                        <button type="button" className="btn btn-primary wbdv-right-element">Apply Now</button>
                        <br/>
                    </h2>
                    <div dangerouslySetInnerHTML={{__html: description}}/>
                    <div className={"wbdv-queries-section"}>
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
    queries: state.QueriesReducer.queries
});

export const dispatcherToPropsMapper = (dispatch) => ({
    getJobDetails: (jobId) => actions.getJobDetails(dispatch, jobId),
    getQueries: (jobId) => actions.getQueries(dispatch, jobId),
    changeQueryStatus: (queryId, newStatus, jobId) => actions.changeQueryStatus(dispatch,queryId,newStatus, jobId)
});

const JobContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(Job)

export default JobContainer

