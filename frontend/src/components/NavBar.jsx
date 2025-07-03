// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import Switch from './ThemeSwitch'; // Import your Switch component
// import { ThemeProvider } from './ThemeContext';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const [isProfileOpen, setIsProfileOpen] = useState(false);
//   const [theme, setTheme] = useState("dark");
//   const location = useLocation();

//   // Check screen size for responsive behavior
//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsMobile(window.innerWidth < 768);
//       if (window.innerWidth >= 768) {
//         setIsOpen(false);
//       }
//     };

//     checkScreenSize();
//     window.addEventListener('resize', checkScreenSize);
    
//     // Initialize theme from localStorage or default to dark
//     const savedTheme = localStorage.getItem('theme') || "dark";
//     setTheme(savedTheme);
//     document.documentElement.setAttribute('data-theme', savedTheme);
    
//     return () => window.removeEventListener('resize', checkScreenSize);
//   }, []);

//   // Toggle theme function
//   const toggleTheme = () => {
//     const newTheme = theme === "dark" ? "light" : "dark";
//     setTheme(newTheme);
//     localStorage.setItem('theme', newTheme);
//     document.documentElement.setAttribute('data-theme', newTheme);
//   };

//   // Toggle mobile menu
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//     // Close profile dropdown when opening mobile menu
//     if (!isOpen) {
//       setIsProfileOpen(false);
//     }
//   };

//   // Toggle profile dropdown
//   const toggleProfile = () => {
//     setIsProfileOpen(!isProfileOpen);
//     // Close mobile menu when opening profile dropdown on mobile
//     if (isMobile && isOpen) {
//       setIsOpen(false);
//     }
//   };

//   // Close mobile menu when route changes
//   useEffect(() => {
//     setIsOpen(false);
//     setIsProfileOpen(false);
//   }, [location.pathname]);

//   // Check if link is active
//   const isActive = (path) => {
//     return location.pathname === path ? "text-blue-300 font-medium" : "text-blue-100";
//   };

//   return (
//     <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-900/50 to-blue-700/30 backdrop-blur-md text-white shadow-lg border-2 border-blue-400/30 rounded-b-lg">
//       {/* Main navbar container */}
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16 md:h-20">
//           {/* Left side - Logo */}
//           <div className="flex-shrink-0">
//             <Link to="/" className="font-serif text-xl md:text-3xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400">
//               Aquarius RO
//             </Link>
//           </div>

//           {/* Center - Navigation Links (visible on desktop) */}
//           <div className="hidden md:block">
//             <div className="flex items-center space-x-6 md:space-x-10">
//               <Link to="/" className={`${isActive('/')} hover:text-blue-300 transition duration-300 text-sm md:text-base`}>Home</Link>
//               <Link to="/services" className={`${isActive('/services')} hover:text-blue-300 transition duration-300 text-sm md:text-base`}>Services</Link>
//               <Link to="/about" className={`${isActive('/about')} hover:text-blue-300 transition duration-300 text-sm md:text-base`}>About</Link>
//               <Link to="/contact" className={`${isActive('/contact')} hover:text-blue-300 transition duration-300 text-sm md:text-base`}>Contact</Link>
//             </div>
//           </div>

//           {/* Right side - Theme Toggle and Profile */}
//           <div className="flex items-center space-x-2 md:space-x-4">
//             {/* Theme Switch */}
//             <div className="pt-1" onClick={toggleTheme}>
//               <Switch />
//             </div>

//             {/* Profile Dropdown */}
//             <div className="relative">
//               <button 
//                 onClick={toggleProfile}
//                 className="flex items-center p-1 md:p-2 rounded-full hover:bg-blue-800 transition duration-300"
//                 aria-expanded={isProfileOpen}
//                 aria-label="Profile menu"
//               >
//                 <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-300 flex items-center justify-center text-blue-900 font-semibold text-sm md:text-base">
//                   AR
//                 </div>
//               </button>
              
//               {isProfileOpen && (
//                 <div className="absolute right-0 mt-2 w-40 md:w-48 bg-blue-800/90 backdrop-blur-md rounded-md shadow-lg py-1 z-20 border border-blue-400/30">
//                   <Link to="/profile" className="block px-4 py-2 text-xs md:text-sm text-blue-100 hover:bg-blue-700 hover:text-white">
//                     View Profile
//                   </Link>
//                   <Link to="/logout" className="block px-4 py-2 text-xs md:text-sm text-blue-100 hover:bg-blue-700 hover:text-white">
//                     Logout
//                   </Link>
//                 </div>
//               )}
//             </div>

//             {/* Mobile menu button */}
//             <div className="flex md:hidden">
//               <button
//                 onClick={toggleMenu}
//                 className="inline-flex items-center justify-center p-1 md:p-2 rounded-md text-blue-200 hover:text-white hover:bg-blue-800"
//                 aria-expanded={isOpen}
//                 aria-label="Main menu"
//               >
//                 <span className="sr-only">Open main menu</span>
//                 {!isOpen ? (
//                   <svg className="block h-5 w-5 md:h-6 md:w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                   </svg>
//                 ) : (
//                   <svg className="block h-5 w-5 md:h-6 md:w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu, toggle classes based on menu state */}
//       {isOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 bg-blue-800/90 backdrop-blur-md border-t border-blue-400/30">
//             <Link to="/" className={`block px-3 py-2 rounded-md text-sm font-medium ${isActive('/')} hover:text-white hover:bg-blue-900`}>
//               Home
//             </Link>
//             <Link to="/services" className={`block px-3 py-2 rounded-md text-sm font-medium ${isActive('/services')} hover:text-white hover:bg-blue-900`}>
//               Services
//             </Link>
//             <Link to="/about" className={`block px-3 py-2 rounded-md text-sm font-medium ${isActive('/about')} hover:text-white hover:bg-blue-900`}>
//               About
//             </Link>
//             <Link to="/contact" className={`block px-3 py-2 rounded-md text-sm font-medium ${isActive('/contact')} hover:text-white hover:bg-blue-900`}>
//               Contact
//             </Link>
//           </div>
//         </div>
//       )}

//       {/* Neon border effect at bottom */}
//       <div className="h-1 md:h-1.5 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 shadow-lg shadow-blue-400/50 rounded-b-md"></div>
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import DarkModeBtn from './DarkModeBtn'; // Changed from Switch to DarkModeBtn
// import { ThemeProvider } from '../context/theme'; // Correct usage of your context

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const [isProfileOpen, setIsProfileOpen] = useState(false);
  
//   const location = useLocation();
//   const [darkMode, setDarkMode] = useState(() => {
//     const isDark = localStorage.getItem("darkMode");
//     return isDark === "true";
//   });

//   const toggleDarkMode = () => {
//     setDarkMode((prev) => !prev);
//   };

//   useEffect(() => {
//     localStorage.setItem("darkMode", darkMode.toString());

//     const bodyEl = document.body;
//     if (bodyEl) {
//       if (darkMode) {
//         bodyEl.classList.add("dark");
//       } else {
//         bodyEl.classList.remove("dark");
//       }
//     }
//   }, [darkMode]);

//   // Check screen size for responsive behavior
//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsMobile(window.innerWidth < 768);
//       if (window.innerWidth >= 768) {
//         setIsOpen(false);
//       }
//     };

//     checkScreenSize();
//     window.addEventListener('resize', checkScreenSize);

//     return () => window.removeEventListener('resize', checkScreenSize);
//   }, []);

//   // Toggle mobile menu
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//     if (!isOpen) {
//       setIsProfileOpen(false);
//     }
//   };

//   // Toggle profile dropdown
//   const toggleProfile = () => {
//     setIsProfileOpen(!isProfileOpen);
//     if (isMobile && isOpen) {
//       setIsOpen(false);
//     }
//   };

//   // Close mobile menu when route changes
//   useEffect(() => {
//     setIsOpen(false);
//     setIsProfileOpen(false);
//   }, [location.pathname]);

//   // Check if link is active
//   const isActive = (path) => {
//     return location.pathname === path ? "text-blue-300 font-medium" : "text-blue-100";
//   };

//   return (
//     <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-900/50 to-blue-700/30 backdrop-blur-md text-white shadow-lg border-2 border-blue-400/30 rounded-b-lg">
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16 md:h-20">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <Link to="/" className="font-serif text-xl md:text-3xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400">
//               Aquarius RO
//             </Link>
//           </div>

//           {/* Desktop Links */}
//           <div className="hidden md:block">
//             <div className="flex items-center space-x-6 md:space-x-10">
//               <Link to="/" className={`${isActive('/')} hover:text-blue-300 transition duration-300 text-sm md:text-base`}>Home</Link>
//               <Link to="/services" className={`${isActive('/services')} hover:text-blue-300 transition duration-300 text-sm md:text-base`}>Services</Link>
//               <Link to="/about" className={`${isActive('/about')} hover:text-blue-300 transition duration-300 text-sm md:text-base`}>About</Link>
//               <Link to="/contact" className={`${isActive('/contact')} hover:text-blue-300 transition duration-300 text-sm md:text-base`}>Contact</Link>
//             </div>
//           </div>

//           {/* Right Side - Theme Toggle & Profile */}
//           <div className="flex items-center space-x-2 md:space-x-4">
//             {/* Theme Switch */}

//             {/* <div className="pt-1" onClick={toggleDarkMode}>
//               <DarkModeBtn />
//             </div> */}
            
//             <ThemeProvider value={{ darkMode, toggleDarkMode }}>
//               <div className="flex items-center justify-center h-screen">
//               <DarkModeBtn />
//               </div>
//             </ThemeProvider>

//             {/* Profile Dropdown */}
//             <div className="relative">
//               <button 
//                 onClick={toggleProfile}
//                 className="flex items-center p-1 md:p-2 rounded-full hover:bg-blue-800 transition duration-300"
//                 aria-expanded={isProfileOpen}
//                 aria-label="Profile menu"
//               >
//                 <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-300 flex items-center justify-center text-blue-900 font-semibold text-sm md:text-base">
//                   AR
//                 </div>
//               </button>

//               {isProfileOpen && (
//                 <div className="absolute right-0 mt-2 w-40 md:w-48 bg-blue-800/90 backdrop-blur-md rounded-md shadow-lg py-1 z-20 border border-blue-400/30">
//                   <Link to="/profile" className="block px-4 py-2 text-xs md:text-sm text-blue-100 hover:bg-blue-700 hover:text-white">
//                     View Profile
//                   </Link>
//                   <Link to="/logout" className="block px-4 py-2 text-xs md:text-sm text-blue-100 hover:bg-blue-700 hover:text-white">
//                     Logout
//                   </Link>
//                 </div>
//               )}
//             </div>

//             {/* Mobile Menu Button */}
//             <div className="flex md:hidden">
//               <button
//                 onClick={toggleMenu}
//                 className="inline-flex items-center justify-center p-1 md:p-2 rounded-md text-blue-200 hover:text-white hover:bg-blue-800"
//                 aria-expanded={isOpen}
//                 aria-label="Main menu"
//               >
//                 <span className="sr-only">Open main menu</span>
//                 {!isOpen ? (
//                   <svg className="block h-5 w-5 md:h-6 md:w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                   </svg>
//                 ) : (
//                   <svg className="block h-5 w-5 md:h-6 md:w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {isOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 bg-blue-800/90 backdrop-blur-md border-t border-blue-400/30">
//             <Link to="/" className={`block px-3 py-2 rounded-md text-sm font-medium ${isActive('/')} hover:text-white hover:bg-blue-900`}>
//               Home
//             </Link>
//             <Link to="/services" className={`block px-3 py-2 rounded-md text-sm font-medium ${isActive('/services')} hover:text-white hover:bg-blue-900`}>
//               Services
//             </Link>
//             <Link to="/about" className={`block px-3 py-2 rounded-md text-sm font-medium ${isActive('/about')} hover:text-white hover:bg-blue-900`}>
//               About
//             </Link>
//             <Link to="/contact" className={`block px-3 py-2 rounded-md text-sm font-medium ${isActive('/contact')} hover:text-white hover:bg-blue-900`}>
//               Contact
//             </Link>
//           </div>
//         </div>
//       )}

//       {/* Bottom neon border */}
//       <div className="h-1 md:h-1.5 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 shadow-lg shadow-blue-400/50 rounded-b-md"></div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DarkModeBtn from './DarkModeBtn';
import { ThemeProvider } from '../context/theme';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(() => {
    const isDark = localStorage.getItem("darkMode");
    return isDark === "true";
  });

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());

    const bodyEl = document.body;
    if (bodyEl) {
      if (darkMode) {
        bodyEl.classList.add("dark");
      } else {
        bodyEl.classList.remove("dark");
      }
    }
  }, [darkMode]);

  // Check screen size for responsive behavior
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setIsProfileOpen(false);
    }
  };

  // Toggle profile dropdown
  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
    if (isMobile && isOpen) {
      setIsOpen(false);
    }
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setIsProfileOpen(false);
  }, [location.pathname]);

  // Check if link is active
  const isActive = (path) => {
    return location.pathname === path ? "text-blue-300 font-medium" : "text-blue-100 dark:text-blue-100";
  };

  return (
    <ThemeProvider value={{ darkMode, toggleDarkMode }}>
      <nav className={`sticky top-0 z-50 ${darkMode ? 'bg-gray-900' : 'bg-white'} text-${darkMode ? 'white' : 'gray-800'} shadow-lg border-2 ${darkMode ? 'border-blue-400/30' : 'border-blue-300/50'} rounded-b-lg transition-colors duration-300`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="font-serif text-xl md:text-3xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
                Aquarius RO
              </Link>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-6 md:space-x-10">
                <Link to="/" className={`${isActive('/')} hover:text-blue-500 transition duration-300 text-sm md:text-base ${darkMode ? 'text-blue-100' : 'text-blue-700'}`}>Home</Link>
                <Link to="/services" className={`${isActive('/services')} hover:text-blue-500 transition duration-300 text-sm md:text-base ${darkMode ? 'text-blue-100' : 'text-blue-700'}`}>Services</Link>
                <Link to="/about" className={`${isActive('/about')} hover:text-blue-500 transition duration-300 text-sm md:text-base ${darkMode ? 'text-blue-100' : 'text-blue-700'}`}>About</Link>
                <Link to="/contact" className={`${isActive('/contact')} hover:text-blue-500 transition duration-300 text-sm md:text-base ${darkMode ? 'text-blue-100' : 'text-blue-700'}`}>Contact</Link>
              </div>
            </div>

            {/* Right Side - Theme Toggle & Profile */}
            <div className="flex items-center space-x-2 md:space-x-4">
              {/* Theme Switch */}
              <div className="pt-1">
                <DarkModeBtn />
              </div>

              {/* Profile Dropdown */}
              <div className="relative">
                <button 
                  onClick={toggleProfile}
                  className={`flex items-center p-1 md:p-2 rounded-full ${darkMode ? 'hover:bg-blue-800' : 'hover:bg-blue-100'} transition duration-300`}
                  aria-expanded={isProfileOpen}
                  aria-label="Profile menu"
                >
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold text-sm md:text-base">
                    AR
                  </div>
                </button>

                {isProfileOpen && (
                  <div className={`absolute right-0 mt-2 w-40 md:w-48 ${darkMode ? 'bg-blue-800/90' : 'bg-white'} backdrop-blur-md rounded-md shadow-lg py-1 z-20 border ${darkMode ? 'border-blue-400/30' : 'border-gray-200'}`}>
                    <Link to="/profile" className={`block px-4 py-2 text-xs md:text-sm ${darkMode ? 'text-blue-100 hover:bg-blue-700 hover:text-white' : 'text-blue-700 hover:bg-blue-50'}`}>
                      View Profile
                    </Link>
                    <Link to="/logout" className={`block px-4 py-2 text-xs md:text-sm ${darkMode ? 'text-blue-100 hover:bg-blue-700 hover:text-white' : 'text-blue-700 hover:bg-blue-50'}`}>
                      Logout
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Menu Button */}
              <div className="flex md:hidden">
                <button
                  onClick={toggleMenu}
                  className={`inline-flex items-center justify-center p-1 md:p-2 rounded-md ${darkMode ? 'text-blue-200 hover:text-white hover:bg-blue-800' : 'text-blue-700 hover:text-blue-900 hover:bg-blue-100'}`}
                  aria-expanded={isOpen}
                  aria-label="Main menu"
                >
                  <span className="sr-only">Open main menu</span>
                  {!isOpen ? (
                    <svg className="block h-5 w-5 md:h-6 md:w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  ) : (
                    <svg className="block h-5 w-5 md:h-6 md:w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 ${darkMode ? 'bg-blue-800/90' : 'bg-white'} backdrop-blur-md border-t ${darkMode ? 'border-blue-400/30' : 'border-gray-200'}`}>
              <Link to="/" className={`block px-3 py-2 rounded-md text-sm font-medium ${isActive('/')} ${darkMode ? 'hover:text-white hover:bg-blue-900' : 'hover:text-blue-700 hover:bg-blue-50'}`}>
                Home
              </Link>
              <Link to="/services" className={`block px-3 py-2 rounded-md text-sm font-medium ${isActive('/services')} ${darkMode ? 'hover:text-white hover:bg-blue-900' : 'hover:text-blue-700 hover:bg-blue-50'}`}>
                Services
              </Link>
              <Link to="/about" className={`block px-3 py-2 rounded-md text-sm font-medium ${isActive('/about')} ${darkMode ? 'hover:text-white hover:bg-blue-900' : 'hover:text-blue-700 hover:bg-blue-50'}`}>
                About
              </Link>
              <Link to="/contact" className={`block px-3 py-2 rounded-md text-sm font-medium ${isActive('/contact')} ${darkMode ? 'hover:text-white hover:bg-blue-900' : 'hover:text-blue-700 hover:bg-blue-50'}`}>
                Contact
              </Link>
            </div>
          </div>
        )}

        {/* Bottom neon border */}
        <div className="h-1 md:h-1.5 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 shadow-lg shadow-blue-400/50 rounded-b-md"></div>
      </nav>
    </ThemeProvider>
  );
};

export default Navbar;