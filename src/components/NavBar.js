import React, {Component} from 'react'
import {Navbar, NavItem, Nav, MenuItem, NavDropdown} from 'react-bootstrap'


export default class NavBar extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-fill fixed-top">
                    <div className={"col-2"}>
                        <h4 className={"text-white"}>Job Search Portal</h4>
                    </div>
                    <div className={"col-8"}>
                        <input className="form-control form-group wbdv-search-bar"
                               id="titleFld"
                               placeholder="New Course Title"/>
                    </div>
                    <div className={"col-2"}>
                    </div>
                </nav>


        )
    }

}