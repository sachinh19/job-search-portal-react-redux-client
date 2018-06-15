import React, {Component} from 'react';
import HomeContainer from './containers/Home'
import LoginContainer from './containers/Login'
import {Route,Swithc} from 'react-router-dom'
import AdminConsoleContainer from "./containers/AdminConsole";

export default class Routes extends Component {
    render(){
        return(
            <div>
                <div className={"navbar"}>
                    Header
                </div>
                <Route exact path={"/"} component={HomeContainer}/>
                <Route exact path={"/login"} component={LoginContainer}/>
                <Route exact path={"/console"} component={AdminConsoleContainer}/>
                <div>
                    Footer
                </div>
            </div>
        )
    }
}