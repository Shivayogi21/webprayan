"use client";
import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <div className="relative newsletter-container font-serif">
      <h3 className="text-white text-4xl font-bold m-5 p-5">
        Subscribe to Our Newsletter
      </h3>
      <div
        className="grid lg:grid-cols-2 items-center gap-16 max-w-7xl mx-auto min-h-[350px] p-6 rounded-lg"
        style={{ background: 'linear-gradient(to right, black, #111827, #1f2937)' }}
      >
        <div>
          <p className="text-base mt-6 text-gray-300">
            Subscribe to our newsletter and stay up to date with the latest news,
            updates, and exclusive offers. Get valuable insights. Join our community today!
          </p>
          <div className="bg-transparent border border-gray-500 flex p-1 rounded-full mt-12">
            <input
              type="email"
              placeholder="Enter your email"
              className="text-gray-300 w-full outline-none bg-transparent text-sm px-4 py-3"
            />
            <button
              type="button"
              className="bg-blue-700 hover:bg-blue-800 transition-all text-white text-sm rounded-full px-6 py-3"
            >
              Submit
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Customization Icon */}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 mb-6 inline-block border border-gray-500 p-3 rounded-md"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm1 17.93V20a1 1 0 0 1-2 0v-.07a8.001 8.001 0 0 1-6.93-6.93H4a1 1 0 0 1 0-2h.07a8.001 8.001 0 0 1 6.93-6.93V4a1 1 0 0 1 2 0v.07a8.001 8.001 0 0 1 6.93 6.93H20a1 1 0 0 1 0 2h-.07a8.001 8.001 0 0 1-6.93 6.93z" />
            </svg>
            <h3 className="text-white text-xl font-semibold mb-3">Customization</h3>
            <p className="text-gray-300 text-sm">Tailor your experience to your preferences with our flexible tools.</p>
          </div>

          {/* Security Icon */}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 mb-6 inline-block border border-gray-500 p-3 rounded-md"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <h3 className="text-white text-xl font-semibold mb-3">Security</h3>
            <p className="text-gray-300 text-sm">We prioritize your privacy and secure your data with top-tier protection.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
