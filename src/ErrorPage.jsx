import React from 'react';
import { Link } from 'react-router-dom';
import { IoHomeOutline } from 'react-icons/io5';


const ErrorPage = ({ code = 404, message = "পৃষ্ঠাটি পাওয়া যায়নি" }) => {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center p-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-white/90 shadow-xl rounded-xl p-12 max-w-lg text-center backdrop-blur-sm">
        <h1 className="text-6xl font-extrabold text-blue-700 mb-4">{code}</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">{message}</h2>
        <p className="text-gray-700 mb-8">
          হয়তো আপনি ভুল লিঙ্কে এসেছেন, অথবা পৃষ্ঠাটি সরানো হয়েছে।
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          <IoHomeOutline size={20} /> হোমপেজে ফিরে যান
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
