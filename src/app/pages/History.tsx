import { Eye, Download, Search } from 'lucide-react';
import { motion } from 'motion/react';

export function History() {
  const historyData = [
    {
      id: 1,
      date: '2026-03-16 14:30',
      cameraId: 'CAM-001',
      detectionType: 'Violence Detected',
      status: 'Violent',
      duration: '00:45',
    },
    {
      id: 2,
      date: '2026-03-16 12:15',
      cameraId: 'CAM-002',
      detectionType: 'Safe',
      status: 'Safe',
      duration: '01:20',
    },
    {
      id: 3,
      date: '2026-03-16 10:45',
      cameraId: 'CAM-004',
      detectionType: 'Violence Detected',
      status: 'Violent',
      duration: '00:30',
    },
    {
      id: 4,
      date: '2026-03-15 18:20',
      cameraId: 'CAM-003',
      detectionType: 'Safe',
      status: 'Safe',
      duration: '02:10',
    },
    {
      id: 5,
      date: '2026-03-15 15:10',
      cameraId: 'CAM-001',
      detectionType: 'Suspicious Activity',
      status: 'Warning',
      duration: '00:55',
    },
    {
      id: 6,
      date: '2026-03-15 11:30',
      cameraId: 'CAM-002',
      detectionType: 'Violence Detected',
      status: 'Violent',
      duration: '01:05',
    },
    {
      id: 7,
      date: '2026-03-15 09:15',
      cameraId: 'CAM-005',
      detectionType: 'Safe',
      status: 'Safe',
      duration: '01:45',
    },
    {
      id: 8,
      date: '2026-03-14 16:40',
      cameraId: 'CAM-004',
      detectionType: 'Safe',
      status: 'Safe',
      duration: '00:50',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">Detection History</h1>
          <p className="text-gray-600">View all past detection events and analysis results</p>
        </div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white border-2 border-blue-100 rounded-xl shadow-sm p-6 mb-6"
        >
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by camera ID or detection type..."
                className="w-full pl-10 pr-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-900"
              />
            </div>
            <select className="px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-900 bg-white">
              <option>All Status</option>
              <option>Violent</option>
              <option>Safe</option>
              <option>Warning</option>
            </select>
            <select className="px-4 py-3 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-900 bg-white">
              <option>All Cameras</option>
              <option>CAM-001</option>
              <option>CAM-002</option>
              <option>CAM-003</option>
              <option>CAM-004</option>
              <option>CAM-005</option>
            </select>
          </div>
        </motion.div>

        {/* History Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white border-2 border-blue-100 rounded-xl shadow-sm overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold">Date & Time</th>
                  <th className="px-6 py-4 text-left font-bold">Camera ID</th>
                  <th className="px-6 py-4 text-left font-bold">Detection Type</th>
                  <th className="px-6 py-4 text-left font-bold">Status</th>
                  <th className="px-6 py-4 text-left font-bold">Duration</th>
                  <th className="px-6 py-4 text-right font-bold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {historyData.map((item, index) => (
                  <motion.tr
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    className="hover:bg-blue-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-gray-900 font-medium">{item.date}</td>
                    <td className="px-6 py-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-mono font-bold">
                        {item.cameraId}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-900">{item.detectionType}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-bold ${
                          item.status === 'Violent'
                            ? 'bg-red-100 text-red-700'
                            : item.status === 'Safe'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-orange-100 text-orange-700'
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600 font-mono">{item.duration}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end space-x-2">
                        <button className="px-3 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors font-medium flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>View</span>
                        </button>
                        <button className="px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium flex items-center space-x-1">
                          <Download className="w-4 h-4" />
                          <span>Export</span>
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Pagination */}
        <div className="mt-6 flex items-center justify-between">
          <p className="text-gray-600">Showing 1-8 of 156 results</p>
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 border-2 border-blue-200 rounded-lg hover:bg-blue-50 transition-colors font-medium text-blue-900">
              Previous
            </button>
            <button className="px-4 py-2 bg-blue-900 text-white rounded-lg font-medium">1</button>
            <button className="px-4 py-2 border-2 border-blue-200 rounded-lg hover:bg-blue-50 transition-colors font-medium text-blue-900">
              2
            </button>
            <button className="px-4 py-2 border-2 border-blue-200 rounded-lg hover:bg-blue-50 transition-colors font-medium text-blue-900">
              3
            </button>
            <button className="px-4 py-2 border-2 border-blue-200 rounded-lg hover:bg-blue-50 transition-colors font-medium text-blue-900">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}