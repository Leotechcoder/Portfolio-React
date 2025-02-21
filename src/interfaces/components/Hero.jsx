"use client"

import { motion } from "framer-motion"
import AnimatedTechItems from "./AnimatedItems"

const Hero = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 min-h-screen pt-20 flex items-center md:mb-4">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50, scale: 0 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="space-y-6 p-5 scale-95"
        >
          <div className="inline-block">
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm sm:text-base">Hola!</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-secondary">
            Soy <span className="text-primary">Leonardo</span>,
            <br className="sm:block text-xl" />
            Full Stack 
            <span className="block text-5xl">Developer</span>
          </h1>

          <div className="bg-secondary/5 p-4 rounded-lg">
            <p className="text-xs sm:text-sm italic text-secondary">
              "Diseño de software excepcional hecho a la medida de tu negocio. Altamente recomendado"
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-3/4 mx-auto bg-primary text-white px-6 py-3 rounded-full font-medium text-md sm:text-base sm:w-auto"
            >
              Linkedin
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-3/4 mx-auto border-2 border-primary text-primary px-6 py-3 rounded-full font-medium text-md sm:text-base"
            >
              Repositorios
            </motion.button>
          </div>
        </motion.div>

        <div className="w-full h-full flex justify-center items-center">
          <AnimatedTechItems />
        </div>
      </div>
    </section>
  )
}

export default Hero

