import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export default function AnimatedTechItems() {
  const [shadowStyle, setShadowStyle] = useState({});
  const ballRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateShadow = () => {
      if (ballRef.current && containerRef.current) {
        const ballRect = ballRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();

        const centerX = ballRect.left + ballRect.width / 2;
        const centerY = ballRect.top + ballRect.height / 2;

        const shadowX = centerX - containerRect.left;
        const shadowY = centerY + 200 - containerRect.top;

        const rotation = ballRef.current.style.rotateZ;
        const scale = parseFloat(ballRef.current.style.scale); // Obtener la escala actual

        // Simular el movimiento en Z con la escala
        const shadowScale = 1 - scale * 0.5; // Ajustar este valor para la intensidad del efecto

        setShadowStyle({
          position: "absolute",
          left: shadowX - 100,
          top: shadowY - 25,
          width: 200 + scale,
          height: 50 + scale,
          borderRadius: "50%",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          scaleX: 0.8 * shadowScale, // Escalar la sombra en X
          scaleY: 0.7 * shadowScale, // Escalar la sombra en Y
          opacity: 0.7,
          filter: "blur(5px)",
          rotate: rotation,
          zIndex: -1,
        });
      }
      requestAnimationFrame(updateShadow);
    };

    updateShadow();
  }, []);

  return (
    <motion.div style={{ perspective: 800 }} ref={containerRef}>
      <motion.div
        ref={ballRef}
        initial={{ y: 100, scale: 0.1, opacity: 0.5, rotateZ: 0 }}
        animate={{
          y: [100, -100, 80, -80, 60, -60, 50, -50, 40, -40, 30, -30, 20, -20, 10, 0],
          scale: [0.1, 0.15, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1],
          opacity: 1,
          rotateZ: 360,
        }}
        transition={{ duration: 3.5, ease: "easeOut" }}
        className="relative left-40 w-[400px] h-[400px] flex justify-center items-center rounded-full"
        style={{
          boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
          overflow: "hidden",
        }}
      >
        <motion.div
          className="absolute w-full h-full tech-container rounded-full"
          style={{
            backgroundImage: "url('/imagen-bolita-bg-transparent.png')",
          }}
        />
      </motion.div>

      <motion.div style={shadowStyle} />
    </motion.div>
  );
}