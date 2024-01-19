import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Partners = () => {
  return (
    <div className="home_partner">
      <Container>
        <h5>TECHNOLOGY PARTNER</h5>
        <h2>We partner with the world’s technology leaders.</h2>

        <div className="partners">
          {/* <Col md={2}> */}
            <div className="partner_box">
              <img src="/images/partner1.jpg" alt="" />
              <h6>Google Developer Certified Agency</h6>
            </div>
          {/* </Col> */}
          {/* <Col md={2}> */}
            <div className="partner_box">
              <img src="/images/partner2.jpg" alt="" />
              <h6>Adobe solution partner program</h6>
            </div>
          {/* </Col> */}
          {/* <Col md={2}> */}
            <div className="partner_box">
              <img src="/images/partner3.jpg" alt="" />
              <h6>Microsoft certified consulting partner</h6>
            </div>
          {/* </Col> */}
          {/* <Col md={2}> */}
            <div className="partner_box">
              <img src="/images/partner4.jpg" alt="" />
              <h6>Amazon web services partner</h6>
            </div>
          {/* // </Col> */}
        </div>
      </Container>
    </div>
  );
};

export default Partners;
