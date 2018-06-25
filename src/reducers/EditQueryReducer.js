import * as constants from '../constants'
import QueriesReducer from "./QueriesReducer";

const EditQueryReducer = (state = {id:'',updatedPost: ''}, action) => {
    switch (action.type) {
        case constants.SET_QUERY_VALUES:
            return {
                id: action.queryId,
                updatedPost: action.post
            };
        case constants.UPDATE_QUERIES_VALUE:
            return{
                id: state.id,
                updatedPost: action.post
            }
        case constants.RESET_QUERY_VALUES:
            return{
                id:'',
                updatedPost:''
            }
        default :
            return state;
    }
};

export default EditQueryReducer;