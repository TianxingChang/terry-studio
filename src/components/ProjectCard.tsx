/*
 * @Author: Matroid_Walker adimensioner@gmail.com
 * @Date: 2025-02-25 18:03:05
 * @LastEditors: Matroid_Walker adimensioner@gmail.com
 * @LastEditTime: 2025-02-27 02:53:49
 * @FilePath: /terry-studio/src/components/ProjectCard.tsx
 * @Description:
 *
 * Copyright (c) 2025 by Terry Chang, All Rights Reserved.
 */
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function ProjectCard({
  title,
  description,
  image,
  link,
}: {
  title: string;
  description: string;
  image: string;
  link: string;
}) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ={50}
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as={"p"}
          translateZ={60}
          className="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ={100} className="mt-4 w-full">
          <img
            src={image}
            className="object-cover w-full h-60 rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={"a"}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-normal rounded-xl transition-colors duration-300 dark:text-white hover:bg-neutral-200 dark:hover:bg-neutral-800"
          >
            View Project →
          </CardItem>
          <CardItem
            translateZ={20}
            as={"button"}
            className="px-4 py-2 text-xs font-bold text-white bg-black rounded-xl transition-colors duration-300 dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200"
          >
            Visit
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
