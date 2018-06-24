import * as constants from '../constants'

const RegisterReducer = (state = {username:'', password: '',
    password2:'', role:'Employer', companyName:'', successMessageFld: ''}, action) => {

    switch (action.type) {

        case constants.CHANGE_REGISTER_USERNAME:
            return {
                username:action.username,
                password:state.password,
                password2:state.password2,
                role: state.role,
                companyName: state.companyName,
                successMessageFld: state.successMessageFld
            };
        case constants.CHANGE_REGISTER_PASSWORD:
            return {
                username:state.username,
                password:action.password,
                password2:state.password2,
                role: state.role,
                companyName: state.companyName,
                successMessageFld: state.successMessageFld
            };
        case constants.CHANGE_REGISTER_PASSWORD2:
            return {
                username:state.username,
                password:state.password,
                password2:action.password2,
                role: state.role,
                companyName: state.companyName,
                successMessageFld: state.successMessageFld
            };
        case constants.CHANGE_REGISTER_ROLE:
            return {
                username:state.username,
                password:state.password,
                password2:state.password2,
                role: action.role,
                companyName: state.companyName,
                successMessageFld: state.successMessageFld
            };
        case constants.CHANGE_REGISTER_COMPANY_NAME:
            return {
                username:state.username,
                password:state.password,
                password2:state.password2,
                role: state.role,
                companyName: action.companyName,
                successMessageFld: state.successMessageFld
            };
        case constants.RESET_REGISTER_CREDENTIALS:
            return {
                username:'',
                password:'',
                password2:'',
                role:'Employer',
                companyName:'',
                successMessageFld: 'Registration Successful!'
            };
        default :
            return state
    }
};

export default RegisterReducer;