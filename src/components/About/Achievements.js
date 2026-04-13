import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

// IMPORT YOUR IMAGES HERE
import iitBhuCert from "../../Assets/iit_bhu_cert.jpeg";
import iitMadrasCert from "../../Assets/iit_madras_cert.jpg";
import iimIndoreCert from "../../Assets/iim_indore_cert.jpg";
import iitKgpCert from "../../Assets/iit_kgp_cert.jpeg";

function Achievements() {
  const achievementData = [
    {
      title: "1st Runner-Up, Data Analytics, NSSC 2025",
      organization: "IIT Kharagpur · Dec 2025",
      description: "Developed a Multimodal ML solution for high-energy physics. Implemented CNNs for jet particle classification and Autoencoders for anomaly detection, securing 2nd place nationally.",
      image: iitKgpCert,
    },
    {
      title: "National Finalist – Serve Smart Hackathon (Jagriti’26)",
      organization: "IIT (BHU), Varanasi · Feb 2026",
      description: "Selected as a National Finalist in a national-level hackathon. Progressed to the final round after clearing multiple evaluation stages based on solution quality and impact.",
      image: iitBhuCert,
    },
    {
      title: "National Finalist (Top 10), SOLIDWORKS AI Hackathon 2026",
      organization: "IIT Madras (Shaastra) · Jan 2026",
      description: "Ranked 5th out of 124 teams on Kaggle. Built a YOLOv8-based Computer Vision solution for industrial part counting, achieving 1.000 Exact Match Accuracy with 100% Precision and Recall.",
      image: iitMadrasCert,
    },
    {
      title: "National Finalist – HackWise 2026 (IRIS)",
      organization: "IIM Indore · Jan 2026",
      description: "Selected as a National Finalist in HackWise 2026, the flagship management festival of IIM Indore, after successfully clearing competitive preliminary evaluation stages.",
      image: iimIndoreCert,
    }
  ];

  return (
    <Container fluid className="achievement-section" style={{ padding: "50px 0" }}>
      <h1 className="project-heading">
        My Recent <strong className="purple">Achievements</strong>
      </h1>
      <p style={{ color: "white", textAlign: "center" }}>
        Recognition from premier institutions like IITs and IIMs.
      </p>

      {achievementData.map((ach, index) => (
        <Card key={index} className="project-card-view" style={{ maxWidth: "1000px", margin: "30px auto", background: "transparent", color: "white", border: "1px solid #623686" }}>
          <Row style={{ alignItems: "center", padding: "20px" }}>
            {/* Image Column */}
            <Col md={4}>
              <img
                src={ach.image}
                alt={ach.title}
                style={{ width: "100%", borderRadius: "10px", border: "1px solid #8a49a8" }}
              />
            </Col>

            {/* Text Column */}
            <Col md={8} style={{ textAlign: "left" }}>
              <Card.Body>
                <h3 style={{ fontSize: "1.5em", fontWeight: "bold" }}>{ach.title}</h3>
                <h5 className="purple" style={{ marginBottom: "15px" }}>{ach.organization}</h5>
                <p style={{ fontSize: "1.05em", lineHeight: "1.6" }}>
                  {ach.description}
                </p>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      ))}
    </Container>
  );
}

export default Achievements;