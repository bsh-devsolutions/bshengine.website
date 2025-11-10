import { 
  FaDocker, 
  FaTable, 
  FaServer, 
  FaFilter, 
  FaLock, 
  FaCloudUploadAlt 
} from 'react-icons/fa'

interface Capability {
  icon: React.ReactNode
  title: string
  description: string
  highlights: string[]
}

const capabilities: Capability[] = [
  {
    icon: <FaDocker className="w-10 h-10" />,
    title: 'Easy Docker Setup',
    description: 'Get started in minutes with a single Docker image. Optional PostgreSQL included.',
    highlights: [
      'Single Docker image deployment',
      'docker-compose configuration',
      'Environment-based setup',
      'Quick start in minutes'
    ]
  },
  {
    icon: <FaTable className="w-10 h-10" />,
    title: 'Powerful Data Modeling',
    description: 'Create entities with minimal work. Support for tables, views, functions, and complex relationships.',
    highlights: [
      'Entity management (tables, views, functions)',
      'Primary key strategies (AutoIncrement, UUID, Fixed)',
      'Composite primary keys',
      'Entity permissions & auditing'
    ]
  },
  {
    icon: <FaServer className="w-10 h-10" />,
    title: 'Comprehensive REST API',
    description: 'Full CRUD operations with consistent responses, pagination, and detailed error handling.',
    highlights: [
      'Complete CRUD endpoints',
      'Batch operations support',
      'Export/Import in multiple formats',
      'Standardized JSON responses'
    ]
  },
  {
    icon: <FaFilter className="w-10 h-10" />,
    title: 'Advanced Search System',
    description: 'BSH Search with powerful filtering, grouping, sorting, and aggregation capabilities.',
    highlights: [
      '15+ comparison operators',
      'Nested filters with AND/OR logic',
      'Grouping with aggregate functions',
      'TypeScript type definitions'
    ]
  },
  {
    icon: <FaLock className="w-10 h-10" />,
    title: 'Built-in Security',
    description: 'Role-based access control, policies, API keys, and entity-level permissions.',
    highlights: [
      'JWT-based authentication',
      'Role-based access control',
      'Fine-grained policies',
      'Audit trails'
    ]
  },
  {
    icon: <FaCloudUploadAlt className="w-10 h-10" />,
    title: 'File & Email Management',
    description: 'Upload files, manage images, and send emails with template support.',
    highlights: [
      'File storage configuration',
      'Image upload & management',
      'Email template system',
      'Configurable backends'
    ]
  }
]

const KeyCapabilities = () => {
  return (
    <section id="capabilities" className="section-container bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Key Capabilities
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Everything you need to build scalable, secure backends without the complexity
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {capabilities.map((capability, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 text-primary-600">{capability.icon}</div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {capability.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {capability.description}
                </p>
                <ul className="space-y-2">
                  {capability.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <span className="text-primary-600 mt-1.5">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default KeyCapabilities

