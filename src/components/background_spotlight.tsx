/*
 * @Author: Matroid_Walker adimensioner@gmail.com
 * @Date: 2025-02-27 00:01:22
 * @LastEditors: Matroid_Walker adimensioner@gmail.com
 * @LastEditTime: 2025-02-27 00:06:04
 * @FilePath: /terry-studio/src/components/background_spotlight.tsx
 * @Description:
 *
 * Copyright (c) 2025 by Terry Chang, All Rights Reserved.
 */
import { Spotlight } from "../components/ui/spotlight";
// import { Button } from "./ui/button";

export function SpotlightPreview() {
  return (
    <div className="h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Dash: the optimal pathway to knowledge
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          LLM-driven learning platform (on-going)
        </p>
        <div className="w-full flex justify-center mt-14 items-center space-x-4">
          <button>
            <a href="https://fyp-mid.vercel.app/"> Preview subsystem</a>
          </button>
          <div className="text-red-300 p-2 rounded-md">
            ⚠︎ &nbsp; You have no access to this project
          </div>
        </div>
      </div>
    </div>
  );
}
