/*
 * @Author: Matroid_Walker adimensioner@gmail.com
 * @Date: 2025-02-26 01:36:56
 * @LastEditors: Matroid_Walker adimensioner@gmail.com
 * @LastEditTime: 2025-02-26 23:38:43
 * @FilePath: /terry-studio/src/thoughts/thoughtPage.tsx
 * @Description:
 *
 * Copyright (c) 2025 by Terry Chang, All Rights Reserved.
 */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { marked } from "marked";
import ThoughtLayout from "./thoughtLayout";
import ReactMarkdown from "react-markdown";
import { thoughtItems } from "./thoughtsList";

const ThoughtPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [content, setContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 查找对应文章的日期
  const currentThought = thoughtItems.find(
    (item) => item.link === `/thoughts/${id}`
  );
  const thoughtDate = currentThought?.time || "未知日期";

  useEffect(() => {
    const fetchThought = async () => {
      try {
        const response = await fetch(`/content/thought_${id}.md`);
        if (!response.ok) {
          throw new Error("Thought not found");
        }
        const text = await response.text();
        // const htmlContent = marked(text); // Convert markdown to HTML
        setContent(text);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load thought");
      } finally {
        setIsLoading(false);
      }
    };

    fetchThought();
  }, [id]);

  if (isLoading) {
    return <div className="text-white p-10 w-full text-center">Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ThoughtLayout date={thoughtDate}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </ThoughtLayout>
  );
};

export default ThoughtPage;
