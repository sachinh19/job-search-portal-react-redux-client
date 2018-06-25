import * as constants from '../constants'
import history from '../History'

export const doLogin = (dispatch, username, password) => {

    fetch('http://localhost:8080/api/login', {
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
            history.push('/');
        }
    })
};

export const doRegister = (dispatch, username, password, password2, role, companyName) => {

    fetch('http://localhost:8080/api/person/username/' + username, {
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
                    doLogin(dispatch, user.username, user.password)
                    dispatch({
                        type: constants.RESET_REGISTER_CREDENTIALS,
                        user: user,
                        successMessageFld: 'Registration Successful!'
                    });
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

    fetch('http://localhost:8080/api/logout', {
        credentials: 'include'
    }).then(() => {
        localStorage.removeItem('username');
        localStorage.removeItem('userRole');
        dispatch({
            type: constants.RESET_LOGIN_CREDENTIALS
        })
        history.push("/");
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

export const searchJobsByKeyword = (dispatch, searchText) => {
    if (searchText && searchText !== '' && searchText.includes(" "))
        searchText = searchText.split(" ").join("++")
    if (searchText === '')
        findAllJobs(dispatch);
    else {
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
                });
            })
    }
}

export const getNewJobs = (dispatch) => {

    fetch('http://localhost:8080/api/getjobs', {
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
    fetch('http://localhost:8080/api/getcompanies', {
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
            credentials: 'include'
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
    fetch('http://localhost:8080/api/person', {
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
        fetch(('http://localhost:8080/api/person/PID').replace('PID', userId), {
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
    fetch('http://localhost:8080/api/company', {
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
        fetch(('http://localhost:8080/api/company/CID').replace('CID', companyId), {
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
    fetch(('http://localhost:8080/api/job/JID').replace('JID', jobId), {
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
        fetch(('http://localhost:8080/api/job/JID/query').replace('JID', jobId), {
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
                    if (localStorage.getItem("role") !== undefined &&
                        localStorage.getItem("username") !== undefined) {
                        if (localStorage.getItem("role") === "Admin" || localStorage.getItem("role") === "Moderator") {
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
    fetch(('http://localhost:8080/api/query/QID').replace('QID', queryId), {
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
        fetch(('http://localhost:8080/api/company/CID').replace('CID', companyId), {
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
    fetch(('http://localhost:8080/api/company/CID/employees').replace('CID', companyId), {
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
    fetch(('http://localhost:8080/api/company/CID/jobs').replace('CID', companyId), {
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
        fetch(('http://localhost:8080/api/job/JID/addapplicant').replace('JID', jobId), {
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
}

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


    if (role === 'JobSeeker') {
        fetch('http://localhost:8080/api/jobseeker', {
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
        fetch('http://localhost:8080/api/employer', {
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
        fetch('http://localhost:8080/api/moderator', {
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
        fetch('http://localhost:8080/api/admin', {
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
};

export const fetchUserProfile = (dispatch) => {
    const username = localStorage.getItem("username");
    var role;

    fetch('http://localhost:8080/api/person/username/' + username, {
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
            fetch('http://localhost:8080/api/jobseeker/username/' + username)
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
            fetch('http://localhost:8080/api/employer/username/' + username)
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
            fetch('http://localhost:8080/api/admin/username/' + username)
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
            fetch('http://localhost:8080/api/moderator/username/' + username)
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

export const getApplicationStatus = (dispatch, jobId) => {
    if (jobId) {
        fetch(('http://localhost:8080/api/job/JID/status').replace('JID', jobId), {
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
        let url = "http://localhost:8080/api/employer/username/" + username;
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

                return fetch('http://localhost:8080/api/job/userdefined', {
                    method: 'POST',
                    body: JSON.stringify({
                        'position': 'Default Position',
                        'description': '<p><h5>New Job Description</h5></p>',
                        'keywords': '',
                        'jobType': {
                            'name': 'Full-time'
                        },
                        'company': {
                            'name':userCompany
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
            fetch('http://localhost:8080/api/job/userdefined', {
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
            fetch(('http://localhost:8080/api/job/JID/query').replace('JID', jobId), {
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
    if(!jobId && localStorage.getItem("jobId")){
        jobId = localStorage.getItem("jobId");
    }
    fetch('http://localhost:8080/api/job/' + jobId, {
        method: 'PUT',
        body: JSON.stringify({
            'jobId': jobId,
            'position': position,
            'description': description,
            'keywords': keywords,
            'jobType': {
                'name' : 'Full-time'
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
            dispatch({type: constants.SAVE_JOB, job:job, successMessageFld: 'Job Save Successful!'});
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
    if(!jobId && localStorage.getItem("jobId")){
        jobId = localStorage.getItem("jobId");
    }
    fetch('http://localhost:8080/api/job/' + jobId, {
        credentials: 'include'
    }).then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                return null;
            }
    }).then(job => {
        if (job !== null) {
            dispatch({type: constants.FETCH_JOB_DETAILS, job:job});
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
        fetch(('http://localhost:8080/api/person/'+ userId), {
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
        fetch(('http://localhost:8080/api/query/QID').replace('QID', queryId), {
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
        fetch(('http://localhost:8080/api/query/QID').replace('QID', queryId), {
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
            type:constants.SHOW_QUERY_EDIT_MODE,
            queryId: queryId
        })
        dispatch({
            type:constants.SET_QUERY_VALUES,
            queryId: queryId,
            post: post
        })
    }
}

