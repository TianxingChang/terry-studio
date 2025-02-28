/*
 * @Author: Matroid_Walker adimensioner@gmail.com
 * @Date: 2025-02-25 17:09:01
 * @LastEditors: Matroid_Walker adimensioner@gmail.com
 * @LastEditTime: 2025-02-26 23:36:39
 * @FilePath: /terry-studio/src/components/ThoughtsPage.tsx
 * @Description:
 *
 * Copyright (c) 2025 by Terry Chang, All Rights Reserved.
 */
// import React from "react";
import AnimatedList from "./AnimatedItems";
import { thoughtItems } from "../thoughts/thoughtsList";

const ThoughtsPage = () => {
  return (
    <div className="flex justify-center items-center mt-10 mb-20 w-full">
      <div className="w-[95%] md:w-3/7 flex justify-center items-center bg-[rgb(16,15,14)] rounded-lg p-4 md:p-10 border-[rgb(30,30,30)] border-[1px]">
        <AnimatedList
          items={thoughtItems}
          showGradients={true}
          enableArrowNavigation={true}
          displayScrollbar={true}
        />
      </div>
    </div>
  );
};

export default ThoughtsPage;
