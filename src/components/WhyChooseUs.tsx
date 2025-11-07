import { motion } from 'framer-motion'

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: '⚡',
      title: 'Fast & Reliable',
      description: 'Quick response times and consistent on-time delivery. We understand time is money in construction projects.'
    },
    {
      icon: '💰',
      title: 'Competitive Pricing',
      description: 'Direct factory relationships and bulk purchasing power mean the best prices for our clients.'
    },
    {
      icon: '🔒',
      title: 'Quality Assured',
      description: 'Rigorous quality control and inspection processes ensure you receive materials that meet international standards.'
    },
    {
      icon: '🌏',
      title: 'Global Reach',
      description: 'Comprehensive international shipping and logistics services to deliver anywhere in the world.'
    },
    {
      icon: '👥',
      title: 'Expert Team',
      description: '10+ years of industry experience with deep knowledge of building materials and Chinese markets.'
    },
    {
      icon: '🤝',
      title: 'Trusted Partner',
      description: 'Long-term relationships built on trust, transparency, and mutual success with our clients.'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Why Choose Givand?</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Your success is our priority. Here's what sets us apart in the competitive world of building materials import-export.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-xl hover:bg-primary-50 transition-colors duration-300"
            >
              <div className="text-5xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-xl mb-8 text-primary-100">
              Let's discuss how we can help you source quality building materials from China
            </p>
            <a href="#contact" className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg">
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs
