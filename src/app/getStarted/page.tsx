"use client";

import ActionCard from "@/components/ActionCard";
import { QUICK_ACTIONS } from "@/constants";
import { useUserRole } from "@/hooks/useUserRole";
import { useQuery } from "convex/react";
import { useState } from "react";
// import { api } from "../../../../convex/_generated/api";
import { api } from "../../../convex/_generated/api";
import { useRouter } from "next/navigation";
import MeetingModal from "@/components/MeetingModal";
import LoaderUI from "@/components/LoaderUI";
import { Loader2Icon, Calendar, Users, Clock } from "lucide-react";
import MeetingCard from "@/components/MeetingCard";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  const router = useRouter();
  const { isInterviewer, isCandidate, isLoading } = useUserRole();
  const interviews = useQuery(api.interviews.getMyInterviews);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<"start" | "join">();

  const handleQuickAction = (title: string) => {
    switch (title) {
      case "New Call":
        setModalType("start");
        setShowModal(true);
        break;
      case "Join Interview":
        setModalType("join");
        setShowModal(true);
        break;
      default:
        router.push(`/${title.toLowerCase()}`);
    }
  };

  if (isLoading) return <LoaderUI />;

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-gray-900">
      <motion.div
        className="container max-w-7xl mx-auto p-6 space-y-12"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        {/* Hero Section */}
        <motion.div
          variants={fadeIn}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 p-8 md:p-12"
        >
          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              backgroundImage: "url('/g.png')",
              backgroundSize: "cover",
            }}
          />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex-1"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
              >
                <span className="text-white/80 text-sm">
                  👋 Welcome to NextHire
                </span>
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                Welcome back!
                <br />
                <span className="text-3xl md:text-4xl opacity-90">
                  Let's get started
                </span>
              </h1>
              <p className="text-xl text-violet-100 max-w-2xl mb-8">
                {isInterviewer
                  ? "Manage your interviews and review candidates effectively"
                  : "Access your upcoming interviews and preparations"}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="flex-1 max-w-md"
            ></motion.div>
          </div>
        </motion.div>

        {isInterviewer ? (
          <>
            <motion.div variants={fadeIn} className="space-y-8">
              <motion.div
                className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
                variants={staggerContainer}
              >
                {QUICK_ACTIONS.map((action, index) => (
                  <motion.div
                    key={action.title}
                    variants={{
                      initial: { opacity: 0, x: -20 },
                      animate: { opacity: 1, x: 0 },
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ActionCard
                      action={action}
                      onClick={() => handleQuickAction(action.title)}
                    />
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={fadeIn}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-violet-100 dark:border-gray-700"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-violet-100 dark:bg-violet-900/30 rounded-lg">
                      <Calendar className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Total Interviews
                      </p>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white">
                        {interviews?.length || 0}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            <MeetingModal
              isOpen={showModal}
              onClose={() => setShowModal(false)}
              title={modalType === "join" ? "Join Meeting" : "Start Meeting"}
              isJoinMeeting={modalType === "join"}
            />
          </>
        ) : (
          <motion.div variants={fadeIn} className="space-y-8">
            <div>
              <motion.h2
                variants={fadeIn}
                className="text-3xl font-bold text-gray-900 dark:text-white"
              >
                Your Interviews
              </motion.h2>
              <motion.p
                variants={fadeIn}
                className="text-gray-500 dark:text-gray-400 mt-2"
              >
                View and join your scheduled interviews
              </motion.p>
            </div>

            <motion.div variants={staggerContainer} className="mt-8">
              {interviews === undefined ? (
                <motion.div
                  variants={fadeIn}
                  className="flex justify-center py-12"
                >
                  <Loader2Icon className="h-8 w-8 animate-spin text-violet-600" />
                </motion.div>
              ) : interviews.length > 0 ? (
                <motion.div
                  className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                  variants={staggerContainer}
                >
                  {interviews.map((interview, index) => (
                    <motion.div
                      key={interview._id}
                      variants={{
                        initial: { opacity: 0, y: 20 },
                        animate: { opacity: 1, y: 0 },
                      }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <MeetingCard interview={interview} />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  variants={fadeIn}
                  className="text-center py-16 bg-white dark:bg-gray-800 rounded-xl border border-violet-100 dark:border-gray-700 shadow-lg"
                >
                  <Calendar className="h-16 w-16 mx-auto text-violet-600 dark:text-violet-400 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    No Scheduled Interviews
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    You currently have no upcoming interviews scheduled
                  </p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
