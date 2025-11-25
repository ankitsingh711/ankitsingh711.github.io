import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FaDownload, FaCode } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import AccessibilityToolbar from './Accessibility/AccessibilityToolbar';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Code Editor', href: '/code-editor' },
    { name: 'Contact', href: '/contact' },
  ];

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
      // Alt + number for quick navigation
      if (e.altKey && !isNaN(e.key) && navigation[e.key - 1]) {
        e.preventDefault();
        window.location.href = navigation[e.key - 1].href;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [navigation]);

  const handleNavigation = () => {
    setIsOpen(false);
  };

  const handleDownloadResume = () => {
    // Convert the Google Drive view URL to a direct download URL
    const fileId = '1jmjW5--EHX_rSb8SHJzmHEZZDbriOHv_';
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

    // Open in new tab (as direct download might be blocked by browser)
    window.open(downloadUrl, '_blank');
  };

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className="bg-background-card backdrop-blur-sm bg-opacity-80 shadow-soft fixed w-full top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-xl sm:text-2xl font-display font-bold bg-gradient-primary text-transparent bg-clip-text"
              aria-label="Go to homepage"
            >
              Portfolio
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center space-x-2">
            {/* Navigation Links */}
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={handleNavigation}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-1 ${location.pathname === item.href
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-text-secondary hover:text-primary-600 hover:bg-primary-50'
                  }`}
                aria-current={location.pathname === item.href ? 'page' : undefined}
                aria-label={`Navigate to ${item.name} (Alt + ${index + 1})`}
              >
                {item.name === 'Code Editor' && <FaCode className="w-4 h-4" aria-hidden="true" />}
                {item.name}
              </Link>
            ))}

            {/* Resume Download Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadResume}
              className="ml-4 px-4 py-2 bg-gradient-primary text-white rounded-md flex items-center space-x-2 hover:shadow-glow transition-all duration-300"
              aria-label="Download Resume"
            >
              <FaDownload className="w-4 h-4" aria-hidden="true" />
              <span>Resume</span>
            </motion.button>

            {/* Accessibility Toolbar */}
            <div className="ml-2">
              <AccessibilityToolbar />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden overflow-hidden"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="mobile-menu-button"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={handleNavigation}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${location.pathname === item.href
                      ? 'text-primary bg-gray-50'
                      : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                    }`}
                  role="menuitem"
                  aria-current={location.pathname === item.href ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Accessibility Controls */}
              <div className="px-4 py-3 border-t">
                <AccessibilityToolbar isMobile={true} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 