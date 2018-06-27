import * as constants from '../constants'

const LocalStorageReducer = (state = {localUsername:null,localRole:null}, action) => {

    switch (action.type) {
        case constants.SET:
            return {
                localUsername: action.localUsername,
                localRole: action.localRole
            };
        case constants.RESET:
            return {
                localUsername: null,
                localRole: null
            }
        default :
            return state;
    }
};

export default LocalStorageReducer;