import React from 'react'
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'

export default function Header() {
    return (
        <Navbar>
        <Container>
            <Navbar.Brand href="#home">KITS App</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                Mark Otto
            </Navbar.Text>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

