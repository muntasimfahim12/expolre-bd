import React from "react";

const NotFound404 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-100 text-yellow-800">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-xl mb-2">Page Not Found 😢</p>
      <a
        href="/"
        className="mt-4 px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
      >
        Go Home
      </a>
    </div>
  );
};

export default NotFound404;
