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

      <Row className="hero-container">
        <Col>
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
                <Button className="register-btn">Register</Button>
              </Link>
            </div>
          </Fade>
        </Col>
        <Col>
          <Fade right duration={2000}>
            <div className="hero-img align-self-center"></div>
          </Fade>
        </Col>
      </Row>

      <Row className="who-section">
        <Col className="align-self-center">
          <Fade left duration={2000}>
            <div className="img-container img1"></div>
          </Fade>
        </Col>

        <Col className="align-self-center">
          <Fade right duration={2000}>
            <div className="text-container">
              <h2 className="text-center">Who is DCI?</h2>
              <p className="mt-5">
                The Digital Career Institute was born as an initiative to
                integrate refugees into digital jobs. Today it is committed to
                train anyone who wants to pursue a tech career.
              </p>
            </div>
          </Fade>
        </Col>
      </Row>

      <Row className="why-section">
        <Col className="align-self-center">
          <Fade left duration={2000}>
            <div className="text-container">
              <h2 className="text-center">Why are we here?</h2>
              <p className="mt-5">
                We are here to support and help each other. We are here to guide
                you and show you what, how and where to learn. We are here for
                you and you can be also here for us!
              </p>
            </div>
          </Fade>
        </Col>
        <Col className="align-self-center">
          <Fade right duration={2000}>
            <div className="img-container img2"></div>
          </Fade>
        </Col>
      </Row>

      <Row className="join-section">
        <Col className="align-self-center">
          <Fade left duration={2000}>
            <div className="img-container img3"></div>
          </Fade>
        </Col>
        <Col className="align-self-center">
          <Fade right duration={3000}>
            <div className="text-container">
              <h2 className="text-center">Why should I join this community?</h2>
              <p className="mt-5">
                You should join because we offer information, help and support.
                Most important you can be part of a community of developers like
                you, at the beginning of a new journey. Exciting, confusing, but
                wonderful.
              </p>
              <h2 className="mt-5 text-center">JOIN US! BE A DCI DEV!</h2>
            </div>
          </Fade>
        </Col>
      </Row>
    </>
  );
};

export default Home;
