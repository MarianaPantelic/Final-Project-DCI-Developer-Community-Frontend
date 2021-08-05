import React, { useState } from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  CloseSideBarMenu,
} from "./NavbarElements";




const Navbar = () => {

 const showSidebar = () => {
  document.getElementById("burger").style.display="none";
  document.getElementById("close").style.display = "block";
  document.getElementById("shownavbar").style.display = "block";
 }
 const closeSideBar = () => {
document.getElementById("burger").style.display = "block";
document.getElementById("close").style.display = "none";
// document.getElementById("shownavbar").style.display = "none";

 }

  return (
    <Nav>
      <NavLink to="/">
        {/* <img src={require("../../images/logo.svg")} alt="logo" /> */}
      </NavLink>
      <Bars onClick={showSidebar} id="burger" />
      <CloseSideBarMenu onClick={closeSideBar} id="close"/>

      <NavMenu id="shownavbar">
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


