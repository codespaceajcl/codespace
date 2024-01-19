import React from "react";
import "./About.css";
import { Col, Container, Row } from "react-bootstrap";
import Newsletter from "../../Component/Newsletter/Newsletter";
import Slider from "react-slick";

const About = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} news_next_arrow`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} news_prev_arrow`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  function SampleNextArrow2(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} leader_next_arrow`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow2(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} leader_prev_arrow`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    centerPadding: "30px",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings2 = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow2 />,
    prevArrow: <SamplePrevArrow2 />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="about_main">
      <div className="about_banner">
        <Container>
          <Row className="align-items-center">
            <Col md={7}>
              <h1>We’re on premise to work smarter than harder</h1>
              <p>
                Our technology is used globally in the healthcare,
                telecommunications, travel, hospitality, insurance, and banking
                industries, and across multiple customer experience channels
              </p>
            </Col>
            <Col md={5}>
              <img src="/images/about_banner.jpg" alt="" />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="about_tabs">
        <Container>
          <ul>
            <li> <a href="#ourCompany"> Our Company </a></li>
            <li> <a href="#coreValues"> Our Values </a></li>
            <li> <a href="#leadership"> Leadership </a></li>
            <li> <a href="#news"> News & Insights </a></li>
          </ul>
        </Container>
      </div>

      <div className="our_company" id="ourCompany">
        <Container>
          <Row>
            <Col md={6}>
              <h1>Our Company</h1>
              <p>
                At Codespace, we are a passionate team of software developers
                driven by the mission to empower businesses through innovative
                technology solutions. As a subsidiary of
                <span> AJCL PVT LTD</span>, we leverage the strength and
                expertise of our parent company to deliver exceptional software
                development services to clients worldwide.
              </p>

              <p>
                We are committed to fostering long-lasting partnerships with our
                clients, helping them achieve their business objectives and
                embrace the ever-evolving digital landscape.
              </p>

              <ul>
                <li>
                  <span>AJCL-backed software solutions: </span> Codespace, a
                  subsidiary of AJCL PVT LTD, delivers exceptional software
                  development services to clients worldwide.
                </li>

                <li>
                  <span>Expert-driven innovation: </span> Codespace's passionate
                  team of software developers empowers businesses with
                  innovative technology solutions.
                </li>

                <li>
                  <span>Enduring partnerships: </span> Codespace fosters
                  long-lasting partnerships, helping clients thrive in the
                  digital era.
                </li>
              </ul>
            </Col>
            <Col md={6}>
              <img src="/images/our_company_right.jpg" alt="" />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="core_values" id="coreValues">
        <Container>
          <h2>Our Core Values</h2>
          <p>
            We’re a diverse team united by our shared values: think big, work
            smart, build trust, be open and spread joy.
          </p>

          <Row className="my-5">
            <Col md={3}>
              <div className="value_box">
                <img src="/images/value1.png" alt="" />
                <h3>Think Big.</h3>
                <h6>
                  We are inventors who give each other the time, the space, and
                  the backup to try new things.
                </h6>
              </div>
            </Col>
            <Col md={3}>
              <div className="value_box">
                <img src="/images/value1.png" alt="" />
                <h3>Build Trust</h3>
                <h6>
                  We are inventors who give each other the time, the space, and
                  the backup to try new things.
                </h6>
              </div>
            </Col>
            <Col md={3}>
              <div className="value_box">
                <img src="/images/value2.png" alt="" />
                <h3>Work Smart</h3>
                <h6>
                  We are inventors who give each other the time, the space, and
                  the backup to try new things.
                </h6>
              </div>
            </Col>
            <Col md={3}>
              <div className="value_box">
                <img src="/images/value3.png" alt="" />
                <h3>Be Open</h3>
                <h6>
                  We are inventors who give each other the time, the space, and
                  the backup to try new things.
                </h6>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="leadership" id="leadership">
        <Container>
          <h2>Our Leadership</h2>
          <h6>We Are Not Just a Team, We Are a Family.</h6>

          <Row className="mt-5">
            <Slider {...settings2}>
              <Col md={3}>
                <div className="leader_box">
                  <img src="/images/leader1.png" alt="" />

                  <div>
                    <h3>Omer Jaffer</h3>
                    <span>CEO</span>

                    <div className="text-end">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_353_3195)">
                          <path
                            d="M27.7854 0H2.21458C1.62724 0 1.06395 0.233322 0.648637 0.648637C0.233322 1.06395 0 1.62724 0 2.21458V27.7854C0 28.3728 0.233322 28.9361 0.648637 29.3514C1.06395 29.7667 1.62724 30 2.21458 30H27.7854C28.3728 30 28.9361 29.7667 29.3514 29.3514C29.7667 28.9361 30 28.3728 30 27.7854V2.21458C30 1.62724 29.7667 1.06395 29.3514 0.648637C28.9361 0.233322 28.3728 0 27.7854 0ZM8.94167 25.5562H4.43125V11.2292H8.94167V25.5562ZM6.68333 9.24375C6.17171 9.24087 5.67239 9.08649 5.24842 8.80011C4.82444 8.51372 4.4948 8.10816 4.3011 7.63461C4.10739 7.16106 4.05831 6.64074 4.16004 6.13932C4.26177 5.6379 4.50975 5.17785 4.87269 4.81723C5.23564 4.45661 5.69727 4.21158 6.19933 4.11308C6.7014 4.01457 7.22139 4.06699 7.69369 4.26373C8.16599 4.46047 8.56942 4.79271 8.85308 5.21852C9.13674 5.64432 9.2879 6.14461 9.2875 6.65625C9.29233 6.99879 9.22814 7.3388 9.09877 7.65601C8.96939 7.97321 8.77748 8.26113 8.53446 8.50258C8.29145 8.74404 8.00231 8.9341 7.68428 9.06144C7.36625 9.18877 7.02584 9.25078 6.68333 9.24375ZM25.5667 25.5688H21.0583V17.7417C21.0583 15.4333 20.0771 14.7208 18.8104 14.7208C17.4729 14.7208 16.1604 15.7292 16.1604 17.8V25.5688H11.65V11.2396H15.9875V13.225H16.0458C16.4813 12.3438 18.0063 10.8375 20.3333 10.8375C22.85 10.8375 25.5688 12.3313 25.5688 16.7063L25.5667 25.5688Z"
                            fill="#131415"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_353_3195">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div className="leader_box">
                  <img src="/images/leader2.png" alt="" />

                  <div>
                    <h3>Rameez Loan</h3>
                    <span>Director</span>

                    <div className="text-end">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_353_3195)">
                          <path
                            d="M27.7854 0H2.21458C1.62724 0 1.06395 0.233322 0.648637 0.648637C0.233322 1.06395 0 1.62724 0 2.21458V27.7854C0 28.3728 0.233322 28.9361 0.648637 29.3514C1.06395 29.7667 1.62724 30 2.21458 30H27.7854C28.3728 30 28.9361 29.7667 29.3514 29.3514C29.7667 28.9361 30 28.3728 30 27.7854V2.21458C30 1.62724 29.7667 1.06395 29.3514 0.648637C28.9361 0.233322 28.3728 0 27.7854 0ZM8.94167 25.5562H4.43125V11.2292H8.94167V25.5562ZM6.68333 9.24375C6.17171 9.24087 5.67239 9.08649 5.24842 8.80011C4.82444 8.51372 4.4948 8.10816 4.3011 7.63461C4.10739 7.16106 4.05831 6.64074 4.16004 6.13932C4.26177 5.6379 4.50975 5.17785 4.87269 4.81723C5.23564 4.45661 5.69727 4.21158 6.19933 4.11308C6.7014 4.01457 7.22139 4.06699 7.69369 4.26373C8.16599 4.46047 8.56942 4.79271 8.85308 5.21852C9.13674 5.64432 9.2879 6.14461 9.2875 6.65625C9.29233 6.99879 9.22814 7.3388 9.09877 7.65601C8.96939 7.97321 8.77748 8.26113 8.53446 8.50258C8.29145 8.74404 8.00231 8.9341 7.68428 9.06144C7.36625 9.18877 7.02584 9.25078 6.68333 9.24375ZM25.5667 25.5688H21.0583V17.7417C21.0583 15.4333 20.0771 14.7208 18.8104 14.7208C17.4729 14.7208 16.1604 15.7292 16.1604 17.8V25.5688H11.65V11.2396H15.9875V13.225H16.0458C16.4813 12.3438 18.0063 10.8375 20.3333 10.8375C22.85 10.8375 25.5688 12.3313 25.5688 16.7063L25.5667 25.5688Z"
                            fill="#131415"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_353_3195">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div className="leader_box">
                  <img src="/images/leader3.png" alt="" />

                  <div>
                    <h3>Amjad Ghumro</h3>
                    <span>Manager</span>

                    <div className="text-end">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_353_3195)">
                          <path
                            d="M27.7854 0H2.21458C1.62724 0 1.06395 0.233322 0.648637 0.648637C0.233322 1.06395 0 1.62724 0 2.21458V27.7854C0 28.3728 0.233322 28.9361 0.648637 29.3514C1.06395 29.7667 1.62724 30 2.21458 30H27.7854C28.3728 30 28.9361 29.7667 29.3514 29.3514C29.7667 28.9361 30 28.3728 30 27.7854V2.21458C30 1.62724 29.7667 1.06395 29.3514 0.648637C28.9361 0.233322 28.3728 0 27.7854 0ZM8.94167 25.5562H4.43125V11.2292H8.94167V25.5562ZM6.68333 9.24375C6.17171 9.24087 5.67239 9.08649 5.24842 8.80011C4.82444 8.51372 4.4948 8.10816 4.3011 7.63461C4.10739 7.16106 4.05831 6.64074 4.16004 6.13932C4.26177 5.6379 4.50975 5.17785 4.87269 4.81723C5.23564 4.45661 5.69727 4.21158 6.19933 4.11308C6.7014 4.01457 7.22139 4.06699 7.69369 4.26373C8.16599 4.46047 8.56942 4.79271 8.85308 5.21852C9.13674 5.64432 9.2879 6.14461 9.2875 6.65625C9.29233 6.99879 9.22814 7.3388 9.09877 7.65601C8.96939 7.97321 8.77748 8.26113 8.53446 8.50258C8.29145 8.74404 8.00231 8.9341 7.68428 9.06144C7.36625 9.18877 7.02584 9.25078 6.68333 9.24375ZM25.5667 25.5688H21.0583V17.7417C21.0583 15.4333 20.0771 14.7208 18.8104 14.7208C17.4729 14.7208 16.1604 15.7292 16.1604 17.8V25.5688H11.65V11.2396H15.9875V13.225H16.0458C16.4813 12.3438 18.0063 10.8375 20.3333 10.8375C22.85 10.8375 25.5688 12.3313 25.5688 16.7063L25.5667 25.5688Z"
                            fill="#131415"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_353_3195">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div className="leader_box">
                  <img src="/images/leader4.png" alt="" />

                  <div>
                    <h3>Sohaib Akram</h3>
                    <span>Team Lead</span>

                    <div className="text-end">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_353_3195)">
                          <path
                            d="M27.7854 0H2.21458C1.62724 0 1.06395 0.233322 0.648637 0.648637C0.233322 1.06395 0 1.62724 0 2.21458V27.7854C0 28.3728 0.233322 28.9361 0.648637 29.3514C1.06395 29.7667 1.62724 30 2.21458 30H27.7854C28.3728 30 28.9361 29.7667 29.3514 29.3514C29.7667 28.9361 30 28.3728 30 27.7854V2.21458C30 1.62724 29.7667 1.06395 29.3514 0.648637C28.9361 0.233322 28.3728 0 27.7854 0ZM8.94167 25.5562H4.43125V11.2292H8.94167V25.5562ZM6.68333 9.24375C6.17171 9.24087 5.67239 9.08649 5.24842 8.80011C4.82444 8.51372 4.4948 8.10816 4.3011 7.63461C4.10739 7.16106 4.05831 6.64074 4.16004 6.13932C4.26177 5.6379 4.50975 5.17785 4.87269 4.81723C5.23564 4.45661 5.69727 4.21158 6.19933 4.11308C6.7014 4.01457 7.22139 4.06699 7.69369 4.26373C8.16599 4.46047 8.56942 4.79271 8.85308 5.21852C9.13674 5.64432 9.2879 6.14461 9.2875 6.65625C9.29233 6.99879 9.22814 7.3388 9.09877 7.65601C8.96939 7.97321 8.77748 8.26113 8.53446 8.50258C8.29145 8.74404 8.00231 8.9341 7.68428 9.06144C7.36625 9.18877 7.02584 9.25078 6.68333 9.24375ZM25.5667 25.5688H21.0583V17.7417C21.0583 15.4333 20.0771 14.7208 18.8104 14.7208C17.4729 14.7208 16.1604 15.7292 16.1604 17.8V25.5688H11.65V11.2396H15.9875V13.225H16.0458C16.4813 12.3438 18.0063 10.8375 20.3333 10.8375C22.85 10.8375 25.5688 12.3313 25.5688 16.7063L25.5667 25.5688Z"
                            fill="#131415"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_353_3195">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div className="leader_box">
                  <img src="/images/leader1.png" alt="" />

                  <div>
                    <h3>Omer Jaffer</h3>
                    <span>CEO</span>

                    <div className="text-end">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_353_3195)">
                          <path
                            d="M27.7854 0H2.21458C1.62724 0 1.06395 0.233322 0.648637 0.648637C0.233322 1.06395 0 1.62724 0 2.21458V27.7854C0 28.3728 0.233322 28.9361 0.648637 29.3514C1.06395 29.7667 1.62724 30 2.21458 30H27.7854C28.3728 30 28.9361 29.7667 29.3514 29.3514C29.7667 28.9361 30 28.3728 30 27.7854V2.21458C30 1.62724 29.7667 1.06395 29.3514 0.648637C28.9361 0.233322 28.3728 0 27.7854 0ZM8.94167 25.5562H4.43125V11.2292H8.94167V25.5562ZM6.68333 9.24375C6.17171 9.24087 5.67239 9.08649 5.24842 8.80011C4.82444 8.51372 4.4948 8.10816 4.3011 7.63461C4.10739 7.16106 4.05831 6.64074 4.16004 6.13932C4.26177 5.6379 4.50975 5.17785 4.87269 4.81723C5.23564 4.45661 5.69727 4.21158 6.19933 4.11308C6.7014 4.01457 7.22139 4.06699 7.69369 4.26373C8.16599 4.46047 8.56942 4.79271 8.85308 5.21852C9.13674 5.64432 9.2879 6.14461 9.2875 6.65625C9.29233 6.99879 9.22814 7.3388 9.09877 7.65601C8.96939 7.97321 8.77748 8.26113 8.53446 8.50258C8.29145 8.74404 8.00231 8.9341 7.68428 9.06144C7.36625 9.18877 7.02584 9.25078 6.68333 9.24375ZM25.5667 25.5688H21.0583V17.7417C21.0583 15.4333 20.0771 14.7208 18.8104 14.7208C17.4729 14.7208 16.1604 15.7292 16.1604 17.8V25.5688H11.65V11.2396H15.9875V13.225H16.0458C16.4813 12.3438 18.0063 10.8375 20.3333 10.8375C22.85 10.8375 25.5688 12.3313 25.5688 16.7063L25.5667 25.5688Z"
                            fill="#131415"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_353_3195">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </Col>
            </Slider>
          </Row>
        </Container>
      </div>

      <div className="news_insights" id="news">
        <Container>
          <h2>News & Insights</h2>
          <h6>Get The Latest News & Insights.</h6>

          <Row className="mt-5">
            <Slider {...settings}>
              <Col md={4}>
                <div className="news_box">
                  <img src="/images/news1.jpg" alt="" />
                  <h5>New Year Celebration at AJCL Head Office Karachi.</h5>

                  <div>
                    <div>
                      <span>January 1, 2023</span>
                      <p>Company News</p>
                    </div>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 46 46"
                      fill="none"
                    >
                      <mask
                        id="mask0_353_3209"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="46"
                        height="46"
                      >
                        <rect width="46" height="46" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_353_3209)">
                        <path
                          d="M12.2667 34.4999L9.58337 31.8166L27.9834 13.4166H11.5V9.58325H34.5V32.5833H30.6667V16.0999L12.2667 34.4999Z"
                          fill="#131415"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="news_box">
                  <img src="/images/news2.jpg" alt="" />
                  <h5>
                    Contract signed between FBR and AJCL consortium for Track
                    and Trace System.
                  </h5>

                  <div>
                    <div>
                      <span>May 13, 2023</span>
                      <p>Company News</p>
                    </div>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 46 46"
                      fill="none"
                    >
                      <mask
                        id="mask0_353_3209"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="46"
                        height="46"
                      >
                        <rect width="46" height="46" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_353_3209)">
                        <path
                          d="M12.2667 34.4999L9.58337 31.8166L27.9834 13.4166H11.5V9.58325H34.5V32.5833H30.6667V16.0999L12.2667 34.4999Z"
                          fill="#131415"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="news_box">
                  <img src="/images/news3.jpg" alt="" />
                  <h5>Blood Donation Drive at AJCL Head Office Karachi</h5>

                  <div>
                    <div>
                      <span>August 13, 2023</span>
                      <p>Company News</p>
                    </div>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 46 46"
                      fill="none"
                    >
                      <mask
                        id="mask0_353_3209"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="46"
                        height="46"
                      >
                        <rect width="46" height="46" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_353_3209)">
                        <path
                          d="M12.2667 34.4999L9.58337 31.8166L27.9834 13.4166H11.5V9.58325H34.5V32.5833H30.6667V16.0999L12.2667 34.4999Z"
                          fill="#131415"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="news_box">
                  <img src="/images/news1.jpg" alt="" />
                  <h5>New Year Celebration at AJCL Head Office Karachi.</h5>

                  <div>
                    <div>
                      <span>January 1, 2023</span>
                      <p>Company News</p>
                    </div>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 46 46"
                      fill="none"
                    >
                      <mask
                        id="mask0_353_3209"
                        style={{ maskType: "alpha" }}
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="46"
                        height="46"
                      >
                        <rect width="46" height="46" fill="#D9D9D9" />
                      </mask>
                      <g mask="url(#mask0_353_3209)">
                        <path
                          d="M12.2667 34.4999L9.58337 31.8166L27.9834 13.4166H11.5V9.58325H34.5V32.5833H30.6667V16.0999L12.2667 34.4999Z"
                          fill="#131415"
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </Col>
            </Slider>
          </Row>
        </Container>
      </div>

      <div className="about_help">
        <Container>
          <h6>How can we help you?</h6>
          <h2>
            Are you ready to push boundaries and explore new frontiers of
            innovation?
          </h2>
          <button>
            Let’s Work Together
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

export default About;
