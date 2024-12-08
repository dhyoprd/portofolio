import React from 'react';
import { motion } from 'framer-motion';

const Background = ({ children }) => {
  return (
    <motion.div
      className="min-h-screen w-full bg-gradient-to-br from-black via-purple-900 to-black flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};

export default Background;