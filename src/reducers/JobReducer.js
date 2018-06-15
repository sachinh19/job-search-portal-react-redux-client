import * as constants from '../constants'

const JobReducer = (state = {jobs:[]}, action) => {

    console.log("job reducer...")
    // console.log(action.jobs)
    console.log(state.jobs)
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

export default JobReducer;