const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/logo-icon.svg" alt="Givand Logo" className="w-12 h-12" />
              <div>
                <h3 className="text-white font-bold text-lg">GIVAND</h3>
                <p className="text-xs text-gray-400">Import & Export</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Ningbo Givand Import and Export Co., Ltd. - Your trusted partner for building materials wholesale and bulk purchase in China since 2014.
            </p>
            <div className="text-sm text-gray-400">
              <p>📍 Xiqiaotou, Miaoshan Village, Cicheng Town</p>
              <p>Jiangbei District, Ningbo City, Zhejiang, China 315034</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-primary-400 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-primary-400 transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-primary-400 transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-primary-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-primary-400 transition-colors">Building Materials Wholesale</li>
              <li className="hover:text-primary-400 transition-colors">Bulk Purchase</li>
              <li className="hover:text-primary-400 transition-colors">Loading Services</li>
              <li className="hover:text-primary-400 transition-colors">Shipment & Logistics</li>
              <li className="hover:text-primary-400 transition-colors">Sourcing & Procurement</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Ningbo Givand Import and Export Co., Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>

        {/* SEO Keywords Footer */}
        <div className="mt-6 pt-6 border-t border-gray-800">
          <p className="text-xs text-gray-500 text-center">
            Keywords: Building Materials China | Wholesale Building Supplies | Bulk Purchase China | Import Export Ningbo |
            Construction Materials Supplier | China Sourcing Agent | Building Products Wholesale | International Shipping |
            Loading Services China | Building Materials Trading Company
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
