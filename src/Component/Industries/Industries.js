import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

const Industries = () => {
  const navigate = useNavigate();

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
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "20px",
          dots: false,
        },
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0",
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: "0",
          dots: false,
        },
      },
    ],
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
            <div className="industry_box ind1">
              <div>
                <h2>Financial Services</h2>
                <p>
                  Leading the Way in Revolutionizing the Financial Services Sector
                </p>
                <button onClick={() => navigate('/industries/financial')}>
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
            <div className="industry_box ind2">
              <div>
                <h2>Insurance</h2>
                <p>
                  Secure Futures: Insurance Reinvented by
                  Codespace
                </p>
                <button onClick={() => navigate('/industries/insurance')}>
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
            <div className="industry_box ind3">
              <div>
                <h2>Health care</h2>
                <p>
                  Revolutionizing the Healthcare
                  Sector
                </p>
                <button onClick={() => navigate('/industries/healthcare')}>
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
            <div className="industry_box ind4">
              <div>
                <h2>Telo & Media</h2>
                <p>
                  Innovative Solutions for Telco and Media
                  Excellence
                </p>
                <button onClick={() => navigate('/industries/media')}>
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
            <div className="industry_box ind5">
              <div>
                <h2>Real Estate</h2>
                <p>
                  Elevate Real Estate Experiences with
                  Codespace
                </p>
                <button onClick={() => navigate('/industries/real-estate')}>
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
            <div className="industry_box ind6">
              <div>
                <h2>Logistics</h2>
                <p>
                  Efficiency Redefined: Transforming Logistics
                  with Code space
                </p>
                <button onClick={() => navigate('/industries/logistics')}>
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
