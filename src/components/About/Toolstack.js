import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiJupyter,
  SiGooglecolab,
  SiAmazonaws,
  SiMysql,
} from "react-icons/si";
import { DiGit } from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" title="VS Code">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Jupyter Notebook">
        <SiJupyter />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Google Colab">
        <SiGooglecolab />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Git">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MySQL">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="AWS (basic)">
        <SiAmazonaws />
      </Col>
    </Row>
  );
}

export default Toolstack;