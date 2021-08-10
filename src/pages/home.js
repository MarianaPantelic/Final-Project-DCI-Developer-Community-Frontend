import React from "react";
import dci_logo from "../images/dci_logo.png";
import Fade from "react-reveal/Fade";

const Home = () => {
  return (
    <div className="container">
      <div className="row first_row">
        <Fade left duration={2000}>
          <div className="col-lg-6 col-md-6 col-sm-12 home_para align-self-center">
            <h1 className="first_row_h1">Come Join Us!</h1>
            <h2 className="first_row_h2">
              Welcome to our developer community!
            </h2>
            <p id="first_row_p">
              Join us and you will discover great people and interesting
              information about how to become a successful developer. Lorem
              ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
              eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
              sed diam voluptua. At vero eos et accusam et justo duo dolores et
              ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
              accusam et justo duo dolores et ea rebum. Stet clita kasd
              gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
            <button type="button" className="btn btn-warning homebutton">
              Register
            </button>
          </div>
        </Fade>
        <div className="col-lg-6 col-md-6 col-sm-12 align-self-center">

          <Fade right duration={2000}>
            <img
              className="first_row_home_heroimg"
              src="../images/welcome_HP.jpg"
              alt="hero of programming"
            />
          </Fade>

        </div>
      </div>

      <div className="row hideRowMobile mt-5 second_row">
        <div className="col-lg-6 col-md-6 col-sm-12 align-self-center">
          <div className="dciOnHeroImg">

            <Fade left duration={2000}>
              <img
                className="home_heroimg"
                src="../images/who_dci.png"
                alt="hero image of programming"
              />
              <img className="dciLogo" src={dci_logo} alt="dci logo"/>
            </Fade>

          </div>
        </div>
        <Fade right duration={2000}>
          <div className="col-lg-6 col-md-6 col-sm-12 home_para align-self-center">
            <h1>Who is DCI?</h1>
            <p>
              The Digital Career Institute was born as an initiative to
              integrate refugees into digital jobs. Today it is committed to
              train anyone who wants to pursue to tech career.
            </p>
          </div>
        </Fade>
      </div>
      <div className="row hideRowMobile mt-5">
        <Fade left duration={2000}>
          <div className="col-lg-6 col-md-6 col-sm-12 home_para align-self-center">
            <h1>Why are we here?</h1>
            <p>
              Want to be a Freelancer, Digital Nomad, or work in your dream tech
              company? Become a Web Developer, a dynamic and vital field in
              today'S society. As a Web Developer you can show your creativity,
              become a part of the Tech Disruption, build websites, Web Apps and
              more.
            </p>
          </div>
        </Fade>
        <div className="col-lg-6 col-md-6 col-sm-12 align-self-center">

          <Fade right duration={2000}>
            <img
              className="home_heroimg"
              src="../images/why_r_v_here.png"
              alt="hero of programming"
            />
          </Fade>

        </div>
      </div>
      <div className="row hideRowMobile mt-5">
        <div className="col-lg-6 col-md-6 col-sm-12 align-self-center">

          <Fade left duration={2000}>
           
          <img
            className="home_heroimg"
            src="../images/why_join_dci.png"
            alt="hero of programming"
          />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 home_para align-self-center">
          <h1>Why should I join this community?</h1>
          <p>
            Want to be a Freelancer, Digital Nomad, or work in your dream tech
            company? Become a Web Developer, a dynamic and vital field in
            today'S society. As a Web Developer you can show your creativity,
            become a part of the Tech Disruption, build websites, Web Apps and
            more.
          </p>

        </div>
        <Fade right duration={2000}>
          <div className="col-lg-6 col-md-6 col-sm-12 home_para align-self-center">
            <h1>Why should I join this community?</h1>
            <p>
              Want to be a Freelancer, Digital Nomad, or work in your dream tech
              company? Become a Web Developer, a dynamic and vital field in
              today'S society. As a Web Developer you can show your creativity,
              become a part of the Tech Disruption, build websites, Web Apps and
              more.
            </p>
          </div>
        </Fade>
      </div>

      <div className="row hideRowDesktop mt-5">
        <Fade right duration={2000}>
          <div className="col-lg-6 col-md-6 col-sm-12 home_para align-self-center">
            <h1>Who is DCI?</h1>
            <p>
              The Digital Career Institute was born as an initiative to
              integrate refugees into digital jobs. Today it is committed to
              train anyone who wants to pursue to tech career.
            </p>
          </div>
        </Fade>
        <div className="col-lg-6 col-md-6 col-sm-12 align-self-center">
          <div className="dciOnHeroImg">

            <Fade left duration={2000}>
              <img
                className="home_heroimg"
                src="../images/who_dci.png"
                alt="hero image of programming"
              />
              <img className="dciLogo" src={dci_logo} alt="dci logo"/>
            </Fade>

          </div>
        </div>
      </div>
      <div className="row hideRowDesktop mt-5">
        <Fade left duration={2000}>
          <div className="col-lg-6 col-md-6 col-sm-12 home_para align-self-center">
            <h1>Why are we here?</h1>
            <p>
              The Digital Career Institute was born as an initiative to
              integrate refugees into digital jobs. Today it is committed to
              train anyone who wants to pursue to tech career.
            </p>
          </div>
        </Fade>
        <div className="col-lg-6 col-md-6 col-sm-12 align-self-center">

          <Fade right duration={2000}>
            <img
              className="home_heroimg"
              src="../images/why_r_v_here.png"
              alt="hero of programming"
            />
          </Fade>

        </div>
      </div>
      <div className="row hideRowDesktop mt-5">
        <Fade right duration={2000}>
          <div className="col-lg-6 col-md-6 col-sm-12 home_para align-self-center">
            <h1>Why should I join this community?</h1>
            <p>
              Want to be a Freelancer, Digital Nomad, or work in your dream tech
              company? Become a Web Developer, a dynamic and vital field in
              today'S society. As a Web Developer you can show your creativity,
              become a part of the Tech Disruption, build websites, Web Apps and
              more.
            </p>
          </div>
        </Fade>
        <div className="col-lg-6 col-md-6 col-sm-12 align-self-center">

          <Fade left duration={2000}>
            <img
              className="home_heroimg"
              src="../images/why_join_dci.png"
              alt="hero of programming"
            />
          </Fade>

        </div>
      </div>
    </div>
  );
};

export default Home;
