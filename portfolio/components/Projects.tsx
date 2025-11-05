'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'HOMA - UAV Management System',
    description: 'Developed a full-stack UAV Management System for fire detection and suppression, coordinating multiple drones. Built with FastAPI and React/TypeScript for live telemetry, mission planning, and autonomous flight.',
    tech: ['FastAPI', 'React', 'TypeScript', 'Mapbox GL JS', 'WebRTC'],
    period: 'Sep. 2025 – Present',
    github: 'https://github.com/AbhiS6699',
  },
  {
    title: 'DenseSight - Real-time AI Video Streaming',
    description: 'Developed a live video streaming system with AI-powered object detection overlay for up to 4 camera feeds. Built a WebSocket Server to receive real-time metadata from a DeepStream pipeline via UDP Multicast.',
    tech: ['Flask', 'WebSocket', 'FFmpeg', 'HLS', 'DeepStream'],
    period: 'Aug. 2025 – Sep. 2025',
    github: 'https://github.com/AbhiS6699',
  },
  {
    title: 'Location Tracker Web App',
    description: 'Built a secure, full-stack Location Tracking Web App. Enabled user registration, automatic location detection, and coordinate selection via Esri satellite map. Created unique shareable URLs for coordinate sets.',
    tech: ['Flask', 'Next.js', 'React', 'Leaflet', 'SQLite'],
    period: 'July 2025 – Aug. 2025',
    github: 'https://github.com/AbhiS6699',
  },
  {
    title: 'Crowd Management Dashboard',
    description: 'Designed a real-time crowd monitoring dashboard using Next.js and Zustand. Integrated Leaflet for geospatial visualization and Socket.IO for live updates. Provided analytics with interactive charts and graphs.',
    tech: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Leaflet', 'Socket.IO'],
    period: 'June 2025 – July 2025',
    github: 'https://github.com/AbhiS6699',
  },
  {
    title: 'SightPlus - Geospatial Image Annotation Viewer',
    description: 'Built a geospatial image annotation viewer for visualizing computer vision results. Added dynamic scaling, bounding box overlays, and confidence scoring. Displayed geospatial metadata for multiple image patches.',
    tech: ['Flask', 'HTML/JS', 'Canvas', 'PIL'],
    period: 'May 2025 – June 2025',
    github: 'https://github.com/AbhiS6699',
  },
  {
    title: 'Industrial Time Series Forecasting',
    description: 'Created a predictive maintenance system using deep learning models for sensor data forecasting. Implemented a custom FTMixer2 model for multi-horizon predictions. Built real-time data streaming and metrics visualization.',
    tech: ['PyTorch', 'Flask', 'SocketIO', 'NumPy', 'Scikit-learn'],
    period: 'Mar. 2025 – Apr. 2025',
    github: 'https://github.com/AbhiS6699',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
            A collection of projects showcasing my expertise in full-stack development, AI/ML, and geospatial technologies.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-700 card-glow"
              >
                {/* Period badge */}
                <div className="text-xs text-blue-600 dark:text-neon-blue font-semibold mb-3 uppercase">
                  {project.period}
                </div>

                {/* Project title */}
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full border border-gray-300 dark:border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-gray-300 dark:border-gray-700">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-neon-blue transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <FiGithub size={18} />
                    <span className="text-sm font-medium">Code</span>
                  </motion.a>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-neon-purple transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    <FiExternalLink size={18} />
                    <span className="text-sm font-medium">Details</span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
