import React from 'react';
import { motion } from 'framer-motion';
import Hero3D from './Hero3D';
import { RocketLaunchIcon } from '@heroicons/react/24/solid';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4">
      <Hero3D />
      <div className="relative z-10 text-center">
        <motion.p
          className="text-purple-300 font-sans text-lg tracking-widest uppercase mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome To
        </motion.p>
        <motion.h1 
          className="font-display text-6xl md:text-8xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Dhyo's Porto.
        </motion.h1>
        <motion.p 
          className="font-sans text-xl md:text-2xl text-purple-200 mb-12 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Exploring the intersection of design & technology
        </motion.p>
        <motion.button
          className="font-sans px-8 py-4 bg-transparent text-white rounded-full text-lg tracking-wider uppercase font-medium shadow-lg flex items-center gap-2 mx-auto border border-white relative overflow-hidden group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          style={{
            animation: 'border-rgb 3s linear infinite',
          }}
        >
          <RocketLaunchIcon className="h-6 w-6" />
          Explore Projects
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 opacity-30 group-hover:opacity-50 transition-opacity" />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;