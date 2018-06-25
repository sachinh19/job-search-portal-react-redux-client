import * as constants from '../constants'

const CreateJobReducer = (state = {jobId:1, position:'', description:'<p><h5>New Job Description</h5></p>',
    keywords:'', jobType: {'name' : 'Full-time'}, successMessageFld:''}, action) => {
    switch (action.type) {
        case constants.CHANGE_JOB_POSITION:
            return {
                jobId:state.jobId,
                position: action.position,
                description: state.description,
                keywords: state.keywords,
                jobType: state.jobType,
                successMessageFld : ''
            }
        case constants.CHANGE_JOB_DESCRIPTION:
            return {
                jobId: state.jobId,
                position: state.position,
                description: action.description,
                keywords: state.keywords,
                jobType: state.jobType,
                successMessageFld : ''
            }
        case constants.CHANGE_JOB_KEYWORDS:
            return {
                jobId: state.jobId,
                position: state.position,
                description: state.description,
                keywords: action.keywords,
                jobType: state.jobType,
                successMessageFld: ''
            }
        case constants.CHANGE_JOB_TYPE:
            return {
                jobId: state.jobId,
                position: state.position,
                description: state.description,
                keywords: state.keywords,
                jobType: action.jobType,
                successMessageFld: ''
            }
        case constants.CREATE_JOB:
            return {
                jobId: action.job.jobId,
                position: action.job.position,
                description: action.job.description,
                keywords: action.job.keywords,
                jobType: action.job.jobType,
                successMessageFld: ''
            }
        case constants.SAVE_JOB:
            return {
                jobId: action.job.jobId,
                position: action.job.position,
                description: action.job.description,
                keywords: action.job.keywords,
                jobType: action.job.jobType,
                successMessageFld: action.successMessageFld
            }
        case constants.FETCH_JOB_DETAILS:
            return {
                jobId: action.job.jobId,
                position: action.job.position,
                description: action.job.description,
                keywords: action.job.keywords,
                jobType: action.job.jobType,
                successMessageFld: ''
            }
        default :
            return state;
    }
}

export default CreateJobReducer;