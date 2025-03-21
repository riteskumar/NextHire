"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <div className="min-h-screen py-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4"
      >
        {/* Hero Section */}
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="text-center mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent"
          >
            Revolutionizing Technical Interviews
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            NextHire is your all-in-one platform for conducting seamless technical interviews,
            real-time code collaboration, and efficient candidate assessment.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {[
            {
              title: "Live Code Collaboration",
              description: "Real-time code editing and execution with support for multiple programming languages.",
              icon: "🚀",
            },
            {
              title: "Video Interviews",
              description: "High-quality video calls with integrated code editor for seamless technical discussions.",
              icon: "📹",
            },
            {
              title: "Smart Assessment",
              description: "Comprehensive tools for evaluating candidates' technical skills and problem-solving abilities.",
              icon: "📊",
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-violet-100 dark:border-gray-700"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl p-8 md:p-12 mb-16 text-white"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { number: "1000+", label: "Interviews Conducted" },
              { number: "50+", label: "Companies Trust Us" },
              { number: "95%", label: "Satisfaction Rate" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
              >
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-violet-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              At NextHire, we're committed to making technical interviews more efficient,
              fair, and enjoyable for both interviewers and candidates.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Our platform combines cutting-edge technology with user-friendly interfaces
              to create an environment where technical skills can be accurately assessed
              and demonstrated.
            </p>
          </div>
          <motion.div
            className="flex-1 relative h-[400px]"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
          >
            <Image
              src="/about-us.svg"
              alt="NextHire Mission"
              fill
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;