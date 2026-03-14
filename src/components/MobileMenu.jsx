import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MobileMenu = ({ isOpen, setIsOpen }) => {
  if (!isOpen) return null;

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Buy Property", path: "/buy" },
    { name: "Rent Property", path: "/rent" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Reviews", path: "/reviews" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      className="fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg z-50 p-6"
    >
      <button
        className="mb-6 text-gray-600"
        onClick={() => setIsOpen(false)}
      >
        Close
      </button>

      <ul className="space-y-6 text-lg">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="hover:text-blue-600"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default MobileMenu;