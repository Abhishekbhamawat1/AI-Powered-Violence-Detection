import { motion } from 'motion/react';
import { Camera, Upload, Brain, Shield, Zap, Bell, Eye, Activity, CheckCircle2, ArrowRight, Video, BarChart3 } from 'lucide-react';
import { Link } from 'react-router';
import { Button } from '../components/ui/button';

export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Connect Your Cameras',
      description: 'Seamlessly integrate with your existing security infrastructure. Support for IP cameras, CCTV systems, and webcams.',
      icon: Camera,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-100',
      features: [
        'Plug & play integration',
        'Multi-camera support',
        'Cloud & on-premise options',
        'Real-time streaming',
      ],
    },
    {
      number: '02',
      title: 'AI Processing',
      description: 'Our advanced neural network analyzes video streams in real-time, detecting patterns and behaviors with exceptional accuracy.',
      icon: Brain,
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      iconBg: 'bg-purple-100',
      features: [
        '99.2% detection accuracy',
        'Deep learning models',
        'Behavior pattern analysis',
        'Continuous learning',
      ],
    },
    {
      number: '03',
      title: 'Instant Detection',
      description: 'Violence and suspicious activities are identified within milliseconds, ensuring the fastest possible response time.',
      icon: Eye,
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      iconBg: 'bg-green-100',
      features: [
        '<2 second response',
        'Multi-threat detection',
        'Frame-by-frame analysis',
        'High confidence scoring',
      ],
    },
    {
      number: '04',
      title: 'Smart Alerts',
      description: 'Receive intelligent notifications via multiple channels with severity-based escalation and automated responses.',
      icon: Bell,
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
      iconBg: 'bg-orange-100',
      features: [
        'Multi-channel alerts',
        'Priority escalation',
        'Custom notifications',
        'Integration with security systems',
      ],
    },
  ];

  const capabilities = [
    {
      icon: Shield,
      title: 'Violence Detection',
      description: 'Identify physical altercations, aggressive behavior, and weapon detection.',
      bgColor: 'bg-[#EFF6FF]',
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-100'
    },
    {
      icon: Activity,
      title: 'Behavior Analysis',
      description: 'Track unusual patterns, crowd behavior, and suspicious activities.',
      bgColor: 'bg-[#FEF2F2]',
      iconColor: 'text-red-600',
      iconBg: 'bg-red-100'
    },
    {
      icon: Zap,
      title: 'Real-Time Processing',
      description: 'Process multiple video streams simultaneously with minimal latency.',
      bgColor: 'bg-[#ECFDF5]',
      iconColor: 'text-green-600',
      iconBg: 'bg-green-100'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Comprehensive reports, heatmaps, and trend analysis for insights.',
      bgColor: 'bg-[#FFFBEB]',
      iconColor: 'text-yellow-600',
      iconBg: 'bg-yellow-100'
    },
  ];

  const useCases = [
    {
      title: 'Educational Institutions',
      description: 'Protect students and staff with proactive threat detection in schools and universities.',
      stats: '2000+ schools protected',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-100',
    },
    {
      title: 'Corporate Offices',
      description: 'Ensure workplace safety with intelligent monitoring of office spaces and common areas.',
      stats: '500+ companies',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      iconBg: 'bg-green-100',
    },
    {
      title: 'Public Spaces',
      description: 'Monitor parks, transit stations, and public facilities for enhanced community safety.',
      stats: '300+ public venues',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      iconBg: 'bg-purple-100',
    },
    {
      title: 'Retail & Commercial',
      description: 'Prevent incidents in shopping centers, stores, and commercial properties.',
      stats: '1000+ retail locations',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
      iconBg: 'bg-orange-100',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gray-50 py-24 px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full mb-6 border border-gray-200 shadow-sm">
              <Video className="w-4 h-4 text-gray-700" />
              <span className="text-sm font-semibold text-gray-700">AI-Powered Security</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              How It Works
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Discover how our advanced AI technology transforms video surveillance into an intelligent, proactive security system
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Simple 4-Step Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started with AI-powered violence detection in minutes
            </p>
          </motion.div>

          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="inline-flex items-center space-x-3 mb-6">
                    <div className="text-6xl font-bold text-gray-900">
                      {step.number}
                    </div>
                    <div className="p-4 rounded-2xl bg-gray-900 shadow-sm">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                  
                  <ul className="space-y-3">
                    {step.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visualization */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className={`${step.bgColor} rounded-3xl p-12 border border-gray-200 shadow-sm`}
                  >
                    <div className="aspect-square flex items-center justify-center">
                      <div className={`w-32 h-32 ${step.iconBg} rounded-3xl flex items-center justify-center`}>
                        <step.icon className={`w-16 h-16 ${step.iconColor}`} />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              AI Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powered by cutting-edge machine learning and computer vision
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group"
              >
                <div className={`${capability.bgColor} rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 h-full`}>
                  <div className={`w-16 h-16 rounded-2xl ${capability.iconBg} flex items-center justify-center mb-6 shadow-sm`}>
                    <capability.icon className={`w-8 h-8 ${capability.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{capability.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{capability.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Trusted Across Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Organizations worldwide rely on our AI technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`${useCase.bgColor} rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all border border-gray-200`}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 ${useCase.iconBg} rounded-xl flex items-center justify-center`}>
                    <CheckCircle2 className={`w-6 h-6 ${useCase.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{useCase.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <div className="inline-flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full border border-gray-200">
                  <CheckCircle2 className={`w-4 h-4 ${useCase.iconColor}`} />
                  <span className="text-sm font-semibold text-gray-900">{useCase.stats}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Experience the power of AI-driven security. Start your free trial today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/signup">
                <Button className="bg-red-600 hover:bg-red-700 text-white px-10 py-7 text-lg rounded-xl shadow-sm hover:shadow-md transition-all flex items-center space-x-2">
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/live-detection">
                <Button className="bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-900 px-10 py-7 text-lg rounded-xl shadow-sm hover:shadow-md transition-all">
                  Try Live Detection
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}