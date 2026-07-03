import { Link, useLocation, useNavigate } from 'react-router';
import { Shield, Menu, X, User, LogOut, Settings } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useAuth } from '../context/AuthContext';

export function UnifiedNavbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { user, logout } = useAuth();
  const profileDropdownRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Live Detection', path: '/live-detection' },
    { name: 'Upload & Analysis', path: '/upload-analysis' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const handleLogout = () => {
    logout();
    setIsProfileOpen(false);
    setIsMenuOpen(false);
    navigate('/');
  };

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };

    if (isProfileOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isProfileOpen]);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/80 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex items-center h-20">
          {/* Logo - Left Side */}
          <Link to="/" className="flex items-center space-x-3 group flex-shrink-0 mr-12">
            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.2 }}
              className="relative bg-gradient-to-br from-gray-900 to-gray-700 p-2.5 rounded-xl shadow-md group-hover:shadow-lg transition-all"
            >
              <Shield className="w-6 h-6 text-white" />
            </motion.div>
            <span className="text-lg font-bold text-gray-900 tracking-tight whitespace-nowrap">
              AI Violence Detection
            </span>
          </Link>

          {/* Menu Items - Center - Single Horizontal Line */}
          <div className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative group py-2 whitespace-nowrap"
              >
                <span className={`text-[15px] font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-gray-900'
                    : 'text-gray-600 group-hover:text-gray-900'
                }`}>
                  {item.name}
                </span>
                
                {/* Underline Animation */}
                <span className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-transform duration-300 origin-left ${
                  isActive(item.path)
                    ? 'scale-x-100'
                    : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>
            ))}
          </div>

          {/* Auth Buttons - Right Side */}
          <div className="hidden lg:flex items-center space-x-3 flex-shrink-0 ml-12">
            {user ? (
              <div className="relative" ref={profileDropdownRef}>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-3 px-4 py-2.5 text-[15px] font-medium text-gray-700 hover:text-gray-900 transition-all rounded-xl hover:bg-gray-50 border border-gray-200"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="font-medium">{user.name}</span>
                </motion.button>
                
                <AnimatePresence>
                  {isProfileOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-72 bg-white/98 backdrop-blur-xl border border-gray-200/80 shadow-xl rounded-2xl overflow-hidden z-50"
                    >
                      {/* Profile Header */}
                      <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-6 text-white">
                        <div className="flex items-center space-x-4">
                          <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-xl border-2 border-white/30">
                            {user.name.charAt(0).toUpperCase()}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-lg">{user.name}</h3>
                            <p className="text-sm text-blue-100 truncate">{user.email}</p>
                          </div>
                        </div>
                      </div>

                      {/* Menu Items */}
                      <div className="p-2">
                        <Link
                          to="/dashboard"
                          onClick={() => setIsProfileOpen(false)}
                          className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-100 transition-all"
                        >
                          <Shield className="w-5 h-5 text-gray-600" />
                          <span className="font-medium">Dashboard</span>
                        </Link>
                        <Link
                          to="/settings"
                          onClick={() => setIsProfileOpen(false)}
                          className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gray-100 transition-all"
                        >
                          <Settings className="w-5 h-5 text-gray-600" />
                          <span className="font-medium">Settings</span>
                        </Link>
                        
                        <div className="border-t border-gray-200 my-2" />
                        
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-all"
                        >
                          <LogOut className="w-5 h-5" />
                          <span className="font-medium">Logout</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <>
                <Link to="/login">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-5 py-2.5 text-[15px] font-medium text-gray-700 hover:text-gray-900 transition-colors rounded-xl hover:bg-gray-50"
                  >
                    Login
                  </motion.button>
                </Link>
                <Link to="/signup">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="relative group px-6 py-2.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-[15px] font-medium rounded-xl shadow-md shadow-red-500/25 hover:shadow-lg hover:shadow-red-500/35 transition-all overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-red-400 to-pink-400 opacity-0 group-hover:opacity-15 transition-opacity" />
                    <span className="relative">Sign Up</span>
                  </motion.button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors ml-auto"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/98 backdrop-blur-md border-t border-gray-200/80"
          >
            <div className="px-6 py-6 space-y-1 max-w-[1400px] mx-auto">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-[15px] font-medium transition-all ${
                    isActive(item.path)
                      ? 'text-gray-900 bg-gradient-to-br from-gray-100 to-gray-200/80 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200/80 space-y-2">
                {user ? (
                  <>
                    {/* User Profile in Mobile */}
                    <div className="px-4 py-3 mb-3 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl text-white">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-white font-semibold border border-white/30">
                          {user.name.charAt(0).toUpperCase()}
                        </div>
                        <div className="flex-1">
                          <p className="font-bold text-sm">{user.name}</p>
                          <p className="text-xs text-blue-100 truncate">{user.email}</p>
                        </div>
                      </div>
                    </div>
                    
                    <Link
                      to="/dashboard"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center space-x-3 px-4 py-3 rounded-xl text-[15px] font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all"
                    >
                      <Shield className="w-5 h-5" />
                      <span>Dashboard</span>
                    </Link>
                    <Link
                      to="/settings"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center space-x-3 px-4 py-3 rounded-xl text-[15px] font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all"
                    >
                      <Settings className="w-5 h-5" />
                      <span>Settings</span>
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-[15px] font-medium text-red-600 hover:bg-red-50 transition-all"
                    >
                      <LogOut className="w-5 h-5" />
                      <span>Logout</span>
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-3 rounded-xl text-[15px] font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all"
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-[15px] font-medium rounded-xl shadow-md shadow-red-500/25 hover:shadow-lg transition-all text-center"
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}