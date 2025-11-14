import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

// NEW — Achievements Component (inline, no separate file needed)
function Achievements() {
  return (
    <div className="achievement-section" style={{ padding: "20px 0" }}>
      <h1 className="project-heading">
        <strong className="purple">Achievements</strong>
      </h1>

      <ul style={{ fontSize: "1.2em", marginTop: "20px" }}>
        <li>🏆 Secured <strong>2nd place</strong> among 250 teams in national hackathon</li>
        <li>🚗 Built Driver Gaze Detection System using CV + DL</li>
        <li>🧠 Experience with ML, DL, and deployed multiple AI projects</li>
        <li>📚 MCA student at Thapar University</li>
      </ul>
    </div>
  );
}

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About <strong className="purple">Me</strong>
            </h1>
            <Aboutcard />
          </Col>

          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        {/* ⭐ Achievements Section added here */}
        <Achievements />

        <h1 className="project-heading" style={{ marginTop: "30px" }}>
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
