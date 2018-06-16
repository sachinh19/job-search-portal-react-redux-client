import * as constants from '../constants'

const AdminCompanyListReducer = (state = {companies:[]}, action) => {

    switch (action.type) {
        case constants.SHOW_COMPANYLIST:
            return{
                companies:action.companies,
            };
        case constants.REMOVE_COMPANY:
            return{
                companies:state.companies.filter(company=>company.id !== action.companyId),
            };
        default :
            return state;
    }
};

export default AdminCompanyListReducer;