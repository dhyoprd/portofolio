import React from 'react';
import { motion } from 'framer-motion';
import { CodeBracketIcon, CommandLineIcon, CpuChipIcon } from '@heroicons/react/24/solid';

const projects = [
  {
    title: "Tugas 1 SIG",
    description: "Tugas-Tugas SIG",
    tech: ["Laravel", "HTML", "CSS"],
    icon: CodeBracketIcon,
    link: "https://youtube.com"
  },
  {
    title: "Housing Price Prediction",
    description: "Machine Learning Project",
    tech: ["Python", "Tensorflow", "NumPy"],
    icon: CommandLineIcon,
    link: "https://github.com/dhyoprd/Housing-Price-Prediction"
  },
  {
    title: "Capstone-Project",
    description: "Untuk Menamatkan Teknik Elektro",
    tech: ["React.js", "CodeIgniter", "MySQL"],
    icon: CpuChipIcon,
    link: "https://dribbble.com"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <motion.p
        className="text-purple-300 font-sans text-lg tracking-widest uppercase text-center mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        What I've Built
      </motion.p>
      <motion.h2 
        className="font-display text-5xl font-bold text-white text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Featured Projects
      </motion.h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="bg-white/10 backdrop-blur-sm rounded-lg p-8 cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
          >
            <project.icon className="h-12 w-12 text-purple-400 mb-6" />
            <h3 className="font-display text-2xl font-bold text-white mb-4">{project.title}</h3>
            <p className="font-sans text-purple-200 mb-6 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span key={i} className="font-sans text-sm tracking-wider uppercase bg-purple-500 text-white px-3 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;