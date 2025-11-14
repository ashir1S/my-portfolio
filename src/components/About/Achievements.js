import React from "react";
import Card from "react-bootstrap/Card";

function Achievements() {
  return (
    <div className="achievement-section" style={{ padding: "20px 0" }}>
      <h1 className="project-heading">
        <strong className="purple">Achievements</strong>
      </h1>

      {/* Achievement Card Box */}
      <Card
        className="project-card-view"
        style={{
          maxWidth: "900px",
          margin: "25px auto",
          padding: "20px",
        }}
      >
        <Card.Body>
          <ul
            style={{
              fontSize: "1.1em",
              paddingLeft: "0",
              listStyle: "none",
              lineHeight: "1.7",
              textAlign: "left",
            }}
          >
            <li style={{ marginBottom: "20px" }}>
              🏆 Secured <strong>2nd position</strong> in the{" "}
              <strong>Data Analytics event</strong> at the{" "}
              <strong>National Students' Space Challenge (NSSC 2025)</strong>,
              hosted by <strong>IIT Kharagpur</strong>.
            </li>

            <li style={{ marginBottom: "12px" }}>
              🚀 Presented a complete multimodal ML solution including:
            </li>

            <ul
              style={{
                listStyle: "none",
                paddingLeft: "20px",
                lineHeight: "1.6",
              }}
            >
              <li>• Jet particle classification using physics-based features</li>
              <li>• CNN-based jet particle image classification</li>
              <li>• Autoencoder-based anomaly detection</li>
              <li>• Model comparison & insights</li>
            </ul>
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Achievements;
