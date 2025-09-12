import React from "react";

const ErrorPage = ({ error }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-100 text-red-800">
      <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong 😢</h1>
      <p className="text-lg mb-2">{error?.statusText || error?.message || "Unknown error"}</p>
      <a
        href="/"
        className="mt-4 px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
      >
        Go Home
      </a>
    </div>
  );
};

export default ErrorPage;
