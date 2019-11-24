import React, { Component } from 'react'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
class MainLayout extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                
                <Navbar />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}

export default MainLayout
