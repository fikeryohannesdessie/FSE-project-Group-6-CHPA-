import { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // simulate sending email
    setTimeout(() => {
      setSent(true);
    }, 800);
  };

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
              Forgot Password
            </h1>
            <p className="text-heritage-primary-brown">
              Enter your email to receive a reset link
            </p>
          </div>

          {!sent ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-heritage-text mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="user@example.com"
                  className="input-heritage"
                  required
                />
              </div>

              <button type="submit" className="btn-heritage w-full">
                Send Reset Link
              </button>

              <div className="text-center pt-4">
                <Link
                  to="/login"
                  className="text-heritage-primary-brown hover:underline"
                >
                  ← Back to Login
                </Link>
              </div>
            </form>
          ) : (
            <div className="text-center space-y-4">
              <p className="text-heritage-text font-medium">
                ✅ Reset link sent successfully!
              </p>
              <p className="text-sm text-heritage-primary-brown">
                Please check your email inbox.
              </p>

              <Link to="/login" className="btn-heritage w-full block text-center">
                Return to Login
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="pattern-bottom-heritage"></div>
    </div>
  );
};

export default ForgotPassword;
