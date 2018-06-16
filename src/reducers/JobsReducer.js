import * as constants from '../constants'

const JobsReducer = (state = {jobs:[]}, action) => {
    switch (action.type) {
        case constants.JOBS_CHANGED:
            let newState = {
                jobs:action.jobs
            }
            console.log(newState.jobs)
            return newState
        default :
            return state;
    }
};

export default JobsReducer;