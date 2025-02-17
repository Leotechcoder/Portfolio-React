"use client"

import { motion } from "framer-motion";
import AnimatedTechItems from "./AnimatedItems";

const Hero = () => {
  return (
    <section className="container min-h-screen pt-20 flex items-center">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50, scale: 0 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="space-y-6"
        >
          <div className="inline-block">
            <span className="bg-[#FF6B00]/10 text-[#FF6B00] px-4 py-2 rounded-full">Hola!</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-[#1A1A1A]">
            Soy <span className="text-[#FF6B00]">Leonardo</span>,
            <br />
            Full Stack Developer
          </h1>

          <div className="bg-[#1A1A1A]/5 p-4 rounded-lg">
            <p className="text-sm italic text-[#1A1A1A]">
              "Diseño de software excepcional hecho a la medida de tu negocio. Altamente recomendado"
            </p>
          </div>

          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FF6B00] text-white px-6 py-3 rounded-full font-medium"
            >
              Linkedin
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-[#FF6B00] text-[#FF6B00] px-6 py-3 rounded-full font-medium"
            >
              Repositorios
            </motion.button>
          </div>
        </motion.div>

        {/* <motion.div
          initial={{ scale: 0.2, rotate: 360, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 9 }}
          className="relative w-full h-[400px]"
        > */}
          <AnimatedTechItems />
        {/* </motion.div> */}
      </div>
    </section>
  );
};

export default Hero;
