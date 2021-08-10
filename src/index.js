import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/footer";

import About from "./pages/about";
import Blog from "./pages/blog";
import Forum from "./pages/forum";
import Home from "./pages/home";
import Jobs from "./pages/jobs";
import Login from "./pages/login";
import News from "./pages/news";
import Post from "./pages/post";
import Register from "./pages/register";
import Resources from "./pages/resources";
import UserProfile from "./pages/userprofile";
import "./main.css";
const axios = require("axios").default;

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    sendUserGetRequest();
  }, []);
  const sendUserGetRequest = async () => {
    try {
      const resp = await axios.get("http://localhost:3001/users");
      setUsers(resp.data);
      console.log(resp.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/forum">
            <Forum />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/news">
            <News />
          </Route>
          <Route path="/resources">
            <Resources />
          </Route>
          <Route path="/jobs">
            <Jobs />
          </Route>
          <Route path="/register">
            <Register users={users} sendUserGetRequest={sendUserGetRequest} />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/userprofile">
            <UserProfile />
          </Route>
          <Route path="/post">
            <Post />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
