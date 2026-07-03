import { useState } from 'react';
import { Save, Bell, Shield, Video, User } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { toast } from 'sonner';
import { motion } from 'motion/react';
import { useAuth } from '../context/AuthContext';

export function Settings() {
  const { user, updateUser } = useAuth();
  const [profileName, setProfileName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [alertNotifications, setAlertNotifications] = useState(true);
  const [detectionSensitivity, setDetectionSensitivity] = useState('medium');

  const handleSaveProfile = () => {
    if (user) {
      updateUser({ name: profileName, email });
      toast.success('Profile settings saved successfully');
    }
  };

  const handleSaveNotifications = () => {
    toast.success('Notification settings saved successfully');
  };

  const handleSaveDetection = () => {
    toast.success('Detection settings saved successfully');
  };

  return (
    <div className="min-h-screen bg-white">
      <TopNavigation />

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">Settings</h1>
          <p className="text-gray-600">Manage your account and system preferences</p>
        </div>

        {/* Settings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Profile Settings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Card className="border-2 border-blue-100">
              <CardHeader className="bg-blue-900">
                <div className="flex items-center space-x-3">
                  <div className="bg-white/10 w-10 h-10 rounded-lg flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-white">Profile Settings</CardTitle>
                    <CardDescription className="text-blue-100">
                      Update your personal information
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-blue-900 font-medium">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    value={profileName}
                    onChange={(e) => setProfileName(e.target.value)}
                    className="border-2 border-blue-200 focus:border-blue-900"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-blue-900 font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-2 border-blue-200 focus:border-blue-900"
                  />
                </div>
                <Button
                  onClick={handleSaveProfile}
                  className="w-full bg-red-600 hover:bg-red-700"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save Profile
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Notification Settings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="border-2 border-blue-100">
              <CardHeader className="bg-blue-900">
                <div className="flex items-center space-x-3">
                  <div className="bg-white/10 w-10 h-10 rounded-lg flex items-center justify-center">
                    <Bell className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-white">Notifications</CardTitle>
                    <CardDescription className="text-blue-100">
                      Configure your alert preferences
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <Label htmlFor="email-notif" className="text-gray-900 font-medium cursor-pointer">
                    Email Notifications
                  </Label>
                  <input
                    id="email-notif"
                    type="checkbox"
                    checked={emailNotifications}
                    onChange={(e) => setEmailNotifications(e.target.checked)}
                    className="w-5 h-5 rounded border-blue-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                  />
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <Label htmlFor="push-notif" className="text-gray-900 font-medium cursor-pointer">
                    Push Notifications
                  </Label>
                  <input
                    id="push-notif"
                    type="checkbox"
                    checked={pushNotifications}
                    onChange={(e) => setPushNotifications(e.target.checked)}
                    className="w-5 h-5 rounded border-blue-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                  />
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <Label htmlFor="alert-notif" className="text-gray-900 font-medium cursor-pointer">
                    Violence Alert Notifications
                  </Label>
                  <input
                    id="alert-notif"
                    type="checkbox"
                    checked={alertNotifications}
                    onChange={(e) => setAlertNotifications(e.target.checked)}
                    className="w-5 h-5 rounded border-blue-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                  />
                </div>
                <Button
                  onClick={handleSaveNotifications}
                  className="w-full bg-red-600 hover:bg-red-700"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save Notifications
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Detection Settings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="border-2 border-blue-100">
              <CardHeader className="bg-blue-900">
                <div className="flex items-center space-x-3">
                  <div className="bg-white/10 w-10 h-10 rounded-lg flex items-center justify-center">
                    <Video className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-white">Detection Settings</CardTitle>
                    <CardDescription className="text-blue-100">
                      Configure AI detection parameters
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="sensitivity" className="text-blue-900 font-medium">
                    Detection Sensitivity
                  </Label>
                  <select
                    id="sensitivity"
                    value={detectionSensitivity}
                    onChange={(e) => setDetectionSensitivity(e.target.value)}
                    className="w-full px-4 py-2 border-2 border-blue-200 rounded-lg focus:outline-none focus:border-blue-900 bg-white"
                  >
                    <option value="low">Low - Fewer False Positives</option>
                    <option value="medium">Medium - Balanced</option>
                    <option value="high">High - Maximum Detection</option>
                  </select>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-gray-700">
                    <strong>Current Setting: </strong>
                    {detectionSensitivity === 'low' && 'Low sensitivity - Detects only clear violent behaviors'}
                    {detectionSensitivity === 'medium' && 'Medium sensitivity - Balanced detection rate'}
                    {detectionSensitivity === 'high' && 'High sensitivity - Detects subtle threatening behaviors'}
                  </p>
                </div>
                <Button
                  onClick={handleSaveDetection}
                  className="w-full bg-red-600 hover:bg-red-700"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save Detection Settings
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Security Settings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="border-2 border-blue-100">
              <CardHeader className="bg-blue-900">
                <div className="flex items-center space-x-3">
                  <div className="bg-white/10 w-10 h-10 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-white">Security Settings</CardTitle>
                    <CardDescription className="text-blue-100">
                      Manage your account security
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password" className="text-blue-900 font-medium">
                    Current Password
                  </Label>
                  <Input
                    id="current-password"
                    type="password"
                    placeholder="Enter current password"
                    className="border-2 border-blue-200 focus:border-blue-900"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password" className="text-blue-900 font-medium">
                    New Password
                  </Label>
                  <Input
                    id="new-password"
                    type="password"
                    placeholder="Enter new password"
                    className="border-2 border-blue-200 focus:border-blue-900"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password" className="text-blue-900 font-medium">
                    Confirm New Password
                  </Label>
                  <Input
                    id="confirm-password"
                    type="password"
                    placeholder="Confirm new password"
                    className="border-2 border-blue-200 focus:border-blue-900"
                  />
                </div>
                <Button
                  onClick={() => toast.success('Password updated successfully')}
                  className="w-full bg-red-600 hover:bg-red-700"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Update Password
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}