import HeritageLayout from "../components/HeritageLayout";
import { useState } from "react";
import { FiCheck, FiX, FiEye, FiUser, FiPackage, FiBarChart2 } from "react-icons/fi";

const Admin = () => {
  const [pendingItems, setPendingItems] = useState([
    { id: 1, title: "Traditional Dance Video", user: "User1", date: "2025-01-08", category: "Video" },
    { id: 2, title: "Ancient Manuscript Scan", user: "User2", date: "2025-01-07", category: "Document" },
    { id: 3, title: "Cultural Recipe Collection", user: "User3", date: "2025-01-06", category: "Text" },
    { id: 4, title: "Traditional Music Recording", user: "User4", date: "2025-01-05", category: "Audio" },
  ]);

  const [users, setUsers] = useState([
    { id: 1, name: "Amanuel", email: "amanuel@example.com", role: "contributor", status: "active" },
    { id: 2, name: "Ezana", email: "ezana@example.com", role: "viewer", status: "active" },
    { id: 3, name: "Fenet", email: "fenet@example.com", role: "admin", status: "active" },
    { id: 4, name: "Fiker", email: "fiker@example.com", role: "contributor", status: "suspended" },
  ]);

  const handleApprove = (id) => {
    setPendingItems(pendingItems.filter(item => item.id !== id));
    alert(`Item ${id} approved successfully!`);
  };

  const handleReject = (id) => {
    setPendingItems(pendingItems.filter(item => item.id !== id));
    alert(`Item ${id} rejected.`);
  };

  const handleRoleChange = (userId, newRole) => {
    setUsers(users.map(user =>
      user.id === userId ? { ...user, role: newRole } : user
    ));
  };

  return (
    <HeritageLayout>
      <div className="container mx-auto px-6 py-8">
        {/* Admin Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Administration Panel</h1>
          <p className="text-gray-600">Manage users, content, and system settings</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Pending Items</p>
                <p className="text-3xl font-bold text-yellow-600 mt-1">{pendingItems.length}</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <FiPackage className="text-yellow-600 text-xl" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Users</p>
                <p className="text-3xl font-bold text-blue-600 mt-1">{users.length}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <FiUser className="text-blue-600 text-xl" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Approved Items</p>
                <p className="text-3xl font-bold text-green-600 mt-1">142</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <FiCheck className="text-green-600 text-xl" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">System Health</p>
                <p className="text-3xl font-bold text-purple-600 mt-1">98%</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <FiBarChart2 className="text-purple-600 text-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pending Items */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Pending Approval</h2>

            {pendingItems.length === 0 ? (
              <p className="text-gray-500 text-center py-8">
                No pending items for review.
              </p>
            ) : (
              <div className="space-y-4">
                {pendingItems.map(item => (
                  <div
                    key={item.id}
                    className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-gray-800">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Submitted by {item.user} • {item.date} • {item.category}
                        </p>
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={() => handleApprove(item.id)}
                          className="p-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200"
                        >
                          <FiCheck />
                        </button>

                        <button
                          onClick={() => handleReject(item.id)}
                          className="p-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200"
                        >
                          <FiX />
                        </button>

                        <button
                          className="p-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200"
                        >
                          <FiEye />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* User Management */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">User Management</h2>

            <div className="space-y-4">
              {users.map(user => (
                <div
                  key={user.id}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-gray-800">{user.name}</h3>
                      <p className="text-sm text-gray-600">{user.email}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${
                            user.status === "active"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {user.status}
                        </span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          {user.role}
                        </span>
                      </div>
                    </div>

                    <select
                      value={user.role}
                      onChange={(e) =>
                        handleRoleChange(user.id, e.target.value)
                      }
                      className="p-2 border border-gray-300 rounded-lg text-sm"
                    >
                      <option value="viewer">Viewer</option>
                      <option value="contributor">Contributor</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>
                </div>
              ))}
            </div>

            {/* Add User */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <button className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-400 hover:text-blue-600 transition">
                + Add New User
              </button>
            </div>
          </div>
        </div>

        {/* System Actions */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            System Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="p-4 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 text-left">
              <h3 className="font-semibold">Run Backup</h3>
              <p className="text-sm mt-1">Create system backup</p>
            </button>

            <button className="p-4 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 text-left">
              <h3 className="font-semibold">Generate Reports</h3>
              <p className="text-sm mt-1">Create usage statistics</p>
            </button>

            <button className="p-4 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 text-left">
              <h3 className="font-semibold">System Logs</h3>
              <p className="text-sm mt-1">View system activity</p>
            </button>
          </div>
        </div>
      </div>
    </HeritageLayout>
  );
};

export default Admin;

