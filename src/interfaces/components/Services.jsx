"use client"

import { motion } from "framer-motion"
import { useServices } from "../hooks/useServices"

const ServiceCard = ({ service, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="bg-gradient-to-br from-white to-gray-100 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 border border-gray-200"
  >
    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-lg flex items-center justify-center mb-4 sm:mb-6 mx-auto">
      <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white animate-bounce" />
    </div>
    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-center text-gray-800">{service.title}</h3>
    <p className="text-gray-600 text-center text-sm sm:text-base">{service.description}</p>
    <div className="mt-4 sm:mt-6">
      <button className="w-full bg-primary text-white py-2 px-4 rounded-full hover:bg-primary-dark transition-colors duration-300 ease-in-out text-sm sm:text-base">
        Ver más
      </button>
    </div>
  </motion.div>
)

const Services = () => {
  const services = useServices()

  return (
    <section id="services" className="service-container py-12 sm:py-20">
      <div className="container-fluid">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-4 text-white">
            Mis <span className="text-primary">Servicios</span>
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto text-sm sm:text-lg">
            Eleve su presencia digital con servicios de diseño y desarrollo de primer nivel.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

