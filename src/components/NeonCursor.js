import React, { useEffect } from "react";
import { neonCursor } from "https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js";

const NeonCursor = () => {
  useEffect(() => {
    const section = document.querySelector(".content-section"); 
    if (section) {
      neonCursor({
        el: section, 
        shaderPoints: 16,
        curvePoints: 80,
        curveLerp: 0.5,
        radius1: 5,
        radius2: 30,
        velocityTreshold: 10,
        sleepRadiusX: 0,
        sleepRadiusY: 0,
        sleepTimeCoefX: 0.0025,
        sleepTimeCoefY: 0.0025,
      });
    }
  }, []);

  return null; 
};

export default NeonCursor;
