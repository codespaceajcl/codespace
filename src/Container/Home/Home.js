import React, { useRef } from 'react';
import './Home.css';
import { Col, Container, Row } from 'react-bootstrap';
import { MdOutlineArrowOutward } from "react-icons/md";
import { IoPlayOutline } from "react-icons/io5";
import Spline from "@splinetool/react-spline";
import Lottie from 'react-lottie';
import Slider from "react-slick";
import animationData from "../../lot.json";

const Home = () => {
  const spline = useRef();

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "vertical-dots"
  };

  const buttonStyle = {
    display: 'block',
    margin: '10px auto'
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className='main_home'>
      <Container>
        <Slider {...settings}>
          <div>
            <Row className='align-items-center'>
              <Col md={7} className='home_banner_left'>
                <h1>Journey into the tech of tomorrow</h1>
                <p>Step into the future with our cutting-edge technology
                  solutions tailored for your business needs.</p>

                <div className='banner_btn'>
                  <button>Schedule For Briefing <MdOutlineArrowOutward /></button>
                  <button> <IoPlayOutline /> Watch Video </button>
                </div>

                <div className='reviews'>
                  <img src='/images/clutch_review.png' alt='' />
                  <img src='/images/google_review.png' alt='' />
                </div>
              </Col>
              <Col md={5} className='home_right_img'>
                {/* <Lottie options={defaultOptions}
                  height={400}
                  width={400}
                /> */}

                <Spline
                  className="spline"
                  scene="https://prod.spline.design/rAcSdllYWQWQDZLh/scene.splinecode"
                />

                {/* <img src='/images/cubic_img.png' alt='' /> */}
              </Col>
            </Row>
          </div>
        </Slider>
      </Container>

      <div className='top_home_exp'>
        <Row>
          <Col md={3}>
            <h6>12+</h6>
            <p>Years of continual
              excellence</p>
          </Col>
        </Row>
      </div>
    </div>
  )
}
export default Home