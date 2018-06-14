import * as constants from '../constants/constant'
import history from '../History'

export const doLogin = (dispatch, username, password) => {

    fetch('http://localhost:8080/api/login', {
        method: 'post',
        body: JSON.stringify({
            'username': username,
            'password': password
        }),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => {

        if (response.status === 200) {
            return response.json()
        } else {
            return null;
        }
    }).then(user => {

        if (user === null) {
            dispatch({type: constants.ERROR, message: "Invalid Credentials"})
        } else {
            localStorage.setItem('username', user.username);
            localStorage.setItem('id', user.id);
            dispatch({type: constants.USER_LOGIN, user: user});
            history.push('/');
        }
    })
};

export const changeUsername = (dispatch, username) => (
    dispatch({
        type: constants.LOGIN_USERNAME,
        username: username
    })
)

export const changePassword = (dispatch, password) => (
    dispatch({
        type: constants.LOGIN_PASSWORD,
        password: password
    })
)


export const logOut = (dispatch) => {

    // alert('logout 123')
    localStorage.removeItem('username');
    localStorage.removeItem('id');

    dispatch({
        type: constants.USER_LOGOUT,
    })

    dispatch({
        type: constants.RESET_LOGIN_DETAILS,
    })
}