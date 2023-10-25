import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            In the expansive domain of Full Stack Development, my direction is guided by an unwavering passion for the craft. 🧭              <br />
              <br /> Leveraging technologies such as JavaScript, TypeScript, along with the refined aesthetics of HTML and CSS, I traverse through familiar and novel terrains of the web landscape. 
              <i>
                {/* <b className="purple"> C++, Javascript and Go. </b> */}
              </i>
              <br />
              <br />
              My skillset is fortified with the MERN stack, MongoDB for versatile database management, SQL for structured query language, Express.js for robust backend development, SCSS for sophisticated styling, PHP for server-side scripting, and Regex for pattern matching and text processing. 💻🛠<i>
              </i>
              <br />
              <br />
              Each backend interaction facilitated by Node.js, and each front-end implementation via React and Angular, is meticulously orchestrated. My projects stand as a testament to my dedication to the craft. 🎵 For those who value passion-driven coding, I am eager to collaborate and create impactful digital experiences. Let's turn ideas into reality! 💡🤝<i>
                {/* <b className="purple">Web Technologies and Products </b> and */}
                {/* also in areas related to{" "} */}
                {/* <b className="purple">
                  Blockchain.
                </b> */}
              </i>
              <br />
              <br />
              {/* Whenever possible, I also apply my passion for developing products */}
              {/* with <b className="purple">Node.js</b> and */}
              <i>
                <b className="purple">
                  {" "}
                  {/* Modern Javascript Library and Frameworks */}
                </b>
              </i>
              {/* &nbsp; like */}
              <i>
                {/* <b className="purple"> React.js and Next.js</b> */}
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
            <img src={myImg} className="img-fluid img-round" alt="profile" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/DanPongo"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/daniel-hutmacher/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
