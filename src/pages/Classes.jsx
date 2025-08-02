import React from 'react';
import { classes } from '../data/classes';
import Header from '../components/Header';
import Footer from '../components/Footer';

const levelColors = {
  'Beginner': 'bg-green-100 text-green-800',
  'Intermediate': 'bg-yellow-100 text-yellow-800',
  'All Levels': 'bg-blue-100 text-blue-800',
};

const ClassesPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-[#e0f2fe] via-[#e0e7ff] to-[#ede9fe] text-gray-800">
    <Header/>
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-extrabold text-center text-[#2f3e46] mb-10 tracking-tight">
        Yoga Classes
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
        {classes.map((cls, idx) => (
          <div
            key={idx}
            className="group bg-white rounded-2xl shadow-xl border border-gray-200 p-6 flex flex-col transition-transform hover:-translate-y-1 hover:shadow-2xl hover:border-purple-300"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-700 text-2xl shadow">
                <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="#8b5cf6" strokeWidth="2" />
                  <path
                    d="M7 13l3 3 7-7"
                    stroke="#8b5cf6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <h2 className="text-xl font-bold text-purple-700 group-hover:text-purple-900 transition">
                  {cls.name}
                </h2>
                <span
                  className={`inline-block mt-1 px-2 py-0.5 rounded text-xs font-semibold ${levelColors[cls.level] || 'bg-gray-100 text-gray-700'}`}
                >
                  {cls.level}
                </span>
              </div>
            </div>
            <div className="text-gray-600 text-sm mb-2">
              <span className="font-semibold text-gray-700">Schedule:</span> {cls.schedule}
            </div>
            <p className="text-gray-700 flex-1 mb-4">{cls.description}</p>
            <button className="mt-auto w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white font-semibold px-6 py-2 rounded-xl shadow hover:scale-105 transition">
              Book Trial
            </button>
          </div>
        ))}
      </div>

      {/* Video Section */}
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">
          Try a Sample Yoga Video
        </h2>
        <p className="mb-6 text-gray-700 text-center">
          Follow along with this beginner-friendly yoga session to get a feel for our teaching style and class atmosphere.
        </p>
        <div className="aspect-w-16 aspect-h-9 mb-6">
          <iframe
            className="w-full h-72 md:h-96 rounded-xl shadow-lg border border-gray-200"
            src="https://www.youtube.com/embed/v7AYKMP6rOE"
            title="Sample Yoga Class"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="text-center text-gray-500 text-sm">
          Want more? Join our classes for a full experience!
        </div>
      </div>
    </div>
    <Footer/>
  </div>
);

export default ClassesPage;
