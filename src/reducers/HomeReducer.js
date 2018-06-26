import * as constants from '../constants'

const HomeReducer = (state = {topTenJobs:[], topTenUsers:[]}, action) => {
    switch (action.type) {
        case constants.TOP_TEN_JOBS:
            return {
                topTenJobs: action.topTenJobs,
                topTenUsers: state.topTenUsers
            }
            break;
        case constants.TOP_TEN_USERS:
            return {
                topTenJobs: state.topTenJobs,
                topTenUsers: action.topTenUsers
            }
            break;
        default:
            return state;
    }
};

export default HomeReducer;