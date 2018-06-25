import * as constants from '../constants'

const AdminUserListReducer = (state = {users:[], createFlag:false}, action) => {

    switch (action.type) {
        case constants.SHOW_USERLIST:
            return{
                users:action.users,
                createFlag: state.createFlag
            };
        case constants.REMOVE_USER:
            return{
                users:state.users.filter(user=>user.id !== action.userId),
                createFlag: state.createFlag
            };
        case constants.SET_CREATE_USER_FLAG:
            return{
                users: state.users,
                createFlag: true
            };
            case constants.RESET_CREATE_USER_FLAG:
            return{
                users: state.users,
                createFlag: false
            };
        case constants.ADD_NEW_USER:
            return{
                users:[...state.users, action.user],
                createFlag: false
            }
        default :
            return state;
    }
};

export default AdminUserListReducer;