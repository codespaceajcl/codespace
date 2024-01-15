import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Newsletter from "../../Component/Newsletter/Newsletter";
import Partners from "../../Component/Partners/Partners";
import "./Industry.css";

const Industry = () => {
  return (
    <div className="industry_main">
      <div className="industry_banner">
        <Container>
          <Row className="align-items-center">
            <Col md={7}>
              <h1>
                Transforming <span>Industries</span> with Cutting-Edge
                Technology
              </h1>
              <p>
                Our technology is used globally in the healthcare,
                telecommunications, travel, hospitality, insurance, and banking
                industries, and across multiple customer experience channels
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="innovation">
        <Container>
          <h2>Codespace: Where Industry Meets Innovation</h2>
          <p>
            We empower businesses like yours to overcome challenges, embrace
            digital transformation, and achieve unprecedented success in the
            ever-evolving landscape of Industry.
          </p>

          <Row>
            <Col md={4}>
              <div className="innovation_box">
                <img src="/images/innovation1.jpg" alt="" />
                <h3>Financial Services</h3>
              </div>
            </Col>
            <Col md={4}>
              <div className="innovation_box">
                <img src="/images/innovation2.jpg" alt="" />
                <h3>Insurance</h3>
              </div>
            </Col>
            <Col md={4}>
              <div className="innovation_box">
                <img src="/images/innovation3.jpg" alt="" />
                <h3>Health Care</h3>
              </div>
            </Col>
            <Col md={4}>
              <div className="innovation_box">
                <img src="/images/innovation4.jpg" alt="" />
                <h3>Telco & Media</h3>
              </div>
            </Col>
            <Col md={4}>
              <div className="innovation_box">
                <img src="/images/innovation5.jpg" alt="" />
                <h3>Real State</h3>
              </div>
            </Col>
            <Col md={4}>
              <div className="innovation_box">
                <img src="/images/innovation6.jpg" alt="" />
                <h3>Logistics</h3>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Partners />

      <div className="about_help schedule_consult">
        <Container>
          <h6>Ready to Transform Your Industry Business?</h6>
          <h2>
            The time to act is now. Let Codespace be your guide on the path to
            success.
          </h2>
          <button>
            Schedule a Free Consultation
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <mask
                id="mask0_490_333"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="24"
              >
                <rect width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_490_333)">
                <path
                  d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z"
                  fill="white"
                />
              </g>
            </svg>
          </button>
        </Container>
      </div>

      <Newsletter />
    </div>
  );
};

export default Industry;
