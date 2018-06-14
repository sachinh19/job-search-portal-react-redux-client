import * as constants from '../constants'

const UserReducer = (state = {userId: 0, username: '', role: ''}, action) => {

    switch (action.type) {

        case constants.USER_LOGIN:
            return {
                userId: action.user.id,
                username: action.user.username,
                role: 'ADMIN'
            }

        case constants.USER_LOGOUT:
            return {
                userId: '',
                username: '',
                role: ''
            }

        default :
            return state
    }
};

export default UserReducer;