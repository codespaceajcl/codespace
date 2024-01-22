import React, { useEffect, useState } from "react";
import { Nav, Container, Navbar, NavDropdown } from "react-bootstrap";
import { MdSearch, MdOutlineArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import blackLogo from "../../images/black_main_logo.png";
import "./Header.css";

const BlackHeader = () => {
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const isScrolled = window.scrollY > 0;
    if (isScrolled !== scrolled) {
      setScrolled(isScrolled);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const isMobile = window.innerWidth <= 992

  const navigateAndCloseNavbar = (path) => {
    navigate(path);

    if (isMobile) {
      document.querySelector('.navbar-toggler').click(); // Close the Navbar
    }
  };

  return (
    <Navbar
      expand="lg"
      className={`header_main black_main ${scrolled ? "scrolled" : ""}`}
    >
      <Container>
        <Navbar.Brand onClick={() => navigate("/")}>
          <img src={blackLogo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown> */}

            <Nav.Link onClick={() => navigateAndCloseNavbar("/")}>
              Home
            </Nav.Link>
            <Nav.Link> Services </Nav.Link>

            <Nav.Link className="dropdown">
              <span onClick={() => navigateAndCloseNavbar("/industries")}>Industries</span>
              <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>

              <ul>
                <li onClick={() => navigateAndCloseNavbar('/industries/financial')}> Financial Services </li>
                <li onClick={() => navigateAndCloseNavbar('/industries/insurance')}> Insurance </li>
                <li onClick={() => navigateAndCloseNavbar('/industries/healthcare')}> Health Care </li>
                <li onClick={() => navigateAndCloseNavbar('/industries/media')}> Telo & Media </li>
                <li onClick={() => navigateAndCloseNavbar('/industries/real-estate')}> Real Estate </li>
                <li onClick={() => navigateAndCloseNavbar('/industries/logistics')}> Logistics </li>
              </ul>
            </Nav.Link>

            <Nav.Link> Products </Nav.Link>

            {/* <NavDropdown title="Industries" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown> */}

            {/* <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown> */}

            <Nav.Link onClick={() => navigateAndCloseNavbar("/about")}>About Us</Nav.Link>
            {/* <Nav.Link href="#link">Careers</Nav.Link> */}

            {/* <div className="header_search">
              <MdSearch />
            </div> */}

            <div className="header_contact_us">
              <button> Contact Us <MdOutlineArrowOutward /></button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BlackHeader;
