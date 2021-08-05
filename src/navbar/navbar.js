import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/">
        {/* <img src={require("../../images/logo.svg")} alt="logo" /> */}
      </NavLink>
      <Bars />
      <NavMenu>
        <NavLink to="/home" activeStyle>
          Home
        </NavLink>
        <NavLink to="/about" activeStyle>
          About
        </NavLink>
        <NavLink to="/forum" activeStyle>
          Forum
        </NavLink>
        <NavLink to="/blog" activeStyle>
          Blog
        </NavLink>
        <NavLink to="/news" activeStyle>
          News
        </NavLink>
        <NavLink to="/resources" activeStyle>
          Resources
        </NavLink>
        <NavLink to="/Jobs" activeStyle>
          Jobs
        </NavLink>
        <NavLink to="/sign-up" activeStyle>
          Sign Up
        </NavLink>
        {/* Second Nav */}
        {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
      </NavMenu>
      <NavBtn>
        <NavBtnLink to="/signin">Sign In</NavBtnLink>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;


