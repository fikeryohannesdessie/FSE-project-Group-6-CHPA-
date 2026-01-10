import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "viewer"
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    fetch("http://localhost:3001/auth/register", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    username: formData.username,
    email: formData.email,
    password: formData.password
  })
})
  .then((res) => res.json())
  .then((data) => {
    if (data.error) {
      setError(data.error);
    } else {
      alert("Registration successful! You can now log in.");
      console.log("Registered user:", data);
    }
  })
  .catch(() => {
    setError("Server error. Try again later.");
  });

    
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    
    // Simulate registration
    console.log("Registering user:", formData);
    alert("Registration successful! Please login.");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-amber-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md border border-amber-100">
        {/* Back to Login */}
        <Link to="/login" className="inline-flex items-center text-amber-700 hover:text-amber-800 mb-6">
          <FiArrowLeft className="mr-2" /> Back to Login
        </Link>
        
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-amber-800 to-amber-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow">
            <span className="text-white text-2xl font-bold">CH</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h1>
          <p className="text-gray-600">Join the Cultural Heritage Preservation Archive</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
              {error}
            </div>
          )}
          
          {/* Name */}
          <div>
            <label className="block text-gray-700 mb-2">Full Name</label>
            <div className="relative">
              <FiUser className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full pl-10 p-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                required
              />
            </div>
          </div>
          
          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-2">Email Address</label>
            <div className="relative">
              <FiMail className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="user@example.com"
                className="w-full pl-10 p-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                required
              />
            </div>
          </div>
          
          {/* Password */}
          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <div className="relative">
              <FiLock className="absolute left-3 top-3 text-gray-400" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full pl-10 p-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                required
                minLength={6}
              />
            </div>
          </div>
          
          {/* Confirm Password */}
          <div>
            <label className="block text-gray-700 mb-2">Confirm Password</label>
            <div className="relative">
              <FiLock className="absolute left-3 top-3 text-gray-400" />
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full pl-10 p-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                required
              />
            </div>
          </div>
          
          {/* Role Selection */}
          <div>
            <label className="block text-gray-700 mb-2">Account Type</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full p-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            >
              <option value="viewer">Viewer (Browse only)</option>
              <option value="contributor">Contributor (Upload content)</option>
              <option value="researcher">Researcher (Advanced access)</option>
            </select>
            <p className="text-sm text-gray-500 mt-1">
              Contributors can upload cultural heritage items for review
            </p>
          </div>
          
          {/* Terms Agreement */}
          <div className="flex items-start">
            <input
              type="checkbox"
              id="terms"
              className="mt-1 mr-3"
              required
            />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I agree to the Terms of Service and acknowledge that cultural heritage materials 
              must be uploaded with proper permissions and citations.
            </label>
          </div>
          
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-amber-700 text-white p-3 rounded-lg font-semibold hover:bg-amber-800 transition"
          >
            Create Account
          </button>
          
          <p className="text-center text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-amber-700 hover:text-amber-800 font-medium">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
