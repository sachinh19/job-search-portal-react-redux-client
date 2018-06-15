import React, {Component} from 'react'
import {connect} from 'react-redux'

class Home extends Component {

    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div className={"container"}>
                <h1>Home Page</h1>
                <div >
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>A</td>
                                <td>B</td>
                                <td>C</td>
                            </tr>
                            <tr>
                                <td>A</td>
                                <td>B</td>
                                <td>C</td>
                            </tr>
                            <tr>
                                <td>A</td>
                                <td>B</td>
                                <td>C</td>
                            </tr>
                            <tr>
                                <td>A</td>
                                <td>B</td>
                                <td>C</td>
                            </tr>
                            <tr>
                                <td>A</td>
                                <td>B</td>
                                <td>C</td>
                            </tr>
                            <tr>
                                <td>A</td>
                                <td>B</td>
                                <td>C</td>
                            </tr>


                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}



const HomeContainer = connect()(Home)

export default HomeContainer