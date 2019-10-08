import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
export default class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar className="alpha text-center fixed-top" dark expand="md">
                    <div className="container">
                        <NavbarBrand>
                            <Link to="/yoottana-nap">reactstrap</Link>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem className="navbarLink">
                                    <NavLink to="/">หน้าเเรก</NavLink>
                                </NavItem>
                                <NavItem className="navbarLink">
                                    <NavLink to="/About">เกี่ยวกับฉัน</NavLink>
                                </NavItem>
                                <NavItem className="navbarLink">
                                    <NavLink to="/Portfolio">ผลงาน</NavLink>
                                </NavItem>
                                <NavItem className="navbarLink">
                                    <NavLink to="/Contact">ติดต่อฉัน</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}