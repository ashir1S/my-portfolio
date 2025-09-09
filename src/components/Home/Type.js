import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "MCA Student — Thapar Institute",
          "AI / ML Enthusiast",
          "Computer Vision · PyTorch",
          "Building Practical ML Projects",
        ],
        autoStart: true,
        loop: true,
        delay: 75,       // typing speed
        deleteSpeed: 50, // deleting speed
      }}
    />
  );
}

export default Type;
