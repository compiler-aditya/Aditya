'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiMail, FiLinkedin, FiGithub, FiPhone } from 'react-icons/fi';

const contactMethods = [
  {
    icon: FiMail,
    title: 'Email',
    value: 'adityaisktcs@gmail.com',
    href: 'mailto:adityaisktcs@gmail.com',
    color: 'text-red-500',
    bgColor: 'bg-red-100 dark:bg-red-900/30',
  },
  {
    icon: FiLinkedin,
    title: 'LinkedIn',
    value: 'singh-aaditya',
    href: 'https://linkedin.com/in/singh-aaditya',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100 dark:bg-blue-900/30',
  },
  {
    icon: FiGithub,
    title: 'GitHub',
    value: 'AbhiS6699',
    href: 'https://github.com/AbhiS6699',
    color: 'text-gray-900 dark:text-white',
    bgColor: 'bg-gray-100 dark:bg-gray-800',
  },
  {
    icon: FiPhone,
    title: 'Phone',
    value: '+91 7509492063',
    href: 'tel:+917509492063',
    color: 'text-green-500',
    bgColor: 'bg-green-100 dark:bg-green-900/30',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            Feel free to reach out through any of the following channels.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={index}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-200 dark:border-gray-700 group"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-4 rounded-full ${method.bgColor}`}>
                      <Icon className={`text-2xl ${method.color}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {method.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-neon-blue transition-colors">
                        {method.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-lg mb-8 opacity-90">
              Whether you have a project in mind or just want to chat about tech, I'd love to hear from you!
            </p>
            <motion.a
              href="mailto:adityaisktcs@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiMail size={20} />
              <span>Send me an email</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
