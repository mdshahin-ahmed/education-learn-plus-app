import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
    const navBrand = {
        color: 'rgb(240, 240, 240)',
        fontWeight:'bold',
        fontSize: '30px',
    }
    const linkStyle = {
        color: 'rgb(231, 231, 231)',
        fontSize: '20px',

    }
    return (
        <div className='header-style'>
            <Navbar>
                <Container>
                    <Navbar.Brand as={NavLink} style={navBrand} to="/home">Learn Plus</Navbar.Brand>
                    <Nav className="m-auto">
                        <Nav.Link as={NavLink} style={linkStyle} activeStyle={{
                            fontWeight: "bold",
                            color: "white"
                        }}  to="/home">Home</Nav.Link>
                        <Nav.Link as={NavLink} style={linkStyle} activeStyle={{
                            fontWeight: "bold",
                            color: "white"
                        }} to="/courses">Courses</Nav.Link>
                        <Nav.Link as={NavLink} style={linkStyle} activeStyle={{
                            fontWeight: "bold",
                            color: "white"
                        }} to="/about">About</Nav.Link>
                        <Nav.Link as={NavLink} style={linkStyle} activeStyle={{
                            fontWeight: "bold",
                            color: "white"
                        }} to="/contact">Contuct Us</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;