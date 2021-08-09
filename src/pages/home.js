import React from "react";
import dci_logo from "../images/dci_logo.png";

const Home = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-6 col-md-6 col-sm-12 home_para align-self-center">
          <h1>Welcome to our community!</h1>
          <p>
            Join us and you will discover great people and interesting
            information about how to become a successful developer.
          </p>
          <button type="button" className="btn btn-warning homebutton">
            Register
          </button>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 align-self-center">
          <img
            className="home_heroimg"
            src="../images/welcome_HP.jpg"
            alt="hero image of programming"
          />
        </div>
      </div>

      <div className="row hideRowMobile mt-5">
        <div className="col-lg-6 col-md-6 col-sm-12 align-self-center">
          <div className="dciOnHeroImg">
            <img
              className="home_heroimg"
              src="../images/who_dci.png"
              alt="hero image of programming"
            />
            <img className="dciLogo" src={dci_logo} />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 home_para align-self-center">
          <h1>Who is DCI?</h1>
          <p>
            The Digital Career Institute was born as an initiative to integrate
            refugees into digital jobs. Today it is committed to train anyone
            who wants to pursue to tech career.
          </p>
        </div>
      </div>
      <div className="row hideRowMobile mt-5">
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
        <div className="col-lg-6 col-md-6 col-sm-12 align-self-center">
          <img
            className="home_heroimg"
            src="../images/why_r_v_here.png"
            alt="hero image of programming"
          />
        </div>
      </div>
      <div className="row hideRowMobile mt-5">
        <div className="col-lg-6 col-md-6 col-sm-12 align-self-center">
          <img
            className="home_heroimg"
            src="../images/why_join_dci.png"
            alt="hero image of programming"
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
      </div>

      <div className="row hideRowDesktop mt-5">
        <div className="col-lg-6 col-md-6 col-sm-12 home_para align-self-center">
          <h1>Who is DCI?</h1>
          <p>
            The Digital Career Institute was born as an initiative to integrate
            refugees into digital jobs. Today it is committed to train anyone
            who wants to pursue to tech career.
          </p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 align-self-center">
          <div className="dciOnHeroImg">
            <img
              className="home_heroimg"
              src="../images/who_dci.png"
              alt="hero image of programming"
            />
            <img className="dciLogo" src={dci_logo} />
          </div>
        </div>
      </div>
      <div className="row hideRowDesktop mt-5">
        <div className="col-lg-6 col-md-6 col-sm-12 home_para align-self-center">
          <h1>Why are we here?</h1>
          <p>
            The Digital Career Institute was born as an initiative to integrate
            refugees into digital jobs. Today it is committed to train anyone
            who wants to pursue to tech career.
          </p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 align-self-center">
          <img
            className="home_heroimg"
            src="../images/why_r_v_here.png"
            alt="hero image of programming"
          />
        </div>
      </div>
      <div className="row hideRowDesktop mt-5">
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
        <div className="col-lg-6 col-md-6 col-sm-12 align-self-center">
          <img
            className="home_heroimg"
            src="../images/why_join_dci.png"
            alt="hero image of programming"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
