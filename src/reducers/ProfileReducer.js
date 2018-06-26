import * as constants from '../constants'

const ProfileReducer = (state = {userId:1, username:'', password: '', firstName:'', lastName:'', email:'',
    aboutMe:'', expDescription:'', role:'Employer', companyName: '', position: '', tenure: '',
    interestedPosition:'', totalExperience: '', successMessageFld: '', jobs:[], personJobs:[], isFollowingUser:false}, action) => {

    switch (action.type) {
        case constants.GET_JOBS_FOR_PERSON:
            return {
                userId: state.userId,
                username: state.username,
                password: state.password,
                firstName: state.firstName,
                lastName: state.lastName,
                email: state.email,
                aboutMe: state.aboutMe,
                expDescription: state.expDescription,
                interestedPosition: state.interestedPosition,
                totalExperience: state.totalExperience,
                role: state.role,
                companyName: state.companyName,
                position: state.position,
                tenure: state.tenure,
                successMessageFld:'',
                jobs: state.jobs,
                personJobs: action.personJobs,
                isFollowingUser: state.isFollowingUser
            }
        case constants.GET_JOBS_FOR_USER:
            return {
                userId: state.userId,
                username: state.username,
                password: state.password,
                firstName: state.firstName,
                lastName: state.lastName,
                email: state.email,
                aboutMe: state.aboutMe,
                expDescription: state.expDescription,
                interestedPosition: state.interestedPosition,
                totalExperience: state.totalExperience,
                role: state.role,
                companyName: state.companyName,
                position: state.position,
                tenure: state.tenure,
                successMessageFld:'',
                jobs: action.jobs,
                personJobs: state.personJobs,
                isFollowingUser: state.isFollowingUser
            }
        case constants.CHANGE_PROFILE_USERNAME:
            return {
                userId: state.userId,
                username: action.username,
                password: state.password,
                firstName: state.firstName,
                lastName: state.lastName,
                email: state.email,
                aboutMe: state.aboutMe,
                expDescription: state.expDescription,
                interestedPosition: state.interestedPosition,
                totalExperience: state.totalExperience,
                role: state.role,
                companyName: state.companyName,
                position: state.position,
                tenure: state.tenure,
                successMessageFld:'',
                jobs: state.jobs,
                personJobs: state.personJobs,
                isFollowingUser: state.isFollowingUser
            }
        case constants.CHANGE_PROFILE_PASSWORD:
            return {
                userId: state.userId,
                username: state.username,
                password: action.password,
                firstName: state.firstName,
                lastName: state.lastName,
                email: state.email,
                aboutMe: state.aboutMe,
                expDescription: state.expDescription,
                interestedPosition: state.interestedPosition,
                totalExperience: state.totalExperience,
                role: state.role,
                companyName: state.companyName,
                position: state.position,
                tenure: state.tenure,
                successMessageFld:'',
                jobs: state.jobs,
                personJobs: state.personJobs,
                isFollowingUser: state.isFollowingUser
            }
        case constants.CHANGE_PROFILE_FIRST_NAME:
            return {
                userId: state.userId,
                username: state.username,
                password: state.password,
                firstName: action.firstName,
                lastName: state.lastName,
                email: state.email,
                aboutMe: state.aboutMe,
                expDescription: state.expDescription,
                interestedPosition: state.interestedPosition,
                totalExperience: state.totalExperience,
                role: state.role,
                companyName: state.companyName,
                position: state.position,
                tenure: state.tenure,
                successMessageFld:'',
                jobs: state.jobs,
                personJobs: state.personJobs,
                isFollowingUser: state.isFollowingUser
            }
        case constants.CHANGE_PROFILE_LAST_NAME:
            return {
                userId: state.userId,
                username: state.username,
                password: state.password,
                firstName: state.firstName,
                lastName: action.lastName,
                email: state.email,
                aboutMe: state.aboutMe,
                expDescription: state.expDescription,
                interestedPosition: state.interestedPosition,
                totalExperience: state.totalExperience,
                role: state.role,
                companyName: state.companyName,
                position: state.position,
                tenure: state.tenure,
                successMessageFld:'',
                jobs: state.jobs,
                personJobs: state.personJobs,
                isFollowingUser: state.isFollowingUser
            }
        case constants.CHANGE_PROFILE_EMAIL:
            return {
                userId: state.userId,
                username: state.username,
                password: state.password,
                firstName: state.firstName,
                lastName: state.lastName,
                email: action.email,
                aboutMe: state.aboutMe,
                expDescription: state.expDescription,
                interestedPosition: state.interestedPosition,
                totalExperience: state.totalExperience,
                role: state.role,
                companyName: state.companyName,
                position: state.position,
                tenure: state.tenure,
                successMessageFld:'',
                jobs: state.jobs,
                personJobs: state.personJobs,
                isFollowingUser: state.isFollowingUser
            }
        case constants.CHANGE_PROFILE_ABOUT_ME:
            return {
                userId: state.userId,
                username: state.username,
                password: state.password,
                firstName: state.firstName,
                lastName: state.lastName,
                email: state.email,
                aboutMe: action.aboutMe,
                expDescription: state.expDescription,
                interestedPosition: state.interestedPosition,
                totalExperience: state.totalExperience,
                role: state.role,
                companyName: state.companyName,
                position: state.position,
                tenure: state.tenure,
                successMessageFld:'',
                jobs: state.jobs,
                personJobs: state.personJobs,
                isFollowingUser: state.isFollowingUser
            }
        case constants.CHANGE_PROFILE_EXP_DESCRIPTION:
            return {
                userId: state.userId,
                username: state.username,
                password: state.password,
                firstName: state.firstName,
                lastName: state.lastName,
                email: state.email,
                aboutMe: state.aboutMe,
                expDescription: action.expDescription,
                interestedPosition: state.interestedPosition,
                totalExperience: state.totalExperience,
                role: state.role,
                companyName: state.companyName,
                position: state.position,
                tenure: state.tenure,
                successMessageFld:'',
                jobs: state.jobs,
                personJobs: state.personJobs,
                isFollowingUser: state.isFollowingUser
            }
        case constants.CHANGE_PROFILE_INTERESTED_POSITION:
            return {
                userId: state.userId,
                username: state.username,
                password: state.password,
                firstName: state.firstName,
                lastName: state.lastName,
                email: state.email,
                aboutMe: state.aboutMe,
                expDescription: state.expDescription,
                interestedPosition: action.interestedPosition,
                totalExperience: state.totalExperience,
                role: state.role,
                companyName: state.companyName,
                position: state.position,
                tenure: state.tenure,
                successMessageFld:'',
                jobs: state.jobs,
                personJobs: state.personJobs,
                isFollowingUser: state.isFollowingUser
            }
        case constants.CHANGE_PROFILE_TOTAL_EXPERIENCE:
            return {
                userId: state.userId,
                username: state.username,
                password: state.password,
                firstName: state.firstName,
                lastName: state.lastName,
                email: state.email,
                aboutMe: state.aboutMe,
                expDescription: state.expDescription,
                interestedPosition: state.interestedPosition,
                totalExperience: action.totalExperience,
                role: state.role,
                companyName: state.companyName,
                position: state.position,
                tenure: state.tenure,
                successMessageFld:'',
                jobs: state.jobs,
                personJobs: state.personJobs,
                isFollowingUser: state.isFollowingUser
            }

        case constants.CHANGE_PROFILE_ROLE:
            return {
                userId: state.userId,
                username: state.username,
                password: state.password,
                firstName: state.firstName,
                lastName: state.lastName,
                email: state.email,
                aboutMe: state.aboutMe,
                expDescription: state.expDescription,
                interestedPosition: state.interestedPosition,
                totalExperience: state.totalExperience,
                role: action.role,
                companyName: state.companyName,
                position: state.position,
                tenure: state.tenure,
                role: state.role,
                companyName: state.companyName,
                position: state.position,
                tenure: state.tenure,
                successMessageFld:'',
                jobs: state.jobs,
                personJobs: state.personJobs,
                isFollowingUser: state.isFollowingUser
            }
        case constants.CHANGE_PROFILE_COMPANY_NAME:
            return {
                userId: state.userId,
                username: state.username,
                password: state.password,
                firstName: state.firstName,
                lastName: state.lastName,
                email: state.email,
                aboutMe: state.aboutMe,
                expDescription: state.expDescription,
                interestedPosition: state.interestedPosition,
                totalExperience: action.totalExperience,
                role: state.role,
                companyName: action.companyName,
                position: state.position,
                tenure: state.tenure,
                successMessageFld:'',
                jobs: state.jobs,
                personJobs: state.personJobs,
                isFollowingUser: state.isFollowingUser
            }
        case constants.CHANGE_PROFILE_POSITION:
            return {
                userId: state.userId,
                username: state.username,
                password: state.password,
                firstName: state.firstName,
                lastName: state.lastName,
                email: state.email,
                aboutMe: state.aboutMe,
                expDescription: state.expDescription,
                interestedPosition: state.interestedPosition,
                totalExperience: action.totalExperience,
                role: state.role,
                companyName: state.companyName,
                position: action.position,
                tenure: state.tenure,
                successMessageFld:'',
                jobs: state.jobs,
                personJobs: state.personJobs,
                isFollowingUser: state.isFollowingUser
            }
        case constants.CHANGE_PROFILE_TENURE:
            return {
                userId: state.userId,
                username: state.username,
                password: state.password,
                firstName: state.firstName,
                lastName: state.lastName,
                email: state.email,
                aboutMe: state.aboutMe,
                expDescription: state.expDescription,
                interestedPosition: state.interestedPosition,
                totalExperience: action.totalExperience,
                role: state.role,
                companyName: state.companyName,
                position: state.position,
                tenure: action.tenure,
                successMessageFld:'',
                jobs: state.jobs,
                personJobs: state.personJobs,
                isFollowingUser: state.isFollowingUser
            }
        case constants.UPDATE_PROFILE:
            return {
                userId: state.userId,
                username: state.username,
                password: state.password,
                firstName: state.firstName,
                lastName: state.lastName,
                email: state.email,
                aboutMe: state.aboutMe,
                expDescription: state.expDescription,
                interestedPosition: state.interestedPosition,
                totalExperience: state.totalExperience,
                role: state.role,
                companyName: state.companyName,
                position: state.position,
                tenure: state.tenure,
                successMessageFld:action.successMessageFld,
                jobs: state.jobs,
                personJobs: state.personJobs,
                isFollowingUser: state.isFollowingUser
            }
        case constants.FETCH_USER_PROFILE:
            let usernameFld = ''
            let passwordFld = ''
            let firstNameFld = ''
            let lastNameFld = ''
            let emailFld = ''
            let aboutMeFld = ''
            let expDescriptionFld = ''
            let roleFld = 'Employer'
            let companyNameFld = ''
            let positionFld = ''
            let tenureFld = ''
            let interestedPositionFld = ''
            let totalExperienceFld = ''
            if(action.user.username !== null) {
                usernameFld = action.user.username
            }
            if(action.user.password !== null) {
                passwordFld = action.user.password
            }
            if(action.user.firstName !== null) {
                firstNameFld = action.user.firstName
            }
            if(action.user.lastName !== null) {
                lastNameFld = action.user.lastName
            }
            if(action.user.email !== null) {
                emailFld = action.user.email
            }
            if(action.user.aboutMe !== null) {
                aboutMeFld = action.user.aboutMe
            }
            if(action.user.expDescription !== null) {
                expDescriptionFld = action.user.expDescription
            }
            if(action.user.roleType !== null) {
                roleFld = action.user.roleType
            }
            if(action.user.companyName !== null) {
                companyNameFld = action.user.companyName
            }
            if(action.user.position !== null) {
                positionFld = action.user.position
            }
            if(action.user.tenure !== null) {
                tenureFld = action.user.tenure
            }
            if(action.user.interestedPosition !== null) {
                interestedPositionFld = action.user.interestedPosition
            }
            if(action.user.totalExp !== null) {
                totalExperienceFld = action.user.totalExp
            }


            return {
                userId: action.user.id,
                username: usernameFld,
                password: passwordFld,
                firstName: firstNameFld,
                lastName: lastNameFld,
                email: emailFld,
                aboutMe: aboutMeFld,
                expDescription: expDescriptionFld,
                interestedPosition: interestedPositionFld,
                totalExperience: totalExperienceFld,
                role: roleFld,
                companyName: companyNameFld,
                position: positionFld,
                tenure: tenureFld,
                successMessageFld:'',
                jobs: state.jobs,
                personJobs: state.personJobs,
                isFollowingUser: state.isFollowingUser
            }

        case constants.SET_ISFOLLOWING :
            return {
                userId: state.userId,
                username: state.username,
                password: state.password,
                firstName: state.firstName,
                lastName: state.lastName,
                email: state.email,
                aboutMe: state.aboutMe,
                expDescription: state.expDescription,
                interestedPosition: state.interestedPosition,
                totalExperience: state.totalExperience,
                role: state.role,
                companyName: state.companyName,
                position: state.position,
                tenure: state.tenure,
                successMessageFld:state.successMessageFld,
                jobs: state.jobs,
                personJobs: state.personJobs,
                isFollowingUser: action.status
            }


        default :
            return state
    }
};

export default ProfileReducer;