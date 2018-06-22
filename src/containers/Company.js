import React, {Component} from 'react'
import {connect} from 'react-redux'

class Company extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Company Details</h1>
                </div>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({
});

export const dispatcherToPropsMapper = (dispatch) => ({
});

const CompanyContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(Company)

export default CompanyContainer

