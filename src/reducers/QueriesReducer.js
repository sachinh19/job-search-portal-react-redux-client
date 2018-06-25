import * as constants from '../constants'

const QueriesReducer = (state = {queries: []}, action) => {
    switch (action.type) {
        case constants.SET_QUERIES:
            return {
                queries: action.queries
            };

        case constants.UPDATE_QUERIES:
            return {
                queries: state.queries.map(query => {
                    if (query.id === action.queryId) {
                        return Object.assign(query, action.query);
                    } else return query
                })
            };
        case constants.ADD_QUERY:
            return {
                queries: [...state.queries, action.query]
            };

        case constants.REMOVE_QUERY:
            return {
                queries: state.queries.filter(query => {
                    return query.id !== action.queryId;
                })
            };

        case constants.SHOW_QUERY_EDIT_MODE:
            return {
                queries: state.queries.map(query => {
                    if (query.id === action.queryId) {
                        query.isPreview = false;
                        return Object.assign(query, action.query);
                    }  else return query
                })
            };
        default :
            return state;
    }
};

export default QueriesReducer;