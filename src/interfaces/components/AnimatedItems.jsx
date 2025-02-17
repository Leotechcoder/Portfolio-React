import { motion } from "framer-motion";

export default function AnimatedTechItems() {
  return (
    <motion.div 
      className="flex justify-center items-center w-full min-h-[50vh] md:min-h-[70vh] lg:min-h-[80vh]"
      style={{ perspective: 800 }}
    >
      <motion.div
        initial={{ y: 80, scale: 0.1 }}
        animate={{
          y: [80, -80, 60, -60, 40, -40, 30, -30, 20, -20, 10, 0],
          scale: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
          rotateX: [0, 10, 0],
          rotateY: [0, -5, 0],
          rotateZ: [0, 360, 0],
        }}
        transition={{ duration: 3, ease: "easeOut" }}
        className="relative w-[220px] h-[220px] 
                   md:w-[220px] md:h-[220px] 
                   lg:w-[280px] lg:h-[280px] 
                   xl:w-[350px] xl:h-[350px] 
                   flex justify-center items-center bg-gray-900 
                   overflow-hidden rounded-full shadow-xl"
        style={{
          boxShadow: "0 0 15px rgba(0, 0, 0, 0.5)", // Sombra más sutil
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
          className="absolute w-full h-full tech-container rounded-full"
          style={{
            backgroundImage: "url('/imagen-bolita2.png')",
          }}
        />
      </motion.div>
    </motion.div>
  );
}
