import React from 'react'
import {connect} from 'react-redux'

const Job = ({job}) => {
    let selectElement
    return (
        <div className="card"
             styles={{width: '18rem'}}>
            <img className="card-img-top"
                 src=""/>
            <div className="card-body row">
                <h5 className="card-title col-md-4">
                    {job.position}
                </h5>
                <span className={"col-md-4"}>

                </span>
                <p className="card-text col-md-2">
                    {job.postedDate}
                </p>
                <a href="#"
                   className="btn btn-primary col-md-2">
                    Click for more details...
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