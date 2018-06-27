import * as constants from '../constants'

const FollowReducer = (state = {followers:'', following:''}, action) => {

    switch (action.type) {
        case constants.SET_FOLLOWERS:
            return {
                followers: action.followers,
                following: state.following
            };
        case constants.SET_FOLLOWING:
            return {
                followers: state.followers,
                following: action.following
            };

        case constants.RESET_FOLLOWLIST:
            return {
                followers: '',
                following: ''
            };
        default :
            return state;
    }
};

export default FollowReducer;