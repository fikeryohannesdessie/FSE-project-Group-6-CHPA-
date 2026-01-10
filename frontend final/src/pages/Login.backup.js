import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMail, FiLock } from "react-icons/fi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Cultural Heritage Archive
        </h1>
        <p className="text-gray-600 text-center mb-8">Preserving Ethiopia's Heritage</p>
        
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <div className="relative">
              <FiMail className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="user@example.com"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <div className="relative">
              <FiLock className="absolute left-3 top-3 text-gray-400" />
              <input
                type="password"
                className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
              />
            </div>
          </div>
          
          <button className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700">
            Login
          </button>
          
          <p className="text-center text-gray-600">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-600 hover:underline">
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
<div className="test-tailwind mb-4">
  <p>✅ TAILWIND TEST: This should be BLUE if Tailwind works!</p>
</div>