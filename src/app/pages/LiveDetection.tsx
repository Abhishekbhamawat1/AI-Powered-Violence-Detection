import { useState, useRef, useEffect } from 'react';
import { Camera, CameraOff, AlertTriangle, Shield, Activity, Video, Zap, Eye, Loader2, Play, Square } from 'lucide-react';
import { Button } from '../components/ui/button';
import { motion, AnimatePresence } from 'motion/react';

export function LiveDetection() {
  const [isStreamActive, setIsStreamActive] = useState(false);
  const [detectionStatus, setDetectionStatus] = useState<'safe' | 'violence'>('safe');
  const [error, setError] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // Simulate detection changes
  useEffect(() => {
    if (!isStreamActive) return;

    const interval = setInterval(() => {
      // Randomly simulate detection (90% safe, 10% violence for demo)
      const random = Math.random();
      setDetectionStatus(random > 0.9 ? 'violence' : 'safe');
    }, 3000);

    return () => clearInterval(interval);
  }, [isStreamActive]);

  const startCamera = async () => {
    try {
      setError('');
      setIsAnalyzing(true);
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 1280, height: 720 },
        audio: false,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
        setIsStreamActive(true);
        setIsAnalyzing(false);
      }
    } catch (err: any) {
      const errorMessage = err.name === 'NotAllowedError' 
        ? 'Camera access denied. Please allow camera permissions in your browser settings and try again.'
        : err.name === 'NotFoundError'
        ? 'No camera found. Please ensure a camera is connected to your device.'
        : err.name === 'NotReadableError'
        ? 'Camera is already in use by another application.'
        : 'Unable to access camera. Please check your browser settings and try again.';
      
      setError(errorMessage);
      setIsAnalyzing(false);
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    setIsStreamActive(false);
    setDetectionStatus('safe');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full mb-6 border border-gray-200/50 shadow-lg shadow-blue-100/50">
            <Video className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Real-Time Detection</span>
          </div>
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Live Detection</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            AI-powered real-time violence detection using your webcam with instant alerts
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Video Feed */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              {/* Video Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                      <Camera className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">Camera Feed</h2>
                      <p className="text-sm text-blue-100">Primary detection source</p>
                    </div>
                  </div>
                  {isStreamActive && (
                    <div className="flex items-center space-x-2 bg-red-500 px-4 py-2 rounded-full animate-pulse">
                      <div className="w-2 h-2 bg-white rounded-full" />
                      <span className="text-sm font-bold text-white">LIVE</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Video Container */}
              <div className="relative bg-gray-900 aspect-video">
                {error && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center p-6 bg-red-50"
                  >
                    <div className="text-center max-w-md">
                      <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <AlertTriangle className="w-8 h-8 text-red-600" />
                      </div>
                      <h3 className="text-lg font-bold text-red-900 mb-2">Camera Error</h3>
                      <p className="text-sm text-red-700">{error}</p>
                    </div>
                  </motion.div>
                )}

                {!isStreamActive && !error && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
                    <div className="text-center">
                      <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 mb-6">
                        <CameraOff className="w-20 h-20 text-white/60 mx-auto" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Camera Inactive</h3>
                      <p className="text-blue-200 mb-6">Click the button below to start live detection</p>
                    </div>
                  </div>
                )}

                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className={`w-full h-full object-cover ${isStreamActive ? 'block' : 'hidden'}`}
                />

                {/* Detection Overlay */}
                <AnimatePresence>
                  {isStreamActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 pointer-events-none"
                    >
                      {/* Scanning lines effect */}
                      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-blue-500/5" />
                      
                      {/* Corner brackets */}
                      <div className="absolute top-4 left-4 w-16 h-16 border-l-4 border-t-4 border-blue-400 rounded-tl-lg" />
                      <div className="absolute top-4 right-4 w-16 h-16 border-r-4 border-t-4 border-blue-400 rounded-tr-lg" />
                      <div className="absolute bottom-4 left-4 w-16 h-16 border-l-4 border-b-4 border-blue-400 rounded-bl-lg" />
                      <div className="absolute bottom-4 right-4 w-16 h-16 border-r-4 border-b-4 border-blue-400 rounded-br-lg" />

                      {/* Status Badge */}
                      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                        <motion.div
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className={`px-6 py-3 rounded-full font-bold text-white backdrop-blur-sm border-2 ${
                            detectionStatus === 'safe'
                              ? 'bg-green-500/90 border-green-300'
                              : 'bg-red-500/90 border-red-300'
                          }`}
                        >
                          {detectionStatus === 'safe' ? '✓ SAFE ENVIRONMENT' : '⚠ VIOLENCE DETECTED'}
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Controls */}
              <div className="p-6 bg-gray-50 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {!isStreamActive ? (
                      <Button
                        onClick={startCamera}
                        disabled={isAnalyzing}
                        className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center space-x-2"
                      >
                        {isAnalyzing ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Initializing...</span>
                          </>
                        ) : (
                          <>
                            <Play className="w-5 h-5" />
                            <span>Start Detection</span>
                          </>
                        )}
                      </Button>
                    ) : (
                      <Button
                        onClick={stopCamera}
                        className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center space-x-2"
                      >
                        <Square className="w-5 h-5" />
                        <span>Stop Detection</span>
                      </Button>
                    )}
                  </div>

                  {isStreamActive && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center space-x-2 bg-blue-100 px-4 py-3 rounded-xl"
                    >
                      <Loader2 className="w-4 h-4 text-blue-600 animate-spin" />
                      <span className="text-sm font-semibold text-blue-900">AI Analyzing...</span>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sidebar - Info & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* Detection Status */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4">
                <h3 className="font-bold text-white flex items-center space-x-2">
                  <Activity className="w-5 h-5" />
                  <span>Detection Status</span>
                </h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="text-center">
                  <motion.div
                    animate={{ scale: isStreamActive ? [1, 1.1, 1] : 1 }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center ${
                      isStreamActive
                        ? detectionStatus === 'safe'
                          ? 'bg-gradient-to-br from-green-400 to-green-600'
                          : 'bg-gradient-to-br from-red-400 to-red-600'
                        : 'bg-gray-300'
                    }`}
                  >
                    {isStreamActive ? (
                      detectionStatus === 'safe' ? (
                        <Shield className="w-12 h-12 text-white" />
                      ) : (
                        <AlertTriangle className="w-12 h-12 text-white" />
                      )
                    ) : (
                      <Eye className="w-12 h-12 text-gray-500" />
                    )}
                  </motion.div>

                  <h4 className="text-2xl font-bold text-gray-900 mb-2">
                    {isStreamActive
                      ? detectionStatus === 'safe'
                        ? 'Safe Environment'
                        : 'Violence Detected'
                      : 'Standby Mode'}
                  </h4>

                  <p className="text-sm text-gray-600">
                    {isStreamActive
                      ? 'AI is actively monitoring the video feed'
                      : 'Start the camera to begin detection'}
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Confidence</span>
                    <span className="text-sm font-bold text-gray-900">
                      {isStreamActive ? '98.5%' : '—'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">FPS</span>
                    <span className="text-sm font-bold text-gray-900">
                      {isStreamActive ? '30' : '—'}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Resolution</span>
                    <span className="text-sm font-bold text-gray-900">
                      {isStreamActive ? '1280x720' : '—'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Capabilities */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4">
                <h3 className="font-bold text-white flex items-center space-x-2">
                  <Zap className="w-5 h-5" />
                  <span>AI Capabilities</span>
                </h3>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  {[
                    { icon: Eye, label: 'Real-time Analysis', color: 'blue' },
                    { icon: Shield, label: 'Threat Detection', color: 'green' },
                    { icon: AlertTriangle, label: 'Instant Alerts', color: 'red' },
                    { icon: Activity, label: 'Behavior Tracking', color: 'indigo' },
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <div className={`p-2 bg-${item.color}-100 rounded-lg`}>
                        <item.icon className={`w-4 h-4 text-${item.color}-600`} />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{item.label}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-200">
              <h3 className="font-bold text-blue-900 mb-3 flex items-center space-x-2">
                <Camera className="w-5 h-5" />
                <span>Quick Instructions</span>
              </h3>
              <ol className="space-y-2 text-sm text-blue-800">
                <li className="flex items-start space-x-2">
                  <span className="font-bold">1.</span>
                  <span>Click "Start Detection" to activate your camera</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="font-bold">2.</span>
                  <span>Allow camera access when prompted by your browser</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="font-bold">3.</span>
                  <span>AI will automatically analyze the video feed</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="font-bold">4.</span>
                  <span>You'll receive instant alerts if violence is detected</span>
                </li>
              </ol>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}