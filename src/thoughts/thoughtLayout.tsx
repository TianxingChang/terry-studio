// import React from "react";
import { MDXProvider } from "@mdx-js/react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useStore from "../store/useStore";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: start;
  margin: 0 auto;
  padding: 50px;
  font-family: system-ui, -apple-system, sans-serif;
`;

const Content = styled.article`
  line-height: 1.6;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 6rem;
  }

  h2 {
    font-size: 1.8rem;
    margin: 2rem 0 1rem;
  }

  p {
    margin-bottom: 1.5rem;
    color: rgb(100, 100, 100);
  }

  code {
    background-color: #f4f4f4;
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-family: "Menlo", monospace;
  }

  pre {
    background-color: #f8f8f8;
    padding: 1rem;
    border-radius: 8px;
    overflow-x: auto;
  }
`;

const components = {
  wrapper: Content,
  // 可以在这里添加更多自定义组件样式
};

const ThoughtLayout = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const { setCurrentPage, currentPage } = useStore();
  const Date = "2024.4";

  return (
    <Container>
      <div className="w-1/2">
        <div className="w-full justify-between items-center flex mb-20">
          <div
            onClick={() => {
              setCurrentPage("Thoughts");
              console.log("setCurrentPage", currentPage);
              navigate(-1);
            }}
            className="text-white  rounded p-2 pl-0 hover:text-purple-200 text-lg"
          >
            ←
          </div>
          <div>{Date}</div>
        </div>
        <MDXProvider components={components}>{children}</MDXProvider>
      </div>
    </Container>
  );
};

export default ThoughtLayout;
