import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiPython } from "react-icons/di";
import { AiOutlineRobot } from "react-icons/ai"; // Alternative Icon Import
import {
  SiPytorch,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="C / C++">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Python">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="PyTorch">
        <SiPytorch />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Scikit-learn">
        <SiScikitlearn />
      </Col>
      {/* Using a different icon for Hugging Face */}
      <Col xs={4} md={2} className="tech-icons" title="Hugging Face">
        <AiOutlineRobot />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="NumPy">
        <SiNumpy />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Pandas">
        <SiPandas />
      </Col>
    </Row>
  );
}

export default Techstack;