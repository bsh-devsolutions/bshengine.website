import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold gradient-text">BSH Engine</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-primary-600 transition-colors">
              Features
            </a>
            <a href="#capabilities" className="text-gray-700 hover:text-primary-600 transition-colors">
              Capabilities
            </a>
            <a href="#examples" className="text-gray-700 hover:text-primary-600 transition-colors">
              Examples
            </a>
            <a href="#quick-start" className="text-gray-700 hover:text-primary-600 transition-colors">
              Quick Start
            </a>
            <a
              href="https://github.com/bshengine/bshengine"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              GitHub
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a
              href="#features"
              className="block py-2 text-gray-700 hover:text-primary-600"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a
              href="#capabilities"
              className="block py-2 text-gray-700 hover:text-primary-600"
              onClick={() => setIsOpen(false)}
            >
              Capabilities
            </a>
            <a
              href="#examples"
              className="block py-2 text-gray-700 hover:text-primary-600"
              onClick={() => setIsOpen(false)}
            >
              Examples
            </a>
            <a
              href="#quick-start"
              className="block py-2 text-gray-700 hover:text-primary-600"
              onClick={() => setIsOpen(false)}
            >
              Quick Start
            </a>
            <a
              href="https://github.com/bshengine/bshengine"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 px-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 text-center"
              onClick={() => setIsOpen(false)}
            >
              GitHub
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

