"use client";
import { motion } from "motion/react";

export default function Page() {
  return (
    <main className="bg-black text-white h-screen flex flex-col gap-10 items-center justify-center">
      <motion.div
        initial={{
          opacity: 0,
          y: -40,
        }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeIn" }}
      >
        <h1 className="text-4xl">Hello Motion</h1>
      </motion.div>
      <motion.button
        className="bg-gray-700 text-4xl text-gray-100 p-2"
        whileHover={{
          scale: 1.05,
          y: -2,
        }}
        whileTap={{
          scale: 0.9,
          y: 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 4 }}
      >
        Motion Button
      </motion.button>
    </main>
  );
}

