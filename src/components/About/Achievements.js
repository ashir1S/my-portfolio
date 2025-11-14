import React from "react";

function Achievements() {
  return (
    <div className="achievement-section" style={{ padding: "20px 0" }}>
      <h1 className="project-heading">
        <strong className="purple">Achievements</strong>
      </h1>

      <ul
        style={{
          fontSize: "1.2em",
          marginTop: "25px",
          paddingLeft: "0",
          listStyle: "none",
          lineHeight: "1.7",
          textAlign: "left",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <li style={{ marginBottom: "20px" }}>
          🏆 Secured <strong>2nd position</strong> in the{" "}
          <strong>Data Analytics event</strong> at the{" "}
          <strong>National Students' Space Challenge (NSSC 2025)</strong>, hosted
          by <strong>IIT Kharagpur</strong>.
        </li>

        <li style={{ marginBottom: "10px" }}>
          🚀 Presented a complete multimodal ML solution including:
        </li>

        {/* Sub list with dots — left aligned */}
        <ul
          style={{
            listStyle: "none",
            paddingLeft: "20px",
            marginTop: "5px",
            lineHeight: "1.6",
            textAlign: "left",
          }}
        >
          <li>• Jet particle classification using physics-based features</li>
          <li>• CNN-based jet particle image classification</li>
          <li>• Autoencoder-based anomaly detection</li>
          <li>• Model comparison & insights</li>
        </ul>
      </ul>
    </div>
  );
}

export default Achievements;
