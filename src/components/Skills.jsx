import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  "React", "Node.js", "JavaScript", "TypeScript", "Python",
  "TailwindCSS", "MongoDB", "PostgreSQL", "Git", "Docker"
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-black/30">
      <motion.p
        className="text-purple-300 font-sans text-lg tracking-widest uppercase text-center mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Technologies
      </motion.p>
      <motion.h2 
        className="font-display text-5xl font-bold text-white text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Skills & Expertise
      </motion.h2>
      <div className="container mx-auto flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="font-sans bg-purple-500 text-white px-6 py-3 rounded-full text-sm tracking-wider uppercase"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            viewport={{ once: true }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;