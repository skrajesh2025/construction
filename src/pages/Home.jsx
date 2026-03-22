import React from "react";
import { motion } from "framer-motion";

const services = [
  { name: "Construction", icon: "🏗️" },
  { name: "Interior", icon: "🛋️" },
  { name: "Plumbing", icon: "🚿" },
  { name: "Waterproofing", icon: "💧" },
  { name: "Furniture", icon: "🪑" },
  { name: "Home Plan", icon: "📐" },
  { name: "Tiles", icon: "🧱" },
  { name: "Land", icon: "🌍" },
];

const works = [
  {
    title: "2BHK Interior Setup",
    location: "Awaleshpur, Varanasi",
    desc: "Modular kitchen and wardrobe setup",
    img: "/images/work1.jpg",
  },
  {
    title: "Bathroom Plumbing Work",
    location: "Metro Station , Kanpur",
    desc: "Leakage fixed and pipeline replaced",
    img: "/images/work2.jpg",
  },
  {
    title: "Terrace Waterproofing",
    location: "Pahadiya, Varanasi",
    desc: "Complete waterproof coating applied",
    img: "/images/work3.jpg",
  },
];

const testimonials = [
  {
    name: "Ramesh",
    location: "Sigra, Varanasi",
    feedback:
      "Excellent plumbing work. Problem solved quickly and within budget.",
  },
  {
    name: "Priya",
    location: "Rajapark, Jaipur",
    feedback:
      "Interior work was clean and professional. Very satisfied with the result.",
  },
  {
    name: "Suresh",
    location: "Porur, Chennai",
    feedback:
      "Waterproofing fixed our leakage issue permanently. Highly recommended.",
  },
];

export default function HomePage() {
  const phoneNumber = "+918861631211";

  const [showContact, setShowContact] = React.useState(false);
  const [showCallModal, setShowCallModal] = React.useState(false);

  const handleCall = () => setShowCallModal(true);

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber.replace("+", "")}`, "_blank");
  };

  const copyNumber = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* NAVBAR */}
    <header className="flex items-center justify-between px-6 md:px-10 py-4 shadow-sm sticky top-0 bg-white z-50">

        {/* LEFT: LOGO + BRAND */}
        <div className="flex items-center gap-4">
            
            {/* LOGO */}
            <img
            src="/images/logo.png"
            alt="RK Infrastructure Logo"
            className="w-14 h-14 md:w-16 md:h-16 object-contain rounded-lg shadow-md border"
            onError={(e) =>
                (e.target.src = "https://via.placeholder.com/80")
            }
            />

            {/* BRAND TEXT */}
            <div className="leading-tight">
            <h1 className="text-lg md:text-xl font-bold text-gray-900">
                RK Infrastructure
            </h1>
            <p className="text-xs md:text-sm text-gray-500">
                Construction • Interior • Plumbing
            </p>
            </div>

        </div>

        {/* RIGHT SIDE CTA */}
         {/* <button
            onClick={() => setShowContact(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm md:text-base font-medium shadow-md transition"
        >
            Contact Us
        </button> */}

        </header>
      {/* HERO */}
        <section className="relative py-24 text-center text-white overflow-hidden">

        {/* 🔹 GRADIENT BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-600 to-green-500"></div>

        {/* 🔹 SOFT GLOW EFFECT (Premium Touch) */}
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-120px] right-[-100px] w-[300px] h-[300px] bg-white/10 rounded-full blur-3xl"></div>

        {/* 🔹 CONTENT */}
        <div className="relative z-10 max-w-4xl mx-auto px-6">
            
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Complete Home Services for Your Family
            </h1>

            <p className="mt-4 text-gray-200 text-lg">
            Construction • Interior • Plumbing • Waterproofing
            </p>

            {/* 🔹 CTA BUTTONS */}
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            
            <button
                onClick={handleCall}
                className="bg-white text-blue-700 px-6 py-3 rounded-xl text-lg font-semibold shadow-xl hover:scale-105 transition"
            >
                📞 Call Now
            </button>

            <button
                onClick={handleWhatsApp}
                className="bg-black/20 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-black/30 transition"
            >
                💬 WhatsApp
            </button>

            </div>

        </div>
        </section>
      {/* SERVICES */}
     <section className="py-16">
        <h2 className="text-2xl font-bold text-center mb-8">
            Services for You
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
            {services.map((s, i) => (
            <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-2xl text-center shadow hover:shadow-lg transition cursor-pointer"
            >
                {/* ICON */}
                <div className="text-4xl mb-3">{s.icon}</div>

                {/* TEXT */}
                <p className="font-medium">{s.name}</p>
            </motion.div>
            ))}
        </div>
      </section>

      {/* WORKS */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-10">
          Our Recent Work
        </h2>

        <div className="grid md:grid-cols-3 gap-6 px-6">
          {works.map((w, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl shadow overflow-hidden"
            >
              <img
                src={w.img}
                alt={w.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold text-lg">{w.title}</h3>
                <p className="text-sm text-gray-500">📍 {w.location}</p>
                <p className="text-sm mt-2">{w.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16">
        <h2 className="text-2xl font-bold text-center mb-10">
          What Our Customers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-6 px-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-6 shadow rounded-xl"
            >
              <p className="text-gray-600 italic">"{t.feedback}"</p>

              <div className="mt-4">
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-gray-500">📍 {t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 bg-gray-900 text-white text-center">
        © 2026 RK Infrastructure
      </footer>

      {/* CALL MODAL */}
      {showCallModal && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          onClick={() => setShowCallModal(false)}
        >
          <div
            className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowCallModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl"
            >
              ✕
            </button>

            <div className="text-center">
              <div className="text-4xl mb-2">📞</div>
              <h2 className="text-xl font-bold">Talk to Our Expert</h2>
              <p className="text-sm text-gray-500">
                Available 9 AM – 8 PM
              </p>
            </div>

            <div className="mt-6 text-center">
              <p className="text-gray-500 text-sm">Customer Care</p>
              <p className="text-2xl font-bold mt-1">
                +91 88616 31211
              </p>
            </div>

            <div className="mt-6 space-y-3">
              <button
                onClick={() =>
                  (window.location.href = `tel:${phoneNumber}`)
                }
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl"
              >
                📞 Call Now
              </button>

              <button
                onClick={handleWhatsApp}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl"
              >
                💬 WhatsApp
              </button>

              <button
                onClick={copyNumber}
                className="w-full border py-3 rounded-xl hover:bg-gray-100"
              >
                📋 Copy Number
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CONTACT MODAL */}
      {showContact && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center"
          onClick={() => setShowContact(false)}
        >
          <div
            className="bg-white p-6 rounded-xl w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>

            <input
              placeholder="Name"
              className="w-full border p-2 mb-2"
            />
            <input
              placeholder="Phone"
              className="w-full border p-2 mb-2"
            />
            <textarea
              placeholder="Requirement"
              className="w-full border p-2 mb-2"
            />

            <button
              onClick={handleCall}
              className="bg-blue-600 text-white px-4 py-2 rounded w-full mb-2"
            >
              📞 Call Now
            </button>

            <button
              onClick={handleWhatsApp}
              className="bg-green-600 text-white px-4 py-2 rounded w-full"
            >
              💬 WhatsApp
            </button>

            <button
              onClick={() => setShowContact(false)}
              className="mt-3 text-sm text-gray-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}