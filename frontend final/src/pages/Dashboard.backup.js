import { Link } from "react-router-dom";
import { FiUpload, FiSearch, FiBookmark, FiUsers, FiHome, FiUser } from "react-icons/fi";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
    <span className="text-white font-bold text-xl">CH</span>
  </div>
  <div>
    <h1 className="text-xl font-bold text-gray-800">Cultural Heritage</h1>
    <p className="text-xs text-gray-600">Preservation Archive</p>
  </div>
</div>
            
            <div className="flex items-center space-x-6">
              <Link to="/dashboard" className="flex items-center gap-2 text-blue-600 font-medium">
                <FiHome /> Dashboard
              </Link>
              <Link to="/search" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
                <FiSearch /> Search
              </Link>
              <Link to="/upload" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
                <FiUpload /> Upload
              </Link>
              <Link to="/admin" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
                <FiUsers /> Admin
              </Link>
              <Link to="/profile" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
                <FiUser /> Profile
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome to Cultural Heritage Archive</h1>
          <p className="text-gray-600 mt-2">Preserving and showcasing Ethiopia's rich cultural heritage</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Items</p>
                <p className="text-3xl font-bold text-blue-600 mt-1">156</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <FiHome className="text-blue-600 text-xl" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Your Uploads</p>
                <p className="text-3xl font-bold text-green-600 mt-1">24</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <FiUpload className="text-green-600 text-xl" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Bookmarks</p>
                <p className="text-3xl font-bold text-purple-600 mt-1">12</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <FiBookmark className="text-purple-600 text-xl" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Pending Approval</p>
                <p className="text-3xl font-bold text-yellow-600 mt-1">3</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <FiUsers className="text-yellow-600 text-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Recent Items Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Recently Added Cultural Items</h2>
            <Link to="/search" className="text-blue-600 hover:underline font-medium">
              View all items →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Item 1 */}
            <div className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg mb-4"></div>
              <h3 className="font-semibold text-lg text-gray-800">Traditional Coffee Ceremony</h3>
              <p className="text-gray-600 text-sm mt-2">Ethiopian traditional coffee preparation ritual with cultural significance.</p>
              <div className="flex justify-between items-center mt-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Ritual</span>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">View Details</button>
              </div>
            </div>

            {/* Item 2 */}
            <div className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition">
              <div className="h-48 bg-gradient-to-br from-green-100 to-teal-100 rounded-lg mb-4"></div>
              <h3 className="font-semibold text-lg text-gray-800">Geez Manuscript</h3>
              <p className="text-gray-600 text-sm mt-2">Ancient religious manuscript written in Geez script from Axum.</p>
              <div className="flex justify-between items-center mt-4">
                <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Manuscript</span>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">View Details</button>
              </div>
            </div>

            {/* Item 3 */}
            <div className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition">
              <div className="h-48 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg mb-4"></div>
              <h3 className="font-semibold text-lg text-gray-800">Traditional Music</h3>
              <p className="text-gray-600 text-sm mt-2">Recordings of traditional Ethiopian instrumental music and songs.</p>
              <div className="flex justify-between items-center mt-4">
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Music</span>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">View Details</button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <FiUpload /> Quick Upload
            </h3>
            <p className="text-gray-600 mb-4">Upload new cultural heritage items easily.</p>
            <Link to="/upload" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Upload New Item
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <FiSearch /> Advanced Search
            </h3>
            <p className="text-gray-600 mb-4">Search through thousands of cultural heritage items.</p>
            <Link to="/search" className="inline-block bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
              Search Archive
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-lg">Cultural Heritage Preservation Archive © 2025</p>
            <p className="text-gray-400 mt-2">Preserving Ethiopia's Cultural Heritage for Future Generations</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;



