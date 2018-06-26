import React, {Component} from 'react';
import './Routes.css'
import {Route} from 'react-router-dom'
import ProfileContainer from './components/Profile'
import HomeContainer from './containers/Home'
import LoginContainer from './containers/Login'
import AdminConsoleContainer from './containers/AdminConsole'
import CompanyContainer from './containers/Company'
import JobContainer from './containers/Job'
import UserContainer from './containers/User'
import NavBarContainer from './components/NavBar'
import FooterContainer from './components/Footer'
import RegisterContainer from "./containers/Register";
import SearchContainer from './containers/Search'
import CreateJobContainer from "./containers/CreateJob";
import ModeratorConsoleContainer from "./containers/ModeratorConsole";
import PublicProfileContainer from './components/PublicProfile'


export default class Routes extends Component {
    render() {
        return (
            <div>
                <NavBarContainer/>
                <div className={"wbdv-body"}>
                    <Route exact path={"/"} component={HomeContainer}/>
                    <Route exact path={"/home"} component={HomeContainer}/>
                    <Route exact path={"/login"} component={LoginContainer}/>
                    <Route exact path={"/search"} component={SearchContainer}/>
                    <Route path={"/profile/:username"} component={ProfileContainer}/>
                    <Route exact path={"/register"} component={RegisterContainer}/>
                    <Route exact path ={"/job"} component={CreateJobContainer}/>
                    <Route path={"/console"} component={AdminConsoleContainer}/>
                    <Route path={"/moderatorConsole"} component={ModeratorConsoleContainer}/>
                    <Route exact path ={"/job/:jobId"} component={JobContainer}/>
                    <Route exact path ={"/company/:companyId"} component={CompanyContainer}/>
                    <Route exact path ={"/user/:userId"} component={UserContainer}/>
                </div>
                <FooterContainer/>
            </div>
        )
    }
}