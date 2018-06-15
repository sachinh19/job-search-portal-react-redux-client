

import React, {Component} from 'react'
import {connect} from "react-redux";



class Footer extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <footer className={"footer"}>
                <div className={"container"}>
                    <span className={"text-muted"}>Place sticky footer content here.</span>
                </div>
            </footer>
        )
    }

}


const FooterContainer = connect()(Footer)

export default FooterContainer