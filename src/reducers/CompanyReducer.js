import * as constants from '../constants'

const CompanyReducer = (state = {company: '', jobs: [], employees: []}, action) => {
    switch (action.type) {
        case constants.SET_COMPANY_DETAILS:
            return {
                company: action.company,
                employees: action.employees,
                jobs: state.jobs
            }

        case constants.SET_COMPANY_EMPLOYEES_DETAILS:
            return {
                company: state.company,
                employees: action.employees,
                jobs: state.jobs
            }

        case constants.SET_COMPANY_JOB_DETAILS:
            return {
                company: state.company,
                employees: state.employees,
                jobs: action.jobs
            }
        default :
            return state;
    }
};

export default CompanyReducer;