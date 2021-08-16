import React from "react";
import { Container } from "react-bootstrap";

const UserProfile = () => {
  return (
    <Container>
      <div className="container2">
      <div className="userPage-search-section">
        <form>
            <input type="text" class="search-form-userPage"  size="50" aria-label="Username" aria-describedby="basic-addon1"/>
            <button type="button" class="search-btn-userPage">SEARCH</button>
        </form>
      </div>
 
          <div className="main-content-userPage"> 
            <div className="photo">
              <img src="images/Cohen-Linus-Torvalds.jpg" width="250"  alt="Linus Torvalds"></img>
              <div className="addPic">ADD PIC</div>
            </div>

        <div className="agenda">
          <h5>05.08.2021</h5>
          <h3>Agenda 05.08.2021</h3>
          <ol>
            <li>Task 1</li>
            <li>Task 2</li>
            <li>Task 3</li>
          </ol>

          <h3>Links:</h3>
          <ul>
            <li><a href="https://link1.com">https://link1.com</a></li>
            <li><a href="https://link2.com">https://link2.com</a></li>
            <li><a href="https://link3.com">https://link3.com</a></li>
          </ul>

          <h3>Github:</h3>
              <a href="https://github/linus.torvalds/">https://github/linus.torvalds/</a>

          <h3>Screen video recordings:</h3>
          <a href="https://videocontainer.com/linus.torvalds">https://videocontainer.com/linus.torvalds</a>
        </div>

        <div className="basic-userdata">
          <ul>
            <li>Linus Torvalds</li>

            <li>FbW43-2</li>

            <li>linus.torvalds@dci.com</li>
          </ul>
        </div>
      </div> 

      </div>
      </Container>
  );
};

export default UserProfile;
