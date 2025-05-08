"use client";
import { useState } from "react";
import { FaUser, FaEnvelope, FaWhatsapp, FaInstagram, FaEnvelopeOpen } from "react-icons/fa";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Handle submission (API call / email / etc.)
  };

  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-3xl p-10 max-w-6xl mx-auto my-12 shadow-2xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">Let’s Build Something Together</h2>
      <p className="text-center text-lg mb-8">Contact us for a free consultation and quote</p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <FaUser className="absolute left-3 top-3.5 text-gray-400" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 rounded-full border border-white bg-transparent placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
          </div>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-3.5 text-gray-400" />
            <input
              type="email"
              name="email"
              placeholder="enter email address"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 rounded-full border border-white bg-transparent placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Type message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full p-4 rounded-2xl border border-white bg-transparent placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
            required
          />
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-white text-blue-700 font-semibold hover:bg-gray-200 transition"
          >
            Submit
          </button>
        </form>

        {/* Contact Info */}
        <div className="bg-blue-900/30 rounded-2xl p-6 space-y-6 border border-white/20">
          <div>
            <h4 className="font-semibold text-lg mb-1">Address</h4>
            <p>Somewhere in the world</p>
          </div>
          <div className="border-t border-white/30 pt-4">
            <h4 className="font-semibold text-lg mb-1">Contact</h4>
            <p>+234-343-343-232</p>
          </div>
          <div className="border-t border-white/30 pt-4">
            <h4 className="font-semibold text-lg mb-1">Address</h4>
            <p>Top-tier solar equipment from trusted manufacturers</p>
          </div>
          <div className="border-t border-white/30 pt-4">
            <h4 className="font-semibold text-lg mb-1">Socials</h4>
            <div className="flex space-x-4 mt-2 text-2xl">
              <FaWhatsapp className="hover:text-green-400 cursor-pointer" />
              <FaInstagram className="hover:text-pink-400 cursor-pointer" />
              <FaEnvelopeOpen className="hover:text-yellow-300 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
