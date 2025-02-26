/*
 * @Author: Matroid_Walker adimensioner@gmail.com
 * @Date: 2025-02-25 17:09:01
 * @LastEditors: Matroid_Walker adimensioner@gmail.com
 * @LastEditTime: 2025-02-26 19:36:00
 * @FilePath: /terry-studio/src/components/ThoughtsPage.tsx
 * @Description:
 *
 * Copyright (c) 2025 by Terry Chang, All Rights Reserved.
 */
import React from "react";
import AnimatedList from "./AnimatedItems";

const items = [
  {
    text: "关于技术崩塌的思考",
    link: "/thoughts/1",
    time: "2025.01",
  },
  {
    text: "A normal night with my roommate Toby 📷",
    link: "/thoughts/2",
    time: "2023.03",
  },
  {
    text: "2025 Feb 生活碎片 📷",
    link: "/thoughts/life-fragments",
    time: "2024.02",
  },
  {
    text: "深圳科创学院体系",
    link: "/thoughts/shenzhen-tech",
    time: "2024.02",
  },
  {
    text: "学习新知识的最速降线",
    link: "/thoughts/learning-path",
    time: "2024.01",
  },
  {
    text: "我的产品观: cool but not cold",
    link: "/thoughts/product-philosophy",
    time: "2024.01",
  },
];

const ThoughtsPage = () => {
  return (
    <div className="w-full flex justify-center items-center mt-10 mb-20">
      <div className="w-[95%] md:w-4/7 flex justify-center items-center bg-[rgb(5,5,5)] rounded-lg p-4 md:p-10 border-[rgb(30,30,30)] border-[1px]">
        <AnimatedList
          items={items}
          showGradients={true}
          enableArrowNavigation={true}
          displayScrollbar={true}
        />
      </div>
    </div>
  );
};

export default ThoughtsPage;
