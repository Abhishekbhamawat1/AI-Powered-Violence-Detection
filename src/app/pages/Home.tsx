import { Link } from 'react-router';
import { Shield, Camera, Brain, Zap, TrendingUp, Clock, AlertTriangle, Eye, CheckCircle2, ArrowRight, Play, Users, BarChart3, Upload, Lock, Wifi, Cloud, Bell, Activity, MonitorPlay } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/button';

export function Home() {
  const features = [
    {
      icon: Eye,
      title: 'Live Detection',
      description: 'Real-time monitoring with instant threat detection across all connected cameras.',
      bgColor: 'bg-[#EFF6FF]',
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-100'
    },
    {
      icon: Upload,
      title: 'Upload & Analysis',
      description: 'Analyze recorded footage with advanced AI to detect violent incidents.',
      bgColor: 'bg-[#F3E8FF]',
      iconColor: 'text-purple-600',
      iconBg: 'bg-purple-100'
    },
    {
      icon: AlertTriangle,
      title: 'Smart Alerts',
      description: 'Receive instant notifications with automated response workflows.',
      bgColor: 'bg-[#FEF2F2]',
      iconColor: 'text-red-600',
      iconBg: 'bg-red-100'
    },
  ];

  const howItWorks = [
    {
      step: 1,
      title: 'Capture',
      description: 'Connect cameras to our platform',
      icon: Camera,
      color: 'blue',
    },
    {
      step: 2,
      title: 'Process',
      description: 'AI analyzes video in real-time',
      icon: Brain,
      color: 'indigo',
    },
    {
      step: 3,
      title: 'Detect',
      description: 'Identify violence with 99% accuracy',
      icon: Eye,
      color: 'purple',
    },
    {
      step: 4,
      title: 'Alert',
      description: 'Instant notifications and response',
      icon: AlertTriangle,
      color: 'red',
    },
  ];

  const stats = [
    { label: 'Incidents Detected', value: '10,000+', icon: TrendingUp, bgColor: 'bg-red-50', iconColor: 'text-red-600', iconBg: 'bg-red-100' },
    { label: 'Cameras Monitored', value: '500+', icon: Camera, bgColor: 'bg-blue-50', iconColor: 'text-blue-600', iconBg: 'bg-blue-100' },
    { label: 'Accuracy', value: '99%', icon: CheckCircle2, bgColor: 'bg-green-50', iconColor: 'text-green-600', iconBg: 'bg-green-100' },
    { label: 'Real-time Alerts', value: '<2s', icon: Clock, bgColor: 'bg-purple-50', iconColor: 'text-purple-600', iconBg: 'bg-purple-100' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - 60% white background */}
      <section className="relative bg-white pt-8 pb-32 overflow-hidden">
        {/* Subtle gradient overlay - very light */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-white to-purple-50/20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center min-h-[650px]">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center"
            >
              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-white border border-gray-200 px-4 py-2.5 rounded-lg mb-10 shadow-sm w-fit mx-auto"
              >
                <span className="text-yellow-500 text-lg">⭐</span>
                <span className="text-sm font-semibold text-gray-700">Trusted by 5000+ Organizations</span>
              </motion.div>

              {/* Large Heading - Exact Layout from Image */}
              <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-[1.1] text-center">
                <span className="block text-gray-900">
                  Advanced{' '}
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
                    AI
                  </span>
                </span>
                <span className="block text-gray-900">Violence</span>
                <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 bg-clip-text text-transparent">
                  Detection
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl mx-auto text-center">
                Protect your spaces with cutting-edge artificial intelligence that detects threats in real-time. Monitor, analyze, and respond faster than ever before.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/signup">
                  <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-red-500/20 hover:shadow-xl hover:shadow-red-500/30 transition-all">
                    Start Monitoring
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/how-it-works">
                  <Button 
                    variant="outline" 
                    className="border-2 border-gray-300 text-gray-900 px-8 py-6 text-lg rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Right - AI Graphic with Soft Gradient Circles */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:flex items-center justify-center h-[650px]"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                
                {/* Large Soft Gradient Circles - Background */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-blue-100/20 rounded-full blur-3xl"
                />
                
                <motion.div
                  animate={{ 
                    scale: [1, 1.15, 1],
                  }}
                  transition={{ 
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-purple-200/25 to-pink-100/20 rounded-full blur-3xl"
                />

                {/* Central AI Brain with Rings */}
                <div className="relative w-96 h-96 flex items-center justify-center">
                  
                  {/* Rotating Outer Ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border-2 border-blue-300/30"
                  >
                    {/* Orbiting Dot on Outer Ring */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-lg shadow-blue-500/50" />
                  </motion.div>
                  
                  {/* Rotating Middle Ring */}
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-16 rounded-full border-2 border-indigo-300/35"
                  >
                    {/* Orbiting Dot on Middle Ring */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full shadow-lg shadow-indigo-500/50" />
                  </motion.div>
                  
                  {/* Inner Ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-32 rounded-full border-2 border-purple-300/40"
                  >
                    {/* Orbiting Dot on Inner Ring */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full shadow-lg shadow-purple-500/50" />
                  </motion.div>

                  {/* Central Brain Icon */}
                  <motion.div
                    animate={{ 
                      rotate: 360,
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ 
                      rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                      scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="relative z-10 flex items-center justify-center"
                  >
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/30">
                      <Brain className="w-16 h-16 text-white" />
                    </div>
                  </motion.div>
                </div>

                {/* Floating Cards */}
                
                {/* Security Active Card - Top */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  whileHover={{ y: -5 }}
                  className="absolute top-20 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg shadow-gray-200/50 p-4 border border-gray-100"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-medium">Security</div>
                      <div className="text-lg font-bold text-gray-900">Active</div>
                    </div>
                  </div>
                </motion.div>

                {/* Response Card - Bottom Left */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                  whileHover={{ y: -5 }}
                  className="absolute bottom-24 left-12 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg shadow-gray-200/50 p-4 border border-gray-100"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 font-medium">Response</div>
                      <div className="text-lg font-bold text-gray-900">&lt;2s</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section - 30% light gray/blue */}
      <section className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Stats Grid - Left Side */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                  Trusted Performance
                </h2>
                <p className="text-lg text-gray-600">
                  Industry-leading accuracy and speed
                </p>
              </motion.div>

              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className={`${stat.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 ${stat.iconBg} rounded-xl flex items-center justify-center`}>
                        <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
                      </div>
                    </div>
                    <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* AI Detection Visual - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Main Detection Card */}
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl shadow-gray-300/50 border border-gray-200 p-8 overflow-hidden">
                {/* Camera View Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center">
                      <Camera className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900">Camera 01</div>
                      <div className="text-xs text-gray-500">Main Entrance</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs font-semibold text-green-600">LIVE</span>
                  </div>
                </div>

                {/* Camera Feed Area */}
                <div className="relative bg-gradient-to-br from-gray-100 to-blue-50 rounded-2xl p-8 mb-6">
                  {/* Grid Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
                      {Array.from({ length: 48 }).map((_, i) => (
                        <div key={i} className="border border-gray-400" />
                      ))}
                    </div>
                  </div>

                  {/* Human Figure Silhouette */}
                  <div className="relative flex justify-center items-end h-64">
                    {/* Person Silhouette */}
                    <div className="relative">
                      {/* Head */}
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-2 opacity-80" />
                      {/* Body */}
                      <div className="w-20 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg opacity-80" />
                      {/* Arms */}
                      <div className="absolute top-14 -left-6 w-8 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg opacity-80 transform -rotate-12" />
                      <div className="absolute top-14 -right-6 w-8 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg opacity-80 transform rotate-12" />
                      
                      {/* Detection Box Overlay */}
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="absolute -inset-8 border-2 border-red-500 rounded-lg"
                      >
                        {/* Corner Brackets */}
                        <div className="absolute -top-1 -left-1 w-6 h-6 border-t-4 border-l-4 border-red-500" />
                        <div className="absolute -top-1 -right-1 w-6 h-6 border-t-4 border-r-4 border-red-500" />
                        <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-4 border-l-4 border-red-500" />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-4 border-r-4 border-red-500" />
                        
                        {/* Detection Label */}
                        <motion.div
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.8 }}
                          className="absolute -top-8 left-0 bg-red-500 text-white px-3 py-1 rounded-md text-xs font-bold shadow-lg"
                        >
                          Violence Detected
                        </motion.div>
                        
                        {/* Confidence Score */}
                        <motion.div
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 1 }}
                          className="absolute -bottom-8 right-0 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-semibold text-gray-700 shadow-md"
                        >
                          Confidence: 98%
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Scanning Lines Effect */}
                  <motion.div
                    animate={{ y: [0, 256, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"
                  />
                </div>

                {/* Status Bar */}
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Eye className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600 font-medium">AI Active</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Activity className="w-4 h-4 text-green-500" />
                      <span className="text-gray-600 font-medium">Processing</span>
                    </div>
                  </div>
                  <div className="text-gray-500 font-mono">15:24:38</div>
                </div>
              </div>

              {/* Floating Alert Badge */}
              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1.2, type: "spring" }}
                className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full shadow-xl shadow-red-500/50 flex items-center space-x-2"
              >
                <AlertTriangle className="w-4 h-4" />
                <span className="text-sm font-bold">Alert Active</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - 60% white background */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to monitor and protect your spaces
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group"
              >
                <div className={`${feature.bgColor} rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 h-full`}>
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${feature.iconBg} rounded-2xl shadow-sm mb-6`}>
                    <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section - 30% light gray */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started in minutes with our simple 4-step process
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: 'Capture',
                description: 'Connect cameras to our platform',
                icon: Camera,
                bgColor: 'bg-[#EFF6FF]',
                iconColor: 'text-blue-600',
                iconBg: 'bg-blue-100'
              },
              {
                step: 2,
                title: 'Process',
                description: 'AI analyzes video in real-time',
                icon: Brain,
                bgColor: 'bg-[#ECFDF5]',
                iconColor: 'text-green-600',
                iconBg: 'bg-green-100'
              },
              {
                step: 3,
                title: 'Detect',
                description: 'Identify violence with 99% accuracy',
                icon: Eye,
                bgColor: 'bg-[#FFFBEB]',
                iconColor: 'text-yellow-600',
                iconBg: 'bg-yellow-100'
              },
              {
                step: 4,
                title: 'Alert',
                description: 'Instant notifications and response',
                icon: AlertTriangle,
                bgColor: 'bg-[#FEF2F2]',
                iconColor: 'text-red-600',
                iconBg: 'bg-red-100'
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Arrow Connector */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-20 -right-4 z-20">
                    <ArrowRight className="w-8 h-8 text-gray-300" />
                  </div>
                )}

                <motion.div
                  whileHover={{ y: -8, scale: 1.03 }}
                  className={`${step.bgColor} rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 h-full`}
                >
                  {/* Step Number Badge */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-200">
                      <span className="text-lg font-bold text-gray-900">{step.step}</span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${step.iconBg} rounded-2xl shadow-sm mb-6`}>
                    <step.icon className={`w-8 h-8 ${step.iconColor}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section - 60% white */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Live System Preview
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Monitor everything from one centralized dashboard
            </p>
          </motion.div>

          {/* Main Dashboard Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { label: 'Active Cameras', value: '24', icon: Camera, bg: 'bg-blue-50', color: 'text-blue-600' },
              { label: 'Alerts Today', value: '3', icon: AlertTriangle, bg: 'bg-red-50', color: 'text-red-600' },
              { label: 'System Health', value: '98%', icon: Activity, bg: 'bg-green-50', color: 'text-green-600' },
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-600">{card.label}</span>
                  <div className={`w-10 h-10 ${card.bg} rounded-lg flex items-center justify-center`}>
                    <card.icon className={`w-5 h-5 ${card.color}`} />
                  </div>
                </div>
                <div className="text-4xl font-bold text-gray-900">{card.value}</div>
              </motion.div>
            ))}
          </div>

          {/* Live Camera Monitoring Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Camera Feed Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg shadow-gray-200/50 border border-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Live Camera Feed</h3>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-green-600">Live</span>
                </div>
              </div>
              <div className="bg-gray-100 rounded-xl h-48 flex items-center justify-center mb-4">
                <MonitorPlay className="w-16 h-16 text-gray-400" />
              </div>
              <div className="grid grid-cols-3 gap-2">
                {['Camera 1', 'Camera 2', 'Camera 3'].map((cam, idx) => (
                  <div key={idx} className="text-center p-2 bg-gray-50 rounded-lg">
                    <p className="text-xs font-medium text-gray-600">{cam}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recent Alerts Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg shadow-gray-200/50 border border-gray-100"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {[
                  { time: '10:23 AM', status: 'All Clear', color: 'green' },
                  { time: '09:45 AM', status: 'Monitoring', color: 'blue' },
                  { time: '08:12 AM', status: 'All Clear', color: 'green' },
                ].map((alert, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-2 h-2 bg-${alert.color}-500 rounded-full`} />
                      <span className="text-sm font-medium text-gray-700">{alert.status}</span>
                    </div>
                    <span className="text-xs text-gray-500">{alert.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section - 30% light gray */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50/20">
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
              Industry-leading security with enterprise-grade reliability
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: CheckCircle2,
                title: 'High Accuracy',
                description: '99% detection accuracy with deep learning algorithms',
                bgColor: 'bg-[#EFF6FF]',
                iconColor: 'text-blue-600',
                iconBg: 'bg-blue-100'
              },
              {
                icon: AlertTriangle,
                title: 'Real-time Alerts',
                description: 'Instant notifications within 2 seconds of detection',
                bgColor: 'bg-[#FEF2F2]',
                iconColor: 'text-red-600',
                iconBg: 'bg-red-100'
              },
              {
                icon: Lock,
                title: 'Secure System',
                description: 'End-to-end encryption and secure cloud storage',
                bgColor: 'bg-[#ECFDF5]',
                iconColor: 'text-green-600',
                iconBg: 'bg-green-100'
              },
              {
                icon: Cloud,
                title: 'Cloud Powered',
                description: 'Scalable infrastructure with 99.9% uptime',
                bgColor: 'bg-[#FFFBEB]',
                iconColor: 'text-yellow-600',
                iconBg: 'bg-yellow-100'
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`${item.bgColor} rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200`}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${item.iconBg} rounded-2xl shadow-sm mb-6`}>
                  <item.icon className={`w-8 h-8 ${item.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Additional Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 grid md:grid-cols-3 gap-6"
          >
            {[
              { icon: Users, stat: '5,000+', label: 'Organizations Trust Us' },
              { icon: Shield, stat: '24/7', label: 'Security Monitoring' },
              { icon: BarChart3, stat: '10M+', label: 'Hours Analyzed' },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg shadow-gray-200/50 border border-gray-100 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-50 rounded-xl mb-3">
                  <item.icon className="w-6 h-6 text-gray-700" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{item.stat}</div>
                <div className="text-sm text-gray-600 font-medium">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section - 10% red accent */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50/30 via-white to-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ready to Secure Your Space?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Join thousands of organizations protecting their communities with AI
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/signup">
                <Button className="bg-red-600 hover:bg-red-700 text-white px-10 py-7 text-lg rounded-xl shadow-xl shadow-red-500/20 hover:shadow-2xl hover:shadow-red-500/30 transition-all">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  className="border-2 border-gray-300 text-gray-900 px-10 py-7 text-lg rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all"
                >
                  Contact Sales
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}