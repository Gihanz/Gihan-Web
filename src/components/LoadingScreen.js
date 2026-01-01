import React from "react";

function LoadingScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-800">
      <div className="relative flex items-center justify-center">
        {/* Profile Image */}
        <img
          src="gs_loading.gif"
          alt="Profile"
          className="h-24 w-24 object-contain z-10"
        />

        {/* Spinning Ring */}
        <div className="absolute animate-spin rounded-full h-44 w-44 border-4 border-gray-500 border-t-transparent"></div>
      </div>

      {/* Loading Text */}
      <p className="mt-20 text-xl font-medium text-gray-700 dark:text-gray-200">
        Loading...
      </p>
    </div>
  );
}

export default LoadingScreen;
