import React from "react";

const AboutSection = () => (
  <section id="about" className="max-w-3xl mx-auto mt-12 px-4">
    <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-4 text-center">
        About Our Course Recommendation System
      </h2>
      <p className="text-gray-700 text-base md:text-lg leading-relaxed">
        Our AI-powered recommendation system suggests courses tailored to your learning preferences, helping you advance in the most efficient way possible. Our platform leverages artificial intelligence to analyze user behavior, past course interactions, trending skills, and academic goals to provide customized course suggestions. Whether you’re a student aiming to strengthen your academic foundation or a professional looking to upskill or pivot your career, our recommender system ensures you are always learning the right thing at the right time. With real-time updates and intuitive design, it’s like having a personal career coach in your browser.
      </p>
    </div>
  </section>
);

export default AboutSection;
