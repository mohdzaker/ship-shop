"use client";
import { useState } from "react";
import AuthNav from "./AuthNav";
import Link from "next/link";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const { email, password } = formData;
    const newErrors = {};
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log("Form submitted", formData);
    }
  };

  const handleGoogleLogin = () => {
    // Handle Google login logic
    console.log("Google login clicked");
  };

  return (
    <>
      {/* Uncomment if you need authentication navigation */}
      {/* <nav>
        <AuthNav />
      </nav> */}
      <main className="w-full min-h-screen bg-gray-100 flex justify-center items-center py-8">
        <div id="form" className="bg-white rounded-lg border border-green-600 shadow-lg p-12 max-w-md w-full">
          <h2 className="text-3xl font-bold mb-6 text-bg-primary">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`border rounded-lg py-3 px-4 w-full text-lg outline-none transition duration-300 ${
                  errors.email ? 'border-red-600 focus:ring-red-300' : 'border-green-600 focus:ring-green-300'
                }`}
                placeholder="Enter your email"
              />
              {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`border rounded-lg py-3 px-4 w-full text-lg outline-none transition duration-300 ${
                  errors.password ? 'border-red-600 focus:ring-red-300' : 'border-green-600 focus:ring-green-300'
                }`}
                placeholder="Enter your password"
              />
              {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password}</p>}
            </div>
            <p className="text-lg text-gray-600 mt-3 mb-4 flex items-center justify-end">
            <Link href="/forgot-password" className="text-green-600 font-semibold hover:underline">Forgot Password?</Link>
          </p>
            <button
              type="submit"
              className="bg-green-600 text-white w-full py-3 px-6 rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300"
            >
              Login
            </button>
          </form>
          
          <p className="text-lg text-gray-600 mt-4 flex items-center justify-center">
            Don&apos;t have an account? <Link href="/register" className="text-green-600 font-semibold hover:underline ml-2">Register</Link>
          </p>
          <div className="flex items-center justify-center my-4">
            <hr className="border-gray-300 flex-1" />
            <span className="mx-4 text-gray-600">or</span>
            <hr className="border-gray-300 flex-1" />
          </div>
          <div className="mt-6 flex flex-col items-center">
            <button
              onClick={handleGoogleLogin}
              className="flex items-center justify-center bg-white border border-gray-300 rounded-lg shadow-md w-full max-w-xs px-6 py-3 text-sm font-medium text-gray-800 hover:bg-gray-100 transition duration-300"
            >
              <svg
                className="h-6 w-6 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
              >
                <g fill="none" fillRule="evenodd">
                  <path
                    d="M9.827 24c0-1.525.253-3.986.705-5.357L2.623 13.604C1.082 16.734.214 20.26.214 24c0 3.737.868 7.261 2.62 10.388l7.905-6.051c-.447-1.364-.797-2.82-.797-4.337z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M23.714 10.133c3.311 0 6.302 1.173 8.653 3.093l6.837-6.826c-4.165-4.97-9.506-7.21-15.556-7.21-9.287 0-17.268 5.31-21.09 13.07l7.909 5.94c2.822-5.431 8.017-9.41 14.24-9.41z"
                    fill="#EB4335"
                  />
                  <path
                    d="M23.714 37.867c-5.183 0-9.378-4.978-10.2-9.51l-7.909 6.038c4.821 7.76 12.802 13.08 21.09 13.08 5.796 0 11.269-1.994 15.126-5.807l-7.507-5.804c-2.089 1.696-4.722 2.827-7.88 2.827z"
                    fill="#34A853"
                  />
                  <path
                    d="M46.145 24c0-2.387-.665-4.85-1.825-6.944l-22.344.001v9.066h12.606c-.633 3.091-2.348 5.48-4.85 7.245l7.507 5.804c3.553-3.904 5.928-9.111 5.928-15.172z"
                    fill="#4285F4"
                  />
                </g>
              </svg>
              <span className="font-medium">Continue with Google</span>
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
