import { useState, useRef } from 'react';
import { Upload, FileVideo, CheckCircle2, AlertTriangle, Loader2, Eye, Play, BarChart3, Clock, Video } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';
import { motion, AnimatePresence } from 'motion/react';

type AnalysisResult = {
  status: 'safe' | 'violence';
  confidence: number;
  timestamp: string;
  detectedFrames: number;
  totalFrames: number;
  details: string;
};

export function UploadAnalysis() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [videoUrl, setVideoUrl] = useState<string>('');
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('video/')) {
      setSelectedFile(file);
      setVideoUrl(URL.createObjectURL(file));
      setResult(null);
      setProgress(0);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith('video/')) {
      setSelectedFile(file);
      setVideoUrl(URL.createObjectURL(file));
      setResult(null);
      setProgress(0);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleAnalyze = () => {
    if (!selectedFile) return;

    setIsProcessing(true);
    setProgress(0);
    setResult(null);

    // Simulate processing
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsProcessing(false);
          
          // Mock result
          const isViolence = Math.random() > 0.7;
          setResult({
            status: isViolence ? 'violence' : 'safe',
            confidence: Math.floor(Math.random() * 15) + 85,
            timestamp: new Date().toLocaleString(),
            detectedFrames: isViolence ? Math.floor(Math.random() * 50) + 10 : 0,
            totalFrames: 300,
            details: isViolence 
              ? 'Aggressive behavior patterns detected at multiple timestamps'
              : 'No violent or aggressive behavior detected throughout the video',
          });
          return 100;
        }
        return prev + 2;
      });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full mb-4 border border-gray-200">
            <Video className="w-4 h-4 text-gray-700" />
            <span className="text-sm font-semibold text-gray-700">AI Video Analysis</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Upload & Analysis</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Upload your video for comprehensive AI-powered violence detection and analysis
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Upload Area */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6">
                <h2 className="text-xl font-bold text-white flex items-center space-x-2">
                  <Upload className="w-6 h-6" />
                  <span>Upload Video</span>
                </h2>
                <p className="text-sm text-purple-100 mt-1">Drag & drop or click to browse</p>
              </div>

              <div className="p-6">
                <div
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onClick={() => fileInputRef.current?.click()}
                  className={`relative border-3 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all ${
                    isDragging
                      ? 'border-purple-500 bg-purple-50 scale-105'
                      : selectedFile
                      ? 'border-green-400 bg-green-50'
                      : 'border-gray-300 hover:border-purple-400 hover:bg-purple-50/50'
                  }`}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="video/*"
                    onChange={handleFileSelect}
                    className="hidden"
                  />

                  {selectedFile ? (
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                    >
                      <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-10 h-10 text-green-600" />
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg mb-2">File Selected</h3>
                      <p className="text-sm text-gray-600 mb-1">{selectedFile.name}</p>
                      <p className="text-xs text-gray-500">
                        {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </motion.div>
                  ) : (
                    <>
                      <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FileVideo className="w-10 h-10 text-purple-600" />
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg mb-2">
                        Drop your video here
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        or click to browse from your device
                      </p>
                      <p className="text-xs text-gray-500">
                        Supports MP4, MOV, AVI • Max size 500MB
                      </p>
                    </>
                  )}
                </div>

                <Button
                  onClick={handleAnalyze}
                  disabled={!selectedFile || isProcessing}
                  className="w-full mt-6 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-6 rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Analyzing...</span>
                    </>
                  ) : (
                    <>
                      <BarChart3 className="w-5 h-5" />
                      <span>Start Analysis</span>
                    </>
                  )}
                </Button>
              </div>
            </div>

            {/* Video Preview */}
            {videoUrl && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
              >
                <div className="bg-gradient-to-r from-gray-700 to-gray-800 p-4">
                  <h3 className="font-bold text-white flex items-center space-x-2">
                    <Play className="w-5 h-5" />
                    <span>Video Preview</span>
                  </h3>
                </div>
                <div className="relative bg-black">
                  <video
                    src={videoUrl}
                    controls
                    className="w-full aspect-video"
                  />
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {/* Analysis Progress */}
            {isProcessing && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
              >
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
                  <h3 className="font-bold text-white flex items-center space-x-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>AI Processing</span>
                  </h3>
                </div>
                <div className="p-8">
                  <div className="text-center mb-6">
                    <div className="text-5xl font-bold text-blue-600 mb-2">{progress}%</div>
                    <p className="text-gray-600">Analyzing video frames...</p>
                  </div>
                  <Progress value={progress} className="h-3 mb-6" />
                  <div className="grid grid-cols-3 gap-4 text-center text-sm">
                    <div className="bg-blue-50 rounded-xl p-3">
                      <div className="font-bold text-blue-900">Frame Analysis</div>
                      <div className="text-xs text-blue-600 mt-1">In Progress</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3">
                      <div className="font-bold text-gray-900">Pattern Detection</div>
                      <div className="text-xs text-gray-600 mt-1">
                        {progress > 50 ? 'In Progress' : 'Waiting'}
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-3">
                      <div className="font-bold text-gray-900">Report Generation</div>
                      <div className="text-xs text-gray-600 mt-1">
                        {progress > 80 ? 'In Progress' : 'Waiting'}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Analysis Results */}
            <AnimatePresence>
              {result && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 overflow-hidden"
                >
                  <div className={`p-6 ${
                    result.status === 'safe'
                      ? 'bg-gradient-to-r from-green-500 to-green-600'
                      : 'bg-gradient-to-r from-red-500 to-red-600'
                  }`}>
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-white text-xl flex items-center space-x-2">
                        {result.status === 'safe' ? (
                          <CheckCircle2 className="w-6 h-6" />
                        ) : (
                          <AlertTriangle className="w-6 h-6" />
                        )}
                        <span>Analysis Complete</span>
                      </h3>
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className={`px-4 py-2 rounded-full font-bold text-sm ${
                          result.status === 'safe'
                            ? 'bg-green-700 text-white'
                            : 'bg-red-700 text-white'
                        }`}
                      >
                        {result.status === 'safe' ? '✓ SAFE' : '⚠ WARNING'}
                      </motion.div>
                    </div>
                  </div>

                  <div className="p-8">
                    {/* Main Result */}
                    <div className="text-center mb-8">
                      <div className={`w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center ${
                        result.status === 'safe'
                          ? 'bg-gradient-to-br from-green-400 to-green-600'
                          : 'bg-gradient-to-br from-red-400 to-red-600'
                      }`}>
                        {result.status === 'safe' ? (
                          <CheckCircle2 className="w-12 h-12 text-white" />
                        ) : (
                          <AlertTriangle className="w-12 h-12 text-white" />
                        )}
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        {result.status === 'safe' ? 'No Violence Detected' : 'Violence Detected'}
                      </h2>
                      <p className="text-gray-600">{result.details}</p>
                    </div>

                    {/* Statistics */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border-2 border-blue-200">
                        <div className="text-sm text-blue-700 mb-1">Confidence Level</div>
                        <div className="text-3xl font-bold text-blue-900">{result.confidence}%</div>
                        <Progress value={result.confidence} className="mt-3 h-2" />
                      </div>
                      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-4 border-2 border-purple-200">
                        <div className="text-sm text-purple-700 mb-1">Frames Analyzed</div>
                        <div className="text-3xl font-bold text-purple-900">{result.totalFrames}</div>
                        <div className="text-xs text-purple-600 mt-1">
                          {result.detectedFrames} flagged
                        </div>
                      </div>
                    </div>

                    {/* Additional Details */}
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-between py-3 border-b border-gray-200">
                        <div className="flex items-center space-x-2 text-gray-600">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm">Analysis Timestamp</span>
                        </div>
                        <span className="text-sm font-semibold text-gray-900">{result.timestamp}</span>
                      </div>
                      <div className="flex items-center justify-between py-3 border-b border-gray-200">
                        <div className="flex items-center space-x-2 text-gray-600">
                          <Eye className="w-4 h-4" />
                          <span className="text-sm">Detection Rate</span>
                        </div>
                        <span className="text-sm font-semibold text-gray-900">
                          {((result.detectedFrames / result.totalFrames) * 100).toFixed(1)}%
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-4">
                      <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                        View Detailed Report
                      </Button>
                      <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                        Download Results
                      </Button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Info Card */}
            {!isProcessing && !result && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-200"
              >
                <h3 className="font-bold text-blue-900 mb-4 flex items-center space-x-2">
                  <BarChart3 className="w-5 h-5" />
                  <span>How It Works</span>
                </h3>
                <ul className="space-y-3 text-sm text-blue-800">
                  <li className="flex items-start space-x-3">
                    <div className="bg-blue-200 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-blue-900">1</span>
                    </div>
                    <span>Upload your video file (MP4, MOV, or AVI format)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="bg-blue-200 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-blue-900">2</span>
                    </div>
                    <span>Our AI analyzes every frame for violent or aggressive behavior</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="bg-blue-200 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-blue-900">3</span>
                    </div>
                    <span>Receive a comprehensive report with confidence scores and timestamps</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="bg-blue-200 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-blue-900">4</span>
                    </div>
                    <span>Download detailed analysis results for your records</span>
                  </li>
                </ul>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}