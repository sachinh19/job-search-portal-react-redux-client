import React from 'react'
import {connect} from 'react-redux'
import '../styles/JobCard.css'

const Job = ({job}) => {
    return (
        <div className="card job-card">
            <img className="card-img-top"
                 src="" alt="Card image"/>
            <div className="card-body row">
                <h6 className="card-title col-md-7">
                    {job.position}
                </h6>
                <p className="card-text col-md-3">
                    Posted Date : {job.postedDate && job.postedDate.split("T")[0]}
                </p>
                <button className={"btn btn-outline-primary my-2 my-sm-0 col-md-2"} type={"submit"}>
                    Job Details...
                </button>

            </div>
            <div className="card-footer text-muted">
                Last Updated : 2 days ago
            </div>
        </div>
    )
}

const JobCard = connect(state=>({preview: state.preview}),null)(Job)

export default JobCard