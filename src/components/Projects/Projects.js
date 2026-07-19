import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Existing Image Imports
import food101Img from "../../Assets/Projects/food101.png";
import dogbreedImg from "../../Assets/Projects/dogbreed.png";
import salesImg from "../../Assets/Projects/sales.png";
import gazeImg from "../../Assets/Projects/gaze.png";

// New Image Imports
import csvjet from "../../Assets/Projects/csvjet.png";
import hud from "../../Assets/Projects/hud.png";
import hpcl from "../../Assets/Projects/hpcl.png";
import road from "../../Assets/Projects/road.jpg";

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

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={csvjet}
              isBlog={false}
              title="OmniJet Particle Classifier"
              description="A machine learning pipeline for high-energy physics analysis on the HLS4ML LHC Jet dataset. Features a dual-objective architecture: a fine-tuned ResNet-18 and PCA-optimized Random Forest for multi-class jet classification (achieving 0.9012 ROC AUC), paired with a CNN Autoencoder for precise anomaly detection via reconstruction error evaluation."
              ghLink="https://github.com/ashir1S/IIT_Kh_NSSC_Data_Analytics_Hackathon"
              demoLink="https://huggingface.co/spaces/Ashirwad12/omnijet-particle-classifier"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={hud}
              isBlog={false}
              title="S.E.N.T.I.N.E.L. Drone Analysis"
              description="An advanced tactical targeting computer vision platform for aerial reconnaissance. Engineered a customized YOLOv8-Medium network trained at a rigid 1024px footprint to prevent long-distance feature collapse. Features a mathematical auto-calibration engine for real-world blast radius projection and threat-weighted Center of Mass targeting."
              ghLink="https://github.com/ashir1S/Sentinel-Drone-Analysis-IIT-BHU"
              demoLink="https://huggingface.co/spaces/Ashirwad12/SENTINEL"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={hpcl}
              isBlog={false}
              title="HPCL Intelligent Cost Database"
              description="An AI-powered procurement transformation platform that converts unstructured purchasing data into actionable intelligence. Leverages NLP Sentence Transformers and clustering for canonical item standardization. Built on a scalable React/Flask architecture featuring statistical anomaly detection, time-series cost forecasting, and interactive regional benchmarking."
              ghLink="https://github.com/ashir1S/HP_Power_Lab_2.0"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={road}
              isBlog={false}
              title="High-Resolution Road Damage Detection"
              description="A highly robust computer vision pipeline designed to identify microscopic road defects. Overcame severe class imbalances (+8.5% recall on rare classes) via targeted copy-paste augmentations and engineered a 'Continuous Relay' training strategy to bypass GPU memory limits. Achieved 0.573 mAP@50 using Test-Time Augmentation (TTA) and 1280px upscaling."
              ghLink="https://github.com/ashir1S/IIT_Bombay_Crackathon"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={gazeImg}
              isBlog={false}
              title="DEVision: Driver Eye Vision Model"
              description="A multimodal deep learning system mapping driver gaze coordinates onto a 1920x1080 road frame. Integrates a PyTorch-based Residual Dense Eye Encoder (RDB) and a 14-feature Landmark MLP, fused via a Dual Attention Mechanism. Utilizes a hybrid Smooth L1 and Angular Loss function alongside aggressive regularization, targeting a ~15-20% Pixel MAE improvement over baseline methods."
              ghLink="https://github.com/ashir1S/DEVision"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={food101Img}
              isBlog={false}
              title="Food-101 Classifier"
              description="A transfer-learning vision classifier mapping input images into 101 food categories. Integrates a pre-trained Vision Transformer (ViT-B/32) backbone and a custom LayerNorm MLP, deployed via a Gradio web application. Utilizes an interactive Hugging Face Spaces interface alongside robust fine-tuning, achieving an 80.97% Top-1 accuracy metric across a 25,250-image benchmark testing dataset during rapid inference."
              ghLink="https://github.com/ashir1S/Food-Vision"
              demoLink="https://huggingface.co/spaces/Ashirwad12/food-vision"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={dogbreedImg}
              isBlog={false}
              title="Dog Breed Classifier"
              description="Fine-tuned ResNet-50 on a multi-breed dataset. Achieved ~90.7% validation accuracy. Implemented device-agnostic inference and checkpointing."
              ghLink="https://github.com/ashir1S/Dog-Breed-Classifier"
              demoLink="https://huggingface.co/spaces/Ashirwad12/Dog_Breed_Classifier" 
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={salesImg}
              isBlog={false}
              title="Sales Data Analysis"
              description="Data cleaning, exploratory analysis and visualization using Pandas, NumPy, and Seaborn. Identified revenue trends, seasonality and actionable insights."
              ghLink="https://github.com/ashir1S/sales-analysis"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;