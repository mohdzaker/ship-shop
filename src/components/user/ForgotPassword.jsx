"use client";
import { useState } from "react";
import AuthNav from "./AuthNav";
import Link from "next/link";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const validateEmail = () => {
    if (!email) {
      setError("Email is required");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid email address");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail()) {
      // Handle password reset logic
      setSuccess("Password reset link sent to your email");
      console.log("Password reset requested for:", email);
    }
  };

  return (
    <>
      {/* Uncomment if you need authentication navigation */}
      {/* <nav>
        <AuthNav />
      </nav> */}
      <main className="w-full min-h-screen bg-gray-100 flex justify-center items-center py-8">
        <div id="form" className="bg-white rounded-lg border border-green-600 shadow-lg p-12 max-w-md w-full">
          <h2 className="text-3xl font-bold mb-6 text-bg-primary">Forgot Password</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
                className={`border rounded-lg py-3 px-4 w-full text-lg outline-none transition duration-300 ${
                  error ? 'border-red-600 focus:ring-red-300' : 'border-green-600 focus:ring-green-300'
                }`}
                placeholder="Enter your email"
              />
              {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
              {success && <p className="text-green-600 text-sm mt-1">{success}</p>}
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white w-full py-3 px-6 rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300"
            >
              Send Reset Link
            </button>
          </form>
          <p className="text-lg text-gray-600 mt-6 flex items-center justify-center">
            Remember your password? <Link href="/login" className="text-green-600 font-semibold hover:underline ml-2">Log in</Link>
          </p>
        </div>
      </main>
    </>
  );
};

export default ForgotPassword;
