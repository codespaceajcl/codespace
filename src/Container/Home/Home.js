import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import { Col, Container, Row } from "react-bootstrap";
import { MdOutlineArrowOutward } from "react-icons/md";
import { IoPlayOutline } from "react-icons/io5";
import Spline from "@splinetool/react-spline";
import Slider from "react-slick";
import Newsletter from "../../Component/Newsletter/Newsletter";
import Partners from "../../Component/Partners/Partners";
import Industries from "../../Component/Industries/Industries";
import CountUp from 'react-countup';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "vertical-dots",
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} next_arrow`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} prev_arrow`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  const settings2 = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <div className="main_home">
        <Container>
          <Slider {...settings}>
            <div>
              <Row className="align-items-center">
                <Col md={7} className="home_banner_left">
                  <h1>Journey into the tech of tomorrow</h1>
                  <p>
                    Step into the future with our cutting-edge technology <br />
                    solutions tailored for your business needs.
                  </p>

                  <div className="banner_btn">
                    <button>
                      Schedule For Briefing <MdOutlineArrowOutward />
                    </button>
                    <button>
                      <IoPlayOutline /> Watch Video
                    </button>
                  </div>

                  <div className="reviews">
                    <img src="/images/clutch_review.png" alt="" />
                    <img src="/images/google_review.png" alt="" />
                  </div>
                </Col>
                <Col md={5} className="home_right_img">
                  <img src="/images/cubic_img.png" alt="" />
                  {/* <Spline
                    className="spline"
                    scene="https://prod.spline.design/rAcSdllYWQWQDZLh/scene.splinecode"
                  /> */}
                </Col>
              </Row>
            </div>
            <div>
              <Row className="align-items-center">
                <Col md={7} className="home_banner_left">
                  <h1>Journey into the tech of tomorrow</h1>
                  <p>
                    Step into the future with our cutting-edge technology <br />
                    solutions tailored for your business needs.
                  </p>

                  <div className="banner_btn">
                    <button>
                      Schedule For Briefing <MdOutlineArrowOutward />
                    </button>
                    <button>
                      <IoPlayOutline /> Watch Video
                    </button>
                  </div>

                  <div className="reviews">
                    <img src="/images/clutch_review.png" alt="" />
                    <img src="/images/google_review.png" alt="" />
                  </div>
                </Col>
                <Col md={5} className="home_right_img">
                  <img src="/images/cubic_img.png" alt="" />
                  {/* <Spline
                    className="spline"
                    scene="https://prod.spline.design/rAcSdllYWQWQDZLh/scene.splinecode"
                  /> */}
                </Col>
              </Row>
            </div>
          </Slider>

          <div className="top_home_exp">
            <Row>
              <Col md={3}>
                <h6><CountUp end={12} duration={2.75} />+</h6>
                <p>
                  Years of continual <br /> excellence
                </p>
              </Col>
              <Col md={3}>
                <h6><CountUp end={700} duration={2.75} />+</h6>
                <p>
                  Change makers driving <br /> revolution
                </p>
              </Col>
              <Col md={3}>
                <h6><CountUp end={16} duration={2.75} />+</h6>
                <p>
                  Countries with our presence <br /> and clientele
                </p>
              </Col>
              <Col md={3}>
                <h6><CountUp end={233} duration={2.75} />+</h6>
                <p>
                  Active clients across <br /> the globe
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <div className="home_about">
        <Container>
          <div>
            <div className="about">
              <Row className="justify-content-around align-items-center">
                <Col md={5}>
                  <h6>About us</h6>
                  <h4>
                    Crafting the future with our innovative tech solutions &
                    services
                  </h4>
                  <div className="about_learn_btn">
                    <button onClick={() => navigate('/about')}>
                      Learn More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <mask
                          id="mask0_353_3366"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                        >
                          <rect width="24" height="24" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_353_3366)">
                          <path
                            d="M6.4 18L5 16.6L14.6 7H6V5H18V17H16V8.4L6.4 18Z"
                            fill="white"
                          />
                        </g>
                      </svg>
                    </button>
                    <button>
                      Meet The Team
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <mask
                          id="mask0_353_3371"
                          style={{ maskType: "alpha" }}
                          maskUnits="userSpaceOnUse"
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                        >
                          <rect width="24" height="24" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_353_3371)">
                          <path
                            d="M6.4 18L5 16.6L14.6 7H6V5H18V17H16V8.4L6.4 18Z"
                            fill="#131415"
                          />
                        </g>
                      </svg>
                    </button>
                  </div>
                </Col>
                <Col md={5} className="boxes">
                  <div className="about_box">
                    <p>
                      Innovative <br /> approach
                    </p>
                    <img src="/images/home_about1.jpg" alt="" />
                  </div>
                  <div className="about_box">
                    <p>
                      Client-centric <br /> services
                    </p>
                    <img src="/images/home_about2.jpg" alt="" />
                  </div>
                  <div className="about_box">
                    <p>
                      Skilled team <br /> members
                    </p>
                    <img src="/images/home_about3.jpg" alt="" />
                  </div>
                  <div className="about_box">
                    <p>
                      Cutting-Edge <br /> technologies
                    </p>
                    <img src="/images/home_about4.jpg" alt="" />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
      <div className="home_services" id="services">
        <Container>
          <h6>Services</h6>
          <h4>
            Enabling our international clients to adopt cutting-edge
            technologies, reimagine workflows, and enhance user encounters
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="150"
              viewBox="0 0 204 214"
              fill="none"
            >
              <g opacity="0.1">
                <path
                  d="M112.054 10.3921C112.054 7.41866 115.67 5.95319 117.74 8.08768L202.041 95.0121C203.297 96.3074 204 98.0409 204 99.8452V204.992C204 207.966 200.384 209.431 198.314 207.297L114.013 120.372C112.757 119.077 112.054 117.343 112.054 115.539V10.3921Z"
                  fill="url(#paint0_linear_353_3379)"
                />
                <path
                  d="M55.073 8.16746C55.073 5.19405 58.689 3.72859 60.7591 5.86307L144.778 92.4972C146.215 93.9786 147.019 95.9613 147.019 98.025V202.768C147.019 205.741 143.403 207.207 141.333 205.072L57.0317 118.148C55.7755 116.852 55.073 115.119 55.073 113.314V8.16746Z"
                  fill="#F9F9F9"
                />
                <path
                  d="M0 10.3921C0 7.41866 3.61605 5.95319 5.68611 8.08768L89.9869 95.0121C91.2431 96.3074 91.9456 98.0409 91.9456 99.8452V204.992C91.9456 207.966 88.3296 209.431 86.2595 207.297L1.95872 120.372C0.702526 119.077 0 117.343 0 115.539V10.3921Z"
                  fill="url(#paint1_linear_353_3379)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_353_3379"
                  x1="158.027"
                  y1="2.22461"
                  x2="158.027"
                  y2="213.16"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#0054A1" />
                  <stop offset="1" stop-color="#004586" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_353_3379"
                  x1="45.9728"
                  y1="2.22461"
                  x2="45.9728"
                  y2="213.16"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#A9C23F" />
                  <stop offset="1" stop-color="#93B600" />
                </linearGradient>
              </defs>
            </svg>
          </h4>
        </Container>

        <div className="services_box">
          <div className="box">
            <h5>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
              >
                <g clip-path="url(#clip0_353_3502)">
                  <path d="M27.2383 12.2383C26.0228 12.2383 24.9888 13.028 24.6208 14.1211H17.6105V15.8789H24.6207C25.6526 18.8021 29.9384 18.1369 29.9999 14.9999C30 13.4772 28.7611 12.2383 27.2383 12.2383Z" />
                  <path d="M23.4727 19.7696C23.0312 19.7696 22.614 19.8742 22.2435 20.0592L20.3285 18.1442C20.1638 17.9794 19.9402 17.8867 19.7071 17.8867H17.6106V19.6445H19.343L21.0006 21.3021C20.0766 23.0897 21.4514 25.3199 23.4727 25.2929C27.1313 25.1543 27.1306 19.9079 23.4727 19.7696Z" />
                  <path d="M4.81945 15.8789H0C0.0964453 17.5593 0.46834 19.1876 1.09506 20.711H5.38289C5.06045 19.1738 4.86932 17.5474 4.81945 15.8789Z" />
                  <path d="M5.38289 9.28906H1.09506C0.46834 10.8124 0.0964453 12.4407 0 14.1211H4.81945C4.86932 12.4527 5.06045 10.8262 5.38289 9.28906Z" />
                  <path d="M9.06394 1.20557C4.83306 3.01893 2.71988 6.21 1.95892 7.53117H5.82019C6.41603 5.47529 7.42689 3.0883 9.06394 1.20557Z" />
                  <path d="M1.95892 22.4688C2.71988 23.7899 4.83306 26.981 9.06394 28.7944C7.4266 26.9113 6.41603 24.5247 5.82019 22.4688H1.95892Z" />
                  <path d="M14.9738 0C11.5987 0 8.99832 3.29883 7.65582 7.53123H15.8527V0.878906C15.8527 0.393516 15.4592 0 14.9738 0Z" />
                  <path d="M14.9738 30C15.4592 30 15.8527 29.6065 15.8527 29.1211V22.4688H7.65582C9.0002 26.7071 11.6032 30 14.9738 30Z" />
                  <path d="M6.57806 14.1211H15.8527V9.28906H7.1807C6.83605 10.8118 6.63115 12.4409 6.57806 14.1211Z" />
                  <path d="M20.3285 11.8559L22.2435 9.94086C24.0308 10.8649 26.2614 9.49009 26.2343 7.46873C26.2343 5.94593 24.9954 4.70703 23.4726 4.70703C21.4514 4.68019 20.0762 6.9105 21.0005 8.69791L19.343 10.3555H17.6105V12.1133H19.707C19.9402 12.1133 20.1637 12.0207 20.3285 11.8559Z" />
                  <path d="M7.1807 20.711H15.8527V15.8789H6.57806C6.63115 17.5591 6.83605 19.1882 7.1807 20.711Z" />
                </g>
                <defs>
                  <clipPath id="clip0_353_3502">
                    <rect width="30" height="30" />
                  </clipPath>
                </defs>
              </svg>
              Digital
            </h5>
            <p>
              We offer core insights-driven digital transformation capabilities,
              modernize key systems to accelerate innovation, and provide a
              design-led, unified, and personalized experience.
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
                <path
                  d="M17.25 8.25L21 12M21 12L17.25 15.75M21 12H3"
                  stroke="#01519b"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="box">
            <h5>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M27.3469 19.839V8.17341H12.6125V19.839H27.3469ZM22.3367 3.55076C22.3367 2.25154 21.2789 1.19373 19.9797 1.19373C18.6805 1.19373 17.6227 2.25076 17.6227 3.55076C17.6227 4.68982 18.4352 5.64294 19.5109 5.86091V7.23591H20.4484V5.86091C21.5242 5.64294 22.3367 4.6906 22.3367 3.55076ZM26.2844 23.8336C26.2844 22.7594 26.0117 21.7086 25.4945 20.7773H14.4648C13.9477 21.7086 13.675 22.7601 13.675 23.8336C13.675 27.3101 16.5031 30.1383 19.9797 30.1383C23.4563 30.1383 26.2844 27.3101 26.2844 23.8336ZM27.8156 20.7765H29.7891C30.0242 21.3031 30.5313 21.6351 31.1219 21.6351H33.5344C33.8234 21.6351 34.0594 21.8703 34.0594 22.1601V25.5054C34.0594 25.7945 33.8234 26.0304 33.5344 26.0304H31.1219C30.4781 26.0304 29.9328 26.4258 29.732 27.0367C29.5719 27.5234 29.3734 28.0031 29.1406 28.4609C28.85 29.0359 28.9563 29.7008 29.4117 30.1562L31.118 31.8625C31.2164 31.9609 31.2711 32.0929 31.2711 32.2336C31.2711 32.375 31.2164 32.5062 31.118 32.6054L28.7531 34.9703C28.6539 35.0695 28.5219 35.1234 28.3813 35.1234C28.2406 35.1234 28.1086 35.0695 28.0102 34.9703L26.3031 33.264C25.8477 32.8086 25.1828 32.7023 24.6086 32.9937C24.15 33.2258 23.6703 33.425 23.1836 33.5844C22.5727 33.7851 22.1773 34.3304 22.1773 34.9742V37.3867C22.1773 37.6758 21.9422 37.9117 21.6523 37.9117H18.307C18.0172 37.9117 17.782 37.6758 17.782 37.3867V34.9742C17.782 34.3304 17.3867 33.7851 16.7758 33.5844C16.2891 33.4242 15.8102 33.2258 15.3508 32.9929C14.7766 32.7023 14.1109 32.8086 13.6563 33.264L11.9492 34.9703C11.8508 35.0695 11.7188 35.1234 11.5781 35.1234C11.4375 35.1234 11.3055 35.0695 11.207 34.9703L8.84141 32.6054C8.74297 32.5062 8.68828 32.375 8.68828 32.2336C8.68828 32.0929 8.74297 31.9609 8.84141 31.8625L10.5477 30.1562C11.0031 29.7008 11.1094 29.0351 10.8188 28.4609C10.5859 28.0023 10.3875 27.5226 10.2273 27.0367C10.0266 26.4258 9.48125 26.0304 8.8375 26.0304H6.425C6.13594 26.0304 5.9 25.7945 5.9 25.5054V22.1601C5.9 21.8703 6.13594 21.6351 6.425 21.6351H8.8375C9.42813 21.6351 9.93594 21.3031 10.1703 20.7765H12.1438H13.4133C12.9695 21.7289 12.7375 22.7719 12.7375 23.8328C12.7375 27.8265 15.9859 31.075 19.9797 31.075C23.9734 31.075 27.2219 27.8258 27.2219 23.8328C27.2219 22.7711 26.9898 21.7289 26.5461 20.7765H27.8156ZM11.675 15.9289V12.0844C10.8852 12.3703 10.3203 13.1336 10.3203 14.007C10.3203 14.8789 10.8852 15.6429 11.675 15.9289ZM28.2844 12.0844V15.9289C29.0742 15.6437 29.6391 14.8797 29.6391 14.007C29.6391 13.1336 29.0742 12.3695 28.2844 12.0844ZM22.0945 12.307C22.0945 11.4265 22.8109 10.7109 23.6914 10.7109C24.5711 10.7109 25.2875 11.4265 25.2875 12.307C25.2875 13.1875 24.5711 13.9039 23.6914 13.9039C22.8109 13.9039 22.0945 13.1875 22.0945 12.307ZM16.2688 13.9039C15.3883 13.9039 14.6719 13.1875 14.6719 12.307C14.6719 11.4265 15.3883 10.7109 16.2688 10.7109C17.1484 10.7109 17.8648 11.4265 17.8648 12.307C17.8648 13.1875 17.1484 13.9039 16.2688 13.9039ZM23.6914 14.8406C22.2938 14.8406 21.157 13.7039 21.157 12.307C21.157 10.9101 22.2938 9.77341 23.6914 9.77341C25.0883 9.77341 26.225 10.9101 26.225 12.307C26.225 13.7039 25.0883 14.8406 23.6914 14.8406ZM18.8023 12.307C18.8023 13.7039 17.6656 14.8406 16.2688 14.8406C14.8711 14.8406 13.7344 13.7039 13.7344 12.307C13.7344 10.9101 14.8711 9.77341 16.2688 9.77341C17.6656 9.77341 18.8023 10.9101 18.8023 12.307Z"
                  fill="url(#paint0_linear_353_3523)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_353_3523"
                    x1="19.9797"
                    y1="1.19373"
                    x2="19.9797"
                    y2="37.9117"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#0054A1" />
                    <stop offset="1" stop-color="#004586" />
                  </linearGradient>
                </defs>
              </svg>
              Data & AI
            </h5>
            <p>
              We enable enterprises to transform data into a business advantage
              by tapping into the capabilities of ML, advanced analytics,
              generative AI, and connected intelligence.
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
                <path
                  d="M17.25 8.25L21 12M21 12L17.25 15.75M21 12H3"
                  stroke="#01519b"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="box">
            <h5>
              <svg xmlns="http://www.w3.org/2000/svg" width="31" height="33" viewBox="0 0 31 33" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M25.0355 17.6369C28.0071 17.6369 30.4249 15.2286 30.4249 12.2679C30.4249 9.48298 28.2422 7.1321 25.4552 6.91541C25.2453 6.899 25.0813 6.72605 25.0772 6.5155C25.0129 3.55076 22.5383 1.13904 19.5606 1.13904C18.0902 1.13904 16.7066 1.70847 15.6655 2.74207C15.5739 2.83298 15.4447 2.87537 15.3168 2.85691C15.189 2.83845 15.0776 2.76052 15.016 2.64705C14.1718 1.0946 12.5469 0.130737 10.7764 0.130737C8.11995 0.130737 5.95774 2.28406 5.95774 4.93025C5.95774 5.4238 6.03293 5.91052 6.18059 6.37742C6.21887 6.49773 6.19905 6.62898 6.12795 6.73289C6.05618 6.83679 5.94133 6.90242 5.81555 6.91062C2.98684 7.09041 0.77063 9.44402 0.77063 12.2679C0.77063 15.2286 3.1885 17.6369 6.16008 17.6369H25.0355ZM21.5997 18.4777V22.837C21.5997 23.0633 21.7829 23.2471 22.0099 23.2471H24.9616C25.1401 23.8658 25.7122 24.3204 26.389 24.3204C27.2079 24.3204 27.8738 23.6552 27.8738 22.8377C27.8738 22.0201 27.2079 21.3543 26.389 21.3543C25.7122 21.3543 25.1401 21.8082 24.9616 22.4275H22.4207V18.4784H21.5997V18.4777ZM19.1737 18.4777H19.994V27.6905C21.0706 27.8846 21.8909 28.8266 21.8909 29.9566C21.8909 31.2267 20.856 32.2596 19.5838 32.2596C18.3116 32.2596 17.2767 31.2267 17.2767 29.9566C17.2767 28.8266 18.097 27.8846 19.1737 27.6905V18.4777ZM12.1579 22.3427C10.8858 22.3427 9.85081 23.3757 9.85081 24.6458C9.85081 25.9152 10.8858 26.9488 12.1579 26.9488C13.29 26.9488 14.2333 26.1312 14.4275 25.0559H17.3669C17.5932 25.0559 17.7771 24.872 17.7771 24.6458V18.4784H16.9568V24.2356H14.4275C14.2333 23.161 13.29 22.3427 12.1579 22.3427ZM7.82258 18.4777H8.6429V27.6905C9.71956 27.8846 10.5399 28.8266 10.5399 29.9566C10.5399 31.2267 9.50491 32.2596 8.23274 32.2596C6.96057 32.2596 5.92561 31.2267 5.92561 29.9566C5.92561 28.8266 6.74524 27.8846 7.82258 27.6905V18.4777ZM5.21741 22.6558V18.4073C4.93782 18.3649 4.6637 18.3034 4.39709 18.2248V22.6558C3.77708 22.8343 3.32249 23.4051 3.32249 24.0804C3.32249 24.898 3.98899 25.5632 4.80793 25.5632C5.62688 25.5632 6.29338 24.898 6.29338 24.0804C6.2927 23.4044 5.83743 22.8336 5.21741 22.6558Z" fill="url(#paint0_linear_353_3562)" />
                <defs>
                  <linearGradient id="paint0_linear_353_3562" x1="15.5978" y1="0.130737" x2="15.5978" y2="32.2596" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#0054A1" />
                    <stop offset="1" stop-color="#004586" />
                  </linearGradient>
                </defs>
              </svg>
              Cloud
            </h5>
            <p>
              We help enterprises scale and adapt to evolving needs within a
              secure hybrid or pure cloud environment by leveraging end-to-end
              and outcome-based cloud solutions.
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
                <path
                  d="M17.25 8.25L21 12M21 12L17.25 15.75M21 12H3"
                  stroke="#01519b"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="box">
            <h5>
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M28.8333 3.58337C28.1433 3.58337 27.5833 3.02337 27.5833 2.33337C27.5833 1.64337 28.1433 1.08337 28.8333 1.08337H31.3333C33.865 1.08337 35.9167 3.13504 35.9167 5.66671V8.16671C35.9167 8.85671 35.3567 9.41671 34.6667 9.41671C33.9767 9.41671 33.4167 8.85671 33.4167 8.16671V5.66671C33.4167 4.51671 32.4833 3.58337 31.3333 3.58337H28.8333Z" fill="url(#paint0_linear_353_3533)" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M28.8333 36.9168C28.1433 36.9168 27.5833 36.3568 27.5833 35.6668C27.5833 34.9768 28.1433 34.4168 28.8333 34.4168H31.3333C32.4833 34.4168 33.4167 33.4835 33.4167 32.3335V29.8335C33.4167 29.1435 33.9767 28.5835 34.6667 28.5835C35.3567 28.5835 35.9167 29.1435 35.9167 29.8335V32.3335C35.9167 34.8652 33.865 36.9168 31.3333 36.9168H28.8333Z" fill="url(#paint1_linear_353_3533)" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.16667 1.08337C7.85667 1.08337 8.41667 1.64337 8.41667 2.33337C8.41667 3.02337 7.85667 3.58337 7.16667 3.58337H4.66667C3.51667 3.58337 2.58333 4.51671 2.58333 5.66671V8.16671C2.58333 8.85671 2.02333 9.41671 1.33333 9.41671C0.643332 9.41671 0.0833321 8.85671 0.0833321 8.16671V5.66671C0.0833321 3.13504 2.135 1.08337 4.66667 1.08337H7.16667Z" fill="url(#paint2_linear_353_3533)" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.16667 34.4168C7.85667 34.4168 8.41667 34.9768 8.41667 35.6668C8.41667 36.3568 7.85667 36.9168 7.16667 36.9168H4.66667C2.135 36.9168 0.0833321 34.8652 0.0833321 32.3335V29.8335C0.0833321 29.1435 0.643332 28.5835 1.33333 28.5835C2.02333 28.5835 2.58333 29.1435 2.58333 29.8335V32.3335C2.58333 33.4835 3.51667 34.4168 4.66667 34.4168H7.16667Z" fill="url(#paint3_linear_353_3533)" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M30.9167 8.16671V13.1667C30.9167 13.7184 30.6967 14.2484 30.3067 14.64C29.915 15.03 29.3867 15.25 28.8333 15.25H7.16667C6.61333 15.25 6.085 15.03 5.69333 14.64C5.30333 14.2484 5.08333 13.7184 5.08333 13.1667V8.16671C5.08333 7.61504 5.30333 7.08504 5.69333 6.69337C6.085 6.30337 6.61333 6.08337 7.16667 6.08337H28.8333C29.3867 6.08337 29.915 6.30337 30.3067 6.69337C30.6967 7.08504 30.9167 7.61337 30.9167 8.16671Z" fill="url(#paint4_linear_353_3533)" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.75 19.8333V29.8333C16.75 30.9833 15.8167 31.9167 14.6667 31.9167H7.16667C6.01667 31.9167 5.08333 30.9833 5.08333 29.8333V19.8333C5.08333 18.6833 6.01667 17.75 7.16667 17.75H14.6667C15.8167 17.75 16.75 18.6833 16.75 19.8333Z" fill="url(#paint5_linear_353_3533)" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M30.9167 19.8333V29.8333C30.9167 30.9833 29.9833 31.9167 28.8333 31.9167H21.3333C20.1833 31.9167 19.25 30.9833 19.25 29.8333V19.8333C19.25 18.6833 20.1833 17.75 21.3333 17.75H28.8333C29.9833 17.75 30.9167 18.6833 30.9167 19.8333Z" fill="url(#paint6_linear_353_3533)" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M33.4167 12.3334C33.4167 11.6434 33.9767 11.0834 34.6667 11.0834C35.3567 11.0834 35.9167 11.6434 35.9167 12.3334V14C35.9167 14.69 35.3567 15.25 34.6667 15.25C33.9767 15.25 33.4167 14.69 33.4167 14V12.3334Z" fill="url(#paint7_linear_353_3533)" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3333 3.58337C10.6433 3.58337 10.0833 3.02337 10.0833 2.33337C10.0833 1.64337 10.6433 1.08337 11.3333 1.08337H13C13.69 1.08337 14.25 1.64337 14.25 2.33337C14.25 3.02337 13.69 3.58337 13 3.58337H11.3333Z" fill="url(#paint8_linear_353_3533)" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.0833321 12.3334C0.0833321 11.6434 0.643332 11.0834 1.33333 11.0834C2.02333 11.0834 2.58333 11.6434 2.58333 12.3334V14C2.58333 14.69 2.02333 15.25 1.33333 15.25C0.643332 15.25 0.0833321 14.69 0.0833321 14V12.3334Z" fill="url(#paint9_linear_353_3533)" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.3333 36.9167C10.6433 36.9167 10.0833 36.3567 10.0833 35.6667C10.0833 34.9767 10.6433 34.4167 11.3333 34.4167H13C13.69 34.4167 14.25 34.9767 14.25 35.6667C14.25 36.3567 13.69 36.9167 13 36.9167H11.3333Z" fill="url(#paint10_linear_353_3533)" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M33.4167 18.1667C33.4167 17.4767 33.9767 16.9167 34.6667 16.9167C35.3567 16.9167 35.9167 17.4767 35.9167 18.1667V19.8334C35.9167 20.5234 35.3567 21.0834 34.6667 21.0834C33.9767 21.0834 33.4167 20.5234 33.4167 19.8334V18.1667Z" fill="url(#paint11_linear_353_3533)" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1667 3.58337C16.4767 3.58337 15.9167 3.02337 15.9167 2.33337C15.9167 1.64337 16.4767 1.08337 17.1667 1.08337H18.8333C19.5233 1.08337 20.0833 1.64337 20.0833 2.33337C20.0833 3.02337 19.5233 3.58337 18.8333 3.58337H17.1667Z" fill="url(#paint12_linear_353_3533)" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.0833321 18.1667C0.0833321 17.4767 0.643332 16.9167 1.33333 16.9167C2.02333 16.9167 2.58333 17.4767 2.58333 18.1667V19.8334C2.58333 20.5234 2.02333 21.0834 1.33333 21.0834C0.643332 21.0834 0.0833321 20.5234 0.0833321 19.8334V18.1667Z" fill="url(#paint13_linear_353_3533)" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1667 36.9167C16.4767 36.9167 15.9167 36.3567 15.9167 35.6667C15.9167 34.9767 16.4767 34.4167 17.1667 34.4167H18.8333C19.5233 34.4167 20.0833 34.9767 20.0833 35.6667C20.0833 36.3567 19.5233 36.9167 18.8333 36.9167H17.1667Z" fill="url(#paint14_linear_353_3533)" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M33.4167 24C33.4167 23.31 33.9767 22.75 34.6667 22.75C35.3567 22.75 35.9167 23.31 35.9167 24V25.6667C35.9167 26.3567 35.3567 26.9167 34.6667 26.9167C33.9767 26.9167 33.4167 26.3567 33.4167 25.6667V24Z" fill="url(#paint15_linear_353_3533)" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M23 3.58337C22.31 3.58337 21.75 3.02337 21.75 2.33337C21.75 1.64337 22.31 1.08337 23 1.08337H24.6667C25.3567 1.08337 25.9167 1.64337 25.9167 2.33337C25.9167 3.02337 25.3567 3.58337 24.6667 3.58337H23Z" fill="url(#paint16_linear_353_3533)" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.0833321 24C0.0833321 23.31 0.643332 22.75 1.33333 22.75C2.02333 22.75 2.58333 23.31 2.58333 24V25.6667C2.58333 26.3567 2.02333 26.9167 1.33333 26.9167C0.643332 26.9167 0.0833321 26.3567 0.0833321 25.6667V24Z" fill="url(#paint17_linear_353_3533)" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M23 36.9167C22.31 36.9167 21.75 36.3567 21.75 35.6667C21.75 34.9767 22.31 34.4167 23 34.4167H24.6667C25.3567 34.4167 25.9167 34.9767 25.9167 35.6667C25.9167 36.3567 25.3567 36.9167 24.6667 36.9167H23Z" fill="url(#paint18_linear_353_3533)" />
                <defs>
                  <linearGradient id="paint0_linear_353_3533" x1="31.75" y1="1.08337" x2="31.75" y2="9.41671" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#0054A1" />
                    <stop offset="1" stop-color="#004586" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_353_3533" x1="31.75" y1="28.5835" x2="31.75" y2="36.9168" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#0054A1" />
                    <stop offset="1" stop-color="#004586" />
                  </linearGradient>
                  <linearGradient id="paint2_linear_353_3533" x1="4.25" y1="1.08337" x2="4.25" y2="9.41671" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#0054A1" />
                    <stop offset="1" stop-color="#004586" />
                  </linearGradient>
                  <linearGradient id="paint3_linear_353_3533" x1="4.25" y1="28.5835" x2="4.25" y2="36.9168" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#0054A1" />
                    <stop offset="1" stop-color="#004586" />
                  </linearGradient>
                  <linearGradient id="paint4_linear_353_3533" x1="18" y1="6.08337" x2="18" y2="15.25" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#0054A1" />
                    <stop offset="1" stop-color="#004586" />
                  </linearGradient>
                  <linearGradient id="paint5_linear_353_3533" x1="10.9167" y1="17.75" x2="10.9167" y2="31.9167" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#0054A1" />
                    <stop offset="1" stop-color="#004586" />
                  </linearGradient>
                  <linearGradient id="paint6_linear_353_3533" x1="25.0833" y1="17.75" x2="25.0833" y2="31.9167" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#0054A1" />
                    <stop offset="1" stop-color="#004586" />
                  </linearGradient>
                  <linearGradient id="paint7_linear_353_3533" x1="34.6667" y1="11.0834" x2="34.6667" y2="15.25" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#0054A1" />
                    <stop offset="1" stop-color="#004586" />
                  </linearGradient>
                  <linearGradient id="paint8_linear_353_3533" x1="12.1667" y1="1.08337" x2="12.1667" y2="3.58337" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#0054A1" />
                    <stop offset="1" stop-color="#004586" />
                  </linearGradient>
                  <linearGradient id="paint9_linear_353_3533" x1="1.33333" y1="11.0834" x2="1.33333" y2="15.25" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#0054A1" />
                    <stop offset="1" stop-color="#004586" />
                  </linearGradient>
                  <linearGradient id="paint10_linear_353_3533" x1="12.1667" y1="34.4167" x2="12.1667" y2="36.9167" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#0054A1" />
                    <stop offset="1" stop-color="#004586" />
                  </linearGradient>
                  <linearGradient id="paint11_linear_353_3533" x1="34.6667" y1="16.9167" x2="34.6667" y2="21.0834" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#0054A1" />
                    <stop offset="1" stop-color="#004586" />
                  </linearGradient>
                  <linearGradient id="paint12_linear_353_3533" x1="18" y1="1.08337" x2="18" y2="3.58337" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#0054A1" />
                    <stop offset="1" stop-color="#004586" />
                  </linearGradient>
                  <linearGradient id="paint13_linear_353_3533" x1="1.33333" y1="16.9167" x2="1.33333" y2="21.0834" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#0054A1" />
                    <stop offset="1" stop-color="#004586" />
                  </linearGradient>
                  <linearGradient id="paint14_linear_353_3533" x1="18" y1="34.4167" x2="18" y2="36.9167" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#0054A1" />
                    <stop offset="1" stop-color="#004586" />
                  </linearGradient>
                  <linearGradient id="paint15_linear_353_3533" x1="34.6667" y1="22.75" x2="34.6667" y2="26.9167" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#0054A1" />
                    <stop offset="1" stop-color="#004586" />
                  </linearGradient>
                  <linearGradient id="paint16_linear_353_3533" x1="23.8333" y1="1.08337" x2="23.8333" y2="3.58337" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#0054A1" />
                    <stop offset="1" stop-color="#004586" />
                  </linearGradient>
                  <linearGradient id="paint17_linear_353_3533" x1="1.33333" y1="22.75" x2="1.33333" y2="26.9167" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#0054A1" />
                    <stop offset="1" stop-color="#004586" />
                  </linearGradient>
                  <linearGradient id="paint18_linear_353_3533" x1="23.8333" y1="34.4167" x2="23.8333" y2="36.9167" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#0054A1" />
                    <stop offset="1" stop-color="#004586" />
                  </linearGradient>
                </defs>
              </svg>
              User Experience
            </h5>
            <p>
              We help enterprises scale and adapt to evolving needs within a
              secure hybrid or pure cloud environment by leveraging end-to-end
              and outcome-based cloud solutions.
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
                <path
                  d="M17.25 8.25L21 12M21 12L17.25 15.75M21 12H3"
                  stroke="#01519b"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="home_featured">
        <Container>
          <h6>OUR FEATURED INSIGHTS</h6>
          <h2>
            Codespace Partner with AJCL to experience the new digital era with
            our comprehensive digital transformation
          </h2>
          <button>
            Read More
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
      <div className="home_product" id="product">
        <Container>
          <h6>PRODUCTS</h6>
          <h4>
            We develop a suite of innovative software businesses streamline.
          </h4>

          <div className="product_main_wrap">
            <div className="product_inner">
              <Slider {...settings2}>
                <div>
                  <h6>WEB & MOBILE</h6>
                  <Row>
                    <Col md={6}>
                      <h3>Warehouse Management</h3>

                      <ul>
                        <li>Optimized Space & Lower Operating Expenses</li>
                        <li>Inventory Visibility</li>
                        <li>Optimized Supply Chain</li>
                        <li>Internal Automation Benefit</li>
                      </ul>

                      <p>
                        AJCL is an incubator for B2B brands. With the right
                        resources and expertise, Codespace develops for AJCL
                        brands into Digitally Native Vertical Brands (DNVB),
                        enabling them with superior warehousing, digital
                        marketing, and e-commerce infrastructure to reach their
                        full potential.
                      </p>

                      <button className="product_btn">
                        View Case Study
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <mask
                            id="mask0_498_436"
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          >
                            <rect width="24" height="24" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_498_436)">
                            <path
                              d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z"
                              fill="white"
                            />
                          </g>
                        </svg>
                      </button>
                    </Col>
                    <Col md={6}>
                      <img src="/images/product_img1.png" alt="" />
                    </Col>
                  </Row>
                </div>
                <div>
                  <h6>WEB & MOBILE</h6>
                  <Row>
                    <Col md={6}>
                      <h3>Warehouse Management</h3>

                      <ul>
                        <li>Optimized Space & Lower Operating Expenses</li>
                        <li>Inventory Visibility</li>
                        <li>Optimized Supply Chain</li>
                        <li>Internal Automation Benefit</li>
                      </ul>

                      <p>
                        AJCL is an incubator for B2B brands. With the right
                        resources and expertise, Codespace develops for AJCL
                        brands into Digitally Native Vertical Brands (DNVB),
                        enabling them with superior warehousing, digital
                        marketing, and e-commerce infrastructure to reach their
                        full potential.
                      </p>

                      <button className="product_btn">
                        View Case Study
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <mask
                            id="mask0_498_436"
                            style={{ maskType: "alpha" }}
                            maskUnits="userSpaceOnUse"
                            x="0"
                            y="0"
                            width="24"
                            height="24"
                          >
                            <rect width="24" height="24" fill="#D9D9D9" />
                          </mask>
                          <g mask="url(#mask0_498_436)">
                            <path
                              d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z"
                              fill="white"
                            />
                          </g>
                        </svg>
                      </button>
                    </Col>
                    <Col md={6}>
                      <img src="/images/product_img1.png" alt="" />
                    </Col>
                  </Row>
                </div>
              </Slider>
            </div>
          </div>
        </Container>
      </div>

      <Partners />
      <Industries />

      <div className="home_clients">
        <Container>
          <h6>Client</h6>

          <Row>
            <Col md={6}>
              <h4>Who We Work With</h4>
              <p>
                Codespace collaborates with industry frontrunners and Leading
                enterprises across the country.
              </p>
              <button>
                See More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <mask
                    id="mask0_11_472"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                  >
                    <rect width="24" height="24" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_11_472)">
                    <path
                      d="M16.175 13H4V11H16.175L10.575 5.4L12 4L20 12L12 20L10.575 18.6L16.175 13Z"
                      fill="#131415"
                    />
                  </g>
                </svg>
              </button>
            </Col>
            <Col md={6} className="client_imgs">
              <Row>
                <Col md={3} xs={6}>
                  <img src="/images/client1.jpg" alt="" />
                </Col>
                <Col md={3} xs={6}>
                  <img src="/images/client2.jpg" alt="" />
                </Col>
                <Col md={3} xs={6}>
                  <img src="/images/client3.jpg" alt="" />
                </Col>
                <Col md={3} xs={6}>
                  <img src="/images/client4.jpg" alt="" />
                </Col>
              </Row>
              <Row>
                <Col md={3} xs={6}>
                  <img src="/images/client5.jpg" alt="" />
                </Col>
                <Col md={3} xs={6}>
                  <img src="/images/client6.jpg" alt="" />
                </Col>
                <Col md={3} xs={6}>
                  <img src="/images/client7.jpg" alt="" style={{ width: "60px" }} />
                </Col>
                <Col md={3} xs={6}>
                  <img src="/images/client8.jpg" alt="" />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="technology_work">
        <Container>
          <h1>Technologies we work with</h1>

          <ul>
            <li>Mobile</li>
            <li>Frontend</li>
            <li>Database</li>
            <li>Backend</li>
            <li>CMS</li>
            <li>Infra & Devops</li>
          </ul>

          <div className="tech_languages">
            <Row className="justify-content-center" style={{ gap: "40px 0" }}>
              <Col md={2} xs={6}>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="60"
                    height="72"
                    viewBox="0 0 60 72"
                    fill="none"
                  >
                    <path
                      d="M49.9915 68.3586C46.1147 72.1167 41.8818 71.5233 37.8072 69.7432C33.4952 67.9234 29.5393 67.8443 24.99 69.7432C19.2934 72.1958 16.2869 71.4838 12.8848 68.3586C-6.42018 48.4602 -3.5719 18.1577 18.344 17.0501C23.6845 17.327 27.4031 19.9775 30.5283 20.2148C35.1963 19.2654 39.6665 16.5358 44.651 16.8918C50.6244 17.3666 55.1342 19.7401 58.1012 24.0125C45.7586 31.4101 48.686 47.669 60 52.2184C57.7451 58.1523 54.8177 64.0466 49.9519 68.3981L49.9915 68.3586ZM30.1327 16.8127C29.5393 7.99099 36.6995 0.712069 44.9279 0C46.0751 10.2063 35.671 17.8017 30.1327 16.8127Z"
                      fill="white"
                    />
                  </svg>
                  <p>IOS</p>
                </div>
              </Col>
              <Col md={2} xs={6}>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                  >
                    <path
                      d="M10.5025 21.5016C8.47601 21.5006 6.83351 23.1471 6.83301 25.1721L6.83551 40.5401C6.83518 41.0223 6.9299 41.4998 7.11427 41.9454C7.29863 42.391 7.56901 42.7958 7.90996 43.1368C8.2509 43.4778 8.65571 43.7482 9.10125 43.9327C9.54679 44.1171 10.0243 44.2119 10.5065 44.2116C10.9886 44.2121 11.4661 44.1175 11.9117 43.9332C12.3572 43.7489 12.7619 43.4785 13.1028 43.1374C13.4436 42.7964 13.7138 42.3915 13.8979 41.9459C14.0819 41.5003 14.1763 41.0227 14.1755 40.5406V25.1701C14.1744 24.1967 13.787 23.2635 13.0983 22.5757C12.4095 21.8878 11.4759 21.5015 10.5025 21.5016ZM40.099 7.70061L42.6605 3.02311C42.7258 2.90445 42.7413 2.76476 42.7037 2.63466C42.6661 2.50457 42.5785 2.39468 42.46 2.32911C42.3413 2.2649 42.202 2.25027 42.0726 2.28839C41.9431 2.32652 41.834 2.41431 41.769 2.53261L39.1815 7.25911C37.0045 6.29011 34.568 5.74711 31.99 5.74961C29.419 5.74711 26.9835 6.28861 24.8155 7.25211L22.225 2.53761C22.1934 2.47876 22.1504 2.42677 22.0985 2.38465C22.0467 2.34254 21.987 2.31113 21.9229 2.29225C21.8588 2.27336 21.7916 2.26739 21.7252 2.27466C21.6588 2.28193 21.5945 2.30231 21.536 2.33461C21.477 2.36616 21.4248 2.40918 21.3826 2.46113C21.3404 2.51309 21.3089 2.57294 21.2901 2.63719C21.2713 2.70144 21.2655 2.7688 21.273 2.83532C21.2806 2.90184 21.3013 2.96619 21.334 3.02461L23.8965 7.69911C18.8615 10.2956 15.4595 15.2406 15.4625 20.9181L48.5215 20.9141C48.5225 15.2386 45.1265 10.3036 40.099 7.70061ZM24.471 14.9291C24.1034 14.9289 23.7508 14.7827 23.491 14.5226C23.2312 14.2624 23.0853 13.9098 23.0855 13.5421C23.0857 13.1744 23.2319 12.8219 23.4921 12.5621C23.7522 12.3023 24.1049 12.1564 24.4725 12.1566C24.8402 12.1573 25.1927 12.3036 25.4527 12.5635C25.7128 12.8235 25.8592 13.1759 25.86 13.5436C25.8593 13.9115 25.7127 14.264 25.4522 14.5238C25.1918 14.7836 24.8389 14.9294 24.471 14.9291ZM39.524 14.9266C39.342 14.9267 39.1618 14.891 38.9936 14.8214C38.8254 14.7518 38.6726 14.6498 38.5438 14.5211C38.4151 14.3925 38.313 14.2397 38.2434 14.0715C38.1737 13.9033 38.1379 13.7231 38.138 13.5411C38.14 13.1738 38.2866 12.822 38.5461 12.562C38.8056 12.302 39.1572 12.1547 39.5245 12.1521C39.8915 12.1551 40.2426 12.3027 40.5016 12.5628C40.7605 12.8229 40.9066 13.1746 40.908 13.5416C40.9082 13.7235 40.8725 13.9036 40.8031 14.0716C40.7336 14.2397 40.6317 14.3924 40.5031 14.521C40.3746 14.6497 40.222 14.7517 40.054 14.8213C39.8859 14.8909 39.7059 14.9267 39.524 14.9266ZM15.5975 22.1951L15.603 46.0126C15.6024 46.527 15.7033 47.0365 15.8999 47.5118C16.0965 47.9872 16.3849 48.4191 16.7487 48.7828C17.1124 49.1465 17.5444 49.4349 18.0198 49.6314C18.4951 49.8279 19.0046 49.9288 19.519 49.9281L22.1855 49.9291L22.1885 58.0611C22.188 60.0861 23.834 61.7321 25.856 61.7321C27.884 61.7321 29.527 60.0846 29.5275 58.0586L29.5255 49.9286L34.48 49.9271L34.482 58.0586C34.482 60.0821 36.1285 61.7316 38.151 61.7276C40.179 61.7291 41.823 60.0816 41.8225 58.0556L41.82 49.9261L44.496 49.9241C45.0105 49.9242 45.5199 49.8229 45.9952 49.6261C46.4705 49.4293 46.9024 49.1408 47.2662 48.7771C47.6301 48.4133 47.9187 47.9815 48.1156 47.5062C48.3125 47.031 48.4139 46.5216 48.414 46.0071L48.4095 22.1896L15.5975 22.1951ZM57.1645 25.1666C57.1646 24.6846 57.0697 24.2073 56.8852 23.762C56.7008 23.3167 56.4304 22.9121 56.0895 22.5714C55.7487 22.2306 55.344 21.9603 54.8987 21.776C54.4533 21.5917 53.976 21.4969 53.494 21.4971C51.4675 21.4951 49.8255 23.1406 49.8255 25.1681L49.8285 40.5371C49.8282 41.0191 49.9229 41.4964 50.1072 41.9418C50.2915 42.3871 50.5617 42.7918 50.9025 43.1326C51.2434 43.4734 51.648 43.7437 52.0934 43.928C52.5387 44.1122 53.016 44.2069 53.498 44.2066C53.9801 44.2067 54.4574 44.1117 54.9027 43.9272C55.3481 43.7427 55.7527 43.4722 56.0934 43.1312C56.4342 42.7903 56.7044 42.3855 56.8886 41.94C57.0728 41.4946 57.1674 41.0172 57.167 40.5351L57.1645 25.1666Z"
                      fill="white"
                    />
                  </svg>
                  <p>Android</p>
                </div>
              </Col>
              <Col md={2} xs={6}>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_99_628)">
                      <mask
                        id="mask0_99_628"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="64"
                        height="64"
                      >
                        <path d="M0 0H64V64H0V0Z" fill="white" />
                      </mask>
                      <g mask="url(#mask0_99_628)">
                        <path
                          d="M64 31.1705C64 26.9305 58.6907 22.9118 50.5493 20.4212C52.4293 12.1252 51.5947 5.5225 47.9147 3.40784C47.023 2.90842 46.0138 2.65704 44.992 2.67984V5.5865C45.592 5.5865 46.0747 5.7065 46.48 5.92784C48.2533 6.9465 49.024 10.8185 48.424 15.8025C48.28 17.0292 48.0453 18.3198 47.7573 19.6372C45.031 18.9802 42.264 18.5054 39.4747 18.2158C37.8129 15.9233 36 13.7442 34.048 11.6932C38.3013 7.74117 42.2933 5.57584 45.008 5.57584V2.6665C41.4187 2.6665 36.7227 5.22384 31.9733 9.6585C27.2267 5.25317 22.528 2.71984 18.9413 2.71984V5.6265C21.6427 5.6265 25.648 7.78117 29.9013 11.7065C28.0747 13.6265 26.248 15.8025 24.512 18.2158C21.7169 18.5022 18.9449 18.9815 16.216 19.6505C15.9276 18.4019 15.7007 17.14 15.536 15.8692C14.9227 10.8825 15.68 7.0105 17.4427 5.98117C17.832 5.7465 18.3413 5.63984 18.9413 5.63984V2.73317C17.848 2.73317 16.8533 2.96784 15.9947 3.46117C12.328 5.57584 11.5067 12.1625 13.3973 20.4345C5.28267 22.9412 0 26.9438 0 31.1705C0 35.4105 5.30933 39.4292 13.4507 41.9172C11.5707 50.2158 12.4053 56.8185 16.0853 58.9305C16.9333 59.4265 17.9253 59.6612 19.0187 59.6612C22.608 59.6612 27.304 57.1038 32.0533 52.6692C36.8 57.0772 41.496 59.6078 45.0853 59.6078C46.1149 59.6296 47.1318 59.3774 48.032 58.8772C51.6987 56.7652 52.52 50.1785 50.6293 41.9065C58.7173 39.4158 64 35.3972 64 31.1705ZM47.0133 22.4692C46.5066 24.2128 45.9193 25.932 45.2533 27.6212C44.1631 25.5005 42.966 23.4365 41.6667 21.4372C43.52 21.7118 45.3067 22.0505 47.016 22.4692H47.0133ZM41.04 36.3625C40.0633 38.0677 39.0143 39.7306 37.896 41.3465C33.982 41.6915 30.0454 41.6959 26.1307 41.3598C23.8852 38.1523 21.9214 34.7565 20.2613 31.2105C21.9189 27.6561 23.8743 24.2484 26.1067 21.0238C30.0197 20.6782 33.9554 20.6728 37.8693 21.0078C38.952 22.5598 40.0107 24.2185 41.0267 25.9678C42.0187 27.6745 42.92 29.4078 43.7413 31.1572C42.9109 32.9277 42.0097 34.6642 41.04 36.3625ZM45.2533 34.6665C45.9573 36.4158 46.56 38.1625 47.0533 39.8585C45.3467 40.2772 43.544 40.6292 41.68 40.9012C42.974 38.8836 44.1666 36.8028 45.2533 34.6665ZM32.0267 48.5865C30.8133 47.3332 29.6 45.9385 28.4 44.4105C29.5733 44.4638 30.7733 44.5038 31.9867 44.5038C33.2133 44.5038 34.4267 44.4772 35.6133 44.4105C34.44 45.9385 33.2267 47.3332 32.0267 48.5865ZM22.32 40.9012C20.522 40.6406 18.737 40.2972 16.9707 39.8718C17.4533 38.1892 18.0533 36.4532 18.7307 34.7198C19.2667 35.7598 19.8293 36.8052 20.4427 37.8505C21.056 38.8932 21.68 39.9118 22.32 40.9012ZM31.96 13.7545C33.1733 15.0078 34.3867 16.4025 35.5867 17.9305C34.4133 17.8772 33.2133 17.8372 32 17.8372C30.7733 17.8372 29.56 17.8638 28.3733 17.9305C29.5467 16.4025 30.76 15.0078 31.96 13.7545ZM22.3067 21.4398C21.013 23.453 19.8204 25.5293 18.7333 27.6612C18.0486 25.9611 17.4478 24.2283 16.9333 22.4692C18.64 22.0638 20.4427 21.7118 22.3067 21.4398ZM10.5013 37.7705C5.88267 35.8025 2.896 33.2185 2.896 31.1705C2.896 29.1225 5.88267 26.5252 10.5013 24.5705C11.6213 24.0878 12.848 23.6558 14.1147 23.2532C14.8587 25.8078 15.8373 28.4692 17.048 31.1972C15.905 33.763 14.9383 36.4038 14.1547 39.1012C12.9159 38.7176 11.6966 38.2735 10.5013 37.7705ZM17.52 56.4105C15.7467 55.3972 14.976 51.5198 15.576 46.5385C15.72 45.3118 15.9547 44.0185 16.2427 42.7012C18.7973 43.3278 21.5893 43.8105 24.5253 44.1252C26.1871 46.4177 28.0001 48.5967 29.952 50.6478C25.6987 54.5998 21.7067 56.7652 18.992 56.7652C18.4798 56.7708 17.9742 56.6498 17.52 56.4132V56.4105ZM48.464 46.4718C49.0773 51.4558 48.32 55.3305 46.5573 56.3598C46.168 56.5945 45.6587 56.6985 45.0587 56.6985C42.3573 56.6985 38.352 54.5465 34.0987 50.6185C36.0425 48.576 37.8432 46.402 39.488 44.1118C42.2831 43.8255 45.0551 43.3461 47.784 42.6772C48.0853 43.9945 48.3173 45.2585 48.464 46.4718ZM53.4853 37.7705C52.3653 38.2532 51.1387 38.6852 49.872 39.0878C49.0746 36.3767 48.0946 33.7226 46.9387 31.1438C48.1387 28.4318 49.1013 25.7838 49.832 23.2398C51.0747 23.6247 52.2984 24.0687 53.4987 24.5705C58.1173 26.5385 61.104 29.1225 61.104 31.1705C61.0907 33.2185 58.104 35.8158 53.4853 37.7705Z"
                          fill="white"
                        />
                        <path
                          d="M31.9867 37.1333C33.5681 37.1333 35.0847 36.5051 36.2029 35.3869C37.3211 34.2687 37.9493 32.7521 37.9493 31.1707C37.9493 29.5893 37.3211 28.0726 36.2029 26.9544C35.0847 25.8362 33.5681 25.208 31.9867 25.208C30.4053 25.208 28.8886 25.8362 27.7704 26.9544C26.6522 28.0726 26.024 29.5893 26.024 31.1707C26.024 32.7521 26.6522 34.2687 27.7704 35.3869C28.8886 36.5051 30.4053 37.1333 31.9867 37.1333Z"
                          fill="white"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_99_628">
                        <rect width="64" height="64" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p>React Native</p>
                </div>
              </Col>
              <Col md={2} xs={6}>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                  >
                    <path
                      d="M15.7333 40.9998L6.66667 31.9998L36 2.6665H54.0667L15.7333 40.9998ZM36 61.3332L20.2 45.5332L36 29.7332H54.0667L38.2667 45.5332L54.0667 61.3332H36Z"
                      fill="white"
                    />
                  </svg>
                  <p>Flutter</p>
                </div>
              </Col>
              <Col md={2} xs={6}>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_99_643)">
                      <path
                        d="M61.1253 18.7385L60.8507 18.1252L60.4 18.6265C59.312 19.8639 57.9253 20.8132 56.3867 21.3892L55.9627 21.5519L56.1387 21.9652C57.4624 25.1412 58.1422 28.5484 58.1387 31.9892C58.1387 46.4025 46.4133 58.1385 31.9893 58.1385C17.5653 58.1385 5.85066 46.4132 5.85066 31.9999C5.85066 17.5865 17.5893 5.85053 32 5.85053C35.912 5.85053 39.688 6.7012 43.2 8.37586L43.6133 8.57586L43.7893 8.16253C44.4398 6.64863 45.4526 5.31799 46.7387 4.28786L47.264 3.86386L46.664 3.55186C42.133 1.20798 37.104 -0.00949397 32.0027 0.0025296C14.352 0.0025296 0.00265503 14.3519 0.00265503 32.0025C0.00265503 49.6532 14.352 64.0025 32.0027 64.0025C49.6533 64.0025 64.0027 49.6532 64.0027 32.0025C64.0027 27.3892 63.04 22.9279 61.128 18.7412L61.1253 18.7385ZM32 17.4132C28.1327 17.4174 24.4249 18.9556 21.6903 21.6902C18.9557 24.4248 17.4176 28.1325 17.4133 31.9999C17.4176 35.8672 18.9557 39.5749 21.6903 42.3095C24.4249 45.0441 28.1327 46.5823 32 46.5865C35.8673 46.5823 39.575 45.0441 42.3096 42.3095C45.0443 39.5749 46.5824 35.8672 46.5867 31.9999C46.5803 28.1332 45.0415 24.4267 42.3073 21.6925C39.5732 18.9584 35.8667 17.4195 32 17.4132ZM59.5867 12.0612C59.5867 12.9346 59.4146 13.7994 59.0804 14.6063C58.7462 15.4132 58.2563 16.1464 57.6387 16.7639C57.0212 17.3815 56.288 17.8714 55.4811 18.2056C54.6742 18.5398 53.8094 18.7119 52.936 18.7119C52.0626 18.7119 51.1978 18.5398 50.3909 18.2056C49.584 17.8714 48.8508 17.3815 48.2333 16.7639C47.6157 16.1464 47.1258 15.4132 46.7916 14.6063C46.4573 13.7994 46.2853 12.9346 46.2853 12.0612C46.2853 10.2973 46.986 8.60571 48.2333 7.35846C49.4805 6.11122 51.1721 5.41053 52.936 5.41053C54.6999 5.41053 56.3915 6.11122 57.6387 7.35846C58.886 8.60571 59.5867 10.2973 59.5867 12.0612Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_99_643">
                        <rect width="64" height="64" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p>Ionic</p>
                </div>
              </Col>
              <Col md={2} xs={6}>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_99_647)">
                      <path
                        d="M20.0213 0C19.256 0 18.4933 0 17.728 0.00533333C17.0853 0.0106667 16.44 0.0133333 15.7973 0.032C15.4453 0.04 15.096 0.056 14.744 0.072C13.6882 0.113062 12.6362 0.222626 11.5947 0.4C10.2065 0.645455 8.86109 1.09004 7.6 1.72C5.06851 3.00774 3.01003 5.06434 1.72 7.59467C1.06667 8.87467 0.653333 10.1867 0.4 11.5947C0.152 12.9813 0.0746667 14.3947 0.0373333 15.7973C0.0200475 16.4408 0.00938025 17.0844 0.00533333 17.728C0 18.4933 0 19.256 0 20.0213V43.9787C0 44.744 0 45.512 0.00533333 46.2773C0.0106667 46.9173 0.0186667 47.56 0.0373333 48.2027C0.0746667 49.6053 0.152 51.0213 0.4 52.4053C0.653333 53.8133 1.06667 55.1253 1.72 56.4053C3.00853 58.9368 5.06741 60.9938 7.6 62.28C8.88 62.9307 10.1867 63.3467 11.5947 63.6C12.9813 63.848 14.3947 63.9307 15.7973 63.968C16.44 63.9867 17.0853 63.992 17.728 63.9947C18.4933 64 19.256 64 20.0213 64H43.9787C44.744 64 45.5067 64 46.272 63.9947C46.9147 63.992 47.56 63.9867 48.2027 63.968C49.6126 63.9512 51.0192 63.8282 52.4107 63.6C53.8004 63.3609 55.1468 62.916 56.4053 62.28C58.9354 60.9921 60.9921 58.9354 62.28 56.4053C62.9333 55.1253 63.3467 53.8133 63.6 52.4053C63.848 51.0187 63.9307 49.6053 63.968 48.2027C63.9867 47.56 63.992 46.92 63.9947 46.2773C64 45.512 64 44.744 64 43.9787V20.0213C64 19.256 64 18.4933 63.9947 17.728C63.9927 17.0844 63.9838 16.4408 63.968 15.7973C63.9512 14.3892 63.8282 12.9843 63.6 11.5947C63.3612 10.2032 62.9163 8.85501 62.28 7.59467C60.9915 5.06505 58.935 3.00849 56.4053 1.72C55.1468 1.08391 53.8004 0.639018 52.4107 0.4C51.0193 0.171484 49.6126 0.048467 48.2027 0.032C47.561 0.0164873 46.9192 0.00759791 46.2773 0.00533333C45.512 0 44.744 0 43.9787 0H20.0213ZM36.1147 9.09333C47.0853 15.68 53.568 28.192 50.912 38.776C50.848 39.024 50.7787 39.2587 50.7093 39.5013L50.7147 39.504C56.2133 46.272 54.7147 53.5253 54.0107 52.1573C51.152 46.5947 45.8347 47.976 43.1093 49.376C42.8629 49.5223 42.6131 49.6628 42.36 49.7973L42.3067 49.8293L42.3013 49.8347C36.6613 52.8293 29.0827 53.048 21.4693 49.776C15.2702 47.0898 10.0277 42.5927 6.42933 36.8747C8.16 38.1547 10.0293 39.28 12.0213 40.2133C20.072 43.984 28.1573 43.7093 33.88 40.208C25.736 33.9467 18.936 25.7867 13.7227 19.176C12.7316 18.0198 11.8354 16.7856 11.0427 15.4853C17.2827 21.1973 27.144 28.3653 30.6827 30.3547C23.1733 22.4213 16.5547 12.648 16.864 12.96C28.6933 24.88 39.6053 31.616 39.6053 31.616C40.016 31.8427 40.3253 32.0267 40.5653 32.184C40.792 31.6107 40.992 31.0187 41.1627 30.4027C43.0507 23.5013 40.9227 15.608 36.1147 9.09067V9.09333Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_99_647">
                        <rect width="64" height="64" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p>Swift</p>
                </div>
              </Col>
              <Col md={2} xs={6}>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_99_649)">
                      <path
                        d="M3.468 64L33.604 33.334L64 64H3.468ZM0 0H32L0 33.334V0ZM35.73 0L0 37.334V64L64 0H35.73Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_99_649">
                        <rect width="64" height="64" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p>Kotlin</p>
                </div>
              </Col>
              <Col md={2} xs={6}>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                  >
                    <path
                      d="M31.9385 62.6959C15.603 62.6959 1.7535 48.8989 1.625 32.4614C1.59698 28.4959 2.35622 24.5643 3.85872 20.8943C5.36123 17.2244 7.57712 13.8892 10.378 11.0819C13.1974 8.19504 16.5621 5.89699 20.2769 4.3211C23.9916 2.74522 27.9824 1.92289 32.0175 1.90187C35.9802 1.89851 39.9043 2.67918 43.564 4.19892C47.2236 5.71866 50.5464 7.94743 53.341 10.7569C56.182 13.5266 58.4468 16.8312 60.0049 20.4801C61.563 24.1291 62.3836 28.0503 62.4195 32.0179C62.495 48.8199 48.9875 62.5284 32.185 62.6994H31.9385V62.6959ZM32.0335 3.49287C28.209 3.51555 24.4271 4.29746 20.9072 5.79323C17.3872 7.28901 14.1994 9.46888 11.5285 12.2064C8.87218 14.8624 6.76943 18.0193 5.34211 21.4939C3.91478 24.9686 3.19127 28.692 3.2135 32.4484C3.3315 48.0279 16.461 61.0914 31.9285 61.0914H32.1355C48.067 60.9464 60.8875 47.9584 60.828 32.0274C60.7925 28.269 60.0137 24.5548 58.5362 21.0988C57.0587 17.6428 54.9119 14.5134 52.2195 11.8909C49.5783 9.22465 46.4339 7.1094 42.9688 5.66779C39.5038 4.22618 35.7865 3.48692 32.0335 3.49287Z"
                      fill="white"
                    />
                    <path
                      d="M8.445 41.1913V23.4323H12.765V25.0238H10.4735V39.6328H12.7655V41.2243L8.445 41.1913ZM23.1065 32.1358C23.1065 35.3748 21.14 37.2193 18.4765 37.2193C15.813 37.2193 14.038 35.1413 14.038 32.3038C14.038 29.3343 15.899 27.2433 18.6215 27.2433C21.344 27.2433 23.1065 29.4233 23.1065 32.1358ZM15.899 32.2808C15.899 34.2468 16.8855 35.8058 18.579 35.8058C20.2725 35.8058 21.2455 34.2143 21.2455 32.2083C21.2455 30.3868 20.3475 28.6668 18.5785 28.6668C16.8095 28.6668 15.8825 30.3308 15.8825 32.3203L15.899 32.2808ZM24.6025 27.5788C25.4475 27.4338 26.306 27.3618 27.164 27.3648C28.1283 27.271 29.0974 27.4851 29.9325 27.9763C30.2458 28.16 30.5041 28.4244 30.6805 28.7418C30.8569 29.0593 30.945 29.4183 30.9355 29.7813C30.9244 30.2531 30.7645 30.7094 30.4787 31.085C30.1929 31.4606 29.7958 31.7363 29.344 31.8728C30.4785 32.1028 31.294 33.1028 31.294 34.2603C31.2999 34.6407 31.2192 35.0175 31.058 35.3621C30.8968 35.7067 30.6593 36.0101 30.3635 36.2493C29.6795 36.8543 28.542 37.1473 26.7825 37.1473C26.0593 37.1506 25.3367 37.1077 24.619 37.0188L24.6025 27.5788ZM26.352 31.3898H27.2495C28.466 31.3898 29.15 30.8173 29.15 29.9988C29.15 29.1798 28.466 28.6768 27.345 28.6768C27.0091 28.6664 26.673 28.6907 26.342 28.7493L26.352 31.3898ZM26.352 35.8288C26.661 35.8613 26.9735 35.8748 27.282 35.8678C28.4135 35.8678 29.413 35.4373 29.413 34.2768C29.413 33.1163 28.443 32.6853 27.2265 32.6853H26.3515L26.352 35.8288ZM34.77 27.4503H36.5285V33.7273C36.5285 36.3943 35.24 37.2853 33.346 37.2853C32.84 37.2821 32.3379 37.1965 31.8595 37.0318L32.0735 35.6148C32.425 35.7268 32.7935 35.7823 33.165 35.7893C34.168 35.7893 34.7565 35.3288 34.7565 33.6583L34.77 27.4503ZM41.5335 32.6783V33.8953H37.8735V32.6783H41.5335ZM50.079 36.8148C49.2881 37.1294 48.4406 37.2761 47.59 37.2458C44.5255 37.2458 42.6645 35.3288 42.6645 32.3923C42.523 29.7158 44.578 27.4308 47.2545 27.2893C47.442 27.2793 47.633 27.2793 47.82 27.2923C48.6379 27.2583 49.4531 27.4055 50.2075 27.7233L49.816 29.1238C49.2171 28.8701 48.5724 28.7425 47.922 28.7488C45.956 28.7488 44.542 29.9823 44.542 32.3068C44.542 34.4243 45.7915 35.7923 47.909 35.7923C48.5656 35.8024 49.2175 35.6805 49.826 35.4338L50.079 36.8148ZM55.6 23.3828V41.1878H51.2795V39.5968H53.571V24.9743H51.2795V23.3828H55.6Z"
                      fill="white"
                    />
                  </svg>
                  <p>Objective - C</p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      <Newsletter />
    </>
  );
};
export default Home;
