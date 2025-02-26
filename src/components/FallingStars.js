import React from "react";
import "./FallingStars.css";

const FallingStars = () => {
  const stars = new Array(50).fill(0); // Generate 50 stars

  return (
    <div className="falling-stars-container">
      {stars.map((_, index) => {
        const randomLeft = Math.random() * 100; // Randomize horizontal position (0-100vw)
        const randomDelay = Math.random() * 5; // Random delay (0-5s)
        const randomDuration = 2 + Math.random() * 3; // Random fall speed (2s-5s)

        return (
          <div
            key={index}
            className="falling-star"
            style={{
              left: `${randomLeft}vw`, // Position anywhere horizontally
              animationDelay: `-${randomDelay}s`, // Random delay for natural effect
              animationDuration: `${randomDuration}s`, // Different speeds
            }}
          />
          
        );
      })}
    </div>
  );
};

export default FallingStars;
