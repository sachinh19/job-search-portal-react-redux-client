import React, {Component} from 'react';
import HomeContainer from './containers/Home'
import LoginContainer from './containers/Login'
import AdminConsoleContainer from './containers/AdminConsole'
import JobContainer from './containers/Job'
import NavBarContainer from './components/NavBar'
import {Route} from 'react-router-dom'
import FooterContainer from './components/Footer'
import './styles/Routes.css'


export default class Routes extends Component {
    render() {
        return (
            <div>
                <NavBarContainer/>
                <div className={"wbdv-body"}>
                    <Route exact path={"/"} component={HomeContainer}/>
                    <Route exact path={"/login"} component={LoginContainer}/>
                    <Route path={"/console"} component={AdminConsoleContainer}/>
                    <Route exact path ={"/job/:jobId"} component={JobContainer}/>
                </div>
                <FooterContainer/>
            </div>
        )
    }
}