import React, { useState } from "react";

const initialState = {
  name: "",
  study: "",
  interests: "",
  experience: "",
  goals: "",
};

const RecommendForm = () => {
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send form data to your backend or recommendation API
    alert("Form submitted! (Demo only)\n" + JSON.stringify(form, null, 2));
  };

  return (
    <section className="flex justify-center items-center min-h-[60vh] py-10 px-4 bg-gradient-to-br from-indigo-50 to-blue-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white rounded-3xl shadow-xl border border-blue-100 p-8 flex flex-col gap-6"
      >
        <h2 className="text-2xl font-bold text-blue-700 mb-2 text-center">
          Get Your Personalized Course Recommendation
        </h2>
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            className="rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Your name"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="study" className="font-medium text-gray-700">
            Field of Study
          </label>
          <input
            id="study"
            name="study"
            type="text"
            required
            value={form.study}
            onChange={handleChange}
            className="rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="e.g. Computer Science, Business, etc."
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="interests" className="font-medium text-gray-700">
            Interests
          </label>
          <input
            id="interests"
            name="interests"
            type="text"
            value={form.interests}
            onChange={handleChange}
            className="rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="e.g. AI, Data Science, Web Development"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="experience" className="font-medium text-gray-700">
            Prior Experience (optional)
          </label>
          <input
            id="experience"
            name="experience"
            type="text"
            value={form.experience}
            onChange={handleChange}
            className="rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="e.g. Beginner, Intermediate, Advanced"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="goals" className="font-medium text-gray-700">
            Learning Goals
          </label>
          <textarea
            id="goals"
            name="goals"
            rows={3}
            value={form.goals}
            onChange={handleChange}
            className="rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="What do you want to achieve?"
          />
        </div>
        <button
          type="submit"
          className="w-full mt-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 rounded-xl shadow hover:scale-105 hover:from-blue-600 hover:to-indigo-700 transition-all"
        >
          Submit & Get Recommendation
        </button>
      </form>
    </section>
  );
};

export default RecommendForm;
