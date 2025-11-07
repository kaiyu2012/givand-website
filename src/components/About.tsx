import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">About Givand</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                <span className="font-semibold text-primary-700">Ningbo Givand Import and Export Co., Ltd.</span> has been a trusted partner in the building materials industry since 2014. With over a decade of experience, we've built our reputation on reliability, quality, and exceptional customer service.
              </p>
              <p>
                Located in the heart of China's manufacturing hub in <span className="font-semibold">Ningbo, Zhejiang</span>, we have direct access to a vast network of verified suppliers and manufacturers. This strategic position allows us to offer competitive pricing while maintaining the highest quality standards.
              </p>
              <p>
                Our team of experienced professionals understands the complexities of international trade and building material sourcing. We pride ourselves on being more than just a supplier – we're your dedicated partner in China, committed to your project's success.
              </p>

              {/* Key Highlights */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-primary-600">2014</div>
                  <div className="text-sm text-gray-600">Established</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-primary-600">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Timeline/Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary-500">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To provide reliable, fast, and cost-effective building materials sourcing and logistics solutions that help our clients succeed in their construction projects worldwide.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary-500">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Values</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span><strong>Reliability:</strong> Consistent quality and on-time delivery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span><strong>Transparency:</strong> Clear communication and honest pricing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  <span><strong>Excellence:</strong> Commitment to the highest standards</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-primary-500">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Location</h3>
              <p className="text-gray-600">
                📍 Xiqiaotou, Miaoshan Village, Cicheng Town<br />
                Jiangbei District, Ningbo City<br />
                Zhejiang Province, China 315034
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
