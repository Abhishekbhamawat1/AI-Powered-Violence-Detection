import { AlertTriangle, Camera, Bell, Eye, TrendingDown, TrendingUp, Activity, Shield, Video, Clock, MapPin, Download, Filter, Maximize2, Minimize2, VideoOff } from 'lucide-react';
import { motion } from 'motion/react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { useState, useRef, useEffect } from 'react';

export function Dashboard() {
  const [maximizedCamera, setMaximizedCamera] = useState<string | null>(null);
  const [webcamStream, setWebcamStream] = useState<MediaStream | null>(null);
  const [webcamError, setWebcamError] = useState<string>('');
  const [detectionStatus, setDetectionStatus] = useState<{[key: string]: { isFighting: boolean, confidence: number }}>({});
  const videoRef = useRef<HTMLVideoElement>(null);

  // Simulate fight detection
  useEffect(() => {
    const detectionInterval = setInterval(() => {
      const randomFight = Math.random() > 0.7; // 30% chance of fight detection
      const newStatus: {[key: string]: { isFighting: boolean, confidence: number }} = {};
      
      cameras.forEach(camera => {
        if (camera.isWebcam) {
          newStatus[camera.id] = {
            isFighting: randomFight,
            confidence: randomFight ? Math.floor(Math.random() * 20) + 75 : Math.floor(Math.random() * 15) + 85
          };
        } else {
          newStatus[camera.id] = {
            isFighting: false,
            confidence: Math.floor(Math.random() * 10) + 90
          };
        }
      });
      
      setDetectionStatus(newStatus);
    }, 3000); // Check every 3 seconds

    return () => clearInterval(detectionInterval);
  }, []);

  // Initialize webcam for CAM-001
  useEffect(() => {
    const initWebcam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ 
          video: { 
            width: { ideal: 1280 },
            height: { ideal: 720 }
          } 
        });
        setWebcamStream(stream);
        setWebcamError('');
        
        // Set video stream to ref
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Webcam access error:', error);
        setWebcamError('Camera access denied or not available');
      }
    };

    initWebcam();

    // Cleanup
    return () => {
      if (webcamStream) {
        webcamStream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const stats = [
    {
      title: 'Violence Detected',
      value: '34',
      change: '-8%',
      changeType: 'down',
      icon: AlertTriangle,
      bgGradient: 'from-red-500 to-red-600',
      lightBg: 'bg-red-50',
      textColor: 'text-red-600',
    },
    {
      title: 'Active Cameras',
      value: '4',
      change: '+2',
      changeType: 'up',
      icon: Camera,
      bgGradient: 'from-blue-600 to-blue-700',
      lightBg: 'bg-blue-50',
      textColor: 'text-blue-600',
    },
    {
      title: 'Total Alerts',
      value: '89',
      change: '+12%',
      changeType: 'up',
      icon: Bell,
      bgGradient: 'from-orange-500 to-orange-600',
      lightBg: 'bg-orange-50',
      textColor: 'text-orange-600',
    },
    {
      title: 'System Uptime',
      value: '99.8%',
      change: 'Stable',
      changeType: 'stable',
      icon: Shield,
      bgGradient: 'from-green-500 to-green-600',
      lightBg: 'bg-green-50',
      textColor: 'text-green-600',
    },
  ];

  const cameras = [
    { id: 'CAM-001', name: 'Live Webcam', location: 'Laptop Camera', status: 'online', isWebcam: true },
    { id: 'CAM-002', name: 'Parking Lot', location: 'North Wing', status: 'online', isWebcam: false },
    { id: 'CAM-003', name: 'Main Corridor', location: 'Floor 1', status: 'online', isWebcam: false },
    { id: 'CAM-004', name: 'Back Entrance', location: 'South Wing', status: 'online', isWebcam: false },
  ];

  const violenceData = [
    { time: '00:00', incidents: 2, alerts: 3, confidence: 85 },
    { time: '04:00', incidents: 1, alerts: 2, confidence: 78 },
    { time: '08:00', incidents: 4, alerts: 6, confidence: 92 },
    { time: '12:00', incidents: 7, alerts: 9, confidence: 88 },
    { time: '16:00', incidents: 5, alerts: 7, confidence: 91 },
    { time: '20:00', incidents: 3, alerts: 4, confidence: 86 },
    { time: '23:59', incidents: 2, alerts: 3, confidence: 82 },
  ];

  const recentAlerts = [
    {
      id: 1,
      camera: 'CAM-002',
      location: 'Parking Lot',
      type: 'Violence Detected',
      time: '2 min ago',
      severity: 'critical',
      confidence: '94%',
    },
    {
      id: 2,
      camera: 'CAM-001',
      location: 'Entrance Gate',
      type: 'Suspicious Activity',
      time: '15 min ago',
      severity: 'warning',
      confidence: '78%',
    },
    {
      id: 3,
      camera: 'CAM-004',
      location: 'Back Entrance',
      type: 'Unusual Behavior',
      time: '32 min ago',
      severity: 'info',
      confidence: '65%',
    },
    {
      id: 4,
      camera: 'CAM-005',
      location: 'Reception Area',
      type: 'Crowd Detection',
      time: '1 hour ago',
      severity: 'info',
      confidence: '88%',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/30">
      <div className="max-w-[1600px] mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Security Dashboard
              </h1>
              <div className="flex items-center space-x-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-4 py-2.5 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-xl text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-white shadow-sm hover:shadow-md transition-all"
                >
                  <Filter className="w-4 h-4" />
                  <span>Filter</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl text-sm font-medium shadow-lg shadow-blue-500/30 hover:shadow-xl transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Export</span>
                </motion.button>
              </div>
            </div>
            <p className="text-gray-600">Real-time monitoring and analytics</p>
          </motion.div>
        </div>

        {/* 4 Camera Feeds Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 mb-8"
        >
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Video className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Live Camera Feeds</h2>
                  <p className="text-sm text-gray-500">Real-time monitoring of all cameras</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-2 bg-green-100 px-3 py-1.5 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-semibold text-green-700">Live</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6">
            {maximizedCamera ? (
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Maximized Camera View */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative lg:w-3/4"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Video className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">
                          {cameras.find(c => c.id === maximizedCamera)?.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {cameras.find(c => c.id === maximizedCamera)?.id} • {cameras.find(c => c.id === maximizedCamera)?.location}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setMaximizedCamera(null)}
                      className="flex items-center space-x-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                    >
                      <Minimize2 className="w-4 h-4 text-gray-700" />
                      <span className="text-sm font-medium text-gray-700">Minimize</span>
                    </button>
                  </div>
                  
                  <div className="relative bg-gray-900 rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-2 rounded-md text-sm font-bold flex items-center space-x-2 bg-green-500 text-white">
                        <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                        <span>ONLINE</span>
                      </span>
                    </div>

                    {/* Detection Status */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-2 rounded-md text-sm font-bold bg-green-500 text-white">
                        Safe
                      </span>
                    </div>

                    {/* Camera Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Camera className="w-16 h-16 text-white/30" />
                    </div>
                  </div>
                </motion.div>

                {/* Detection Status Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="lg:w-1/4 bg-white rounded-2xl shadow-lg border border-gray-100"
                >
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Eye className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">Detection Status</h3>
                        <p className="text-sm text-gray-500">Real-time analysis</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-6">
                    {/* Current Status */}
                    <div className="text-center">
                      <div className="inline-flex items-center space-x-2 px-4 py-2 bg-green-100 rounded-full">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-sm font-semibold text-green-700">Standby Mode</span>
                      </div>
                    </div>

                    {/* Metrics Grid */}
                    <div className="space-y-4">
                      {/* Confidence */}
                      <div className="flex items-center justify-between py-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-px h-4 bg-gray-300" />
                          <span className="text-sm text-gray-600">Confidence</span>
                        </div>
                        <span className="text-sm font-bold text-gray-900">96.8%</span>
                      </div>

                      {/* FPS */}
                      <div className="flex items-center justify-between py-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-px h-4 bg-gray-300" />
                          <span className="text-sm text-gray-600">FPS</span>
                        </div>
                        <span className="text-sm font-bold text-gray-900">30</span>
                      </div>

                      {/* Resolution */}
                      <div className="flex items-center justify-between py-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-px h-4 bg-gray-300" />
                          <span className="text-sm text-gray-600">Resolution</span>
                        </div>
                        <span className="text-sm font-bold text-gray-900">1920x1080</span>
                      </div>

                      {/* Processing Time */}
                      <div className="flex items-center justify-between py-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-px h-4 bg-gray-300" />
                          <span className="text-sm text-gray-600">Processing</span>
                        </div>
                        <span className="text-sm font-bold text-gray-900">0.8s</span>
                      </div>

                      {/* Alerts */}
                      <div className="flex items-center justify-between py-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-px h-4 bg-gray-300" />
                          <span className="text-sm text-gray-600">Alerts</span>
                        </div>
                        <span className="text-sm font-bold text-orange-600">3</span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3 pt-4 border-t border-gray-100">
                      <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                        Start Recording
                      </button>
                      <button className="w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-colors">
                        Take Snapshot
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>
            ) : (
              /* Grid View */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {cameras.map((camera, index) => (
                  <motion.div
                    key={camera.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                    whileHover={{ scale: 1.03 }}
                    className="group cursor-pointer"
                    onClick={() => setMaximizedCamera(camera.id)}
                  >
                    <div className={`rounded-xl overflow-hidden border-2 transition-all ${
                      camera.status === 'online' 
                        ? 'border-green-200 hover:border-green-400 bg-gradient-to-br from-green-50 to-emerald-50' 
                        : 'border-gray-200 hover:border-gray-400 bg-gray-50'
                    }`}>
                      {/* Video Preview */}
                      <div className="relative bg-gray-900 aspect-video">
                        {camera.isWebcam ? (
                          <>
                            <video
                              ref={camera.id === 'CAM-001' ? videoRef : undefined}
                              autoPlay
                              playsInline
                              muted
                              className="w-full h-full object-cover"
                            />
                            {webcamError && (
                              <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                                <div className="text-center">
                                  <VideoOff className="w-12 h-12 text-red-500 mx-auto mb-2" />
                                  <p className="text-red-400 text-sm">{webcamError}</p>
                                </div>
                              </div>
                            )}
                            {/* Status Badge */}
                            <div className="absolute top-2 left-2">
                              <span className={`px-2 py-1 rounded-md text-xs font-bold flex items-center space-x-1 ${
                                camera.status === 'online' 
                                  ? 'bg-green-500 text-white' 
                                  : 'bg-gray-500 text-white'
                              }`}>
                                <div className={`w-1.5 h-1.5 rounded-full ${
                                  camera.status === 'online' ? 'bg-white animate-pulse' : 'bg-gray-300'
                                }`} />
                                <span>{camera.status.toUpperCase()}</span>
                              </span>
                            </div>

                            {/* Detection Status */}
                            {camera.status === 'online' && (
                              <div className="absolute top-2 right-2">
                                <span className={`px-2 py-1 rounded-md text-xs font-bold ${
                                  camera.detection === 'Safe' 
                                    ? 'bg-green-500 text-white' 
                                    : 'bg-red-500 text-white'
                                }`}>
                                  {camera.detection}
                                </span>
                              </div>
                            )}

                            {/* Maximize Icon on Hover */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                              <div className="bg-black/50 rounded-lg p-2">
                                <Maximize2 className="w-6 h-6 text-white" />
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className={`absolute inset-0 ${
                              camera.status === 'online' 
                                ? 'bg-gradient-to-br from-blue-500/10 to-purple-500/10' 
                                : 'bg-gray-700'
                            }`} />
                            
                            {/* Status Badge */}
                            <div className="absolute top-2 left-2">
                              <span className={`px-2 py-1 rounded-md text-xs font-bold flex items-center space-x-1 ${
                                camera.status === 'online' 
                                  ? 'bg-green-500 text-white' 
                                  : 'bg-gray-500 text-white'
                              }`}>
                                <div className={`w-1.5 h-1.5 rounded-full ${
                                  camera.status === 'online' ? 'bg-white animate-pulse' : 'bg-gray-300'
                                }`} />
                                <span>{camera.status.toUpperCase()}</span>
                              </span>
                            </div>

                            {/* Detection Status */}
                            {camera.status === 'online' && (
                              <div className="absolute top-2 right-2">
                                <span className={`px-2 py-1 rounded-md text-xs font-bold ${
                                  camera.detection === 'Safe' 
                                    ? 'bg-green-500 text-white' 
                                    : 'bg-red-500 text-white'
                                }`}>
                                  {camera.detection}
                                </span>
                              </div>
                            )}

                            {/* Camera Icon */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Camera className={`w-8 h-8 ${
                                camera.status === 'online' ? 'text-white/30' : 'text-gray-600'
                              }`} />
                            </div>
                          </>
                        )}

                        {/* Camera Info */}
                        <div className="p-3">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex-1">
                              <div className="text-xs font-mono font-bold text-blue-600 mb-1">
                                {camera.id}
                              </div>
                              <h3 className="font-bold text-gray-900 text-xs">{camera.name}</h3>
                            </div>
                          </div>
                          
                          <div className="flex items-center text-xs text-gray-600 space-x-1 mb-2">
                            <MapPin className="w-3 h-3" />
                            <span>{camera.location}</span>
                          </div>

                          {/* Activity Level */}
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-gray-500">Activity:</span>
                            <span className={`font-semibold ${
                              camera.activity === 'High' ? 'text-red-600' :
                              camera.activity === 'Medium' ? 'text-orange-600' :
                              camera.activity === 'Low' ? 'text-green-600' :
                              'text-gray-400'
                            }`}>
                              {camera.activity}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </motion.div>

        {/* Violence Detection Graph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-lg border border-gray-100 mb-8"
        >
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-red-100 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Violence Detection Analytics</h2>
                  <p className="text-sm text-gray-500">24-hour incident trends and detection confidence</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-2 bg-blue-100 px-3 py-1.5 rounded-full">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  <span className="text-sm font-semibold text-blue-700">Live</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={violenceData}>
                  <defs>
                    <linearGradient id="incidentsGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="alertsGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f97316" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#f97316" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="confidenceGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="time" 
                    stroke="#6b7280"
                    fontSize={12}
                    tickLine={false}
                  />
                  <YAxis 
                    stroke="#6b7280"
                    fontSize={12}
                    tickLine={false}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="incidents"
                    stroke="#ef4444"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#incidentsGradient)"
                    name="Violence Incidents"
                  />
                  <Area
                    type="monotone"
                    dataKey="alerts"
                    stroke="#f97316"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#alertsGradient)"
                    name="Security Alerts"
                  />
                  <Area
                    type="monotone"
                    dataKey="confidence"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#confidenceGradient)"
                    name="Detection Confidence %"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center p-3 bg-red-50 rounded-lg">
                <div className="text-2xl font-bold text-red-600">24</div>
                <div className="text-xs text-gray-600">Total Incidents</div>
              </div>
              <div className="text-center p-3 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">34</div>
                <div className="text-xs text-gray-600">Total Alerts</div>
              </div>
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">86.7%</div>
                <div className="text-xs text-gray-600">Avg Confidence</div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-1 gap-8">
          {/* Recent Alerts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-100"
          >
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center space-x-3 mb-1">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <Bell className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Recent Alerts</h2>
                    <p className="text-sm text-gray-500">Latest detections</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-4">
                  {recentAlerts.map((alert, index) => (
                    <motion.div
                      key={alert.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="group cursor-pointer"
                    >
                      <div className={`p-4 rounded-xl border-2 transition-all hover:shadow-md ${
                        alert.severity === 'critical' 
                          ? 'bg-red-50 border-red-200 hover:border-red-400' 
                          : alert.severity === 'warning'
                          ? 'bg-orange-50 border-orange-200 hover:border-orange-400'
                          : 'bg-blue-50 border-blue-200 hover:border-blue-400'
                      }`}>
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center space-x-2">
                            <div className={`w-2.5 h-2.5 rounded-full ${
                              alert.severity === 'critical' ? 'bg-red-500 animate-pulse' :
                              alert.severity === 'warning' ? 'bg-orange-500' :
                              'bg-blue-500'
                            }`} />
                            <span className="text-xs font-mono font-bold text-gray-700">
                              {alert.camera}
                            </span>
                          </div>
                          <span className="text-xs text-gray-500 flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{alert.time}</span>
                          </span>
                        </div>

                        <h3 className="font-bold text-gray-900 text-sm mb-1">
                          {alert.type}
                        </h3>
                        
                        <div className="flex items-center text-xs text-gray-600 space-x-1 mb-3">
                          <MapPin className="w-3 h-3" />
                          <span>{alert.location}</span>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">Confidence:</span>
                          <div className="flex items-center space-x-2">
                            <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                              <div 
                                className={`h-full ${
                                  alert.severity === 'critical' ? 'bg-red-500' :
                                  alert.severity === 'warning' ? 'bg-orange-500' :
                                  'bg-blue-500'
                                }`}
                                style={{ width: alert.confidence }}
                              />
                            </div>
                            <span className="text-xs font-bold text-gray-700">{alert.confidence}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <button className="w-full mt-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl">
                  View All Alerts
                </button>
              </div>
            </motion.div>
        </div>
      </div>
    </div>
  );
}