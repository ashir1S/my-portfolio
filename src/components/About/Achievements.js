function Achievements() {
  return (
    <div className="achievement-section" style={{ padding: "20px 0" }}>
      <h1 className="project-heading">
        <strong className="purple">Achievements</strong>
      </h1>

      <ul style={{ fontSize: "1.2em", marginTop: "20px", listStyle: "none" }}>
        <li>
          🏆 Secured <strong>2nd position</strong> in the 
          <strong> Data Analytics event</strong> at the 
          <strong> National Students' Space Challenge (NSSC 2025)</strong>, 
          hosted by <strong>IIT Kharagpur</strong>.
        </li>

        <li style={{ marginTop: "10px" }}>
          🚀 Presented a complete multimodal ML solution including:
          <ul style={{ marginTop: "5px" }}>
            <li>• Jet particle classification using physics-based features</li>
            <li>• CNN-based jet particle image classification</li>
            <li>• PCA for dimensionality reduction</li>
            <li>• Autoencoder-based anomaly detection</li>
            <li>• Model comparison & insights</li>
          </ul>
        </li>

        <li style={{ marginTop: "10px" }}>
          🎓 Proudly represented 
          <strong> Thapar Institute of Engineering & Technology</strong>.
        </li>
      </ul>
    </div>
  );
}
