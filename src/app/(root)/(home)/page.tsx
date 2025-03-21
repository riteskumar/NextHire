"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-gray-900 flex items-center justify-center">
      <motion.div
        className="container max-w-6xl mx-auto p-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <motion.div
            className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 text-violet-500 backdrop-blur-sm border border-violet-500/20 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <span>✨ Welcome to NextHire</span>
          </motion.div>
          <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            Master Your Technical
            <br />
            Interviews
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
            Join our platform to practice coding interviews, collaborate in
            real-time, and improve your skills.
          </p>

          <motion.div
            className="flex items-center justify-center gap-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/getStarted">
              <Button
                size="lg"
                className="bg-violet-600 hover:bg-violet-700 text-white px-8"
              >
                Get Started
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {[
            {
              title: "Real-time Collaboration",
              description: "Practice with peers in real-time coding sessions",
            },
            {
              title: "Multiple Languages",
              description: "Support for various programming languages",
            },
            {
              title: "Interview Tracking",
              description: "Track your progress and performance",
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg border border-violet-100 dark:border-gray-700"
            >
              <h3 className="font-semibold mb-2 text-lg">{feature.title}</h3>
              <p className="text-gray-500 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
