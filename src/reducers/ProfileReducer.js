import * as constants from '../constants'

const ProfileReducer = (state = {username:'', password: '', firstName:'', lastName:'', email:'',
    aboutMe:'', expDescription:'', role:'Employer', companyName: '', position: '', tenure: '',
    interestedPosition:'', totalExperience: '', successMessageFld: ''}, action) => {

    switch (action.type) {
        case constants.CHANGE_PROFILE_USERNAME:
            return {
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
                successMessageFld:''
            }
        case constants.CHANGE_PROFILE_PASSWORD:
            return {
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
                successMessageFld:''
            }
        case constants.CHANGE_PROFILE_FIRST_NAME:
            return {
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
                successMessageFld:''
            }
        case constants.CHANGE_PROFILE_LAST_NAME:
            return {
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
                successMessageFld:''
            }
        case constants.CHANGE_PROFILE_EMAIL:
            return {
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
                successMessageFld:''
            }
        case constants.CHANGE_PROFILE_ABOUT_ME:
            return {
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
                successMessageFld:''
            }
        case constants.CHANGE_PROFILE_EXP_DESCRIPTION:
            return {
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
                successMessageFld:''
            }
        case constants.CHANGE_PROFILE_INTERESTED_POSITION:
            return {
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
                successMessageFld:''
            }
        case constants.CHANGE_PROFILE_TOTAL_EXPERIENCE:
            return {
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
                successMessageFld:''
            }

        case constants.CHANGE_PROFILE_ROLE:
            return {
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
                successMessageFld:''
            }
        case constants.CHANGE_PROFILE_COMPANY_NAME:
            return {
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
                successMessageFld:''
            }
        case constants.CHANGE_PROFILE_POSITION:
            return {
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
                successMessageFld:''
            }
        case constants.CHANGE_PROFILE_TENURE:
            return {
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
                successMessageFld:''
            }
        case constants.UPDATE_PROFILE:
            return {
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
                successMessageFld:action.successMessageFld
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
                successMessageFld:''
            }


        default :
            return state
    }
};

export default ProfileReducer;