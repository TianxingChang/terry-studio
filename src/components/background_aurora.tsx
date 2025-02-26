/*
 * @Author: Matroid_Walker adimensioner@gmail.com
 * @Date: 2025-02-26 00:34:12
 * @LastEditors: Matroid_Walker adimensioner@gmail.com
 * @LastEditTime: 2025-02-27 01:25:51
 * @FilePath: /terry-studio/src/components/background_aurora.tsx
 * @Description:
 *
 * Copyright (c) 2025 by Terry Chang, All Rights Reserved.
 */
import { motion } from "framer-motion";
import { AuroraBackground } from "./ui/aurora-background";

// const handleBookDemo = () => {
//   // Implement the desired functionality here
//   // For example, redirect to a booking page
//   window.location.href = "/book-demo";
// };

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex w-full flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-6xl font-bold dark:text-white text-center">
          Intermind: the optimal way to express.
        </div>
        <div className="font-extralight text-base md:text-2xl dark:text-neutral-200 py-4">
          Coming soon.
        </div>
        <button
          className=" dark:bg-white rounded-full w-fit text-white  px-4 py-2"
          // onClick={handleBookDemo}
        >
          Book demo
        </button>
      </motion.div>
    </AuroraBackground>
  );
}
