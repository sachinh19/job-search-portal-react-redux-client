import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from "../actions";
import '../styles/Company.css'
import {Link} from 'react-router-dom'

class Company extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getCompanyDetails(this.props.match.params.companyId);
        this.props.getCompanyEmployees(this.props.match.params.companyId);
        this.props.getCompanyJobs(this.props.match.params.companyId);
    }

    calculateTotalEmployees(){
        if (this.props.employees && this.props.employees.length > 0) {
            return this.props.employees.length
        } else return 0;
    }

    renderJobs() {
        if (this.props.jobs && this.props.jobs.length > 0) {
            return (
                <div className={"wbdv-company-jobs"}>
                    <h4>Job Posted Under this company</h4>
                    <table className="table table-hover">
                        <thead>
                        <tr>
                            <th>Job Position</th>
                            <th>Total Applicants</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.jobs.map(job => {

                            return <tr key={job.id}>
                                <td><Link to={`/job/${job.id}`}>{job.position}</Link></td>
                                <td>{job.totalApplications}</td>
                            </tr>
                        })}
                        </tbody>
                    </table>
                </div>
            )
        }
    }

    render() {
        return (
            <div className={"wbdv-company-details row"}>
                <div className="col-md-4">
                    <h1>Company Details</h1><br/>
                    <div className="card">
                        <img className="card-img-top" src="https://picsum.photos/500/300?random"
                             alt="Card cap"></img>
                        <div className="card-body">
                            <h5 className="card-title">{this.props.company.name}</h5>
                            <div className="card-text">
                                <h6>Total Employees : {this.calculateTotalEmployees()}</h6>
                                <a href={this.props.company.url}>View Official Site</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    {this.renderJobs()}
                </div>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    company: state.CompanyReducer.company,
    jobs: state.CompanyReducer.jobs,
    employees:state.CompanyReducer.employees
});

export const dispatcherToPropsMapper = (dispatch) => ({
    getCompanyDetails: (companyId) => actions.getCompanyDetails(dispatch, companyId),
    getCompanyEmployees: (companyId) => actions.getCompanyEmployees(dispatch,companyId),
    getCompanyJobs: (companyId) => actions.getCompanyJobs(dispatch,companyId)
});

const CompanyContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(Company)

export default CompanyContainer

