import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';
import * as actions from "../actions/Action";

class Home extends Component {

    constructor(props) {
        super(props)
    }

    renderLogin() {
        if(this.props.userId !== null){
            return <button onClick={this.props.logOut}>LogOut</button>
        } else {
            return <Link to={`/login`}>Login</Link>
        }
    }

    render() {
        return (
            <div>
                <h1>Home Page</h1>
                {this.renderLogin()}
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({

    userId:localStorage.getItem('id')
})

export const dispatcherToPropsMapper = (dispatch) => ({
    logOut: () => actions.logOut(dispatch)
})


const HomeContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(Home)

export default HomeContainer