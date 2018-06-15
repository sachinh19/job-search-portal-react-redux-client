import React, {Component} from 'react';
import HomeContainer from './containers/Home'
import LoginContainer from './containers/Login'
import AdminConsoleContainer from './containers/AdminConsole'
import NavBarContainer from './components/NavBar'
import {Route, Switch} from 'react-router-dom'
import FooterContainer from './components/Footer'
import './styles/Routes.css'


export default class Routes extends Component {
    render() {
        return (
            <div>
                <div>
                    <NavBarContainer/>
                </div>
                <div className={"wbdv-body"}>
                    <Route exact path={"/"} component={HomeContainer}/>
                    <Route exact path={"/login"} component={LoginContainer}/>
                    <Route exact path={"/console"} component={AdminConsoleContainer}/>
                </div>
                <div>
                    <FooterContainer/>
                </div>
            </div>
        )
    }
}