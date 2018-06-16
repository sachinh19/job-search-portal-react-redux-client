import * as constants from '../constants'
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

    localStorage.removeItem('username');
    localStorage.removeItem('id');

    dispatch({
        type: constants.USER_LOGOUT,
    })

    dispatch({
        type: constants.RESET_LOGIN_DETAILS,
    })
}

export const findAllJobs = (dispatch) => {
    fetch('http://localhost:8080/api/job')
        .then((response) => {
            var content = response.headers.get("content-type");
            if (content != null && content.startsWith('application/json'))
                return response.json();
            else
                return null;
        })
        .then(jobs => {
            dispatch({
                type: constants.JOBS_CHANGED,
                jobs: jobs
            })
        })
}

export const getNewJobs = (dispatch) => {
    fetch('http://localhost:8080/api/getjobs')
}

export const updateJobList = (dispatch) => {
    fetch('http://localhost:8080/api/job')
        .then((response) => {
            var content = response.headers.get("content-type");
            if (content != null && content.startsWith('application/json'))
                return response.json();
            else
                return null;
        })
        .then(jobs => {
            dispatch({
                type: constants.SHOW_JOBLIST,
                jobs: jobs
            })
        })

}

export const deleteJob =(dispatch,jobId) => {
    var choice = window.confirm("Do you want to delete this job?")
    if(choice == true){
    fetch(('http://localhost:8080/api/job/JID').replace('JID',jobId),{
     method:'delete'
    }).then(dispatch({
        type: constants.REMOVE_JOB,
        jobId: jobId
    }))
        .then(dispatch({
        type: constants.SUCCESS,
        message:"Job Deleted Successfully"}))
    }
}

export const updateUserList = (dispatch) => {
    fetch('http://localhost:8080/api/person')
        .then((response) => {
            var content = response.headers.get("content-type");
            if (content != null && content.startsWith('application/json'))
                return response.json();
            else
                return null;
        })
        .then(users => {
            dispatch({
                type: constants.SHOW_USERLIST,
                users: users
            })
        })

}

export const deleteUser =(dispatch,userId) => {
    var choice = window.confirm("Do you want to delete this user?")
    if(choice == true){
        fetch(('http://localhost:8080/api/person/PID').replace('PID',userId),{
            method:'delete'
        }).then(dispatch({
            type: constants.REMOVE_USER,
            userId: userId
        }))
            .then(dispatch({
                type: constants.SUCCESS,
                message:"User Deleted Successfully"}))
    }
}



export const updateCompanyList = (dispatch) => {
    fetch('http://localhost:8080/api/company')
        .then((response) => {
            var content = response.headers.get("content-type");
            if (content != null && content.startsWith('application/json'))
                return response.json();
            else
                return null;
        })
        .then(companies => {
            dispatch({
                type: constants.SHOW_COMPANYLIST,
                companies: companies
            })
        })

}

export const deleteCompany =(dispatch,companyId) => {
    var choice = window.confirm("Do you want to delete this company?")
    if(choice == true){
        fetch(('http://localhost:8080/api/company/CID').replace('CID',companyId),{
            method:'delete'
        }).then(dispatch({
            type: constants.REMOVE_COMPANY,
            companyId: companyId
        }))
            .then(dispatch({
                type: constants.SUCCESS,
                message:"User Deleted Successfully"}))
    }
}