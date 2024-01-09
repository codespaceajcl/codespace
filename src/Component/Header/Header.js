import React from "react";
import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap";
import { MdSearch, MdOutlineArrowOutward } from "react-icons/md";
import './Header.css';

const Header = () => {
    return (
        <Navbar expand="lg" className="header_main">
            <Container>
                <Navbar.Brand> <img src="/images/main_logo.png" alt="" /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <NavDropdown title="Services" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Industries" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Products" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="#home">About Us</Nav.Link>
                        <Nav.Link href="#link">Careers</Nav.Link>

                        <div className="header_search">
                            <MdSearch />
                        </div>
                        
                        <div className="header_contact_us">
                            <button>Contact Us <MdOutlineArrowOutward /> </button>
                        </div>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;