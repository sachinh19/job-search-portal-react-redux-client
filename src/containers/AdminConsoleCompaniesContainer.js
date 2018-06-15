import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from "../actions";

class AdminConsoleCompanies extends Component {
    constructor(props) {
        super(props)
    }

    render(){
        return(<h1>Hello companies</h1>)
    }
}

const stateToPropertyMapper = (state) => ({})

export const dispatcherToPropsMapper = (dispatch) => ({

})

const AdminConsoleCompaniesContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(AdminConsoleCompanies)

export default AdminConsoleCompaniesContainer