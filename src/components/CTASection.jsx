import { motion } from "framer-motion";
import { FaPhone, FaWhatsapp, FaCalendarCheck } from "react-icons/fa";

export default function CTASection() {

  return (

    <section className="py-20 bg-primary text-white">

      <div className="container mx-auto text-center px-6">

        <motion.h2
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.6}}
          className="text-4xl font-bold"
        >
          Ready to Find Your Dream Property?
        </motion.h2>

        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Talk to our property experts or book professional home services.
          We help you buy, renovate, and maintain your dream home.
        </p>

        {/* CTA Buttons */}

        <div className="flex flex-wrap justify-center gap-6 mt-10">

          {/* Call Button */}

          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg shadow-lg transition"
          >
            <FaPhone />
            Call Now
          </a>

          {/* WhatsApp Button */}

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg shadow-lg transition"
          >
            <FaWhatsapp />
            WhatsApp Enquiry
          </a>

          {/* Book Visit */}

          <a
            href="/contact"
            className="flex items-center gap-2 gold-gradient text-black px-6 py-3 rounded-lg shadow-lg transition"
          >
            <FaCalendarCheck />
            Book Site Visit
          </a>

        </div>

      </div>

    </section>

  );
}