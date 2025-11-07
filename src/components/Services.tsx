import { motion } from 'framer-motion'

const Services = () => {
  const services = [
    {
      icon: '🏗️',
      title: 'Building Materials Wholesale',
      description: 'Comprehensive wholesale solutions for all types of construction and building materials. From cement and steel to finishing materials, we source quality products at competitive prices.',
      features: ['Bulk purchasing', 'Quality inspection', 'Competitive pricing', 'Wide product range']
    },
    {
      icon: '🛒',
      title: 'Bulk Purchase Services',
      description: 'Leverage our extensive network across China to purchase materials in bulk. We negotiate the best prices and ensure quality standards for your large-scale projects.',
      features: ['Volume discounts', 'Supplier verification', 'Quality assurance', 'Cost optimization']
    },
    {
      icon: '🚢',
      title: 'Loading & Shipment',
      description: 'End-to-end logistics support including professional loading services, customs clearance, and international shipment coordination to get your materials where they need to be.',
      features: ['Professional loading', 'Customs support', 'Global shipping', 'Tracking services']
    },
    {
      icon: '🔍',
      title: 'Sourcing & Procurement',
      description: 'Expert sourcing services to find the exact materials you need from verified manufacturers across China. We handle negotiations, quality checks, and procurement management.',
      features: ['Factory audits', 'Price negotiation', 'Sample testing', 'Contract management']
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Comprehensive import and export solutions tailored to your building materials needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-primary-300 hover:shadow-xl transition-all duration-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-primary-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
