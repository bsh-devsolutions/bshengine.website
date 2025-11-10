import { 
  FaGithub, 
  FaDocker, 
  FaBook, 
  FaEnvelope,
  FaCode
} from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const links = {
    resources: [
      { name: 'Documentation', href: '#', icon: <FaBook /> },
      { name: 'Docker Hub', href: 'https://hub.docker.com/r/bshengine/bshengine', icon: <FaDocker /> },
      { name: 'GitHub', href: 'https://github.com/bshengine/bshengine', icon: <FaGithub /> },
      { name: 'Postman Collection', href: '#', icon: <FaCode /> }
    ],
    features: [
      { name: 'Data Modeling', href: '#features' },
      { name: 'REST API', href: '#features' },
      { name: 'Search System', href: '#capabilities' },
      { name: 'Security & RBAC', href: '#features' }
    ],
    comingSoon: [
      'Caching',
      'WebSocket Support',
      'Packaging System',
      'Derived Entities',
      'Multi-database Support'
    ]
  }

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">BSH Engine</h3>
            <p className="text-gray-400 mb-4">
              Powerful backend-as-a-service platform. Start your backend with ease.
            </p>
            <div className="flex gap-4">
              {links.resources.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {links.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2"
                  >
                    {link.icon}
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-white font-semibold mb-4">Features</h4>
            <ul className="space-y-2">
              {links.features.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coming Soon */}
          <div>
            <h4 className="text-white font-semibold mb-4">Coming Soon</h4>
            <ul className="space-y-2">
              {links.comingSoon.map((item, index) => (
                <li key={index} className="text-gray-400 flex items-center gap-2">
                  <span className="text-primary-400">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} BSH Engine. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>Version 1.0.0</span>
              <span>•</span>
              <span>Default Port: 7071</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

