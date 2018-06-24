import * as constants from '../constants'
import history from '../History'

export const doLogin = (dispatch, username, password) => {

    fetch('http://localhost:8080/api/login', {
        method: 'post',
        credentials:'include',
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
            dispatch({
                type: constants.ERROR,
                message: "Invalid Credentials"
            })
        } else {
            localStorage.setItem('username', user.username);
            localStorage.setItem('userRole', user.role);
            dispatch({type: constants.RESET_LOGIN_CREDENTIALS, user: user});
            history.push('/');
        }
    })
};

export const doRegister = (dispatch, username, password, password2, role, companyName) => {

    fetch('http://localhost:8080/api/person/username/' + username,{
        credentials: 'include'
    })
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                return null;
            }
        }).then(user => {
        if (user != null) {
            dispatch({type: constants.ERROR, message: 'This username is already taken!'});
            return true;
        } else {
            return false;
        }
    }).then(userDup => {
        if (!userDup && role === 'JobSeeker') {
            fetch('http://localhost:8080/api/register/jobseeker', {
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
                    dispatch({
                        type: constants.ERROR,
                        message: "Invalid Credentials"
                    })
                } else {
                    localStorage.setItem('username', user.username);
                    localStorage.setItem('userRole', user.role);
                    dispatch({type: constants.RESET_REGISTER_CREDENTIALS, user: user});
                    history.push('/');
                }
            })
        } else if (!userDup && role === 'Employer') {
            fetch('http://localhost:8080/api/register/employer', {
                method: 'post',
                body: JSON.stringify({
                    'username': username,
                    'password': password,
                    'companyName': companyName
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
                    dispatch({
                        type: constants.ERROR,
                        message: "Invalid Credentials"
                    })
                } else {
                    localStorage.setItem('username', user.username);
                    localStorage.setItem('userRole', user.role);
                    dispatch({type: constants.RESET_REGISTER_CREDENTIALS, user: user});
                    history.push('/');
                }
            })
        }
    })


};

export const changeUsername = (dispatch, username) => (
    dispatch({
        type: constants.CHANGE_LOGIN_USERNAME,
        username: username
    })
)

export const changePassword = (dispatch, password) => (
    dispatch({
        type: constants.CHANGE_LOGIN_PASSWORD,
        password: password
    })
)

export const changeRegisterUsername = (dispatch, username) => (
    dispatch({
        type: constants.CHANGE_REGISTER_USERNAME,
        username: username
    })
)

export const changeRegisterPassword = (dispatch, password) => (
    dispatch({
        type: constants.CHANGE_REGISTER_PASSWORD,
        password: password
    })
)

export const changeRegisterPassword2 = (dispatch, password2) => (
    dispatch({
        type: constants.CHANGE_REGISTER_PASSWORD2,
        password2: password2
    })
)

export const changeRegisterRole = (dispatch, role) => {
    dispatch({
        type: constants.CHANGE_REGISTER_ROLE,
        role: role
    })
}

export const changeCompanyName = (dispatch, companyName) => {
    dispatch({
        type: constants.CHANGE_REGISTER_COMPANY_NAME,
        companyName: companyName
    })
}


export const logOut = (dispatch) => {

    fetch('http://localhost:8080/api/logout',{
        credentials:'include'
    }).then(() =>{
        localStorage.removeItem('username');
        localStorage.removeItem('userRole');
        dispatch({
            type: constants.RESET_LOGIN_CREDENTIALS,
        })
    })

}

export const findAllJobs = (dispatch) => {
    fetch('http://localhost:8080/api/job')
        .then((response) => {
            if (response.status === 200)
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

export const searchTextChanged = (dispatch, searchText) => {
    dispatch({
        type: constants.SEARCH_TEXT_CHANGED,
        searchText: searchText
    })
}

export const searchJobsByKeyword = (dispatch,searchText) =>  {
    if(searchText && searchText!=='' && searchText.includes(" "))
        searchText = searchText.split(" ").join("++")
    fetch(('http://localhost:8080/api/searchJob/' + searchText))
        .then((response) => {
            console.log(response)
            if (response.status === 200)
                return response.json();
            else
                return null;
        })
        .then(jobs => {
            dispatch({
                type: constants.SEARCHED_JOBS_CHANGED,
                jobs: jobs
            })
        })
}

export const getNewJobs = (dispatch) => {

    fetch('http://localhost:8080/api/getjobs',{
        credentials:'include'
    })
        .then((response) => {
            if (response.status === 200)
                return response.json();
            else
                return null;
        }).then(jobs => {
        dispatch({
            type: constants.SHOW_JOBLIST,
            jobs: jobs
        })
    })
}

export const getNewCompanies = (dispatch) => {
    fetch('http://localhost:8080/api/getcompanies',{
        credentials:'include'
    })
        .then((response) => {
            if (response.status === 200)
                return response.json();
            else
                return null;
        }).then(companies => {
        dispatch({
            type: constants.SHOW_COMPANYLIST,
            companies: companies
        })
    })
}

export const updateJobList = (dispatch) => {
    fetch('http://localhost:8080/api/job')
        .then((response) => {
            if (response.status === 200)
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

export const deleteJob = (dispatch, jobId) => {
    var choice = window.confirm("Do you want to delete this job?")
    if (choice === true) {
        fetch(('http://localhost:8080/api/job/JID').replace('JID', jobId), {
            method: 'delete',
            credentials:'include'
        }).then(dispatch({
            type: constants.REMOVE_JOB,
            jobId: jobId
        }))
            .then(dispatch({
                type: constants.SUCCESS,
                message: "Job Deleted Successfully"
            }))
    }
}

export const updateUserList = (dispatch) => {
    fetch('http://localhost:8080/api/person',{
        credentials:'include'
    })
        .then((response) => {
            if (response.status === 200)
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

export const deletePerson = (dispatch, userId) => {
    var choice = window.confirm("Do you want to delete this user?")
    if (choice === true) {
        fetch(('http://localhost:8080/api/person/PID').replace('PID', userId), {
            method: 'delete',
            credentials:'include'
        }).then(dispatch({
            type: constants.REMOVE_USER,
            userId: userId
        }))
            .then(dispatch({
                type: constants.SUCCESS,
                message: "User Deleted Successfully"
            }))
    }
}


export const updateCompanyList = (dispatch) => {
    fetch('http://localhost:8080/api/company',{
        credentials:'include'
    }).then((response) => {
        if (response.status === 200)
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

export const deleteCompany = (dispatch, companyId) => {
    const choice = window.confirm("Do you want to delete this company?");
    if (choice === true) {
        fetch(('http://localhost:8080/api/company/CID').replace('CID', companyId), {
            method: 'delete',
            credentials:'include'
        }).then(dispatch({
            type: constants.REMOVE_COMPANY,
            companyId: companyId
        }))
            .then(dispatch({
                type: constants.SUCCESS,
                message: "User Deleted Successfully"
            }))
    }
}


export const getJobDetails = (dispatch, jobId) => {
    fetch(('http://localhost:8080/api/job/JID').replace('JID', jobId),{
        credentials:'include'
    })
        .then((response) => {
            if (response.status === 200)
                return response.json();
            else
                return null;
        }).then(job =>
        dispatch({
            type: constants.SET_JOB_DETAILS,
            job: job,

        })
    )
}

export const getQueries = (dispatch, jobId) => {
    fetch(('http://localhost:8080/api/job/JID/query').replace('JID', jobId),{
        credentials:'include'
    })
        .then((response) => {
            if (response.status === 200)
                return response.json();
            else
                return null;
        }).then(queries =>
        dispatch({
            type: constants.SET_QUERIES,
            queries: queries,

        })
    )

}

export const changeQueryStatus = (dispatch, queryId, newStatus, jobId) => {
    fetch(('http://localhost:8080/api/query/QID').replace('QID', queryId), {
        method: 'put',
        credentials:'include',
        body: JSON.stringify({
            'status': newStatus
        }),
        headers: {
            'content-type': 'application/json'
        }
    }).then((response) => {
        if (response.status === 200)
            return response.json();
        else
            return null;
    }).then((query) => {
        dispatch({
            type: constants.UPDATE_QUERIES,
            queryId: queryId,
            query: query
        })
    })
}

export const getCompanyDetails = (dispatch, companyId) => {
    fetch(('http://localhost:8080/api/company/CID').replace('CID', companyId),{
        credentials:'include'
    }).then((response) => {
        if (response.status === 200)
            return response.json();
        else
            return null;
    }).then((company) => {
        dispatch({
            type: constants.SET_COMPANY_DETAILS,
            company: company
        })
    })
}

export const getCompanyEmployees = (dispatch, companyId) => {
    fetch(('http://localhost:8080/api/company/CID/employees').replace('CID', companyId),{
        credentials:'include'
    }).then((response) => {
        if (response.status === 200)
            return response.json();
        else
            return null;
    }).then((employees) => {
        dispatch({
            type: constants.SET_COMPANY_EMPLOYEES_DETAILS,
            employees: employees
        })
    })
}

export const getCompanyJobs = (dispatch, companyId) => {
    fetch(('http://localhost:8080/api/company/CID/jobs').replace('CID', companyId),{
        credentials:'include'
    }).then((response) => {
        if (response.status === 200)
            return response.json();
        else
            return null;
    }).then((jobs) => {
        dispatch({
            type: constants.SET_COMPANY_JOB_DETAILS,
            jobs: jobs
        })
    })
}

export const addApplicant = (dispatch, jobId) => {
    if (localStorage.getItem("username")) {
        fetch(('http://localhost:8080/api/job/JID/addapplicant').replace('JID', jobId),{
            method:'put',
            credentials:'include'
        }).then((response) => {
            if (response.status === 200)
                return response.json();
            else
                return null;
        }).then(job => {
            if (job != null) {
            dispatch({
                type: constants.SET_JOB_DETAILS,
                job : job
            })
            } else {alert("its null")}
        })
    } else {
        history.push('/login')
    }
}




