import React, {Component} from 'react';
import HomeContainer from './containers/Home'
import LoginContainer from './containers/Login'
import NavBar from './components/NavBar'
import {Route, Switch} from 'react-router-dom'
import './styles/Routes.css'


export default class Routes extends Component {
    render() {
        return (
            <div>
                <div>
                    <NavBar/>
                </div>
                <div className={"wbdv-body"}>
                    <Route exact path={"/"} component={HomeContainer}/>
                    <Route exact path={"/login"} component={LoginContainer}/>
                </div>
                <div>
                    Footer
                </div>
            </div>
        )
    }
}