import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnshImage from "./Ansh.avif";

const Home = () => {
  // Ref for Frontend Section
  const frontendRef = useRef(null);
  const isFrontendInView = useInView(frontendRef, { threshold: 0.5 });

  // Ref for Machine Learning Section
  const mlRef = useRef(null);
  const isMlInView = useInView(mlRef, { threshold: 0.5 });

  return (
    <div className="max-w-screen-lg max-w-screen-xl mx-auto">
      {/* Main Card */}

      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="flex shadow-md rounded-lg overflow-hidden bg-indigo-950 text-white m-12 "
      >
        <div className="w-1/3 m-5">
          <img
            src={AnshImage}
            alt="Ansh Badal"
            className="h-full w-full object-cover rounded-full"
          />
        </div>
        <div className="w-2/3 p-6 flex flex-col justify-center">
          <motion.h3 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
          className="text-2xl font-bold mb-2">Hi! I am Ansh Badal</motion.h3>
          <motion.h1
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
           className="text-xl font-semibold mb-4 text-slate-300 ">
            Web Developer
          </motion.h1>
          <motion.p 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white mb-4">
            I am a passionate web developer and machine learning enthusiast
            aiming to build dynamic, user-friendly interfaces.
          </motion.p>
          <motion.button
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-60">
            Contact Me
          </motion.button>
        </div>
      </motion.div>

      {/* Frontend Developer Section */}
      <div ref={frontendRef}>
        {isFrontendInView && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center bg-gray-900 text-white p-8 rounded-lg m-8 shadow-lg "
          >
            <h2 className="text-xl font-bold mb-4">Frontend Developer</h2>
            <p>
              I have a strong foundation in creating responsive and user-friendly web interfaces.
              My expertise includes working with HTML, CSS, and JavaScript/React to develop visually
              appealing designs that offer seamless navigation.
            </p>
          </motion.div>
        )}
      </div>

      {/* Machine Learning Section */}
      <div ref={mlRef}>
        {isMlInView && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center bg-gray-900 text-white p-8 rounded-lg m-8 shadow-lg"
          >
            <h2 className="text-xl font-bold mb-4">Machine Learning Engineer</h2>
            <p>
              My passion for data-driven solutions led me to explore machine learning.
              I have experience in building models, analyzing data, and applying machine learning algorithms
              to solve complex problems.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Home;
