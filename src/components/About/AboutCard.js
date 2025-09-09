import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ashirwad Sinha </span>
            from <span className="purple"> Patna, India.</span>
            <br />
            I am currently pursuing my{" "}
            <span className="purple">Master of Computer Applications (MCA) </span> 
            at Thapar Institute of Engineering and Technology.
            <br />
            I have completed my{" "}
            <span className="purple">Bachelor of Computer Applications (BCA) </span> 
            at Patliputra University, Patna.
            <br />
            <br />
            I am passionate about{" "}
            <span className="purple">Artificial Intelligence, Machine Learning, and Computer Vision </span>.
            I love solving real-world problems through innovative tech solutions.
            <br />
            <br />
            Apart from coding, some other activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Tech
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Ashirwad</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
