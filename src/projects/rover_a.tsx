/*
 * @Author: Matroid_Walker adimensioner@gmail.com
 * @Date: 2025-02-26 00:37:44
 * @LastEditors: Matroid_Walker adimensioner@gmail.com
 * @LastEditTime: 2025-02-26 23:44:07
 * @FilePath: /terry-studio/src/projects/rover_a.tsx
 * @Description:
 *
 * Copyright (c) 2025 by Terry Chang, All Rights Reserved.
 */
export default function Page() {
  return (
    <div className="h-screen w-screen  flex flex-col justify-center  items-center px-4">
      <div className="w-full text-xl text-center font-bold">Rover-A</div>
      <div className="font-[family-name:var(--font-geist-mono)] mb-4">
        A project for fun.
      </div>
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/-0G5-Zo1iWw`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        className="rounded-lg"
      />
    </div>
  );
}
