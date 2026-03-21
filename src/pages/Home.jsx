import React from "react";
import { motion } from "framer-motion";

const services = [
  "Construction",
  "Interior",
  "Plumbing",
  "Waterproofing",
  "Furniture",
  "Home Plan",
  "Tiles",
  "Land",
];

const works = [
  {
    title: "2BHK Interior Setup",
    location: "Tambaram, Chennai",
    desc: "Modular kitchen and wardrobe setup",
    img: "/images/work1.jpg",
  },
  {
    title: "Bathroom Plumbing Work",
    location: "Porur, Chennai",
    desc: "Leakage fixed and pipeline replaced",
    img: "/images/work2.jpg",
  },
  {
    title: "Terrace Waterproofing",
    location: "Velachery, Chennai",
    desc: "Complete waterproof coating applied",
    img: "/images/work3.jpg",
  },
];

const testimonials = [
  {
    name: "Ramesh",
    location: "Velachery, Chennai",
    feedback:
      "Excellent plumbing work. Problem solved quickly and within budget.",
  },
  {
    name: "Priya",
    location: "Tambaram, Chennai",
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
  const phoneNumber = "+919876543210";

  const [showContact, setShowContact] = React.useState(false);
  const [showCallModal, setShowCallModal] = React.useState(false);

  const handleCall = () => {
    setShowCallModal(true);
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber.replace("+", "")}`);
  };

  const copyNumber = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      alert("Number copied");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* NAVBAR */}
      <header className="flex items-center justify-between px-6 py-4 shadow-sm sticky top-0 bg-white z-50">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-green-500 flex items-center justify-center text-white font-bold">
            RK
          </div>
          <div>
            <h1 className="text-lg font-bold">RK Infrastructure</h1>
            <p className="text-xs text-gray-500">
              Radha Krishna Infrastructure
            </p>
          </div>
        </div>

        <div className="hidden md:flex gap-6 text-sm font-medium">
          <span>Services</span>
          <span>Projects</span>
          <span
            onClick={() => setShowContact(true)}
            className="cursor-pointer"
          >
            Contact
          </span>
        </div>

        <button
          onClick={() => setShowContact(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Contact Us
        </button>
      </header>

      {/* HERO */}
      <section className="bg-gray-100 py-20 text-center">
        <h1 className="text-3xl md:text-5xl font-bold">
          Complete Home Services for Your Family
        </h1>

        <p className="mt-4 text-gray-600">
          Construction | Interior | Plumbing | Waterproofing
        </p>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto px-4">
          {services.slice(0, 4).map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-4 rounded-xl shadow cursor-pointer"
            >
              <p className="font-medium text-sm">{s}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={handleCall}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            📞 Call Now
          </button>

          <button
            onClick={handleWhatsApp}
            className="bg-green-600 text-white px-6 py-3 rounded-lg"
          >
            💬 WhatsApp
          </button>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16">
        <h2 className="text-2xl font-bold px-6 mb-8">Services for You</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-6 rounded-xl shadow-sm"
            >
              <p>{s}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-2xl font-bold px-6 mb-6">Our Work</h2>

        <div className="grid md:grid-cols-3 gap-6 px-6">
          {works.map((w, i) => (
            <div key={i} className="bg-white rounded-xl shadow">
              <img src={w.img} className="w-full h-52 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">{w.title}</h3>
                <p className="text-sm text-gray-500">{w.location}</p>
                <p className="text-sm mt-2">{w.desc}</p>
              </div>
            </div>
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
            <div key={i} className="bg-white p-6 shadow rounded-xl">
              <p>"{t.feedback}"</p>
              <p className="mt-3 font-semibold">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-gray-900 text-white text-center text-sm">
        © 2026 RK Infrastructure
      </footer>

      {/* CALL MODAL */}
      {showCallModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl">
            <h2 className="text-xl font-bold">Call</h2>
            <p className="mt-2">{phoneNumber}</p>

            <button
              onClick={() =>
                (window.location.href = `tel:${phoneNumber}`)
              }
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
            >
              Call Now
            </button>

            <button
              onClick={copyNumber}
              className="ml-2 border px-4 py-2 rounded"
            >
              Copy
            </button>
          </div>
        </div>
      )}

      {/* CONTACT MODAL */}
      {showContact && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-full max-w-md">
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
              Call Now
            </button>

            <button
              onClick={handleWhatsApp}
              className="bg-green-600 text-white px-4 py-2 rounded w-full"
            >
              WhatsApp
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