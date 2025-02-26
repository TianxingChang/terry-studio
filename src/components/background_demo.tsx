/*
 * @Author: Matroid_Walker adimensioner@gmail.com
 * @Date: 2025-02-26 23:52:57
 * @LastEditors: Matroid_Walker adimensioner@gmail.com
 * @LastEditTime: 2025-02-26 23:59:10
 * @FilePath: /terry-studio/src/components/background_demo.tsx
 * @Description:
 *
 * Copyright (c) 2025 by Terry Chang, All Rights Reserved.
 */

import { BackgroundLines } from "./ui/background-lines";
// Import images directly
import hackUST1 from "/truthcamera/hackUST_1.jpg";
import hackUST2 from "/truthcamera/hackUST_2.jpg";

export function BackgroundLinesDemo({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <BackgroundLines className="w-screen flex items-center justify-center flex-col px-4">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        {title}
      </h2>
      <div className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center mb-4">
        {description}
      </div>
      <a href="https://truth-camera-web.vercel.app" className="relative z-50">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          visit website
        </button>
      </a>
      <div className="flex gap-2 mt-6 w-[800px] justify-center">
        <img src={hackUST1} width={200} alt="Description of hackUST_1" />
        <img src={hackUST2} width={500} alt="Description of hackUST_2" />
      </div>
    </BackgroundLines>
  );
}
