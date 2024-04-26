// components/About.js

import React from "react";
import img1 from "./assets/images/img1.jpg";
import img2 from "./assets/images/img4.jpg";
import img3 from "./assets/images/img3.jpg";

function About() {
  return (
    <div>
      <h2>About</h2>
      <div>
        <h3>Sagar Khatri</h3>
        <p>Software Engineer</p>
      </div>
      <div>
        <h4>Experience</h4>
        <ul>
          <li>Associate Software Engineer at Nagarro (Nov'21 - Present)</li>
        </ul>
      </div>
      <div>
        <h4>Skills</h4>
        <ul>
          <li>
            Frontend: React Js, Redux, JavaScript (ES6), TypeScript, Bootstrap,
            Tailwind CSS, HTML5, CSS3
          </li>
          <li>Backend: Nodejs, Express Js, Java, Python, API</li>
          <li>Database: SQL, MySql, MongoDB</li>
          <li>Tools: Git, GitHub, Jira, VS Code, Eclipse, PyCharm</li>
        </ul>
      </div>
      <div class="banner-half">
        <img id="image" src={img1} alt="banner 1" />
        <img id="image" src={img2} alt="banner 2" />
        <img id="image" src={img3} alt="banner 3" />
      </div>
    </div>
  );
}

export default About;
