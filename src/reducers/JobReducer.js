import * as constants from '../constants'

const JobReducer = (state = {job: {}, hasApplied: false, post: '', authenticatedUser: false}, action) => {
    switch (action.type) {
        case constants.SET_JOB_DETAILS:
            return {
                job: action.job,
                hasApplied: state.hasApplied,
                post: state.post,
                authenticatedUser: state.authenticatedUser
            }
        case constants.SET_JOB_APPLY_STATUS:
            return {
                job: state.job,
                hasApplied: action.status,
                post: state.post,
                authenticatedUser: state.authenticatedUser
            }
        case constants.SET_POST:
            return {
                job: state.job,
                hasApplied: state.hasApplied,
                post: action.post,
                authenticatedUser: state.authenticatedUser
            }
        case constants.RESET_POST:
            return {
                job: state.job,
                hasApplied: state.hasApplied,
                post: '',
                authenticatedUser: state.authenticatedUser
            }
        case constants.SET_AUTHENTICATION_FLAG:
            return {
                job: state.job,
                hasApplied: state.hasApplied,
                post: state.post,
                authenticatedUser: true
            }
        default :
            return state;
    }
};

export default JobReducer;