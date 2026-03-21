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
  }
];

const testimonials = [
  {
    name: "Ramesh",
    location: "Velachery, Chennai",
    feedback: "Excellent plumbing work. Problem solved quickly and within budget.",
  },
  {
    name: "Priya",
    location: "Tambaram, Chennai",
    feedback: "Interior work was clean and professional. Very satisfied with the result.",
  },
  {
    name: "Suresh",
    location: "Porur, Chennai",
    feedback: "Waterproofing fixed our leakage issue permanently. Highly recommended.",
  },
];

export default function HomePage() {
  return (
    <div className="font-sans text-gray-900 bg-white">

      {/* NAVBAR (Amazon/Uber style) */}
      <header className="flex items-center justify-between px-6 py-4 shadow-sm sticky top-0 bg-white z-50">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-green-500 flex items-center justify-center text-white font-bold">
            RK
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-900">RK Infrastructure</h1>
            <p className="text-xs text-gray-500">Radha Krishna Infrastructure</p>
          </div>
        </div>
        <div className="hidden md:flex gap-6 text-sm font-medium">
          <span>Services</span>
          <span>Projects</span>
          <span>Contact</span>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Call Now
        </button>
      </header>

      {/* HERO (Service Selection - Better than Search) */}
      <section className="bg-gray-100 py-20 text-center">
        <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl md:text-5xl font-bold">
          Complete Home Services for Your Family
        </h1>
        <p className="mt-4 text-gray-600">
          Construction | Interior | Plumbing | Waterproofing
        </p>

        {/* Quick Action Cards (Better UX than Search) */}
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

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full sm:w-auto">
            📞 Call Now
          </button>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg w-full sm:w-auto">
            💬 WhatsApp
          </button>
        </div>
      </div>
      </section>

      {/* SERVICES (Uber style cards) */}
      <section className="py-16">
        <h2 className="text-2xl md:text-3xl font-bold px-6 mb-8">
          Services for You
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-6 rounded-xl shadow-sm cursor-pointer"
            >
              <div className="text-2xl mb-3">🏠</div>
              <p className="font-medium">{s}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* OUR WORK (Proof of Work - High Trust) */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-2xl md:text-3xl font-bold px-6 mb-2">
          Our Work for Customers
        </h2>
        <p className="px-6 text-gray-600 mb-8">
          Real projects completed for families across Chennai
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-6">
          {works.map((w, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <div className="relative">
                <img src={w.img} className="w-full h-52 object-cover" />
                <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-3 py-1 rounded-full">
                  Completed Work
                </span>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-lg">{w.title}</h3>
                <p className="text-sm text-gray-500">📍 {w.location}</p>
                <p className="text-sm mt-2">{w.desc}</p>

                <div className="mt-4 flex gap-2">
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">Verified</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">On-Time</span>
                </div>

                <button className="mt-4 w-full border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6 text-center">
          {[
            "Affordable",
            "Trusted Workers",
            "Fast Service",
            "Verified Work",
          ].map((item, i) => (
            <div key={i} className="p-4">
              <p className="font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-gray-50">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-xl shadow-sm"
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

      {/* CTA */}
      <section className="py-16 text-center bg-black text-white">
        <h2 className="text-3xl font-bold">
          Book Your Service Today
        </h2>
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-white text-black px-6 py-3 rounded-lg">
            Call Now
          </button>
          <button className="bg-green-600 px-6 py-3 rounded-lg">
            WhatsApp
          </button>
        </div>
      </section>

      {/* FLOATING BUTTON */}
      <a
        href="https://wa.me/91XXXXXXXXXX"
        className="fixed bottom-5 right-5 bg-green-600 text-white px-5 py-3 rounded-full shadow-lg"
      >
        WhatsApp
      </a>

      {/* FOOTER */}
      <footer className="py-8 bg-gray-900 text-white text-center text-sm">
        © 2026 RK Infrastructure (Radha Krishna Infrastructure). All rights reserved.
      </footer>
    </div>
  );
}
