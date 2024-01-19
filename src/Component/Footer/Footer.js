import React from "react";
import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <div className="footer_main">
        <Container>
          <Row>
            <Col md={6}>
              <img src="/images/main_logo.png" alt="" />
              <p>
                Codespace was founded in 12 years by a group of AJCL with a
                vision to create innovative solutions that empower businesses of
                all sizes. We are committed to providing our clients with the
                highest quality software development services, delivered on time
                and within budget.
              </p>

              <div className="personal_info">
                <div className="phone">
                  <img src="/images/phone_icon.png" alt="" />
                  <div>
                    <h4>Have a question?</h4>
                    <h5>(021) 111 252 575</h5>
                  </div>
                </div>
                <div className="phone">
                  <img src="/images/email_icon.png" alt="" />
                  <div>
                    <h4>Contact us at</h4>
                    <h5>contact@codespace.com</h5>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <Row>
                <Col md={3} xs={6}>
                  <h6>Links</h6>
                  <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Contact Us</li>
                  </ul>
                </Col>
                <Col md={4} xs={6}>
                  <h6>Industries</h6>
                  <ul>
                    <li>Financial Services</li>
                    <li>Insurance</li>
                    <li>Health Care</li>
                    <li>Telco & Media</li>
                    <li>Real Estate</li>
                    <li>Logistics</li>
                  </ul>
                </Col>
                <Col md={5}>
                  <h6>Products</h6>
                  <ul>
                    <li>Warehouse Management</li>
                    <li>Procurement Management</li>
                    <li>Fleet Management System</li>
                    <li>Track & Trace</li>
                    <li>Project Management</li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <div className="copy_rights">
          <Container>
            <div>
              <p>© 2023-2024, Codespace - All Rights Reserved</p>
            </div>

            <div>
              <img src="/images/fb_icon.png" alt="" />
              <img src="/images/twitter_icon.png" alt="" />
              <img src="/images/insta_icon.png" alt="" />
              <img src="/images/linkdln_icon.png" alt="" />
            </div>
          </Container>
        </div>

      </div>
    </>
  );
};

export default Footer;
