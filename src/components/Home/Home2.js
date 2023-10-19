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
            In the vast world of Full Stack Development, my compass is driven by pure passion.
              <br />
              <br /> With tools like JavaScript, TypeScript, and a hint of HTML/CSS elegance ✨, I venture into web landscapes both known and uncharted.
              <i>
                {/* <b className="purple"> C++, Javascript and Go. </b> */}
              </i>
              <br />
              <br />
              Every backend note with Node.js 🎵 and every front-end chord with React and Angular 🚀, is played with heart. My projects? They're the melodies of my devotion 🎸. If you're seeking passion-infused coding, let's craft some memorable digital tunes together! 🎧              <i>
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
