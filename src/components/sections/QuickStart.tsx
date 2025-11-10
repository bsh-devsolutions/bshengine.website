import { FaDocker, FaBook, FaGithub, FaCheck } from 'react-icons/fa'

const steps = [
  {
    number: 1,
    title: 'Pull the Docker Image',
    description: 'Get the latest BSH Engine image from Docker Hub',
    code: 'docker pull bshengine/bshengine:latest'
  },
  {
    number: 2,
    title: 'Configure & Run',
    description: 'Set up your docker-compose.yml and environment variables',
    code: 'docker-compose up -d'
  },
  {
    number: 3,
    title: 'Start Building',
    description: 'Access the API at http://localhost:7071 and start creating entities',
    code: 'curl http://localhost:7071/api/health'
  }
]

const QuickStart = () => {
  return (
    <section id="quick-start" className="section-container bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Get Started in 3 Steps
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Have your backend running in minutes
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-white p-6 rounded-xl border-2 border-primary-200 shadow-md"
            >
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-2">
                {step.title}
              </h3>
              <p className="text-gray-600 mb-4">{step.description}</p>
              <div className="bg-gray-900 rounded-lg p-4">
                <code className="text-gray-100 text-sm font-mono">
                  {step.code}
                </code>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-primary-100 mb-6 text-lg">
            Check out our documentation for detailed setup instructions and API reference
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://hub.docker.com/r/bshengine/bshengine"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors flex items-center gap-2"
            >
              <FaDocker className="inline" />
              Docker Hub
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-primary-800 text-white rounded-lg font-semibold hover:bg-primary-900 transition-colors flex items-center gap-2"
            >
              <FaBook className="inline" />
              Documentation
            </a>
            <a
              href="https://github.com/bshengine/bshengine"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary-800 text-white rounded-lg font-semibold hover:bg-primary-900 transition-colors flex items-center gap-2"
            >
              <FaGithub className="inline" />
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-12 bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            What You Get Out of the Box
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'REST API with full CRUD operations',
              'User authentication & authorization',
              'Role-based access control',
              'Advanced search & filtering',
              'File upload & management',
              'Email sending system',
              'Entity auditing & tracking',
              'API key management',
              'Postman collection',
              'TypeScript type definitions'
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <FaCheck className="text-primary-600 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default QuickStart

