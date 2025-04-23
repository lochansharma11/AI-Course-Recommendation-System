import React from "react";

const HeroSection = () => (
  <section className="flex-1 flex items-center justify-center py-16 px-4 bg-gradient-to-br from-blue-100/60 to-indigo-100/60">
    <div className="max-w-2xl w-full text-center p-8 bg-white/80 rounded-3xl shadow-xl border border-blue-100">
      <h1 className="text-xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
        Personalized Course Recommendations{" "}
        <span className="text-blue-600">Powered by AI</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-700 mb-8">
        Get personalized course suggestions based on your skills and interests.
      </p>
      <a
        href="https://lochansharma11-course-recommendation-system-main-av6vo6.streamlit.app/"
        className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-xl shadow-lg font-semibold text-lg hover:scale-105 hover:from-blue-600 hover:to-indigo-700 transition-all"
      >
        Get Recommended Courses
      </a>
    </div>
  </section>
);

export default HeroSection;
