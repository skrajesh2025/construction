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
    
    <header className="bg-white border-b px-6 md:px-10 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
            <img
            src="/images/logo.png"
            alt="RK Infrastructure"
            className="w-12 h-12 object-contain"
            />

            <div className="leading-tight">
            <h1 className="text-xl font-bold text-gray-900">
                RK Infrastructure
            </h1>
            <p className="text-sm text-gray-500">
                Radha Krishna Infrastructure
            </p>
            </div>
        </div>

        </header>
      {/* HERO */}
   <section className="bg-blue-50 py-12 md:py-16">

  <div className="max-w-5xl mx-auto px-4 md:px-8">

    {/* 🔹 INNER CARD (MAIN CONTENT) */}
    <div className="bg-white rounded-xl shadow-sm border p-6 md:p-10">

      {/* TITLE */}
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
        Complete Home Services
      </h2>

      {/* SUBTEXT */}
      <p className="mt-3 text-gray-600 text-sm md:text-lg">
        Construction, Interior, Plumbing & Waterproofing — all in one place.
      </p>

      {/* SERVICES */}
      <div className="mt-5 flex gap-2 overflow-x-auto pb-2">
        {services.map((s, i) => (
          <span
            key={i}
            className="whitespace-nowrap bg-gray-100 px-3 py-1.5 rounded-md text-xs md:text-sm text-gray-700"
          >
            {typeof s === "string" ? s : s.name}
          </span>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        
        <button
          onClick={handleCall}
          className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg text-sm md:text-base font-medium"
        >
          📞 Call Now
        </button>

        <button
          onClick={handleWhatsApp}
          className="w-full sm:w-auto border border-gray-300 px-5 py-3 rounded-lg text-sm md:text-base font-medium hover:bg-gray-100"
        >
          💬 WhatsApp
        </button>

      </div>

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