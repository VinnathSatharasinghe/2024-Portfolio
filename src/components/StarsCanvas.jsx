/* eslint-disable no-unused-vars */
// StarsCanvas.js

import React from "react";
import { Canvas } from "@react-three/fiber";
import StarBackground from "./StarBackground";

const StarsCanvas = () => (
    <div
        style={{
            position: "fixed",
            top: 110,
            left: 110,
            width: "100%",
            height: "100%",
            zIndex: 0,
            overflowX: "hidden",
        }}
    >
        <Canvas camera={{ position: [0, 0, 1] }}>
            <StarBackground />
        </Canvas>
    </div>
);

export default StarsCanvas;
