import { motion } from 'framer-motion'

const OurProcess = () => {
  const steps = [
    {
      number: '01',
      icon: '📋',
      title: 'Request Quote',
      description: 'Share your building materials requirements and project specifications with our team.'
    },
    {
      number: '02',
      icon: '💰',
      title: 'Get Proposal',
      description: 'We source materials from verified suppliers and provide competitive pricing within 24 hours.'
    },
    {
      number: '03',
      icon: '✓',
      title: 'Quality Check',
      description: 'Our team inspects all materials at the factory to ensure they meet international standards.'
    },
    {
      number: '04',
      icon: '🚢',
      title: 'Ship & Track',
      description: 'We handle loading, customs clearance, and shipping. Track your order in real-time to your destination.'
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
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Four simple steps from inquiry to delivery. We make importing building materials easy and transparent.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector Line (not on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary-300 to-transparent -translate-y-1/2 z-0" />
              )}

              {/* Card */}
              <div className="relative bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 h-full z-10">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="text-5xl mb-4 mt-4">{step.icon}</div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a href="#contact" className="btn-primary">
            Start Your Project Today
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default OurProcess
