import React from 'react'
import {connect} from 'react-redux'
import '../styles/JobCard.css'
import history from "../History";

const Job = ({job}) => {
    return (
        <tr key={job.id}>
            <td className={"row"}>
                <img className="col-md-1 card-img-top"
                     src={"https://www.shareicon.net/data/128x128/2015/12/26/693214_application_512x512.png"} alt="Card"/>
                <span className={"col-md-9"}>
                    {job.position}
                </span>
                <button className={"btn btn-outline-primary my-2 my-sm-0 col-md-2"}
                        type={"button"}
                        onClick={()=>{
                            history.push('/job/' + job.id);
                        }}>
                    Job Details...
                </button>
            </td>
        </tr>
    )
}

const JobCard = connect(state=>({preview: state.preview}),null)(Job)

export default JobCard