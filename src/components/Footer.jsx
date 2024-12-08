import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-black/50 py-8">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center text-purple-200 font-sans text-sm tracking-wider"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p>© 2024 dhyoprd. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;