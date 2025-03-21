"use client";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { CodeIcon } from "lucide-react";
import { SignedIn, UserButton } from "@clerk/nextjs";
import DasboardBtn from "./DasboardBtn";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="border-b bg-white/80 backdrop-blur-md dark:bg-gray-900/80 sticky top-0 z-50"
    >
      <div className="flex h-16 items-center px-4 container mx-auto">
        {/* LEFT SIDE -LOGO */}
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold text-2xl mr-6 font-mono relative group"
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <img 
                src="/logo.png"
                alt="NextHire Logo" 
                className="w-8 h-8 object-contain"
              />
            </motion.div>
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent relative">
              NextHire
              <motion.span
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-600 to-indigo-600"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </span>
          </Link>
        </motion.div>

        {/* RIGHT SIDE - ACTIONS */}
        <SignedIn>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-6 ml-auto"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <DasboardBtn />
            </motion.div>
            <Link href="/about">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-colors"
              >
                <span className="text-sm font-medium bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                  About NextHire
                </span>
              </motion.div>
            </Link>
            <div className="flex items-center space-x-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <ModeToggle />
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full opacity-0 hover:opacity-20 transition-opacity" />
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "hover:ring-2 hover:ring-violet-500 transition-all",
                    },
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </SignedIn>
      </div>
    </motion.nav>
  );
}

export default Navbar;
