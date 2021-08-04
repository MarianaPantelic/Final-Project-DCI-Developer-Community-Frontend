import React from "react";
import { NavLink, Nav } from "react-bootstrap";

const Navbar = () => {
  return (
    <div>
      <Nav>
        <NavLink to="/">
          {/* <img src={require("../../images/logo.svg")} alt="logo" /> */}
        </NavLink>
        <div className="bars"></div>
        <div className="navMenu">
          <NavLink to="/home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <Nav.Item>
            <Nav.Link href="/forum">Forum</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/blog">Blog</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/news">News</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/resources">Resources</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/jobs">Jobs</Nav.Link>
          </Nav.Item>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </div>
        <div className="SignInNavBtn">Sign In</div>
      </Nav>
    </div>
  );
};

export default Navbar;


