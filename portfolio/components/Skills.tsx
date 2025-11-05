'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFlask,
  SiFastapi,
  SiDjango,
  SiNodedotjs,
  SiPytorch,
  SiTensorflow,
  SiDocker,
  SiGit,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiAmazon,
  SiGooglecloud,
} from 'react-icons/si';
import { FaJava, FaDatabase } from 'react-icons/fa';

const skillCategories = [
  {
    title: 'Languages',
    icon: '💻',
    skills: [
      { name: 'Python', icon: SiPython, color: 'text-blue-500' },
      { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
      { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
      { name: 'Java', icon: FaJava, color: 'text-red-500' },
      { name: 'SQL', icon: FaDatabase, color: 'text-blue-500' },
    ],
  },
  {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React', icon: SiReact, color: 'text-cyan-500' },
      { name: 'Next.js', icon: SiNextdotjs, color: 'text-black dark:text-white' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-500' },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Flask', icon: SiFlask, color: 'text-gray-700 dark:text-white' },
      { name: 'FastAPI', icon: SiFastapi, color: 'text-teal-600' },
      { name: 'Django', icon: SiDjango, color: 'text-green-700' },
      { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600' },
    ],
  },
  {
    title: 'ML/AI',
    icon: '🤖',
    skills: [
      { name: 'PyTorch', icon: SiPytorch, color: 'text-orange-600' },
      { name: 'TensorFlow', icon: SiTensorflow, color: 'text-orange-500' },
    ],
  },
  {
    title: 'Database',
    icon: '🗄️',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-600' },
      { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
      { name: 'Redis', icon: SiRedis, color: 'text-red-600' },
    ],
  },
  {
    title: 'Tools & Cloud',
    icon: '☁️',
    skills: [
      { name: 'Docker', icon: SiDocker, color: 'text-blue-500' },
      { name: 'Git', icon: SiGit, color: 'text-orange-600' },
      { name: 'AWS', icon: SiAmazon, color: 'text-orange-500' },
      { name: 'GCP', icon: SiGooglecloud, color: 'text-blue-500' },
    ],
  },
];

const additionalSkills = [
  'WebSocket',
  'WebRTC',
  'FFmpeg',
  'HLS Streaming',
  'DeepStream',
  'Leaflet',
  'Mapbox GL JS',
  'PostGIS',
  'Scikit-learn',
  'Pandas',
  'NumPy',
  'Matplotlib',
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks for building scalable applications.
          </p>

          {/* Main skill categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, i) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={i}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <Icon className={`text-2xl ${skill.color}`} />
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Additional Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {additionalSkills.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-neon-blue transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
