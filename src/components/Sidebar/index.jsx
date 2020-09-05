import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import './style.scss';

export default function Sidebar() {
    return (
        <Nav
            className="d-md-block bg-dark sidebar"
        >
            <Nav.Link href="/">
                <Navbar.Brand className="text-light">C7F</Navbar.Brand>
            </Nav.Link>
            <Nav.Item>
                <Nav.Link href="/" className="text-light">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/login" className="text-light">Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/register" className="text-light">Register</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/challenge" className="text-light">Challenges</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}
