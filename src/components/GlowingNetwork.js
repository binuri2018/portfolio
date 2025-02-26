import React, { useEffect, useRef } from "react";
import "./GlowingNetwork.css";

const GlowingNetwork = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const centerX = canvas.width * 0.15; // Position on the left
    const centerY = canvas.height / 2.0;
    const radius = 250; // Globe size
    const totalNodes = 180; // Number of points on the sphere

    let nodes = [];

    // Generate spherical nodes using spherical coordinates
    for (let i = 0; i < totalNodes; i++) {
      let theta = Math.acos(1 - (2 * i) / totalNodes); // Latitude
      let phi = Math.PI * (1 + Math.sqrt(5)) * i; // Longitude

      let x = radius * Math.sin(theta) * Math.cos(phi);
      let y = radius * Math.sin(theta) * Math.sin(phi);
      let z = radius * Math.cos(theta);

      nodes.push({
        x: x,
        y: y,
        z: z,
        originalX: x,
        originalY: y,
        originalZ: z,
        radius: 3, // Node size
      });
    }

    let angleX = 0;
    let angleY = 0;

    function drawGlobe() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Rotate the globe
      angleX += 0.002; // Speed of rotation
      angleY += 0.0015;

      let rotatedNodes = nodes.map((node) => {
        let cosX = Math.cos(angleX);
        let sinX = Math.sin(angleX);
        let cosY = Math.cos(angleY);
        let sinY = Math.sin(angleY);

        let newY = node.y * cosX - node.z * sinX;
        let newZ = node.y * sinX + node.z * cosX;
        let newX = (node.x * 1.4) * cosY - newZ * sinY;

        return {
          x: centerX + newX,
          y: centerY + newY,
          z: newZ,
        };
      });

      // Draw connections (glowing lines)
      rotatedNodes.forEach((node, i) => {
        rotatedNodes.forEach((otherNode, j) => {
          if (i !== j) {
            let dx = node.x - otherNode.x;
            let dy = node.y - otherNode.y;
            let dz = node.z - otherNode.z;
            let distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

            if (distance < 60) { // Connect close nodes
              ctx.beginPath();
              ctx.strokeStyle = `rgba(173, 216, 230, ${1 - distance / 60})`;
              ctx.lineWidth = 2.5;
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(otherNode.x, otherNode.y);
              ctx.stroke();
            }
          }
        });
      });

      // Draw glowing nodes
      rotatedNodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(49, 134, 255, 0.9)";         
        ctx.shadowColor = "rgb(8, 35, 234)";
        ctx.shadowBlur = 8;
        ctx.fill();
      });

      requestAnimationFrame(drawGlobe);
    }

    drawGlobe();

    // Resize handling
    const resizeHandler = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resizeHandler);

    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  return <canvas ref={canvasRef} className="glowing-globe-canvas"></canvas>;
};


export default GlowingNetwork;
