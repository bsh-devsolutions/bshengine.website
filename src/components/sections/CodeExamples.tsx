import { useState } from 'react'
import { FaCopy, FaCheck } from 'react-icons/fa'

interface CodeExample {
  title: string
  description: string
  code: string
  language: string
}

const examples: CodeExample[] = [
  {
    title: 'Docker Compose Setup',
    description: 'Get started with BSH Engine in seconds using Docker Compose',
    language: 'yaml',
    code: `version: '3.8'
services:
  bshengine:
    image: bshengine/bshengine:latest
    ports:
      - "7071:7071"
    environment:
      - DATABASE_URL=postgresql://user:pass@db:5432/dbname
      - JWT_SECRET=your-secret-key
    depends_on:
      - db
  
  db:
    image: postgres:15
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
      POSTGRES_DB: dbname
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:`
  },
  {
    title: 'REST API Example',
    description: 'Create and query entities using the REST API',
    language: 'bash',
    code: `# Create an entity
curl -X POST https://api.example.com/api/entities/users \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "age": 30
  }'

# Search entities
curl -X POST https://api.example.com/api/entities/users/search \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -d '{
    "filter": {
      "age": { "$gte": 25 }
    },
    "sort": [{ "name": "asc" }],
    "page": 1,
    "pageSize": 10
  }'`
  },
  {
    title: 'BSH Search Query',
    description: 'Powerful search with filtering, grouping, and aggregation',
    language: 'json',
    code: `{
  "filter": {
    "$and": [
      { "status": { "$eq": "active" } },
      { "age": { "$gte": 18, "$lte": 65 } },
      { "email": { "$ilike": "%@example.com" } }
    ]
  },
  "groupBy": [
    {
      "field": "department",
      "aggregates": [
        { "function": "COUNT", "alias": "total" },
        { "function": "AVG", "field": "salary", "alias": "avgSalary" }
      ]
    }
  ],
  "sort": [
    { "createdAt": "desc" }
  ],
  "page": 1,
  "pageSize": 20
}`
  }
]

const CodeExamples = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const copyToClipboard = (code: string, index: number) => {
    navigator.clipboard.writeText(code)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <section id="examples" className="section-container bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Code Examples
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          See how easy it is to get started with BSH Engine
        </p>
      </div>

      <div className="space-y-8">
        {examples.map((example, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl"
          >
            <div className="bg-gray-800 px-6 py-4 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">
                  {example.title}
                </h3>
                <p className="text-gray-400 text-sm">{example.description}</p>
              </div>
              <button
                onClick={() => copyToClipboard(example.code, index)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                aria-label="Copy code"
              >
                {copiedIndex === index ? (
                  <>
                    <FaCheck className="w-4 h-4" />
                    <span className="text-sm">Copied!</span>
                  </>
                ) : (
                  <>
                    <FaCopy className="w-4 h-4" />
                    <span className="text-sm">Copy</span>
                  </>
                )}
              </button>
            </div>
            <div className="p-6 overflow-x-auto">
              <pre className="code-block">
                <code>{example.code}</code>
              </pre>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CodeExamples

