import { motion } from "framer-motion"
import { useServices } from "../hooks/useServices"

const ServiceCard = ({ service, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="bg-gradient-to-br from-white to-gray-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 border border-gray-200"
  >
    <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6 mx-auto">
      <service.icon className="w-8 h-8 text-white animate-bounce" />
    </div>
    <h3 className="text-2xl font-bold mb-3 text-center text-gray-800">{service.title}</h3>
    <p className="text-gray-600 text-center">{service.description}</p>
    <div className="mt-6">
      <button className="w-full bg-primary text-white py-2 px-4 rounded-full hover:bg-primary-dark transition-colors duration-300 ease-in-out ">
        Ver más
      </button>
    </div>
  </motion.div>
)

const Services = () => {
  const services = useServices()

  return (
    <section id="services" className="container py-20 service-container">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 text-slate-600">
          Mis <span className="text-primary">Servicios</span>
        </h2>
        <p className="text-gray-200 max-w-2xl mx-auto text-lg">
        Eleve su presencia digital con servicios de diseño y desarrollo de primer nivel.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} delay={index * 0.8} />
        ))}
      </div>
    </section>
  )
}

export default Services

