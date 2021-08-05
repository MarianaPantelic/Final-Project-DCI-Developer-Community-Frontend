import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Navbar = () => {

  return (
    <nav class="navbar navbar-expand-lg navbar-dark navbar-css">
      <a class="navbar-brand" href="/">
        LOGO
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <a class="nav-link" href="/home">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="/about">
              About
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="/forum">
              Forum
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="/blog">
              Blog
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="/news">
              News
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="/resources">
              Resources
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="/jobs">
              Jobs
            </a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <FontAwesomeIcon icon={["fas fa-user"]} />
          <button class="btn btn-primary my-2 my-sm-0" type="submit">
            Sign In
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;


