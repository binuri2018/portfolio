import React, { useEffect } from "react";
import "./FallingStars.css";

const FallingStars = () => {
  useEffect(() => {
    const aboutMeSection = document.querySelector(".contact-container1"); // Target About Me section
    if (!aboutMeSection) return;

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = aboutMeSection.offsetWidth;
    canvas.height = aboutMeSection.offsetHeight;
    canvas.style.position = "absolute";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.zIndex = "-1"; 

    aboutMeSection.style.position = "relative"; // Ensure About Me section is positioned
    aboutMeSection.prepend(canvas); // Add canvas inside About Me section

    const stars = Array.from({ length: 50 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      speed: Math.random() * 2 + 1,
      size: Math.random() * 2 + 1,
    }));

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        star.y += star.speed;
        if (star.y > canvas.height) star.y = 0;
      });
      requestAnimationFrame(drawStars);
    };

    drawStars();

    return () => {
      canvas.remove(); // Clean up when unmounting
    };
  }, []);

  return null; // No visible elements, just the background effect
};

export default FallingStars;
