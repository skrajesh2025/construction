import { motion } from "framer-motion";
import { FaHome, FaTools, FaUsers } from "react-icons/fa";

export default function About() {
  return (
    <div className="bg-bg min-h-screen">

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c)"
        }}
      >
        <div className="bg-black/50 p-10 rounded-xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-white"
          >
            About LuxuryHomes India
          </motion.h1>

          <p className="text-white mt-4 max-w-xl">
            A modern platform helping Indian homeowners discover properties,
            connect with agents, and book trusted home services.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="container mx-auto py-20 px-6">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center text-primary mb-10"
        >
          Our Mission
        </motion.h2>

        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
          Our mission is to simplify real estate and home maintenance for
          Indian homeowners. Whether you're buying a property, renovating
          your home, or booking professional services, our platform connects
          you with trusted experts across India.
        </p>

      </section>

      {/* Features */}
      <section className="container mx-auto py-20 grid md:grid-cols-3 gap-10 px-6">

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-8 rounded-xl shadow-lg text-center"
        >
          <FaHome className="text-4xl text-gold mx-auto mb-4" />
          <h3 className="text-xl font-bold">Premium Properties</h3>
          <p className="text-gray-500 mt-2">
            Discover luxury villas, apartments and gated communities across
            India.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-8 rounded-xl shadow-lg text-center"
        >
          <FaTools className="text-4xl text-gold mx-auto mb-4" />
          <h3 className="text-xl font-bold">Home Services</h3>
          <p className="text-gray-500 mt-2">
            Book trusted professionals for waterproofing, plumbing,
            renovation, and interior design.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-8 rounded-xl shadow-lg text-center"
        >
          <FaUsers className="text-4xl text-gold mx-auto mb-4" />
          <h3 className="text-xl font-bold">Trusted Experts</h3>
          <p className="text-gray-500 mt-2">
            Work with verified agents and service professionals to ensure
            quality and reliability.
          </p>
        </motion.div>

      </section>

      {/* Call to Action */}
      <section className="bg-primary py-16 text-center text-white">

        <h2 className="text-3xl font-bold">
          Looking for a property or home service?
        </h2>

        <p className="mt-4">
          Talk to our experts today and get personalized assistance.
        </p>

        <div className="mt-6 flex justify-center gap-4">

          <a
            href="tel:+919876543210"
            className="bg-green-600 px-6 py-3 rounded-lg"
          >
            Call Now
          </a>

          <a
            href="https://wa.me/919876543210"
            className="bg-green-500 px-6 py-3 rounded-lg"
          >
            WhatsApp
          </a>

        </div>

      </section>

    </div>
  );
}