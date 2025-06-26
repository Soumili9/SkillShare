import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';

const Menu = ({ cartItems }) => {
    const totalItems = cartItems.length;
    const [isUserLogin, setIsUserLogin] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("user")) {
            setIsUserLogin(true);
        }
    }, []);

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">SkillShare</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        {isUserLogin && <Nav.Link as={Link} to="/logout">Logout</Nav.Link>}
                        {!isUserLogin && <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        {!isUserLogin && <Nav.Link as={Link} to="/admin">Admin Login</Nav.Link>}
                        {!isUserLogin && <Nav.Link as={Link} to="/signup">Sign-up</Nav.Link>}
                        <Nav.Link as={Link} to="/cart">Cart <Badge pill bg="success">{totalItems}</Badge></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;
