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
        let shadowY = centerY + 100 - containerRect.top; // Ajuste más realista

        const scale = parseFloat(ballRef.current.style.scale) || 0.1;
        const shadowScale = 1 - scale * 0.5;

        setShadowStyle({
          position: "absolute",
          left: shadowX - 80,
          top: shadowY - 20,
          width: 160,
          height: 40,
          borderRadius: "50%",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          scaleX: 0.8 * shadowScale,
          scaleY: 0.7 * shadowScale,
          opacity: Math.max(0.3, 0.8 - scale), // La opacidad baja cuando la bola sube
          filter: "blur(6px)",
          zIndex: -1,
        });
      }
      requestAnimationFrame(updateShadow);
    };

    updateShadow();
  }, []);

  return (
    <motion.div className="flex justify-center items-center w-full min-h-[50vh]" style={{ perspective: 800 }} ref={containerRef}>
      {/* Sombra dinámica */}
      <motion.div style={shadowStyle} />

      {/* Bola animada */}
      <motion.div
        ref={ballRef}
        initial={{ y: 100, scale: 0.1, opacity: 0.5 }}
        animate={{
          y: [100, -80, 60, -60, 40, -40, 20, -20, 10, 0],
          scale: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
          rotateZ: 360,
          opacity: 1,
        }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="relative w-[200px] h-[200px] 
                   md:w-[250px] md:h-[250px] 
                   lg:w-[300px] lg:h-[300px] 
                   xl:w-[350px] xl:h-[350px] 
                   flex justify-center items-center 
                   rounded-full shadow-xl bg-gray-900 overflow-hidden"
        style={{
          boxShadow: "0 0 15px rgba(0, 0, 0, 0.5)",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="absolute w-full h-full rounded-full tech-container"
          style={{
            backgroundImage: "url('/imagen-bolita-bg-transparent.png')",
            backgroundSize: "cover",
          }}
        />
      </motion.div>
    </motion.div>
  );
}
