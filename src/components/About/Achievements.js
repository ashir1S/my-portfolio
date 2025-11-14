import React from "react";
import Card from "react-bootstrap/Card";

function Achievements() {
  return (
    <Card className="achievement-card">
      <Card.Body>
        <h2 className="purple">Achievements</h2>
        <ul>
          <li>🏆 2nd Place among 250 teams in Hackathon</li>
          <li>🚀 Built ML & DL projects including Driver Gaze Detection</li>
          <li>📚 MCA student at Thapar University</li>
        </ul>
      </Card.Body>
    </Card>
  );
}

export default Achievements;
