"use client"

import { motion, useAnimation } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export default function AnimatedTechItems() {
  const ballRef = useRef(null);
  const ballControls = useAnimation();
  const shadowControls = useAnimation();

  useEffect(() => {
    const animateBallAndShadow = async () => {
      const duration = 1.5;
      const easing = "easeInOut";

      const ballXValues = [-120, -100, -80, -60, -40, -20, 0, 20, 40, 60,];
      const shadowXValues = ballXValues.map(x => x * 0.85); // Ajusta el factor para la sombra

      await Promise.all([
        ballControls.start({
          x: ballXValues,
          y: [100, -80, 60, -60, 40, -40, 20, -20, 10, 0],
          scale: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
          rotateZ: 360,
          opacity: 1,
          transition: { duration, ease: easing },
        }),
        shadowControls.start({
          x: shadowXValues, // Movimiento horizontal de la sombra
          scaleX: [0.5, 0.4, 0.6, 0.5, 0.7, 0.6, 0.8, 0.7, 0.9, 1],
          scaleY: [0.1, 0.08, 0.12, 0.1, 0.14, 0.12, 0.16, 0.14, 0.18, 0.2],
          opacity: [0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.6],
          y: [100, 110, 120, 130, 143, 167, 174],
          z: [-700, -400, -200, -100, 0, 80, 300],
          transition: { duration, ease: easing },
        }),
      ]);
    };

    animateBallAndShadow();
  }, [ballControls, shadowControls]);

  return (
    <div className="flex justify-center items-center w-full min-h-[30vh] sm:min-h-[40vh] relative overflow-visible py-8 sm:py-12">
      {/* Sombra dinámica */}
      <motion.div
        animate={shadowControls}
        style={{
          position: "absolute",
          width: 160,
          height: 40,
          borderRadius: "50%",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          filter: "blur(6px)",
          zIndex: -1,
          transformOrigin: "center",
        }}
      />

      {/* Bola animada */}
      <motion.div
        ref={ballRef}
        animate={ballControls}
        initial={{ y: 100, scale: 0.1, opacity: 0.7 }}
        className="relative w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] xl:w-[350px] xl:h-[350px] flex justify-center items-center rounded-full bg-gray-900 overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3.5, ease: "easeOut" }}
          className="absolute w-full h-full rounded-full tech-container"
        />
      </motion.div>
    </div>
  );
}