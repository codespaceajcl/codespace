import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";

const Industries = () => {
  function SampleNextArrow2(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ind_next_arrow`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow2(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} ind_prev_arrow`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  const centerModeSettings = {
    className: "center",
    centerMode: true,
    infinite: true,
    dots: true,
    arrows: true,
    centerPadding: "350px",
    slidesToShow: 1,
    nextArrow: <SampleNextArrow2 />,
    prevArrow: <SamplePrevArrow2 />,
  };

  return (
    <div className="home_industries">
      <Container>
        <h6>INDUSTRIES WE SERVE</h6>
        <h4>Reliable and secure digital infrastructure For Any Industry.</h4>
      </Container>
      <Container fluid>
        <div className="industry_slider">
          <Slider {...centerModeSettings}>
            <div className="industry_box">
              <div>
                <h2>Financial Services</h2>
                <p>
                  Financial Services company are retaining more customers and
                  improving profitabilty
                </p>
                <button>
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <mask
                      id="mask0_99_567"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    >
                      <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_99_567)">
                      <path
                        d="M6.4 18L5 16.6L14.6 7H6V5H18V17H16V8.4L6.4 18Z"
                        fill="#F9F9F9"
                      />
                    </g>
                  </svg>
                </button>
              </div>
            </div>
            <div className="industry_box">
              <div>
                <h2>Financial Services</h2>
                <p>
                  Financial Services company are retaining more customers and
                  improving profitabilty
                </p>
                <button>
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <mask
                      id="mask0_99_567"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    >
                      <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_99_567)">
                      <path
                        d="M6.4 18L5 16.6L14.6 7H6V5H18V17H16V8.4L6.4 18Z"
                        fill="#F9F9F9"
                      />
                    </g>
                  </svg>
                </button>
              </div>
            </div>
            <div className="industry_box">
              <div>
                <h2>Financial Services</h2>
                <p>
                  Financial Services company are retaining more customers and
                  improving profitabilty
                </p>
                <button>
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <mask
                      id="mask0_99_567"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    >
                      <rect width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_99_567)">
                      <path
                        d="M6.4 18L5 16.6L14.6 7H6V5H18V17H16V8.4L6.4 18Z"
                        fill="#F9F9F9"
                      />
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </Slider>
        </div>
      </Container>
    </div>
  );
};
export default Industries;
