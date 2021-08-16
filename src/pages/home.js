import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <div className="clip-1"></div>
        <div className="clip-2"></div>
      </div>

      <Row className="justify-content-around hero-container">
        <Col sm={12} md={5} lg={5}>
          <Fade left duration={2000}>
            <div className="align-self-center hero-text">
              <h1>Come Join Us!</h1>
              <p className="mt-5">
                We are DCI DEVS, a community of Web Developer students at DCI
                Digital Career Institute.
              </p>
              <p>Got ideas? We would love to hear them out!</p>
              <p>Got questions? We give you answers!</p>
              <p>You need help? We help each other!</p>

              <Link to="/register">
                <Button className="m-5 register-btn">Register</Button>
              </Link>
            </div>
          </Fade>
        </Col>
        <Col sm={12} md={5} lg={5}>
          <Fade right duration={2000}>
            <div className="hero-img align-self-center"></div>
          </Fade>
        </Col>
      </Row>

      <Row className="justify-content-around who-section">
        <Col sm={12} md={5} lg={5} className="align-self-center">
          <Fade left duration={2000}>
            <div className="img-container img1"></div>
          </Fade>
        </Col>

        <Col sm={12} md={5} lg={5}>
          <Fade right duration={2000}>
            <div className="align-self-center text-container">
              <h2 className="text-center">Who is DCI?</h2>
              <p className="mt-5">
                The Digital Career Institute was born as an initiative to
                integrate refugees into digital jobs. Today it is committed to
                train anyone who wants to pursue to tech career.
              </p>
            </div>
          </Fade>
        </Col>
      </Row>
      <Row className="justify-content-around why-section">
        <Col sm={12} md={5} lg={5}>
          <Fade left duration={2000}>
            <div className="align-self-center text-container">
              <h2 className="text-center">Why are we here?</h2>
              <p className="mt-5">
                Want to be a Freelancer, Digital Nomad, or work in your dream
                tech company? Become a Web Developer, a dynamic and vital field
                in today'S society. As a Web Developer you can show your
                creativity, become a part of the Tech Disruption, build
                websites, Web Apps and more.
              </p>
            </div>
          </Fade>
        </Col>
        <Col sm={12} md={5} lg={5} className="align-self-center">
          <Fade right duration={2000}>
            <div className="img-container img2"></div>
          </Fade>
        </Col>
      </Row>
      <Row className="justify-content-around join-section">
        <Col sm={12} md={5} lg={5} className="align-self-center">
          <Fade left duration={2000}>
            <div className="img-container img3"></div>
          </Fade>
        </Col>
        <Col sm={12} md={5} lg={5}>
          <Fade right duration={3000}>
            <div className="align-self-center text-container">
              <h2 className="text-center">Why should I join this community?</h2>
              <p className="mt-5">
                Want to be a Freelancer, Digital Nomad, or work in your dream
                tech company? Become a Web Developer, a dynamic and vital field
                in today'S society. As a Web Developer you can show your
                creativity, become a part of the Tech Disruption, build
                websites, Web Apps and more.
              </p>
            </div>
          </Fade>
        </Col>
      </Row>
    </>
  );
};

export default Home;
