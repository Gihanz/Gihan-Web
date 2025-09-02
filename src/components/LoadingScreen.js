import React from "react";

function LoadingScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-800">
      <div className="relative flex items-center justify-center">
        {/* Profile Image */}
        <img
          src="favicon.ico" // replace with your profile image path
          alt="Profile"
          className="h-24 w-24 rounded-full object-cover z-10"
        />

        {/* Spinning Ring */}
        <div className="absolute animate-spin rounded-full h-32 w-32 border-4 border-blue-500 border-t-transparent"></div>
      </div>

      {/* Loading Text */}
      <p className="mt-6 text-lg font-medium text-gray-700 dark:text-gray-200">
        Loading...
      </p>
    </div>
  );
}

export default LoadingScreen;
