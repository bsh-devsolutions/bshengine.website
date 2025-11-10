import { 
  FaClock, 
  FaCode, 
  FaRocket, 
  FaShieldAlt, 
  FaChartLine,
  FaCheckCircle
} from 'react-icons/fa'

interface Benefit {
  icon: React.ReactNode
  title: string
  description: string
}

const benefits: Benefit[] = [
  {
    icon: <FaClock className="w-8 h-8" />,
    title: 'Save Development Time',
    description: 'Eliminate weeks of boilerplate code. Focus on building features that matter to your users.'
  },
  {
    icon: <FaCode className="w-8 h-8" />,
    title: 'No Boilerplate Code',
    description: 'No need to write CRUD endpoints, authentication, or search logic. It\'s all built-in and ready to use.'
  },
  {
    icon: <FaRocket className="w-8 h-8" />,
    title: 'Focus on Business Logic',
    description: 'Spend your time solving business problems, not reinventing the wheel with infrastructure code.'
  },
  {
    icon: <FaShieldAlt className="w-8 h-8" />,
    title: 'Production-Ready Features',
    description: 'Security, authentication, authorization, and audit trails are built-in from day one.'
  },
  {
    icon: <FaChartLine className="w-8 h-8" />,
    title: 'Scalable Architecture',
    description: 'Built on proven technologies. Scale your backend as your application grows.'
  },
  {
    icon: <FaCheckCircle className="w-8 h-8" />,
    title: 'Rapid Prototyping',
    description: 'Get from idea to working API in minutes. Perfect for MVPs and proof-of-concepts.'
  }
]

const Benefits = () => {
  return (
    <section className="section-container bg-gradient-to-br from-primary-50 to-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Why Choose BSH Engine?
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Accelerate your backend development and ship faster
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="text-primary-600 mb-4">{benefit.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {benefit.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Benefits

