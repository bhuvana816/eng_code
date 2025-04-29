import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
<<<<<<< HEAD
import { Search, Menu, X } from 'lucide-react';
=======
import { Search, Menu, X, User, Calendar, BookOpen, LogOut, Github, Linkedin, Mail, Phone, MapPin, Briefcase, GraduationCap } from 'lucide-react';
>>>>>>> 77f9098 (Made changes to XYZ)
import { useAuth } from '../../contexts/AuthContext';
import Logo from '../common/Logo';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
<<<<<<< HEAD
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated, logout } = useAuth();
=======
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated, logout, user } = useAuth();
>>>>>>> 77f9098 (Made changes to XYZ)
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
<<<<<<< HEAD
    // Close mobile menu when route changes
    setIsMenuOpen(false);
=======
    // Close mobile menu and profile dropdown when route changes
    setIsMenuOpen(false);
    setIsProfileOpen(false);
>>>>>>> 77f9098 (Made changes to XYZ)
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

<<<<<<< HEAD
=======
  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const profileMenu = document.getElementById('profile-menu');
      const profileButton = document.getElementById('profile-button');
      if (
        profileMenu &&
        !profileMenu.contains(event.target as Node) &&
        !profileButton?.contains(event.target as Node)
      ) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

>>>>>>> 77f9098 (Made changes to XYZ)
  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Logo size="sm" />
            <span className="text-xl font-bold text-blue-900">Engiversee</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About Us</Link>
<<<<<<< HEAD
            <Link to="/teams" className="nav-link">Our Team</Link>
=======
>>>>>>> 77f9098 (Made changes to XYZ)
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:block">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search sessions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-3 pr-10 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
              <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Search className="w-5 h-5 text-gray-500" />
              </button>
            </form>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
<<<<<<< HEAD
              <button
                onClick={() => logout()}
                className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
              >
                Logout
              </button>
=======
              <div className="relative">
                <button
                  id="profile-button"
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-2 px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
                >
                  <User className="w-5 h-5" />
                  <span>Profile</span>
                </button>

                {/* Profile Dropdown */}
                {isProfileOpen && (
                  <div
                    id="profile-menu"
                    className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 border border-gray-200"
                  >
                    {/* User Info */}
                    <div className="px-4 py-3 border-b border-gray-200">
                      <p className="text-sm font-semibold text-gray-900">{user?.name || 'User'}</p>
                      <p className="text-sm text-gray-600">{user?.email}</p>
                    </div>

                    {/* Menu Items */}
                    <div className="py-2">
                      <Link
                        to="/profile"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <User className="w-4 h-4 mr-3" />
                        My Profile
                      </Link>
                      <Link
                        to="/appointments"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <Calendar className="w-4 h-4 mr-3" />
                        My Appointments
                      </Link>
                      <Link
                        to="/sessions"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <BookOpen className="w-4 h-4 mr-3" />
                        My Sessions
                      </Link>
                      <button
                        onClick={() => logout()}
                        className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                      >
                        <LogOut className="w-4 h-4 mr-3" />
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
>>>>>>> 77f9098 (Made changes to XYZ)
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Search (shown when menu is open) */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search sessions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-3 pr-10 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
              <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Search className="w-5 h-5 text-gray-500" />
              </button>
            </form>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 flex flex-col space-y-4">
            <Link to="/" className="nav-link-mobile">Home</Link>
            <Link to="/about" className="nav-link-mobile">About Us</Link>
<<<<<<< HEAD
            <Link to="/teams" className="nav-link-mobile">Our Team</Link>
=======
>>>>>>> 77f9098 (Made changes to XYZ)
            <Link to="/contact" className="nav-link-mobile">Contact</Link>
            
            <div className="pt-4 border-t border-gray-200 flex flex-col space-y-3">
              {isAuthenticated ? (
<<<<<<< HEAD
                <button
                  onClick={() => logout()}
                  className="w-full px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors text-center"
                >
                  Logout
                </button>
=======
                <>
                  <Link to="/profile" className="flex items-center px-2 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                    <User className="w-5 h-5 mr-3" />
                    My Profile
                  </Link>
                  <Link to="/appointments" className="flex items-center px-2 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                    <Calendar className="w-5 h-5 mr-3" />
                    My Appointments
                  </Link>
                  <Link to="/sessions" className="flex items-center px-2 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                    <BookOpen className="w-5 h-5 mr-3" />
                    My Sessions
                  </Link>
                  <button
                    onClick={() => logout()}
                    className="flex items-center w-full px-2 py-2 text-red-600 hover:bg-gray-100 rounded-md"
                  >
                    <LogOut className="w-5 h-5 mr-3" />
                    Logout
                  </button>
                </>
>>>>>>> 77f9098 (Made changes to XYZ)
              ) : (
                <>
                  <Link
                    to="/login"
                    className="w-full px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors text-center"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-center"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;