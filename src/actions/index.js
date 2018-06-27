import * as constants from '../constants'
import history from '../History'

export const doLogin = (dispatch, username, password) => {

    fetch('https://team-2070-backend.herokuapp.com/api/login', {
        method: 'post',
        credentials: 'include',
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
            localStorage.setItem('userRole', user.roleType);
            dispatch({type: constants.RESET_LOGIN_CREDENTIALS, user: user});
            dispatch({
                type: constants.SET,
                localUsername: user.username,
                localRole: user.roleType
            })
            history.push('/');
        }
    })
};

export const doRegister = (dispatch, username, password, password2, role, companyName) => {

    fetch('https://team-2070-backend.herokuapp.com/api/person/username/' + username, {
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
            fetch('https://team-2070-backend.herokuapp.com/api/register/jobseeker', {
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
                    doLogin(dispatch, user.username, user.password)
                    dispatch({
                        type: constants.RESET_REGISTER_CREDENTIALS,
                        user: user,
                        successMessageFld: 'Registration Successful!'
                    });
                }
            })
        } else if (!userDup && role === 'Employer') {
            fetch('https://team-2070-backend.herokuapp.com/api/register/employer', {
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
                    doLogin(dispatch, user.username, user.password)
                    dispatch({
                        type: constants.RESET_REGISTER_CREDENTIALS,
                        user: user,
                        successMessageFld: 'Registration Successful!'
                    });
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

    fetch('https://team-2070-backend.herokuapp.com/api/logout', {
        credentials: 'include'
    }).then(() => {
        localStorage.removeItem('username');
        localStorage.removeItem('userRole');
        dispatch({
            type: constants.RESET_LOGIN_CREDENTIALS
        })
        dispatch({
            type: constants.RESET
        })
    })

}

export const findAllJobs = (dispatch) => {
    fetch('https://team-2070-backend.herokuapp.com/api/job')
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

export const searchJobsByKeyword = (dispatch, searchText) => {
    if (searchText && searchText !== '' && searchText.includes(" "))
        searchText = searchText.split(" ").join("++")
    if (searchText === '')
        findAllJobs(dispatch);
    else {
        fetch(('https://team-2070-backend.herokuapp.com/api/searchJob/' + searchText))
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
                });
            })
    }
}

export const getNewJobs = (dispatch) => {

    fetch('https://team-2070-backend.herokuapp.com/api/getjobs', {
        credentials: 'include'
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
    fetch('https://team-2070-backend.herokuapp.com/api/getcompanies', {
        credentials: 'include'
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

export const getJobsForUser = (dispatch, username) => {
    if (username) {
        fetch('https://team-2070-backend.herokuapp.com/api/person/job/' + username, {
            credentials: 'include'
        }).then((response) => {
            if (response.status === 200)
                return response.json();
            else
                return null;
        })
            .then(jobs => {
                dispatch({
                    type: constants.GET_JOBS_FOR_USER,
                    jobs: jobs
                })
            })
    }
}

export const getPersonJobs = (dispatch, username) => {
    if (username) {
        if (localStorage.getItem("userRole") === 'Employer') {
            fetch('https://team-2070-backend.herokuapp.com/api/employer/job/' + username, {
                credentials: 'include'
            }).then((response) => {
                if (response.status === 200)
                    return response.json();
                else
                    return null;
            }).then(personJobs => {
                dispatch({
                    type: constants.GET_JOBS_FOR_PERSON,
                    personJobs: personJobs
                })
            })
        } else {
            fetch('https://team-2070-backend.herokuapp.com/api/person/company/job/' + username, {
                credentials: 'include'
            }).then((response) => {
                if (response.status === 200)
                    return response.json();
                else
                    return null;
            }).then(personJobs => {
                dispatch({
                    type: constants.GET_JOBS_FOR_PERSON,
                    personJobs: personJobs
                })
            })
        }
    }
}

export const updateJobList = (dispatch) => {
    fetch('https://team-2070-backend.herokuapp.com/api/job')
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
        fetch(('https://team-2070-backend.herokuapp.com/api/job/JID').replace('JID', jobId), {
            method: 'delete',
            credentials: 'include'
        }).then(dispatch({
            type: constants.REMOVE_JOB,
            jobId: jobId
        })).then(dispatch({
                type: constants.SUCCESS,
                message: "Job Deleted Successfully"
            }))
    }
}

export const updateUserList = (dispatch) => {
    fetch('https://team-2070-backend.herokuapp.com/api/person', {
        credentials: 'include'
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
        fetch(('https://team-2070-backend.herokuapp.com/api/person/PID').replace('PID', userId), {
            method: 'delete',
            credentials: 'include'
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
    fetch('https://team-2070-backend.herokuapp.com/api/company', {
        credentials: 'include'
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
        fetch(('https://team-2070-backend.herokuapp.com/api/company/CID').replace('CID', companyId), {
            method: 'delete',
            credentials: 'include'
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
    fetch(('https://team-2070-backend.herokuapp.com/api/job/JID').replace('JID', jobId), {
        credentials: 'include'
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
    if (jobId) {
        fetch(('https://team-2070-backend.herokuapp.com/api/job/JID/query').replace('JID', jobId), {
            credentials: 'include'
        })
            .then((response) => {
                if (response.status === 200)
                    return response.json();
                else
                    return null;
            }).then(queries => {
                queries = queries.map(query => {
                    query['isPreview'] = true;
                    query['isAuthenticated'] = false;
                    if (localStorage.getItem("userRole") !== undefined &&
                        localStorage.getItem("username") !== undefined) {
                        if (localStorage.getItem("userRole") === "Admin" || localStorage.getItem("userRole") === "Moderator") {
                            query['isAuthenticated'] = true;
                        } else if (query.postedBy.username === localStorage.getItem("username")) {
                            query['isAuthenticated'] = true;
                        }
                    }
                    return query;
                })
                return dispatch({
                    type: constants.SET_QUERIES,
                    queries: queries,

                })
            }
        )
    }

}

export const changeQueryStatus = (dispatch, queryId, newStatus, jobId) => {
    fetch(('https://team-2070-backend.herokuapp.com/api/query/QID').replace('QID', queryId), {
        method: 'put',
        credentials: 'include',
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
    if (companyId) {
        fetch(('https://team-2070-backend.herokuapp.com/api/company/CID').replace('CID', companyId), {
            credentials: 'include'
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
}

export const getCompanyEmployees = (dispatch, companyId) => {
    fetch(('https://team-2070-backend.herokuapp.com/api/company/CID/employees').replace('CID', companyId), {
        credentials: 'include'
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
    fetch(('https://team-2070-backend.herokuapp.com/api/company/CID/jobs').replace('CID', companyId), {
        credentials: 'include'
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
        fetch(('https://team-2070-backend.herokuapp.com/api/job/JID/addapplicant').replace('JID', jobId), {
            method: 'put',
            credentials: 'include'
        }).then((response) => {
            if (response.status === 200)
                return response.json();
            else
                return null;
        }).then(job => {
            if (job != null) {

                dispatch({
                    type: constants.SUCCESS,
                    message: "Application Submitted"
                })
                dispatch({
                    type: constants.SET_JOB_DETAILS,
                    job: job
                })
            } else {
                dispatch({
                    type: constants.ERROR,
                    message: "Application Not submitted"
                })
            }
        })
    } else {
        history.push('/login')
    }
};

export const changeProfileUsername = (dispatch, username) => {
    dispatch({
        type: constants.CHANGE_PROFILE_USERNAME,
        username: username
    })
}

export const changeProfilePassword = (dispatch, password) => {
    dispatch({
        type: constants.CHANGE_PROFILE_PASSWORD,
        password: password
    })
}

export const changeProfileFirstName = (dispatch, firstName) => {
    dispatch({
        type: constants.CHANGE_PROFILE_FIRST_NAME,
        firstName: firstName
    })
}

export const changeProfileLastName = (dispatch, lastName) => {
    dispatch({
        type: constants.CHANGE_PROFILE_LAST_NAME,
        lastName: lastName
    })
}

export const changeProfileEmail = (dispatch, email) => {
    dispatch({
        type: constants.CHANGE_PROFILE_EMAIL,
        email: email
    })
}

export const changeProfileAboutMe = (dispatch, aboutMe) => {
    dispatch({
        type: constants.CHANGE_PROFILE_ABOUT_ME,
        aboutMe: aboutMe
    })
}

export const changeProfileExpDescription = (dispatch, expDescription) => {
    dispatch({
        type: constants.CHANGE_PROFILE_EXP_DESCRIPTION,
        expDescription: expDescription
    })
}

export const changeProfileRole = (dispatch, role) => {
    dispatch({
        type: constants.CHANGE_PROFILE_ROLE,
        role: role
    })
}

export const changeProfileCompanyName = (dispatch, companyName) => {
    dispatch({
        type: constants.CHANGE_PROFILE_COMPANY_NAME,
        companyName: companyName
    })
}

export const changeProfilePosition = (dispatch, position) => {
    dispatch({
        type: constants.CHANGE_PROFILE_POSITION,
        position: position
    })
}

export const changeProfileTenure = (dispatch, tenure) => {
    dispatch({
        type: constants.CHANGE_PROFILE_TENURE,
        tenure: tenure
    })
}

export const changeProfileInterestedPosition = (dispatch, interestedPosition) => {
    dispatch({
        type: constants.CHANGE_PROFILE_INTERESTED_POSITION,
        interestedPosition: interestedPosition
    })
}

export const changeProfileTotalExperience = (dispatch, totalExperience) => {
    dispatch({
        type: constants.CHANGE_PROFILE_TOTAL_EXPERIENCE,
        totalExperience: totalExperience
    })
}

export const updateProfile = (dispatch, username, password, firstName, lastName, email, aboutMe,
                              expDescription, role, companyName, position, tenure, interestedPosition, totalExperience) => {

    if (localStorage.getItem("userRole") === "Admin" || localStorage.getItem("username") === username) {
        if (role === 'JobSeeker') {
            fetch(('https://team-2070-backend.herokuapp.com/api/jobseeker/USERNAME').replace('USERNAME', username), {
                method: 'PUT',
                credentials: 'include',
                body: JSON.stringify({
                    'username': username,
                    'password': password,
                    'firstName': firstName,
                    'lastName': lastName,
                    'email': email,
                    'aboutMe': aboutMe,
                    'expDescription': expDescription,
                    'interestedPosition': interestedPosition,
                    'totalExperience': totalExperience
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
                if (user !== null) {
                    localStorage.setItem('username', user.username);
                    localStorage.setItem('userRole', user.roleType);
                    dispatch({type: constants.UPDATE_PROFILE, successMessageFld: 'Profile Update Successful!'});
                }
            })
        } else if (role === 'Employer') {
            fetch(('https://team-2070-backend.herokuapp.com/api/employer/USERNAME').replace('USERNAME', username), {
                method: 'PUT',
                credentials: 'include',
                body: JSON.stringify({
                    'username': username,
                    'password': password,
                    'firstName': firstName,
                    'lastName': lastName,
                    'email': email,
                    'aboutMe': aboutMe,
                    'expDescription': expDescription,
                    'companyName': companyName,
                    'position': position,
                    'tenure': tenure
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
                if (user !== null) {
                    localStorage.setItem('username', user.username);
                    localStorage.setItem('userRole', user.roleType);
                    dispatch({type: constants.UPDATE_PROFILE, successMessageFld: 'Profile Update Successful!'});
                }
            })
        } else if (role === 'Moderator') {
            fetch(('https://team-2070-backend.herokuapp.com/api/moderator/USERNAME').replace('USERNAME', username), {
                method: 'PUT',
                credentials: 'include',
                body: JSON.stringify({
                    'username': username,
                    'password': password,
                    'firstName': firstName,
                    'lastName': lastName,
                    'email': email,
                    'aboutMe': aboutMe,
                    'expDescription': expDescription
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
                if (user !== null) {
                    localStorage.setItem('username', user.username);
                    localStorage.setItem('userRole', user.roleType);
                    dispatch({type: constants.UPDATE_PROFILE, successMessageFld: 'Profile Update Successful!'});
                }
            })
        } else if (role === 'Admin') {
            fetch(('https://team-2070-backend.herokuapp.com/api/admin/USERNAME').replace('USERNAME', username), {
                method: 'PUT',
                credentials: 'include',
                body: JSON.stringify({
                    'username': username,
                    'password': password,
                    'firstName': firstName,
                    'lastName': lastName,
                    'email': email,
                    'aboutMe': aboutMe,
                    'expDescription': expDescription
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
                if (user !== null) {
                    localStorage.setItem('username', user.username);
                    localStorage.setItem('userRole', user.roleType);
                    dispatch({type: constants.UPDATE_PROFILE, successMessageFld: 'Profile Update Successful!'});
                }
            })
        }
    }
};

export const fetchUserProfile = (dispatch, username) => {
    var role;
    if (username && username !== '' && username !== null) {
        fetch('https://team-2070-backend.herokuapp.com/api/person/username/' + username, {
            credentials: 'include'
        })
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    return null;
                }
            }).then(user => {
            role = user.roleType;
        }).then(() => {
            switch (role) {
                case "JobSeeker":
                    fetch('https://team-2070-backend.herokuapp.com/api/jobseeker/username/' + username)
                        .then(response => {
                            if (response.status === 200) {
                                return response.json()
                            } else {
                                return null;
                            }
                        }).then(user => {
                        if (user !== null) {
                            dispatch({type: constants.FETCH_USER_PROFILE, user: user});
                        } else {
                            dispatch({
                                type: constants.ERROR,
                                message: "Unable to fetch user details"
                            })
                        }
                    })
                    break;
                case "Employer":
                    fetch('https://team-2070-backend.herokuapp.com/api/employer/username/' + username)
                        .then(response => {
                            if (response.status === 200) {
                                return response.json()
                            } else {
                                return null;
                            }
                        }).then(user => {
                        if (user !== null) {
                            dispatch({type: constants.FETCH_USER_PROFILE, user: user});
                        } else {
                            dispatch({
                                type: constants.ERROR,
                                message: "Unable to fetch user details"
                            })
                        }
                    })
                    break;
                case "Admin":
                    fetch('https://team-2070-backend.herokuapp.com/api/admin/username/' + username)
                        .then(response => {
                            if (response.status === 200) {
                                return response.json()
                            } else {
                                return null;
                            }
                        }).then(user => {
                        if (user !== null) {
                            dispatch({type: constants.FETCH_USER_PROFILE, user: user});
                        } else {
                            dispatch({
                                type: constants.ERROR,
                                message: "Unable to fetch user details"
                            })
                        }
                    })
                    break;
                case "Moderator":
                    fetch('https://team-2070-backend.herokuapp.com/api/moderator/username/' + username)
                        .then(response => {
                            if (response.status === 200) {
                                return response.json()
                            } else {
                                return null;
                            }
                        }).then(user => {
                        if (user !== null) {
                            dispatch({type: constants.FETCH_USER_PROFILE, user: user});
                        } else {
                            dispatch({
                                type: constants.ERROR,
                                message: "Unable to fetch user details"
                            })
                        }
                    })
                    break;
                case null:
                    break;
                default:
                    dispatch({
                        type: constants.ERROR,
                        message: "Invalid Role Type found in Local Storage - " + role
                    })

            }
        })
    }
}
export const getApplicationStatus = (dispatch, jobId) => {
    if (jobId) {
        fetch(('https://team-2070-backend.herokuapp.com/api/job/JID/status').replace('JID', jobId), {
            credentials: 'include'
        }).then(response => {
            if (response.status === 200) {
                return true
            } else {
                return false;
            }
        }).then(result => {
            dispatch({
                type: constants.SET_JOB_APPLY_STATUS,
                status: result
            })
        })
    }
}

export const createJob = (dispatch) => {
    let username = localStorage.getItem("username")
    if (username && username !== null && username !== '') {
        let role = localStorage.getItem("userRole")
        let url = "https://team-2070-backend.herokuapp.com/api/employer/username/" + username;
        let job = {
            'position': 'Default Position',
            'description': '<p><h5>New Job Description</h5></p>',
            'keywords': '',
            'jobType': {
                'name': 'Full-time'
            },
            'company': {
                'name': 'defaultCompany'
            }
        }
        if (role === "Employer") {
            fetch(url).then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    return null;
                }
            }).then(user => {
                let userCompany = user.companyName

                return fetch('https://team-2070-backend.herokuapp.com/api/job/userdefined', {
                    method: 'POST',
                    body: JSON.stringify({
                        'position': 'Default Position',
                        'description': '<p><h5>New Job Description</h5></p>',
                        'keywords': '',
                        'jobType': {
                            'name': 'Full-time'
                        },
                        'company': {
                            'name': userCompany
                        }
                    }),
                    headers: {
                        'content-type': 'application/json'
                    }
                })
            }).then(response => {
                if (response.status === 200) {
                    return response.json()
                } else {
                    return null;
                }
            }).then(job => {
                if (job !== null) {
                    localStorage.setItem("jobId", job.id);
                    dispatch({type: constants.CREATE_JOB, job: job})
                    history.push("/job")
                }
            });
        } else {
            fetch('https://team-2070-backend.herokuapp.com/api/job/userdefined', {
                method: 'POST',
                body: JSON.stringify(job),
                headers: {
                    'content-type': 'application/json'
                }
            }).then(response => {
                if (response.status === 200) {
                    return response.json()
                } else {
                    return null;
                }
            }).then(job => {
                if (job !== null) {
                    localStorage.setItem("jobId", job.id);
                    dispatch({type: constants.CREATE_JOB, job: job})
                    history.push("/job")
                }
            })
        }
    }
}

export const changePost = (dispatch, post) => {
    if (post) {
        dispatch({
            type: constants.SET_POST,
            post: post
        })
    }
}

export const submitPost = (dispatch, post, jobId) => {
    if (jobId) {
        if (localStorage.getItem("username")) {
            fetch(('https://team-2070-backend.herokuapp.com/api/job/JID/query').replace('JID', jobId), {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify({
                    'post': post
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
            }).then((query) => {
                query.isPreview = true;
                query.isAuthenticated = true;
                dispatch({
                    type: constants.ADD_QUERY,
                    query: query
                })
                dispatch({
                    type: constants.RESET_POST
                })
            })
        } else {
            history.push('/login')
        }

    }
}

export const saveJob = (dispatch, jobId, position, description, keywords, jobType) => {
    if (!jobId && localStorage.getItem("jobId")) {
        jobId = localStorage.getItem("jobId");
    }
    fetch('https://team-2070-backend.herokuapp.com/api/job/' + jobId, {
        method: 'PUT',
        body: JSON.stringify({
            'jobId': jobId,
            'position': position,
            'description': description,
            'keywords': keywords,
            'jobType': {
                'name': 'Full-time'
            }
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
    }).then(job => {
        if (job !== null) {
            dispatch({type: constants.SAVE_JOB, job: job, successMessageFld: 'Job Save Successful!'});
        }
    }).then(() => {
        history.push('/job/' + localStorage.getItem("jobId"));
        localStorage.removeItem("jobId");
    })
}

export const changeJobDescription = (dispatch, description) => {
    dispatch({
        type: constants.CHANGE_JOB_DESCRIPTION,
        description: description
    })
}
export const changeJobPosition = (dispatch, position) => {
    dispatch({
        type: constants.CHANGE_JOB_POSITION,
        position: position
    })
}
export const changeJobKeywords = (dispatch, keywords) => {
    dispatch({
        type: constants.CHANGE_JOB_KEYWORDS,
        keywords: keywords
    })
}
export const changeProfileJobType = (dispatch, jobType) => {
    dispatch({
        type: constants.CHANGE_JOB_TYPE,
        jobType: jobType
    })
}

export const fetchJobDetails = (dispatch, jobId) => {
    if (!jobId && localStorage.getItem("jobId")) {
        jobId = localStorage.getItem("jobId");
    }
    fetch('https://team-2070-backend.herokuapp.com/api/job/' + jobId, {
        credentials: 'include'
    }).then(response => {
        if (response.status === 200) {
            return response.json();
        } else {
            return null;
        }
    }).then(job => {
        if (job !== null) {
            dispatch({type: constants.FETCH_JOB_DETAILS, job: job});
        } else {
            dispatch({
                type: constants.ERROR,
                message: "Unable to fetch job details"
            })
        }
    })
}

export const deleteProfile = (dispatch, userId, role) => {
    var choice = window.confirm("Do you want to delete your profile?")
    if (choice === true) {
        fetch(('https://team-2070-backend.herokuapp.com/api/person/' + userId), {
            method: 'delete',
            credentials: 'include'
        }).then(
            dispatch({
                type: constants.DELETE_PROFILE,
                userId: userId
            })).then(() =>
            dispatch({
                type: constants.SUCCESS,
                message: "Profile Deleted Successfully"
            })
        ).then(() => logOut(dispatch))
    }
}


export const changeUpdatePost = (dispatch, updatedPost) => {
    dispatch({
        type: constants.UPDATE_QUERIES_VALUE,
        post: updatedPost
    })
}

export const updatePost = (dispatch, post, queryId) => {
    if (queryId) {
        fetch(('https://team-2070-backend.herokuapp.com/api/query/QID').replace('QID', queryId), {
            method: 'put',
            credentials: 'include',
            body: JSON.stringify({
                'post': post
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
            query.isPreview = true
            dispatch({
                type: constants.UPDATE_QUERIES,
                queryId: queryId,
                query: query
            })
            dispatch({
                type: constants.RESET_QUERY_VALUES
            })
            dispatch({
                type: constants.SUCCESS,
                message: "Query Updated Successfully"
            })
        })
    }
}

export const deleteQuery = (dispatch, queryId) => {
    if (queryId) {
        fetch(('https://team-2070-backend.herokuapp.com/api/query/QID').replace('QID', queryId), {
            method: 'delete',
            credentials: 'include'
        }).then(() => {
            dispatch({
                type: constants.REMOVE_QUERY,
                queryId: queryId
            })
        })
    }
}

export const updateQueryCall = (dispatch, queryId, post) => {
    if (queryId) {
        dispatch({
            type: constants.SHOW_QUERY_EDIT_MODE,
            queryId: queryId
        })
        dispatch({
            type: constants.SET_QUERY_VALUES,
            queryId: queryId,
            post: post
        })
    }
}

export const isAuthenticated = (dispatch, companyName) => {
    if (companyName) {
        fetch('https://team-2070-backend.herokuapp.com/api/person/currentuser', {
            credentials: 'include'
        }).then(response => {
            if (response.status === 200) {
                return response.json()
            } else {
                return null;
            }
        }).then(user => {
            if (user.companyName === companyName) {
                dispatch({
                    type: constants.SET_AUTHENTICATION_FLAG
                })
            }
        })
    }
};

export const createUser = (dispatch) => {
    if (localStorage.getItem("userRole") === "Admin") {
        dispatch({
            type: constants.SET_CREATE_USER_FLAG
        })
    }
};
export const resetCreateFlag = (dispatch) => {
    dispatch({
        type: constants.RESET_CREATE_USER_FLAG
    })
};

export const createNewUser = (dispatch, username, password, role, companyName) => {
    fetch('https://team-2070-backend.herokuapp.com/api/person/username/' + username, {
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
        if (!userDup) {
            switch (role) {
                case 'JobSeeker':
                    fetch('https://team-2070-backend.herokuapp.com/api/register/jobseeker', {
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
                        dispatch({
                            type: constants.ADD_NEW_USER,
                            user: user
                        });
                        dispatch({
                            type: constants.SUCCESS,
                            message: "User Successfully Created"
                        })
                    });
                    break;
                case 'Employer':
                    fetch('https://team-2070-backend.herokuapp.com/api/register/employer', {
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
                        dispatch({
                            type: constants.ADD_NEW_USER,
                            user: user
                        });
                        dispatch({
                            type: constants.SUCCESS,
                            message: "User Successfully Created"
                        })
                    });
                    break;
                case 'Moderator':
                    fetch('https://team-2070-backend.herokuapp.com/api/register/moderator', {
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
                        dispatch({
                            type: constants.ADD_NEW_USER,
                            user: user
                        });
                        dispatch({
                            type: constants.SUCCESS,
                            message: "User Successfully Created"
                        })
                    });
                    break;
                case 'Admin':
                    fetch('https://team-2070-backend.herokuapp.com/api/register/admin', {
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
                        dispatch({
                            type: constants.ADD_NEW_USER,
                            user: user
                        });
                        dispatch({
                            type: constants.SUCCESS,
                            message: "User Successfully Created"
                        })
                    });

            }
        }
    })
};

export const getTenMostRecentlyJoinedUsers = (dispatch) => {
    fetch("https://team-2070-backend.herokuapp.com/api/person")
        .then(response => {
            if (response.status === 200) {
                return response.json()
            } else {
                return null;
            }
        }).then(users => {
        let filteredUsers = [];
        if (users && users.length > 0) {
            users = users.filter(user => user.roleType === "JobSeeker")
            users.sort(compareDates);
            filteredUsers = users.slice(0, 10);
        }
        return filteredUsers;
    }).then(topTenUsers => {
        dispatch({type: constants.TOP_TEN_USERS, topTenUsers: topTenUsers})
    });
}

export const getTenMostAppliedJobs = (dispatch) => {
    fetch("https://team-2070-backend.herokuapp.com/api/job")
        .then(response => {
            if (response.status === 200) {
                return response.json()
            } else {
                return null;
            }
        }).then(jobs => {
        let filteredJobs = [];
        if (jobs && jobs.length > 0) {
            jobs.sort(compareApplicants)
            filteredJobs = jobs.slice(0, 10)
        }
        return filteredJobs;
    }).then(topTenJobs => {
        dispatch({type: constants.TOP_TEN_JOBS, topTenJobs: topTenJobs})
    });
}


export const editUser = (dispatch, username) => {
    history.push('/profile/' + username + '/update')
};


function compareDates(a, b) {
    let date_a = a.created.split(" ")[0];
    let date_b = b.created.split(" ")[0];

    if (date_a > date_b)
        return -1;
    if (date_a < date_b)
        return 1;
    return 0;
}

function compareApplicants(a, b) {

    if (a.totalApplications > b.totalApplications)
        return -1;
    if (a.totalApplications < b.totalApplications)
        return 1;
    return 0;
}

export const followUser = (dispatch, followUsername) => {
    if (localStorage.getItem("username")) {
        fetch(('https://team-2070-backend.herokuapp.com/api/follow'), {
            method: 'PUT',
            credentials: 'include',
            body: JSON.stringify({
                'username': followUsername
            }),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => {
            if (response.status === 200) {
                dispatch({
                    type: constants.SUCCESS,
                    message: "You started following " + followUsername
                });
                dispatch({
                    type: constants.SET_ISFOLLOWING,
                    status: true
                })
            } else {
                dispatch({
                    type: constants.ERROR,
                    message: "Sorry !!! Some error occurred"
                })
            }
        }).then(() => window.location.reload())
    } else {
        history.push("/login")
    }
};

export const unfollowUser = (dispatch, unfollowUsername) => {
    if (localStorage.getItem("username")) {
        fetch(('https://team-2070-backend.herokuapp.com/api/unfollow'), {
            method: 'PUT',
            credentials: 'include',
            body: JSON.stringify({
                'username': unfollowUsername
            }),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => {
            if (response.status === 200) {
                dispatch({
                    type: constants.SUCCESS,
                    message: "You unfollowed " + unfollowUsername
                });
                dispatch({
                    type: constants.SET_ISFOLLOWING,
                    status: false
                })
            } else {
                dispatch({
                    type: constants.ERROR,
                    message: "Sorry !!! Some error occurred"
                })
            }
        }).then(() => window.location.reload())
    } else {
        history.push("/login")
    }
};

export const isFollowing = (dispatch, username) => {
    fetch(('https://team-2070-backend.herokuapp.com/api/following'), {
        credentials: 'include'
    }).then(response => {
        if (response.status === 200) {
            return response.json();
        } else {
            return null;
        }
    }).then(followingList => {

        let followingStatus = false;

        if (followingList != null) {
            followingList.map(following => {
                if (following.username === username) {
                    followingStatus = true;
                }
            })
        }
        dispatch({
            type: constants.SET_ISFOLLOWING,
            status: followingStatus
        })
    })
};

export const findFollowers = (dispatch, username) => {
    if (username) {
        fetch('https://team-2070-backend.herokuapp.com/api/followers/'+username)
            .then(response => {
                if (response.status === 200) {
                    return response.json()
                } else {
                    return null;
                }
            }).then(users => {
                if (users) {
                    dispatch({
                        type: constants.SET_FOLLOWERS,
                        followers: users
                    })
                }
        })
    }
};

export const findFollowing = (dispatch, username) => {
    if (username) {
        fetch('https://team-2070-backend.herokuapp.com/api/following/'+username)
            .then(response => {
                if (response.status === 200) {
                    return response.json()
                } else {
                    return null;
                }
            }).then(users => {
            if (users) {
                dispatch({
                    type: constants.SET_FOLLOWING,
                    following: users
                })
            }
        })
    }
};

export const resetFollowList =(dispatch) => {
    dispatch({
        type: constants.RESET_FOLLOWLIST
    })
}