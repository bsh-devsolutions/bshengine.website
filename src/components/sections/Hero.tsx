import { FaDocker, FaBook, FaRocket } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 via-white to-primary-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Start Your Backend
            <br />
            <span className="gradient-text">In Minutes, Not Days</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
            BSH Engine is a powerful backend-as-a-service platform that eliminates boilerplate code 
            and accelerates development. Just run a Docker image and you're ready to go.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="#quick-start"
              className="px-8 py-4 bg-primary-600 text-white rounded-lg text-lg font-semibold hover:bg-primary-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              <FaRocket className="inline" />
              Get Started
            </a>
            <a
              href="https://hub.docker.com/r/bshengine/bshengine"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-primary-600 rounded-lg text-lg font-semibold border-2 border-primary-600 hover:bg-primary-50 transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <FaDocker className="inline" />
              Docker Hub
            </a>
            <a
              href="#"
              className="px-8 py-4 bg-gray-100 text-gray-700 rounded-lg text-lg font-semibold hover:bg-gray-200 transition-all flex items-center gap-2"
            >
              <FaBook className="inline" />
              View Docs
            </a>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-2xl p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-sm text-gray-500 font-mono">docker-compose.yml</span>
              </div>
              <pre className="code-block text-left">
                <code>{`version: '3.8'
services:
  bshengine:
    image: bshengine/bshengine:latest
    ports:
      - "7071:7071"
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/dbname
    depends_on:
      - db
  db:
    image: postgres:15
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
      POSTGRES_DB: dbname`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

