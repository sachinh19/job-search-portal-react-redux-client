import * as constants from '../constants'

const QueriesReducer = (state = {queries:[]}, action) => {
    switch (action.type) {
        case constants.SET_QUERIES:
            return{
                queries:action.queries
            }
        default :
            return state;
    }
};

export default QueriesReducer;