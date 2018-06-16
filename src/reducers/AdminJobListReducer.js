import * as constants from '../constants'

const AdminJobListReducer = (state = {jobs:[]}, action) => {

    switch (action.type) {
        case constants.SHOW_JOBLIST:
            return{
                jobs:action.jobs,
            };
        case constants.REMOVE_JOB:
            return{
                jobs:state.jobs.filter(job=>job.id !== action.jobId),
            };
        default :
            return state;
    }
};

export default AdminJobListReducer;