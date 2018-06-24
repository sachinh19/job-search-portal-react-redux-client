import * as constants from '../constants'

const JobsReducer = (state = {jobs:[],searchText:''}, action) => {
    switch (action.type) {
        case constants.JOBS_CHANGED:
            return {
                searchText:state.searchText,
                jobs:action.jobs
            }
        case constants.SEARCH_TEXT_CHANGED:
            return {
                searchText:action.searchText,
                jobs:state.jobs
            }
        case constants.SEARCHED_JOBS_CHANGED:
            return {
                searchText: state.searchText,
                jobs:action.jobs
            }
        default :
            return state;
    }
};

export default JobsReducer;