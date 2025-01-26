import React, { useRef } from "react";
import { motion, useInView} from "framer-motion";
const Footer = () => {
    const frontendRef = useRef(null);
    const isFrontendInView = useInView(frontendRef, { threshold: 0.5 });
    
  return (
    <div ref={frontendRef}>
    <motion.footer
    initial={{ opacity: 0, y: 50 }}
    animate={isFrontendInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
    transition={{ duration: 0.8 }}
    className="bg-gray-900 text-white mt-10 p-3">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h5 className="text-xl font-bold mb-4">Thanks for visiting</h5>
            <p>
              If any queries contact me
            </p>
          </div>
          {/* Quick Links Section */}
          <div>
            <h5 className="text-xl font-bold mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-300">
                  Contact
                </a>
              </li>
              
            </ul>
          </div>

          {/* Customer Service Section */}
          <div>
            <h5 className="text-xl font-bold mb-4">Contact</h5>
            <ul className="space-y-2">
              <li>
                <a href="/faq" className="hover:text-gray-300">
                   Github 
                </a>
              </li>
              <li>
                <a href="/shipping" className="hover:text-gray-300">
                  Linkedin
                </a>
              </li>
              <li>
                <a href="/tracking" className="hover:text-gray-300">
                  Email
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div>
            <h5 className="text-xl font-bold mb-4">Subscribe</h5>
            <form>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </motion.footer>
      </div>
  );
};

export default Footer;
