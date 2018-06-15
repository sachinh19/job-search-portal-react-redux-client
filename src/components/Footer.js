import React, {Component} from 'react'
import {connect} from "react-redux";
import '../styles/Footer.css'



class Footer extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <footer id={"site-footer"} className={"fixed-bottom row text-center"}>
                <div className="col-md-4">
                    <div className={"row"}>
                        <div className={"col-6"}>Contact Us</div>
                        <div className={"col-6"}>About</div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div>&copy; 2018: A Northeastern University Project</div>
                </div>
                <div className="col-md-4">
                    <a className={"wbdv-social-logo"} href="#">
                        <i className="fa fa-2x fa-facebook-square text-black-50"></i>
                    </a>
                    <a className={"wbdv-social-logo"} href="#">
                        <i className="fa fa-2x fa-twitter-square text-black-50"></i>
                    </a>
                    <a className={"wbdv-social-logo"} href="#">
                        <i className="fa fa-2x fa-google-plus-square text-black-50"></i>
                    </a>
                    <a className={"wbdv-social-logo"} href="#">
                        <i className="fa fa-2x fa-linkedin-square text-black-50"></i>
                    </a>
                </div>
            </footer>
        )
    }

}


const FooterContainer = connect()(Footer)

export default FooterContainer