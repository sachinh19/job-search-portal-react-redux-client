import * as constants from '../constants'

const AdminUserListReducer = (state = {users:[]}, action) => {

    switch (action.type) {
        case constants.SHOW_USERLIST:
            return{
                users:action.users,
            };
        case constants.REMOVE_USER:
            return{
                users:state.users.filter(user=>user.id !== action.userId),
            };
        default :
            return state;
    }
};

export default AdminUserListReducer;