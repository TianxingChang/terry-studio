/*
 * @Author: Matroid_Walker adimensioner@gmail.com
 * @Date: 2025-02-26 01:41:02
 * @LastEditors: Matroid_Walker adimensioner@gmail.com
 * @LastEditTime: 2025-02-27 01:42:33
 * @FilePath: /terry-studio/src/thoughts/thoughtLayout.tsx
 * @Description:
 *
 * Copyright (c) 2025 by Terry Chang, All Rights Reserved.
 */
// import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { useNavigate } from "react-router-dom";
import useStore from "../store/useStore";

// 将 styled components 转换为普通的 Tailwind 样式组件
const Content = ({ children }: { children: React.ReactNode }) => (
  <article className="max-w-none">{children}</article>
);

const components = {
  wrapper: Content,
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 {...props} className="!text-4xl !font-bold !text-blue-600 !mb-20" />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      {...props}
      className="!text-purple-600 hover:!text-purple-800 !underline"
    />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      {...props}
      className="!bg-gray-100 dark:!bg-gray-800 !rounded !px-2 !py-1"
    />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      {...props}
      className="!border-l-4 !border-purple-500 !pl-4 !italic !my-4"
    />
  ),
  // 添加其他常用元素
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p {...props} className="!text-gray-200 !mb-4 !leading-relaxed" />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      {...props}
      className="!text-3xl !font-bold !text-blue-500 !mt-8 !mb-4"
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      {...props}
      className="!text-2xl !font-bold !text-blue-400 !mt-6 !mb-3"
    />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul {...props} className="!list-disc !pl-6 !mb-4" />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol {...props} className="!list-decimal !pl-6 !mb-4" />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li {...props} className="!mb-2" />
  ),
};

// 修改组件的接口定义
interface ThoughtLayoutProps {
  children: React.ReactNode;
  date: string;
}

const ThoughtLayout = ({ children, date }: ThoughtLayoutProps) => {
  const navigate = useNavigate();
  const { setCurrentPage } = useStore();

  return (
    <div className="flex justify-center items-start pt-20 pb-10 w-screen min-h-screen font-sans">
      <div className="w-4/5 md:w-1/2">
        <div className="flex justify-between items-center mb-20 w-full">
          <div
            role="button"
            onClick={() => {
              setCurrentPage("Thoughts");
              navigate("/", { state: { from: "thoughts" } });
            }}
            className="text-lg text-white transition-colors duration-200 cursor-pointer hover:text-purple-200"
          >
            ←
          </div>
          <div>{date}</div>
        </div>
        <MDXProvider components={components}>{children}</MDXProvider>
      </div>
    </div>
  );
};

export default ThoughtLayout;
