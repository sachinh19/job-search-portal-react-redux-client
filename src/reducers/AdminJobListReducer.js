import * as constants from '../constants'

const AdminJobListReducer = (state = {jobs:[]}, action) => {

    switch (action.type) {
        case constants.SHOW_JOBLIST:
            return{
                jobs:action.jobs,
            };
        default :
            return state;
    }
};

export default AdminJobListReducer;