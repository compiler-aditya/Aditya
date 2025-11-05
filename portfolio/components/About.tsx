'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Image/Avatar placeholder */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-2xl opacity-50 animate-pulse"></div>
                <div className="relative bg-gray-200 dark:bg-gray-800 rounded-2xl overflow-hidden border-4 border-white dark:border-gray-700 shadow-2xl flex items-center justify-center">
                  <div className="text-9xl gradient-text font-bold">AS</div>
                </div>
              </div>
            </motion.div>

            {/* Right: About text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm a passionate <span className="font-semibold text-primary-600 dark:text-neon-blue">Full Stack Developer</span> and{' '}
                <span className="font-semibold text-purple-600 dark:text-neon-purple">AI/ML Enthusiast</span> with a strong foundation in building
                scalable web applications and implementing cutting-edge machine learning solutions.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Currently pursuing my <span className="font-semibold">BS in Data Science and Applications</span> from the{' '}
                <span className="font-semibold">Indian Institute of Technology Madras</span>, I combine academic rigor with
                practical experience from my internships at prestigious institutions.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                My expertise spans across <span className="font-semibold">modern web technologies</span>, including React, Next.js,
                FastAPI, and Flask, along with deep learning frameworks like PyTorch and TensorFlow. I'm particularly
                interested in <span className="font-semibold text-green-600 dark:text-neon-green">geospatial technologies</span>,{' '}
                <span className="font-semibold text-blue-600 dark:text-neon-blue">real-time systems</span>, and{' '}
                <span className="font-semibold text-pink-600 dark:text-neon-pink">computer vision applications</span>.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                When I'm not coding, I'm exploring new technologies, contributing to open-source projects, and continuously
                learning to stay at the forefront of the rapidly evolving tech landscape.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                  Web Development
                </span>
                <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                  Machine Learning
                </span>
                <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
                  Geospatial Tech
                </span>
                <span className="px-4 py-2 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full text-sm font-medium">
                  Computer Vision
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
