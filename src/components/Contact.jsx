import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <motion.p
        className="text-purple-300 font-sans text-lg tracking-widest uppercase text-center mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Get in Touch
      </motion.p>
      <motion.h2 
        className="font-display text-5xl font-bold text-white text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>
      <motion.div 
        className="max-w-md mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <form className="space-y-6">
          <div>
            <label className="font-sans block text-purple-200 text-sm tracking-wider uppercase mb-2">Name</label>
            <input 
              type="text" 
              className="font-sans w-full px-4 py-2 rounded-lg bg-white/5 border border-purple-500 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="font-sans block text-purple-200 text-sm tracking-wider uppercase mb-2">Email</label>
            <input 
              type="email" 
              className="font-sans w-full px-4 py-2 rounded-lg bg-white/5 border border-purple-500 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="font-sans block text-purple-200 text-sm tracking-wider uppercase mb-2">Message</label>
            <textarea 
              className="font-sans w-full px-4 py-2 rounded-lg bg-white/5 border border-purple-500 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 h-32"
            ></textarea>
          </div>
          <motion.button
            className="font-sans w-full px-8 py-4 bg-purple-500 text-white rounded-lg text-sm tracking-wider uppercase font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;