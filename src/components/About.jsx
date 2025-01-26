import React from "react";
import Coder from "./Coder.jpg";
import { motion } from "framer-motion";
const About = () => {
  return (
    <motion.div 
    initial={{ x: "100%", opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
    className="container mx-auto py-8 px-4  ">
      <div className="flex flex-col md:flex-row items-center bg-indigo-950 p-6 rounded-lg shadow-lg">
        {/* Text Section */}
        <div className="md:w-2/3 md:pr-8">
          <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
          <p className="text-white text-lg leading-relaxed">
            I am an aspiring tech enthusiast who wants to build and create dynamic websites 
            and apply technical knowledge to tackle real-world issues. I am particularly excited to explore how AI/ML 
            can be applied to various domains such as healthcare, finance, and environmental sustainability.
          </p>
          <p className="text-white text-lg leading-relaxed mt-4">
            With a strong foundation in C, C++, Python, JavaScript, and Frontend Development, I am driven to explore 
            new technologies and methodologies to address complex problems effectively. I am eager to collaborate with diverse teams, 
            learn continuously, and apply my skills to make a positive impact in the tech industry.
          </p>
        </div>

        {/* Image Section */}
        <div className="mt-6 md:mt-0 md:w-1/3">
          <img
            className="rounded-lg shadow-lg"
            src={Coder}
            alt="Coding Illustration"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
