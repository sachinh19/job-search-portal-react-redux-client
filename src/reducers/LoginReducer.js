import * as constants from '../constants'

const LoginReducer = (state = {username:null, password: null}, action) => {

    switch (action.type) {

        case constants.LOGIN_USERNAME:
            return {
                username:action.username,
                password:state.password
            };

        case constants.LOGIN_PASSWORD:
            return {
                username:state.username,
                password:action.password
            };

        case constants.RESET_LOGIN_DETAILS:
            return {
                username:'',
                password:''
            };

        default :
            return state
    }
};

export default LoginReducer;