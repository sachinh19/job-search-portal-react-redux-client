import React, {Component} from 'react';
import HomeContainer from './containers/Home'
import LoginContainer from './containers/Login'
import NavBar from './components/NavBar'
import {Route,Switch} from 'react-router-dom'


export default class Routes extends Component {
    render(){
        return(
            <div class="container">
                <div className={"navbar"}>
                    <NavBar/>
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