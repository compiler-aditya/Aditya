'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiBook, FiMapPin, FiCalendar } from 'react-icons/fi';

const education = [
  {
    degree: 'BS in Data Science and Application',
    institution: 'Indian Institute of Technology Madras',
    location: 'Chennai, TN',
    period: 'May 2022 – Present',
    coursework: [
      'Python',
      'Java',
      'Modern Application Development',
      'System Commands',
      'Machine Learning Practice',
      'Modern Application Development 2',
    ],
  },
  {
    degree: "Bachelor's in Commerce (Major in Computer Application)",
    institution: 'Devi Ahilya University',
    location: 'Indore, MP',
    period: 'Aug. 2018 – Sept. 2021',
    coursework: [],
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-16"></div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-700 card-glow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-blue-600 dark:text-neon-blue mb-2">
                      <FiBook size={20} />
                      <span className="text-sm font-semibold uppercase">
                        {edu.period}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-lg font-semibold text-purple-600 dark:text-purple-400 mb-2">
                      {edu.institution}
                    </p>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <FiMapPin size={16} />
                      <span className="text-sm">{edu.location}</span>
                    </div>
                  </div>
                </div>

                {edu.coursework.length > 0 && (
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase">
                      Relevant Coursework:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
