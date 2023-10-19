import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    return (
      <Card className="quote-card-view">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify" }}>
            Hey! I'm <span className="purple">Daniel Hutmacher</span> 
            &nbsp;from <span className="purple">Tel Aviv, Israel 🌇</span>.
              <br /> My coding journey began in the army 🪖, refining my skills to what they are today. Now, I wear the hat of a freelance full-stack developer 💻, translating ideas into web wonders.
              <br /> Beyond code, my roots are in social education 📘, and I pride myself on tailoring solutions for unique private clients.
              <br />
              <br />
              Off the coding grid, here's what sparks my joy:
            </p>
            <ul>
              <li className="about-activity">
                <ImPointRight /> Hitting nature trails 🥾
              </li>
              <li className="about-activity">
                <ImPointRight /> Serving tennis aces 🎾
              </li>
              <li className="about-activity">
                <ImPointRight /> Volunteering in heartwarming social coding projects ❤️‍🔥
              </li>
            </ul>
  
           
          </blockquote>
        </Card.Body>
      </Card>
    );
  }
  

export default AboutCard;
