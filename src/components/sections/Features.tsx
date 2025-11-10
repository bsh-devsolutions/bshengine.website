import { 
  FaDatabase, 
  FaCode, 
  FaShieldAlt, 
  FaSearch, 
  FaFileUpload, 
  FaEnvelope,
  FaBolt,
  FaUsers,
  FaKey
} from 'react-icons/fa'

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
  category: string
}

const features: Feature[] = [
  {
    icon: <FaDatabase className="w-8 h-8" />,
    title: 'Data Modeling',
    description: 'Create entities, types, and schemas with minimal configuration. Support for tables, views, functions, and complex relationships.',
    category: 'Core'
  },
  {
    icon: <FaCode className="w-8 h-8" />,
    title: 'REST API',
    description: 'Full CRUD operations with consistent response formats, pagination, validation, and comprehensive error handling.',
    category: 'API'
  },
  {
    icon: <FaShieldAlt className="w-8 h-8" />,
    title: 'Security & RBAC',
    description: 'Role-based access control, policies, API keys, and entity-level permissions. Built-in authentication and audit trails.',
    category: 'Security'
  },
  {
    icon: <FaSearch className="w-8 h-8" />,
    title: 'Advanced Search',
    description: 'Powerful BSH Search with filtering, grouping, sorting, and aggregation. TypeScript type definitions included.',
    category: 'Search'
  },
  {
    icon: <FaFileUpload className="w-8 h-8" />,
    title: 'File Management',
    description: 'Upload, store, and serve files with configurable storage backends. Image management included.',
    category: 'Storage'
  },
  {
    icon: <FaEnvelope className="w-8 h-8" />,
    title: 'Email System',
    description: 'Template-based email sending with configurable email services. Perfect for notifications and communications.',
    category: 'Communication'
  },
  {
    icon: <FaBolt className="w-8 h-8" />,
    title: 'Triggers (Beta)',
    description: 'Event-driven automation with webhook support. Respond to entity changes and chain multiple triggers.',
    category: 'Automation'
  },
  {
    icon: <FaUsers className="w-8 h-8" />,
    title: 'User Management',
    description: 'Complete user authentication system with login, registration, password reset, and account activation.',
    category: 'Auth'
  },
  {
    icon: <FaKey className="w-8 h-8" />,
    title: 'API Keys',
    description: 'Generate and manage API keys for service-to-service authentication. Secure token management included.',
    category: 'Security'
  }
]

const Features = () => {
  return (
    <section id="features" className="section-container bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Powerful Features
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Everything you need to build a production-ready backend without writing boilerplate code
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="text-primary-600 mb-4">{feature.icon}</div>
            <div className="mb-2">
              <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-1 rounded">
                {feature.category}
              </span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features

