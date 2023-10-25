import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cryptoMarket from "../../Assets/Projects/cryptoMarket.png";
import country from "../../Assets/Projects/country.png";
import vacation  from "../../Assets/Projects/vacation.png";
import warinfo from "../../Assets/Projects/warinfo.png";
import noats from "../../Assets/Projects/noats.png";
import irrigationCalculator from "../../Assets/Projects/irrigationCalculator.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={warinfo}
              isBlog={false}
              title="Citizens War Information"
              description="Swords of Iron is an essential app that provides Israelis with crucial information during conflicts, such as government reports and social support services. It uses JavaScript to fetch data from urls.json and dynamically displays images as clickable links in a user-friendly interface, with multilingual support to serve Israel's diverse population. This app is a vital tool in empowering individuals and communities during challenging times."
              ghLink="https://github.com/DanPongo/Live-Crypto-"
              demoLink="https://swords-oi.onrender.com/#"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cryptoMarket}
              isBlog={false}
              title="Live Crypto Market"
              description="CryptoInsight is the go-to web app for all things cryptocurrency. Designed for both newbies and seasoned traders, it provides real-time price tracking across a wide range of digital currencies. Historical graphs trace the ebbs and flows of each crypto asset, giving a comprehensive view of market trends. Additionally, users benefit from in-depth financial reports, ensuring they have all the information they need at their fingertips."
              ghLink="https://github.com/DanPongo/Live-Crypto-"
              demoLink="https://danpongo.github.io/Live-Crypto-/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vacation}
              isBlog={false}
              title="Smart Booking App"
              description="Travel Explorer is a comprehensive platform that simplifies the process of planning and booking vacations. Users can browse and follow various destinations, filter vacations based on specific criteria, and securely register and authenticate their accounts. For ease of management, the platform includes an admin panel that allows for streamlined handling of reports and vacation listings. Invaluable resource for hassle-free experience."
              ghLink="https://github.com/DanPongo/Irrigation-Calculator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={noats}
              isBlog={false}
              title="Noats Assistant"
              description="The Notes Assistant Tool is a handy application designed for those looking to enhance their note-taking routines. Whether you're a student jotting down lecture points or a professional capturing meeting minutes, this tool offers a simple and organized platform to keep your notes. Its user-friendly interface makes it easy to record, categorize, and retrieve information when needed. Each noat is marked with preffered color information."
              ghLink="https://github.com/DanPongo/NoatsAssistant"
              demoLink="https://danpongo.github.io/NoatsAssistant/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={irrigationCalculator}
              isBlog={false}
              title="Irrigation Calculator"
              description="The Regional Irrigation Calculator is an essential tool tailored for farmers who are keen to optimize their irrigation practices. Taking into account specific geographic regions—whether it's the northern terrains, central plains, or southern valleys—the app provides accurate watering recommendations. It not only considers the regional climate nuances but also caters to specific field crops, ensuring each plant gets the perfect drop."
              ghLink="https://github.com/DanPongo/Irrigation-Calculator"
              demoLink="https://danpongo.github.io/Irrigation-Calculator/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={country}
              isBlog={false}
              title="Country Data"
              description="ExploreWorld is a user-friendly app that provides detailed information about countries worldwide. It fetches data from the REST Countries API, displaying country details and useful statistics such as total countries, population, and regional breakdowns. With its search feature, users can easily access specific country information, making it an invaluable resource for anyone seeking comprehensive global country data."
              ghLink="https://github.com/DanPongo/Country-Data-Finder"
              demoLink="https://danpongo.github.io/Country-Data-Finder/"
            />
          </Col>

         
         

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
