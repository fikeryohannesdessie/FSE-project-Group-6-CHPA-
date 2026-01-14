import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiLogOut, FiMoon, FiSun } from "react-icons/fi";
import LanguageSwitcher from "../components/LanguageSwitcher";
import Footer from "../components/Footer";

// PATCH: real logged-in user
const storedUser = JSON.parse(localStorage.getItem("user"));

const currentUser = storedUser
  ? {
      ...storedUser,
      name:
        storedUser.name ||
        storedUser.username ||
        storedUser.email ||
        "User",
      role: storedUser.role || "viewer",
    }
  : {
      name: "Guest User",
      role: "viewer",
    };


const HeritageLayout = ({ children }) => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const dropdownRef = useRef(null);

  /*  Active Route  */
  const isActive = (path) => location.pathname === path;

  /*Role Based menu */
  const navLinks = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Upload", path: "/upload" },
    { name: "Search", path: "/search" },
    { name: "Profile", path: "/profile" },
    ...(currentUser.role === "admin"
      ? [{ name: "Admin", path: "/admin" }]
      : []),
  ];

  /*  Initials  */
 const initials = (currentUser.name || "U")
  .split(" ")
  .map((n) => n[0])
  .join("");




  /* ------------------ Click Outside Close ------------------ */
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setUserOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", ha
  /* ------------------ Dark Mode ------------------ */
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900" : "bg-heritage-beige"}`}>
      <div className="pattern-top-heritage"></div>

      {/* Navbar */}
      <nav className="bg-white dark:bg-gray-900 border-b border-heritage-border dark:border-gray-700 shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link to="/dashboard" className="flex items-center gap-2">
            <div className="logo-heritage">
              <span className="logo-text-heritage">CH</span>
            </div>
            <span className="text-heritage-text dark:text-gray-200 font-semibold hidden sm:block">
              Cultural Heritage
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-6 items-center">

            {/* 🌍 Language Switcher */}
            <LanguageSwitcher />

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-medium transition ${
                  isActive(link.path)
                    ? "text-heritage-primary-brown"
                    : "text-heritage-text dark:text-gray-300 hover:text-heritage-primary-brown"
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-heritage-primary-brown rounded"></span>
                )}
              </Link>
            ))}

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-xl text-heritage-text dark:text-gray-300"
            >
              {darkMode ? <FiSun /> : <FiMoon />}
            </button>

            {/* User Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setUserOpen(!userOpen)}
                className="w-9 h-9 rounded-full bg-heritage-primary-brown text-white flex items-center justify-center font-semibold"
              >
                {initials}
              </button>

              {userOpen && (
                <div className="absolute right-0 mt-3 w-44 bg-white dark:bg-gray-800 border border-heritage-border dark:border-gray-700 rounded-lg shadow-lg overflow-hidden">
                  <Link
                    to="/profile"
                    onClick={() => setUserOpen(false)}
                    className="block px-4 py-3 text-sm hover:bg-heritage-beige dark:hover:bg-gray-700"
                  >
                    Profile
                  </Link>

                  <button
                   
                    onClick={() => {
   setUserOpen(false);
  localStorage.removeItem("user");
  window.location.href = "/login";
}}
                    className="w-full text-left px-4 py-3 text-sm hover:bg-heritage-beige dark:hover:bg-gray-700"
                  >
                    <div className="flex items-center gap-2">
                      <FiLogOut /> Logout
                    </div>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-2xl text-heritage-text dark:text-gray-200"
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu (Animated) */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          } bg-white dark:bg-gray-900 border-t border-heritage-border dark:border-gray-700`}
        >
          <div className="px-4 py-4 space-y-3">

            {/* 🌍 Mobile Language Switcher */}
            <div className="pb-3">
              <LanguageSwitcher />
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`block font-medium ${
                  isActive(link.path)
                    ? "text-heritage-primary-brown"
                    : "text-heritage-text dark:text-gray-300"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="border-t border-heritage-border dark:border-gray-700 pt-3 flex items-center justify-between">
              <span className="text-sm text-gray-500">{currentUser.name}</span>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="text-xl text-heritage-text dark:text-gray-300"
              >
                {darkMode ? <FiSun /> : <FiMoon />}
              </button>
            </div>

            <button
              onClick={() => {
  localStorage.removeItem("user");
  window.location.href = "/login";
}}

              className="w-full text-left text-sm text-red-600 pt-2"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="min-h-[calc(100vh-96px)] px-4 py-6">
        {children}
      </main>

      <Footer />
    
     <div className="pattern-bottom-heritage"></div>

    </div>
  );
};

export default HeritageLayout;





