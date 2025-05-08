"use client";
import { useState } from "react";
import { FaUser, FaEnvelope, FaWhatsapp, FaInstagram, FaEnvelopeOpen } from "react-icons/fa";
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'SUCCESS' | 'ERROR' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        setStatus('SUCCESS');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setStatus('ERROR');
      });
  };

  const closeModal = () => {
    setStatus(null);
  };

  return (
    <section id="contact" className="bg-gradient-to-r from-[#0B57B5] to-[#06346B] text-white rounded-3xl p-10 max-w-6xl mx-auto my-12 shadow-2xl w-[95%]">
      <h2 className="text-3xl md:text-[48px] font-bold text-center mb-2 mt-3">Let’s Build Something Together</h2>
      <p className="text-center font-normal text-[20px] mb-8">Contact us for a free consultation and quote</p>

      <div className="grid md:grid-cols-2 gap-8 py-10">
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
              className="w-full pl-10 pr-4 py-3 rounded-[20px] border border-white bg-transparent placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
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
              className="w-full pl-10 pr-4 py-3 rounded-[20px] border border-white bg-transparent placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
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
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-lg">Address</h4>
            <p>Somewhere in the world</p>
          </div>
          <div className="border-t border-white/30 pt-4 flex flex-col gap-2">
            <h4 className="font-semibold text-lg">Contact</h4>
            <p>+234-343-343-232</p>
          </div>
          <div className="border-t border-white/30 pt-4 flex flex-col gap-2">
            <h4 className="font-semibold text-lg">Services</h4>
            <p>Top-tier solar equipment from trusted manufacturers</p>
          </div>
          <div className="border-t border-white/30 pt-4">
            <h4 className="font-semibold text-lg mb-2">Socials</h4>
            <div className="flex space-x-4 text-2xl">
              <FaWhatsapp className="hover:text-green-400 cursor-pointer" />
              <FaInstagram className="hover:text-pink-400 cursor-pointer" />
              <FaEnvelopeOpen className="hover:text-yellow-300 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Modal */}
      {status && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-xl">
            <h3 className={`text-2xl font-bold mb-4 ${status === 'SUCCESS' ? 'text-green-600' : 'text-red-600'}`}>
              {status === 'SUCCESS' ? 'Message Sent!' : 'Error'}
            </h3>
            <p className="text-gray-700 mb-6">
              {status === 'SUCCESS'
                ? 'Your message has been sent successfully. We will get back to you soon.'
                : 'Something went wrong while sending your message. Please try again.'}
            </p>
            <button
              onClick={closeModal}
              className="px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
