import * as constants from '../constants'

const JobReducer = (state = {jobs:[]}, action) => {

    console.log("job reducer...")
    console.log(action.jobs)
    switch (action.type) {
        case constants.JOBS_CHANGED:
            console.log("inside jobs changed")
            return {
                jobs:action.jobs
            }
            break;
        default :
            return state
    }
};

export default JobReducer;