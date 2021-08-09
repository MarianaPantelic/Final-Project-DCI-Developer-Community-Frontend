import React from "react";

const Resources = () => {
  return (
    <div className="main-resources-container">
      <div className="resources-container">
        <img src="../images/resources.png" />
        <h1>Resources</h1>
      </div>
      <table className="content-table">
        <tr>
          <td className="resource-img">
            <img src="../images/Code academy logo.png" />
            <a href="https://www.codecademy.com/" target="_blank">
              www.codecademy.com
            </a>
          </td>
          <td className="resource-text">
            Codecademy is one of the most popular free coding websites for
            beginners. On their platform, you can learn how to program among
            other technical skills. Its reputation as one of the best free
            coding websites is well-deserved.
          </td>
        </tr>
        <tr>
          <td className="resource-img">
            <img src="../images/fcc.png" />
            <a href="https://www.freecodecamp.org/" target="_blank">
              www.freecodecamp.org
            </a>
          </td>
          <td className="resource-text">
            This free online coding school,teaches coding first through an
            established curriculum,then by giving you hands-on experience
            working on projects for nonprofits. It’s perfect for learners who
            want to learn how to code online by getting practical, hands-on
            experience that will do some good and look impressive on a resume.
          </td>
        </tr>
        <tr>
          <td className="resource-img">
            <img src="../images/github-logo.png" />
            <a href="https://www.github.com//" target="_blank">
              www.github.com
            </a>
          </td>
          <td className="resource-text">
            Millions of developers and companies build, ship, and maintain their
            software on GitHub-the largest and most advanced development
            platform in the world.
          </td>
        </tr>
        <tr>
          <td className="resource-img">
            <img src="../images/Stack overflow logo .png" />
            <a href="https://www.stackoverflow.com/" target="_blank">
              www.stackoverflow.com
            </a>
          </td>
          <td className="resource-text">
            Founded in 2008, Stack Overflow's public platform is used by nearly
            everyone who codes to learn, share their knowleddge, collaborate,
            and build their careers.
          </td>
        </tr>
        <tr>
          <td className="resource-img">
            <img src="../images/w3scholls1 logo.png" />
            <a href="https://www.w3schools.com/" target="_blank">
              www.w3schools.com
            </a>
          </td>
          <td className="resource-text">
            The largest web developer site on the internet. W3Schools is a
            school for web developers, covering all the aspects of web
            development
          </td>
        </tr>
        <tr>
          <td className="resource-img">
            <img src="../images/coursera.png" />
            <a href="https://www.coursera.org/" target="_blank">
              www.coursera.org
            </a>
          </td>
          <td className="resource-text">
            Coursera is one of the best places to learn to code for free, with
            its professional and versatile course options. The site is a large
            online course library where classes are taught by real university
            professors.
          </td>
        </tr>
        <tr>
          <td className="resource-img">
            <img src="../images/udemy.png" />
            <a href="https://www.udemy.com/" target="_blank">
              www.udemy.com
            </a>
          </td>
          <td className="resource-text">
            Udemy is an online learning platform where over 24 million students
            can take courses in a variety of subjects. Udemy is a great resource
            for learning a new skill at a reasonable price.
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Resources;
