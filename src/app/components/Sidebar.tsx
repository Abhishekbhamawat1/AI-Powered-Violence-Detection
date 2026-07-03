import { Link, useLocation } from 'react-router';
import {
  LayoutDashboard,
  Camera,
  Upload,
  History,
  Settings,
  Shield,
  Bell,
  LogOut,
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Live Detection', href: '/live-detection', icon: Camera },
  { name: 'Upload & Analysis', href: '/upload-analysis', icon: Upload },
  { name: 'History', href: '/history', icon: History },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export function Sidebar() {
  const location = useLocation();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-blue-900 to-blue-800 text-white">
      {/* Logo */}
      <div className="flex items-center space-x-2 p-6 border-b border-blue-700/50">
        <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm">
          <Shield className="w-6 h-6" />
        </div>
        <div>
          <h1 className="font-bold text-lg">AI Violence</h1>
          <p className="text-xs text-blue-200">Detection System</p>
        </div>
      </div>

      {/* User Info */}
      {user && (
        <div className="p-4 bg-blue-800/50 backdrop-blur-sm m-4 rounded-xl border border-blue-700/30">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-red-500 to-red-600 w-10 h-10 rounded-full flex items-center justify-center font-bold">
              {user.name?.charAt(0).toUpperCase() || 'U'}
            </div>
            <div>
              <p className="font-medium text-sm">{user.name || 'User'}</p>
              <p className="text-xs text-blue-200">{user.email}</p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-white/20 backdrop-blur-sm text-white shadow-lg'
                  : 'text-blue-100 hover:bg-white/10 hover:text-white'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Alerts */}
      <div className="p-4 m-4 bg-red-500/20 backdrop-blur-sm rounded-xl border border-red-500/30">
        <div className="flex items-center space-x-2 mb-2">
          <Bell className="w-4 h-4 text-red-400" />
          <span className="text-sm font-medium">Active Alerts</span>
        </div>
        <p className="text-2xl font-bold">3</p>
        <p className="text-xs text-blue-200">Requires attention</p>
      </div>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="flex items-center space-x-3 px-6 py-4 text-blue-100 hover:bg-white/10 hover:text-white transition-all duration-200 border-t border-blue-700/50"
      >
        <LogOut className="w-5 h-5" />
        <span className="font-medium">Logout</span>
      </button>
    </div>
  );
}
