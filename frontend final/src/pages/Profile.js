import { useState } from "react";
import { FiUser, FiMail, FiKey, FiCalendar, FiUpload, FiBookmark } from "react-icons/fi";
import HeritageLayout from "../components/HeritageLayout";


const Profile = () => {
  const [user, setUser] = useState({
    name: "Amanuel Solomon",
    email: "amanuel@example.com",
    role: "Contributor",
    joinDate: "2025-01-01",
    bio: "Cultural heritage enthusiast focused on preserving Ethiopian traditions.",
    location: "Addis Ababa, Ethiopia"
  });

  const [stats, setStats] = useState({
    uploads: 24,
    approved: 18,
    pending: 3,
    bookmarks: 12
  });

  return (
    <HeritageLayout>
      <div className="max-w-6xl mx-auto">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            {/* Avatar */}
            <div className="w-32 h-32 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-lg">
              {user.name.charAt(0)}
            </div>
            
            {/* User Info */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{user.name}</h1>
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <FiMail /> {user.email}
                </div>
                <div className="flex items-center gap-2 text-amber-700 font-medium">
                  <FiUser /> {user.role}
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <FiCalendar /> Member since {user.joinDate}
                </div>
              </div>
              <p className="text-gray-700">{user.bio}</p>
              <p className="text-gray-600 mt-2">{user.location}</p>
            </div>
            
            {/* Edit Button */}
            <button className="px-6 py-2 border-2 border-amber-600 text-amber-600 rounded-lg hover:bg-amber-50 font-medium">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Uploads</p>
                <p className="text-3xl font-bold text-amber-600 mt-1">{stats.uploads}</p>
              </div>
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                <FiUpload className="text-amber-600 text-xl" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Approved Items</p>
                <p className="text-3xl font-bold text-green-600 mt-1">{stats.approved}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <FiKey className="text-green-600 text-xl" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Pending Review</p>
                <p className="text-3xl font-bold text-yellow-600 mt-1">{stats.pending}</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <FiCalendar className="text-yellow-600 text-xl" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Bookmarks</p>
                <p className="text-3xl font-bold text-purple-600 mt-1">{stats.bookmarks}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <FiBookmark className="text-purple-600 text-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Account Settings */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Account Settings</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2">Change Password</label>
                <input
                  type="password"
                  placeholder="Current Password"
                  className="w-full p-3 border border-gray-300 rounded-lg mb-3"
                />
                <input
                  type="password"
                  placeholder="New Password"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
                <button className="mt-4 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700">
                  Update Password
                </button>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2">Notification Settings</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3" defaultChecked />
                    <span>Email notifications for approvals</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3" defaultChecked />
                    <span>Weekly digest of new content</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-3" />
                    <span>Marketing communications</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Activity</h2>
            
            <div className="space-y-4">
              <div className="border-l-4 border-amber-500 pl-4 py-2">
                <p className="font-medium">Uploaded "Traditional Coffee Ceremony"</p>
                <p className="text-sm text-gray-600">2 days ago • Status: Approved</p>
              </div>
              
              <div className="border-l-4 border-yellow-500 pl-4 py-2">
                <p className="font-medium">Submitted "Geez Manuscript" for review</p>
                <p className="text-sm text-gray-600">5 days ago • Status: Pending</p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4 py-2">
                <p className="font-medium">Bookmarked "Traditional Music Collection"</p>
                <p className="text-sm text-gray-600">1 week ago</p>
              </div>
              
              <div className="border-l-4 border-amber-500 pl-4 py-2">
                <p className="font-medium">Updated profile information</p>
                <p className="text-sm text-gray-600">2 weeks ago</p>
              </div>
            </div>
            
            <button className="w-full mt-6 py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-amber-400 hover:text-amber-600">
              View All Activity
            </button>
          </div>
        </div>
      </div>
    </HeritageLayout>
  );
};

export default Profile;
