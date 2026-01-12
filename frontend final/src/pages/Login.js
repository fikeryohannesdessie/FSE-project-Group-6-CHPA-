import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff, FiLoader } from "react-icons/fi";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");

  try {
    const response = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    const data = await response.json();

    // ❌ LOGIN FAILED
    if (!response.ok) {
      setError(data.message || "Login failed");
      return;
    }

    // ✅ LOGIN SUCCESS
    console.log("Logged in user:", data.user);

    // OPTIONAL: store user (recommended)
    localStorage.setItem("user", JSON.stringify(data.user));

    // ✅ NAVIGATE
    navigate("/dashboard");

  } catch (err) {
    console.error(err);
    setError("Server error. Please try again.");
  }
};

    
  // ← THIS LINE IS CRITICAL

  return (
    <div className="min-h-screen bg-heritage-beige">
      <div className="pattern-top-heritage"></div>

      <div className="flex items-center justify-center p-4 min-h-[calc(100vh-96px)]">
        <div className="card-heritage max-w-md w-full">
          <div className="text-center mb-8">
            <div className="logo-heritage mx-auto mb-6">
              <span className="logo-text-heritage">CH</span>
            </div>
            <h1 className="text-3xl text-heritage-text mb-2">
              Cultural Heritage Archive
            </h1>
            <p className="text-heritage-primary-brown">
              Preserving Ethiopia's Heritage
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-heritage-text mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="user@example.com"
                className="input-heritage"
                required
              />
            </div>

            {/* Email Error */}
            {error && (
              <p className="text-red-600 text-sm font-medium">
                {error}
              </p>
            )}

            {/* Password */}
            <div>
              <label className="block text-heritage-text mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="input-heritage pr-12"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-heritage-primary-brown"
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-heritage-text cursor-pointer">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                Remember me
              </label>

              <Link
                to="/forgot-password"
                className="text-heritage-primary-brown hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="btn-heritage w-full flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {loading ? (
                <>
                  <FiLoader className="animate-spin" />
                  Logging in...
                </>
              ) : (
                "Log In"
              )}
            </button>

            {/* Register */}
            <div className="text-center pt-6 border-t border-heritage-border">
              <p className="text-heritage-text">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="text-heritage-primary-brown hover:underline"
                >
                  Register here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      <div className="pattern-bottom-heritage"></div>
    </div>
  );
};

export default Login;
