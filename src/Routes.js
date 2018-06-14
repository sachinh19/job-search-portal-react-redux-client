import React, {Component} from 'react';
import HomeContainer from './containers/Home'
import LoginContainer from './containers/Login'
import {Route,Swithc} from 'react-router-dom'

export default class Routes extends Component {
    render(){
        return(
            <div>
                <div className={"navbar"}>
                    Header
                </div>
                <Route exact path={"/"} component={HomeContainer}/>
                <Route exact path={"/login"} component={LoginContainer}/>
                <div>
                    Footer
                </div>
            </div>
        )
    }
}