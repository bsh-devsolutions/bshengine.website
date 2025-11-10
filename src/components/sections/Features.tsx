import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { features } from '@/data/features'

const Features = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="features" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-pink-100/30 to-orange-100/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <Badge variant="outline" className="mb-6 px-4 py-1.5 text-sm font-medium border-gray-300 text-gray-600 bg-white/50">
            Feature Rich
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="text-gray-900">Powerful </span>
            <span className="text-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Features</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to build and scale your backend infrastructure
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                {feature.link ? (
                  <a href={feature.link} target="_blank" rel="noopener noreferrer" className="block">
                    <Card className={cn(
                      "group relative h-full bg-white/90 backdrop-blur-sm border-2 border-gray-200/80 overflow-hidden cursor-pointer",
                      "hover:border-gray-300 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500",
                      "hover:bg-white"
                    )}>
                      {/* Gradient Accent Border */}
                      <div className={cn(
                        "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                        feature.color
                      )} />
                      
                      {/* Gradient Background on Hover */}
                      <div
                        className={cn(
                          "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500",
                          feature.color
                        )}
                      />
                      
                      <CardHeader className="space-y-5 pb-4">
                        {/* Header with Icon and Badge */}
                        <div className="flex items-start justify-between">
                          <div className={cn(
                            "relative inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br shadow-sm group-hover:shadow-md transition-all duration-300",
                            "group-hover:scale-110 group-hover:rotate-3",
                            feature.iconBg
                          )}>
                            <Icon className={cn(
                              "w-7 h-7 transition-all duration-300",
                              "text-gray-700 group-hover:text-gray-900"
                            )} />
                            <div className={cn(
                              "absolute inset-0 bg-gradient-to-br rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300",
                              feature.color
                            )} />
                          </div>
                          {feature.badge && (
                            <Badge 
                              variant="secondary" 
                              className={cn(
                                "border-0 shadow-md hover:shadow-lg transition-shadow",
                                feature.badge === 'Upcoming' 
                                  ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white"
                                  : "bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
                              )}
                            >
                              {feature.badge}
                            </Badge>
                          )}
                        </div>
                        
                        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors leading-tight tracking-tight mt-4">
                          {feature.title}
                        </CardTitle>
                      </CardHeader>

                      <Separator className="mx-6 bg-gray-200" />

                      <CardContent className="pt-6 pb-6">
                        <CardDescription className="text-gray-600 leading-relaxed text-[15px]">
                          {feature.description}
                        </CardDescription>
                      </CardContent>

                      {/* Hover Glow Effect */}
                      <div className={cn(
                        "absolute -inset-1 bg-gradient-to-br opacity-0 group-hover:opacity-20 rounded-lg blur-2xl transition-opacity duration-500 -z-10",
                        feature.color
                      )} />
                    </Card>
                  </a>
                ) : (
                  <Card className={cn(
                    "group relative h-full bg-white/90 backdrop-blur-sm border-2 border-gray-200/80 overflow-hidden",
                    "hover:border-gray-300 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500",
                    "hover:bg-white"
                  )}>
                    {/* Gradient Accent Border */}
                    <div className={cn(
                      "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                      feature.color
                    )} />
                    
                    {/* Gradient Background on Hover */}
                    <div
                      className={cn(
                        "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500",
                        feature.color
                      )}
                    />
                    
                    <CardHeader className="space-y-5 pb-4">
                      {/* Header with Icon and Badge */}
                      <div className="flex items-start justify-between">
                        <div className={cn(
                          "relative inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br shadow-sm group-hover:shadow-md transition-all duration-300",
                          "group-hover:scale-110 group-hover:rotate-3",
                          feature.iconBg
                        )}>
                          <Icon className={cn(
                            "w-7 h-7 transition-all duration-300",
                            "text-gray-700 group-hover:text-gray-900"
                          )} />
                          <div className={cn(
                            "absolute inset-0 bg-gradient-to-br rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300",
                            feature.color
                          )} />
                        </div>
                        {feature.badge && (
                          <Badge 
                            variant="secondary" 
                            className={cn(
                              "border-0 shadow-md hover:shadow-lg transition-shadow",
                              feature.badge === 'Upcoming' 
                                ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white"
                                : "bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
                            )}
                          >
                            {feature.badge}
                          </Badge>
                        )}
                      </div>
                      
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors leading-tight tracking-tight mt-4">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>

                    <Separator className="mx-6 bg-gray-200" />

                    <CardContent className="pt-6 pb-6">
                      <CardDescription className="text-gray-600 leading-relaxed text-[15px]">
                        {feature.description}
                      </CardDescription>
                    </CardContent>

                    {/* Hover Glow Effect */}
                    <div className={cn(
                      "absolute -inset-1 bg-gradient-to-br opacity-0 group-hover:opacity-20 rounded-lg blur-2xl transition-opacity duration-500 -z-10",
                      feature.color
                    )} />
                  </Card>
                )}
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Features

