// src/components/CelebrationLogin.jsx
import React from "react";

const CelebrationLogin = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side */}
      <div className="md:w-1/2 w-full relative">
        <img
          src="https://images.unsplash.com/photo-1525182008055-f88b95ff7980"
          alt="login-bg"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start p-8 text-white">
          <h2 className="text-3xl font-bold mb-2">
            Join 35k+ web professionals & <br /> build your website
          </h2>
          <ul className="text-sm mt-4 space-y-2">
            <li>✅ Commercial License</li>
            <li>✅ Unlimited Exports</li>
            <li>✅ 120+ Coded Blocks</li>
            <li>✅ Design Files Included</li>
          </ul>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="md:w-1/2 w-full flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-1">Sign in to Celebration</h2>
          <p className="text-sm text-gray-500 mb-6">
            Don’t have an account?{" "}
            <span className="text-blue-600 hover:underline cursor-pointer">
              Create a free account
            </span>
          </p>

          {/* Email */}
          <div className="mb-4">
            <input
              type="email"
              placeholder="Enter email to get started"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <label>Password</label>
              <span className="text-blue-600 hover:underline cursor-pointer">
                Forgot password?
              </span>
            </div>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Login Button */}
          <button className="w-full py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-md font-medium mb-4">
            Log in
          </button>

          {/* Social Buttons */}
          <button className="w-full py-2 border border-gray-300 rounded-md flex items-center justify-center gap-2 mb-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
              alt="google"
              className="w-5 h-5"
            />
            Sign in with Google
          </button>

          <button className="w-full py-2 border border-gray-300 rounded-md flex items-center justify-center gap-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/145/145802.png"
              alt="facebook"
              className="w-5 h-5"
            />
            Sign in with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default CelebrationLogin;
