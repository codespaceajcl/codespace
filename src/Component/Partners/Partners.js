import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import partner1 from "../../images/partner1.jpg";
import partner2 from "../../images/partner2.jpg";
import partner3 from "../../images/partner3.jpg";
import partner4 from "../../images/partner4.jpg";

const Partners = () => {
  return (
    <div className="home_partner">
      <Container>
        <h5>TECHNOLOGY PARTNER</h5>
        <h2>We partner with the world’s technology leaders.</h2>

        <div className="partners">
          {/* <Col md={2}> */}
            <div className="partner_box">
              <img src={partner1} alt="" />
              <h6>Google Developer Certified Agency</h6>
            </div>
          {/* </Col> */}
          {/* <Col md={2}> */}
            <div className="partner_box">
              <img src={partner2} alt="" />
              <h6>Adobe solution partner program</h6>
            </div>
          {/* </Col> */}
          {/* <Col md={2}> */}
            <div className="partner_box">
              <img src={partner3} alt="" />
              <h6>Microsoft certified consulting partner</h6>
            </div>
          {/* </Col> */}
          {/* <Col md={2}> */}
            <div className="partner_box">
              <img src={partner4} alt="" />
              <h6>Amazon web services partner</h6>
            </div>
          {/* // </Col> */}
        </div>
      </Container>
    </div>
  );
};

export default Partners;
