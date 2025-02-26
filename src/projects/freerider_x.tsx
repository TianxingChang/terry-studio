/*
 * @Author: Matroid_Walker adimensioner@gmail.com
 * @Date: 2025-02-26 00:37:27
 * @LastEditors: Matroid_Walker adimensioner@gmail.com
 * @LastEditTime: 2025-02-26 23:51:17
 * @FilePath: /terry-studio/src/projects/freerider_x.tsx
 * @Description:
 *
 * Copyright (c) 2025 by Terry Chang, All Rights Reserved.
 */
import { ContainerScroll } from "../components/ui/container-scroll-animation";

export default function Page() {
  return (
    <div className="flex flex-col overflow-hidden w-screen">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Make Exercise <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Fun Again
              </span>
            </h1>
          </>
        }
      >
        <video
          width="100%"
          height="100%"
          controls
          preload="none"
          muted
          loop
          autoPlay
        >
          <source src="/freerider/freerider_demo_all.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </ContainerScroll>
      <div className="w-full text-center m-2 text-2xl md:mb-10">
        Design Doc & Log
      </div>
      <div className="p-1 sm:p-4 mx-10 sm:mx-20  rounded-lg border-2 bg-black mb-2">
        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
          {" "}
          {/* 16:9 Aspect Ratio */}
          <iframe
            src="/freerider/FreeRiderX-Report.pdf#toolbar=0"
            title="Embedded PDF Viewer"
            className="absolute top-0 left-0 w-full h-full"
            style={{ border: "none", backgroundColor: "transparent" }} // Optional: Remove border
          />
        </div>
      </div>
    </div>
  );
}
