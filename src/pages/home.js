import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <div className="clip-1"></div>
        <div className="clip-2"></div>
      </div>
      <Container>
        <Row className="justify-content-around">
          <Col sm={12} md={5} lg={5}>
            <Fade left duration={2000}>
              <div className="align-self-center">
                <h1>Come Join Us!</h1>
                <p>
                  We are DCI DEVS, a community for the Web Developer students at
                  DCI Digital Career Institute.
                </p>
                <p>Got ideas? We would love to hear them out!</p>
                <p>Got questions? We give you answers!</p>
                <p>You need help? We help each other!</p>
              </div>
              <Link to="/register">
                <button type="button" className="mt-5 register-btn">
                  Register
                </button>
              </Link>
            </Fade>
          </Col>
          <Col>
            <Fade right duration={2000}>
              <div className="img1"></div>
            </Fade>
          </Col>
        </Row>

        <Row className="justify-content-around">
          <Col sm={12} md={5} lg={5} className="align-self-center">
            <Fade left duration={2000}>
              <div className="img1"></div>
            </Fade>
          </Col>

          <Col sm={12} md={5} lg={5}>
            <Fade right duration={2000}>
              <div className="align-self-center">
                <h1>Who is DCI?</h1>
                <p>
                  The Digital Career Institute was born as an initiative to
                  integrate refugees into digital jobs. Today it is committed to
                  train anyone who wants to pursue to tech career.
                </p>
              </div>
            </Fade>
          </Col>
        </Row>
        <Row className="justify-content-around">
          <Col sm={12} md={5} lg={5}>
            <Fade left duration={2000}>
              <div className="align-self-center">
                <h1>Why are we here?</h1>
                <p>
                  Want to be a Freelancer, Digital Nomad, or work in your dream
                  tech company? Become a Web Developer, a dynamic and vital
                  field in today'S society. As a Web Developer you can show your
                  creativity, become a part of the Tech Disruption, build
                  websites, Web Apps and more.
                </p>
              </div>
            </Fade>
          </Col>
          <Col sm={12} md={5} lg={5} className="align-self-center">
            <Fade right duration={2000}>
              <div className="img1"></div>
            </Fade>
          </Col>
        </Row>
        <Row className="justify-content-around">
          <Col sm={12} md={5} lg={5} className="align-self-center">
            <Fade left duration={2000}>
              <div className="img1"></div>
            </Fade>
          </Col>
          <Col sm={12} md={5} lg={5}>
            <Fade right duration={2000}>
              <div className="align-self-center">
                <h1>Why should I join this community?</h1>
                <p>
                  Want to be a Freelancer, Digital Nomad, or work in your dream
                  tech company? Become a Web Developer, a dynamic and vital
                  field in today'S society. As a Web Developer you can show your
                  creativity, become a part of the Tech Disruption, build
                  websites, Web Apps and more.
                </p>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
