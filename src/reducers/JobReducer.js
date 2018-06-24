import * as constants from '../constants'

const JobReducer = (state = {job:{}, hasApplied:false}, action) => {
    switch (action.type) {
        case constants.SET_JOB_DETAILS:
            return{
                job:action.job,
                hasApplied: state.isApplied
            }
        case constants.SET_JOB_APPLY_STATUS:
            return{
                job: state.job,
                hasApplied: action.status
            }
        default :
            return state;
    }
};

export default JobReducer;