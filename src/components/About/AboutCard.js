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
            I am an incoming Analyst at <span className="purple">Deloitte USI</span>.
            <br />
            Currently, I am pursuing my <span className="purple">Master of Computer Applications (MCA) </span> 
            at Thapar Institute of Engineering and Technology, having previously completed my 
            <span className="purple"> Bachelor of Computer Applications (BCA) </span> 
            at Patliputra University, Patna.
            <br />
            <br />
            I am passionate about <span className="purple">Artificial Intelligence, Machine Learning, and Computer Vision</span>. 
            I love solving real-world problems through innovative tech solutions.
            <br />
            <br />
            Apart from coding and building machine learning pipelines, some other activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Leading an international gaming alliance (Utopia Origin)
            </li>
            <li className="about-activity">
              <ImPointRight /> Competing in data analytics and AI hackathons
            </li>
            <li className="about-activity">
              <ImPointRight /> Composing bilingual poetry and lyrics (English & Hindi)
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