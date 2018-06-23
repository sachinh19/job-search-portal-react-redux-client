import React, {Component} from 'react'
import * as actions from "../actions";
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import '../styles/Navbar.css'


class NavBar extends Component{
    constructor(props){
        super(props);
    }

    renderLogin() {
        if(this.props.userId !== null){
            return <button onClick={this.props.logOut}>LogOut</button>
        } else {
            return <Link to={`/login`} className={'wbdv-link nav-link'}>
                        Login
                        <span className={"sr-only"}>(current)</span>
                    </Link>
        }
    }

    renderRegister() {
        if(this.props.userId == null){
            return <Link to={`/register`} className={'wbdv-link nav-link'}>
                Register
                <span className={"sr-only"}>(current)</span>
            </Link>
        }
        return null;
    }

    render(){
        let newSearchText
        return(
            <header className={"container-fluid"}>
                    <nav className={"navbar navbar-expand-md navbar-dark fixed-top bg-dark row"}>
                    <div className={"col-md-2"}>
                        <a className={"navbar-brand"} href={"/"}>
                            <span>
                                Job Search Portal
                            </span>
                        </a>
                    </div>
                    <div className={"col-md-6"}>
                        <form className={"form-inline row"}>
                            <div className={"col-md-9"}>
                                <input className={"form-control wbdv-search-bar input-lg"}
                                       type={"text"} placeholder={"Enter keywords to search Jobs"}
                                       onChange={()=> this.props.searchTextChanged(newSearchText.value)}
                                       ref={node => newSearchText=node}
                                       aria-label={"Search"}/>
                            </div>
                            <div className={"col-md-3"}>
                                <button className={"btn btn-outline-success"}
                                        type={"button"}
                                        onClick={()=>this.props.searchJobsByKeyword(this.props.searchText)}>
                                    <span className={"text-center"}>
                                    Find Jobs
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className={"col-md-4"}>
                        <div className={"navbar"} id={"navbarCollapse"}>
                            <ul className={"navbar-nav"}>
                                <li className={"nav-item"}>
                                    <Link to={`/`} className={'wbdv-link nav-link'}>
                                        Home
                                        <span className={"sr-only"}>(current)</span>
                                    </Link>
                                </li>
                                <li className={"nav-item"}>
                                    {this.renderLogin()}
                                </li>
                                <li className={"nav-item"}>
                                    {this.renderRegister()}
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }

}

const stateToPropertyMapper = (state) => ({
    userId:localStorage.getItem('id'),
    searchText: state.JobsReducer.searchText
})

export const dispatcherToPropsMapper = (dispatch) => ({
    searchTextChanged: (newText)=> {actions.searchTextChanged(dispatch,newText)},
    logOut: () => actions.logOut(dispatch),
    searchJobsByKeyword: (searchText) => {actions.searchJobsByKeyword(dispatch, searchText)}
})

const NavBarContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(NavBar)

export default NavBarContainer