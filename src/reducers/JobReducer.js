import * as constants from '../constants'

const JobReducer = (state = {job: {}, hasApplied: false, post: ''}, action) => {
    switch (action.type) {
        case constants.SET_JOB_DETAILS:
            return {
                job: action.job,
                hasApplied: state.hasApplied,
                post: state.post
            }
        case constants.SET_JOB_APPLY_STATUS:
            return {
                job: state.job,
                hasApplied: action.status,
                post: state.post
            }
        case constants.SET_POST:
            return {
                job: state.job,
                hasApplied: state.hasApplied,
                post: action.post
            }
        case constants.RESET_POST:
            return {
                job: state.job,
                hasApplied: state.hasApplied,
                post: ''
            }
        default :
            return state;
    }
};

export default JobReducer;