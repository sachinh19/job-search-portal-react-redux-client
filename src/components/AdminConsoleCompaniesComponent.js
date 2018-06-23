import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from "../actions/index";
import {Link} from 'react-router-dom'

class AdminConsoleCompanies extends Component {
    constructor(props) {
        super(props)
        this.props.updateCompanyList();
    }

    renderCompanies() {

        let companyList = null;
        if (this.props.companies != null && this.props.companies.length > 0) {
            companyList = this.props.companies.map(company => {
                    return (
                        <tr key={company.id}>
                            <td>
                                <Link to={`/company/${company.id}`}>{company.name}</Link>
                            </td>
                            <td>
                                <button type="button" className="btn btn-danger"
                                        onClick={() => {
                                            this.props.deleteCompany(company.id)
                                        }}>
                                    <i className="fa fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    )
                }
            )

            return companyList
        } else {
            return (<h3>No Data</h3>)
        }
    }

    render() {
        return (<div className="wbdv-all-companies">
            <div className={"row"}>
                <h1>Companies</h1>
                <div className={"col-md-4"}></div>
                <button type="button" className={"col-md-3 btn btn-success"}
                        onClick={() => this.props.getNewCompanies()}>
                    Fetch New Companies
                </button>
            </div>
            <br/>
            <div className="wbdv-companies-list col-10 card">
                <table className="table table-hover">
                    <tbody>
                    {this.renderCompanies()}
                    </tbody>
                </table>
            </div>
        </div>)
    }
}

const stateToPropertyMapper = (state) => ({
    companies: state.AdminCompanyListReducer.companies
})

export const dispatcherToPropsMapper = (dispatch) => ({
    updateCompanyList: () => actions.updateCompanyList(dispatch),
    deleteCompany: (companyId) => actions.deleteCompany(dispatch, companyId),
    getNewCompanies: () => actions.getNewCompanies(dispatch)
})

const AdminConsoleCompaniesComponent = connect(stateToPropertyMapper, dispatcherToPropsMapper)(AdminConsoleCompanies)

export default AdminConsoleCompaniesComponent