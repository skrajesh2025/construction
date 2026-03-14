import { motion } from "framer-motion";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center text-white overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c')",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/70"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">

        <div className="max-w-4xl">

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-7xl font-bold leading-tight"
          >
            Find Your Dream Property  
            <span className="block text-yellow-400">
              & Trusted Home Services
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="mt-6 text-lg md:text-xl text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Luxury homes, premium services, and trusted agents across Chennai.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex gap-5 mt-8 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >

            <button className="bg-yellow-500 text-black px-7 py-3 rounded-lg font-semibold hover:scale-105 transition shadow-lg">
              Browse Properties
            </button>

            <button className="bg-green-500 px-7 py-3 rounded-lg font-semibold hover:scale-105 transition shadow-lg">
              Book Service
            </button>

          </motion.div>

        </div>

        {/* Search Bar */}

        <motion.div
          className="mt-16 bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-xl grid md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >

          <div className="flex items-center bg-white/20 rounded-lg px-4">
            <FaMapMarkerAlt className="mr-2" />
            <input
              type="text"
              placeholder="City (Chennai)"
              className="bg-transparent p-3 w-full outline-none"
            />
          </div>

          <select className="bg-white/20 rounded-lg p-3 outline-none">
            <option>Property Type</option>
            <option>Apartment</option>
            <option>Villa</option>
            <option>Plot</option>
          </select>

          <select className="bg-white/20 rounded-lg p-3 outline-none">
            <option>Budget</option>
            <option>₹20L - ₹50L</option>
            <option>₹50L - ₹1Cr</option>
            <option>₹1Cr+</option>
          </select>

          <button className="bg-yellow-500 text-black font-semibold rounded-lg flex items-center justify-center gap-2">
            <FaSearch />
            Search
          </button>

        </motion.div>

        {/* Stats Section */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">

          <div>
            <h2 className="text-3xl font-bold text-yellow-400">500+</h2>
            <p className="text-gray-300">Properties</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-yellow-400">120+</h2>
            <p className="text-gray-300">Happy Clients</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-yellow-400">50+</h2>
            <p className="text-gray-300">Agents</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-yellow-400">12</h2>
            <p className="text-gray-300">Years Experience</p>
          </div>

        </div>

      </div>
    </section>
  );
}