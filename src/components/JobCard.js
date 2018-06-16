import React from 'react'
import {connect} from 'react-redux'
import '../styles/JobCard.css'

const Job = ({job}) => {
    let selectElement
    return (
        <div className="card job-card">
            <img className="card-img-top"
                 src=""/>
            <div className="card-body row">
                <h5 className="card-title col-md-6">
                   Job Title: {job.position}
                </h5>
                <p className="card-text col-md-3">
                    Posted Date : {job.postedDate && job.postedDate.split("T")[0]}
                </p>
                <a href="#"
                   className="btn btn-primary col-md-3">
                    Job Details...
                </a>
            </div>
            <div className="card-footer text-muted">
                Last Updated : 2 days ago
            </div>
        </div>
    )
}

const JobCard = connect(state=>({preview: state.preview}),null)(Job)

export default JobCard