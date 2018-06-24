import * as constants from '../constants'

const QueriesReducer = (state = {queries: []}, action) => {
    switch (action.type) {
        case constants.SET_QUERIES:
            return {
                queries: action.queries
            }

        case constants.UPDATE_QUERIES:
            return {
                queries: state.queries.map(query => {
                    if (query.id === action.queryId) {
                        return action.query
                    } else return query
                })
            }
        default :
            return state;
    }
};

export default QueriesReducer;