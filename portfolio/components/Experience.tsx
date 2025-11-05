'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiBriefcase, FiMapPin, FiCalendar } from 'react-icons/fi';

const experiences = [
  {
    title: 'Software Research Intern',
    company: 'Deep Algorithms Solutions',
    location: 'Hyderabad, Telangana, India (Remote)',
    period: 'Sep. 2025 – Present',
    achievements: [
      'Conducting advanced research in deep learning algorithms and software optimization techniques',
      'Developing and implementing machine learning models for real-world applications using Python',
      'Analyzing complex datasets to extract insights and improve algorithm performance',
    ],
  },
  {
    title: 'Full Stack Intern',
    company: 'Indian Institute of Technology, Mandi',
    location: 'Himachal Pradesh (On-site)',
    period: 'Dec. 2024 – Sep. 2025',
    achievements: [
      'Focused on deep learning and full-stack software development for organizational projects',
      'Gained hands-on experience in cutting-edge technologies and modern web development practices',
      'Applied skills in Python and Full-Stack Development to deliver robust web solutions',
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-16"></div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>

            {/* Experience items */}
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-12 md:flex ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } items-center`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white dark:bg-gray-900 border-4 border-blue-500 rounded-full z-10"></div>

                {/* Content card */}
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <motion.div
                    className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-200 dark:border-gray-700 card-glow"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center gap-2 mb-3 text-blue-600 dark:text-neon-blue">
                      <FiBriefcase />
                      <span className="text-sm font-semibold uppercase">
                        {exp.period}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>

                    <p className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-2">
                      {exp.company}
                    </p>

                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
                      <FiMapPin size={16} />
                      <span className="text-sm">{exp.location}</span>
                    </div>

                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="text-green-500 mt-1">▹</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
