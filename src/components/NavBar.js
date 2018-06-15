import React, {Component} from 'react'
import * as actions from "../actions";
import {connect} from "react-redux";
import {Link} from 'react-router-dom';


class NavBar extends Component{
    constructor(props){
        super(props);
    }

    renderLogin() {
        if(this.props.userId !== null){
            return <button onClick={this.props.logOut}>LogOut</button>
        } else {
            return <Link to={`/login`}>Login</Link>
        }
    }

    render(){
        return(
            <header>
                <nav className={"navbar navbar-expand-md navbar-dark fixed-top bg-dark"}>
                    <a className={"navbar-brand"} href={"#"}>Job Search Portal</a>
                    <button className={"navbar-toggler collapsed"} type={"button"} data-toggle={"collapse"}
                            data-target={"#navbarCollapse"} aria-controls={"navbarCollapse"} aria-expanded={"false"}
                            aria-label={"Toggle navigation"}>
                        <span className={"navbar-toggler-icon"}></span>
                    </button>
                    <div className={"navbar-collapse collapse"} id={"navbarCollapse"}>
                        <ul className={"navbar-nav mr-auto"}>
                            <li className={"nav-item active"}>
                                <a className={"nav-link"} href={"/"}>Home <span className={"sr-only"}>(current)</span></a>
                            </li>
                            <li className={"nav-item"}>
                                <a className={"nav-link"}  style={{color:'#FFF'}}>{this.renderLogin()}</a>
                            </li>
                        </ul>
                    </div>
                    <form className={"form-inline mt-2 mt-md-0"}>
                        <input className={"form-control mr-sm-2 wbdv-search-bar"}
                               type={"text"} placeholder={"Search"}
                               aria-label={"Search"}/>
                        <button className={"btn btn-outline-success my-2 my-sm-0"} type={"submit"}>Search</button>
                    </form>
                </nav>
            </header>
        )
    }

}

const stateToPropertyMapper = (state) => ({

    userId:localStorage.getItem('id')
})

export const dispatcherToPropsMapper = (dispatch) => ({
    logOut: () => actions.logOut(dispatch)
})

const NavBarContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(NavBar)

export default NavBarContainer