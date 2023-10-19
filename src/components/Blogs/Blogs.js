import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="blog-section">
      <Particle />
      <Container>
        <h1 className="blog-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="blog-card">
            <ProjectCard
              imgPath={noats}
              isBlog={false}
              title="Noats Assistant"
              description="The Notes Assistant Tool is a handy application designed for those looking to enhance their note-taking routines. Whether you're a student jotting down lecture points or a professional capturing meeting minutes, this tool offers a simple and organized platform to keep your notes. Its user-friendly interface makes it easy to record, categorize, and retrieve information when needed. Each noat is marked with preffered color information."
              ghLink="https://github.com/DanPongo/NoatsAssistant"
              demoLink="https://danpongo.github.io/NoatsAssistant/"
            />
          </Col>

          <Col md={4} className="blog-card">
            <ProjectCard
              imgPath={irrigationCalculator}
              isBlog={false}
              title="Irrigation Calculator"
              description="The Regional Irrigation Calculator is an essential tool tailored for farmers who are keen to optimize their irrigation practices. Taking into account specific geographic regions—whether it's the northern terrains, central plains, or southern valleys—the app provides accurate watering recommendations. It not only considers the regional climate nuances but also caters to specific field crops, ensuring each plant gets the perfect drop."
              ghLink="https://github.com/DanPongo/Irrigation-Calculator"
              demoLink="https://danpongo.github.io/Irrigation-Calculator/"
            />
          </Col>

          <Col md={4} className="blog-card">
            <ProjectCard
              imgPath={cryptoMarket}
              isBlog={false}
              title="Live Crypto Market"
              description="CryptoInsight is the go-to web app for all things cryptocurrency. Designed for both newbies and seasoned traders, it provides real-time price tracking across a wide range of digital currencies. Historical graphs trace the ebbs and flows of each crypto asset, giving a comprehensive view of market trends. Additionally, users benefit from in-depth financial reports, ensuring they have all the information they need at their fingertips."
              ghLink="https://github.com/DanPongo/Live-Crypto-"
              demoLink="https://danpongo.github.io/Live-Crypto-/"              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
