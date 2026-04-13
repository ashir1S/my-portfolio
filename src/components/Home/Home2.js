import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile.jpeg"; 
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.4em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body" style={{ lineHeight: 1.6 }}>
              Hello! I'm <b className="purple">Ashirwad Sinha</b> from Patna, India.
              <br />
              <br />
              I'm currently pursuing a <b className="purple">Master of Computer Applications (MCA)</b> at Thapar Institute of Engineering & Technology.
              My core interests are in <b className="purple">Artificial Intelligence, Machine Learning</b>, and <b className="purple">Computer Vision</b>.
              <br />
              <br />
              I'm comfortable with languages and tools like{" "}
              <b className="purple">C / C++, Python, PyTorch, NumPy, and Pandas</b>. I work with databases such as <b className="purple">MySQL</b> and enjoy building end-to-end ML projects, often deploying demos on <b className="purple">Hugging Face Spaces</b>.
              <br />
              <br />
              Some projects I've developed include a <b className="purple">Food-101 classifier</b>, a <b className="purple">Dog Breed classifier</b>, and a <b className="purple">Driver Gaze Detection system</b>. I focus on building practical, high-impact AI solutions.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid profile-pic-frame"
                alt="Ashirwad Sinha" 
                style={{ maxHeight: "300px" }}
              />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ashir1S"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ashirwad-sinha1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ashirwadsinha/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;