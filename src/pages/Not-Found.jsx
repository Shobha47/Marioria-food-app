import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-bold opacity-20">404</h1>

        <h2 className="text-2xl font-medium mb-2">Page Not Found</h2>

        <p className="mb-8 text-gray-500">
          The page you're looking for doesn't exist. Let's get you back!
        </p>

        <div className="flex gap-4 justify-center">
          <button
            onClick={handleGoBack}
            className="px-6 py-3 bg-black text-white rounded-lg"
          >
            Go Back
          </button>

          <button
            onClick={handleGoHome}
            className="px-6 py-3 border rounded-lg"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}