import * as constants from '../constants'

const JobReducer = (state = {job:''}, action) => {
    switch (action.type) {
        case constants.SET_JOB_DETAILS:
            return{
                job:action.job
            }
        default :
            return state;
    }
};

export default JobReducer;