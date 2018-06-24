import React, {Component} from 'react'
import {connect} from 'react-redux'
import JobListContainer from "../containers/JobList"
import '../styles/Search.css'

class Search extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className={"row wbdv-job-row"}>
                    <div className={"col-md-12"}>
                        <JobListContainer/>
                    </div>
                </div>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
});

export const dispatcherToPropsMapper = (dispatch) => ({
});


const SearchContainer = connect(stateToPropertyMapper,dispatcherToPropsMapper)(Search)

export default SearchContainer