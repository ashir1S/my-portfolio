import React from "react";

function Achievements() {
  return (
    <div className="achievement-section" style={{ padding: "20px 0" }}>
      <h1 className="project-heading">
        <strong className="purple">Achievements</strong>
      </h1>

      {/* Clean & properly aligned achievement list */}
      <ul
        style={{
          fontSize: "1.2em",
          marginTop: "25px",
          marginLeft: "0",
          paddingLeft: "0",
          listStyle: "none",
          lineHeight: "1.7",
          textAlign: "left",
          maxWidth: "800px",
          margin: "25px auto",
        }}
      >
        <li style={{ marginBottom: "25px" }}>
          🏆 Secured <strong>2nd position</strong> in the{" "}
          <strong>Data Analytics event</strong> at the{" "}
          <strong>National Students' Space Challenge (NSSC 2025)</strong>, hosted
          by <strong>IIT Kharagpur</strong>.
        </li>

        <li
          style={{
            marginBottom: "15px",
            marginTop: "10px",
          }}
        >
          🚀 Presented a complete multimodal ML solution including:
        </li>

        <ul
          style={{
            listStyle: "none",
            marginLeft: "35px",
            paddingLeft: "0",
            lineHeight: "1.6",
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
