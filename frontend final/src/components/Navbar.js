import { Link } from "react-router-dom";
import { FiHome, FiUpload, FiSearch, FiUser, FiUsers, FiLogOut } from "react-icons/fi";
import LanguageSwitcher from "../components/LanguageSwitcher";

const Navbar = () => {
  // Mock user for now - will connect to auth later
  const user = { name: "User", role: "contributor" };
  
  return (
    <nav className="bg-white shadow-lg border-b border-amber-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link to="/dashboard" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-800 to-amber-600 rounded-lg flex items-center justify-center shadow">
                <span className="text-white font-bold text-xl">CH</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">
                  Cultural Heritage
                </h1>
                <p className="text-xs text-amber-700">
                  Preservation Archive
                </p>
              </div>
            </Link>
          </div>
          
          {/* Navigation Links */}
          <div className="flex items-center space-x-6">

            {/* 🌍 Language Switcher */}
          <div className="bg-red-200 px-3 py-1">LANG TEST</div>


            <Link
              to="/dashboard"
              className="flex items-center gap-2 text-gray-700 hover:text-amber-700"
            >
              <FiHome /> Dashboard
            </Link>

            <Link
              to="/search"
              className="flex items-center gap-2 text-gray-700 hover:text-amber-700"
            >
              <FiSearch /> Search
            </Link>

            <Link
              to="/upload"
              className="flex items-center gap-2 text-gray-700 hover:text-amber-700"
            >
              <FiUpload /> Upload
            </Link>

            {user.role === "admin" && (
              <Link
                to="/admin"
                className="flex items-center gap-2 text-gray-700 hover:text-amber-700"
              >
                <FiUsers /> Admin
              </Link>
            )}

            <Link
              to="/profile"
              className="flex items-center gap-2 text-gray-700 hover:text-amber-700"
            >
              <FiUser /> Profile
            </Link>
            
            {/* User Role Badge */}
            <div className="ml-4 px-3 py-1 bg-amber-100 text-amber-800 text-sm font-medium rounded-full">
              {user.role}
            </div>
            
            {/* Logout Button */}
            <button className="flex items-center gap-2 text-gray-700 hover:text-red-600">
              <FiLogOut /> Logout
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;

