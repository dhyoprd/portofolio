import React from 'react';
import { motion } from 'framer-motion';

const Button = () => {
  return (
    <motion.button
      className="px-8 py-4 bg-white text-purple-800 rounded-full text-xl font-bold shadow-lg"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Tugas 1 SIG
    </motion.button>
  );
};

export default Button;