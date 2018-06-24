import React, {Component} from 'react'
import {connect} from 'react-redux'
import JobListContainer from "../containers/JobList"
import '../styles/Home.css'

class Home extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className={"row"}>
                    <img className="wbdv-home-page-image"
                         src={require('../images/HomePage.jpg')}
                         alt={"Home Page Banner"}/>
                </div>
                <div className={"row wbdv-job-row"}>
                    <div className={"col-md-2"}>
                    </div>
                    <div className={"col-md-8"}>
                        <JobListContainer/>
                    </div>
                    <div className={"col-md-2"}>
                    </div>
                </div>
            </div>
        )
    }
}

// const stateToPropertyMapper = (state) => ({
// });
//
// export const dispatcherToPropsMapper = (dispatch) => ({
// });


const HomeContainer = connect()(Home)

export default HomeContainer