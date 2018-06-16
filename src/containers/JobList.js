import React from 'react'
import {Component} from "react";
import {connect} from "react-redux";
import * as actions from "../actions";
import JobCard from "../components/JobCard"

function compare(a,b) {
    if (a.id < b.id)
        return -1;
    if (a.id > b.id)
        return 1;
    return 0;
}


class JobList extends Component {
    constructor(props){
        super(props);
        this.renderJobs = this.renderJobs.bind(this);
    }

    componentDidMount(){
        this.props.findAllJobs();
    }


    renderJobs(){
      let jobs = null;
      if(this.props.jobs){
        jobs = this.props.jobs.map(job=>{
            console.log("card")
            return (
                <JobCard key={job.id}
                         job={job}/>
                // <JobCard widget={widget}
                //         key={widget.id}
                //         preview={this.props.preview}
                //         maxLen={this.props.jobs.length}/>
            )}
        )
      }
      return jobs;
    }

    render (){
        this.props.jobs.sort(compare)
        return (
            <div>
                <div className={"card"}>
                    <div className={"card-header"}>
                        <div className={"row"}>
                            <div className={"col-sm-9"}>
                                <h2>Jobs Count: {this.props.jobs.length}</h2>
                            </div>
                            {/*<div className={"col-sm-2"}>*/}
                                {/*<button type={"button"}*/}
                                        {/*hidden={this.props.preview}*/}
                                        {/*onClick={this.props.saveWidget}*/}
                                        {/*className={"btn btn-success float-right"}>*/}
                                    {/*Save*/}
                                {/*</button>*/}
                            {/*</div>*/}
                            {/*<div className={"col-sm-1"}>*/}
                                {/*<i hidden={!this.props.preview}*/}
                                   {/*className={"fa fa-2x fa-toggle-on float-right"}*/}
                                   {/*onClick={this.props.previewWidget}>*/}
                                {/*</i>*/}
                                {/*<i hidden={this.props.preview}*/}
                                   {/*className={"fa fa-2x fa-toggle-off float-right"}*/}
                                   {/*onClick={this.props.previewWidget}>*/}
                                {/*</i>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    <div className={"card-body"}>
                        <ul>
                            {this.renderJobs() }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}


const stateToPropsMapper = (state) => ({
    jobs: state.JobsReducer.jobs
})

const dispatchToPropsMatcher = dispatch => ({
    findAllJobs: () => actions.findAllJobs(dispatch)
})

const JobListContainer = connect(stateToPropsMapper, dispatchToPropsMatcher)(JobList)

export default JobListContainer
