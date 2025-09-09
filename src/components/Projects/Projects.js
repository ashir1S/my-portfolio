import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import food101Img from "../../Assets/Projects/food101.png";
import dogbreedImg from "../../Assets/Projects/dogbreed.png";
import salesImg from "../../Assets/Projects/sales.png";
import gazeImg from "../../Assets/Projects/gaze.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          A selection of machine learning and data projects I've built.
        </p>

        {/* First Row of Projects */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={food101Img}
              isBlog={false}
              title="Food-101 Classifier"
              description={`Fine-tuned ViT-B/32 on the Food-101 dataset. Built a robust preprocessing pipeline and custom classification head — achieved ~80.97% Top-1 accuracy.`}
              ghLink="https://github.com/ashir1S/Food-Vision"
              demoLink="https://huggingface.co/spaces/Ashirwad12/food-vision" // Update with your actual demo link
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={dogbreedImg}
              isBlog={false}
              title="Dog Breed Classifier"
              description={`Fine-tuned ResNet-50 on a multi-breed dataset. Achieved ~90.7% validation accuracy. Implemented device-agnostic inference and checkpointing.`}
              ghLink="https://github.com/ashir1S/Dog-Breed-Classifier"
              demoLink="https://huggingface.co/spaces/Ashirwad12/Dog_Breed_Classifier" // Update with your actual demo link
            />
          </Col>
        </Row>

        {/* Second Row of Projects */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={salesImg}
              isBlog={false}
              title="Sales Data Analysis"
              description={`Data cleaning, exploratory analysis and visualization using Pandas, NumPy, and Seaborn. Identified revenue trends, seasonality and actionable insights.`}
              ghLink="https://github.com/ashir1S/sales-analysis"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={gazeImg}
              isBlog={false}
              title="Driver Gaze Detection (In Progress)"
              description={`Custom gaze detection model using PyTorch + OpenCV. Focused on dataset preparation, robust training pipelines, and real-time inference.`}
              ghLink="https://github.com/ashir1S/driver-gaze-detection"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;