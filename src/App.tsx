/*
 * @Author: Matroid_Walker adimensioner@gmail.com
 * @Date: 2025-02-24 00:56:23
 * @LastEditors: Matroid_Walker adimensioner@gmail.com
 * @LastEditTime: 2025-02-27 13:50:00
 * @FilePath: /terry-studio/src/App.tsx
 * @Description:
 *
 * Copyright (c) 2025 by Terry Chang, All Rights Reserved.
 */
import "./App.css";
import HomePage from "./components/HomePage";
import ProjectsPage from "./components/ProjectsPage";
import ThoughtsPage from "./components/ThoughtsPage";
import { Routes, Route, useNavigate } from "react-router-dom";
import Chat from "./pages/Chat";
import InterMindPage from "./projects/intermind";
import CyberLamp from "./projects/cyberlamp";
import Dash from "./projects/dash";
import FreeRiderX from "./projects/freerider_x";
import RoverA from "./projects/rover_a";
import TruthCamera from "./projects/truth_camera";
import Segway from "./projects/segway";
import ThoughtPage from "./thoughts/thoughtPage";
import useStore from "./store/useStore"; // 导入 Zustand store
import ShinyText from "./components/ui/ShinyText";

function App() {
  const { currentPage, setCurrentPage } = useStore(); // 使用 Zustand store
  const Layout = () => {
    const navigate = useNavigate();
    return (
      <div className="min-w-screen bg-black min-h-[100vh] overflow-x-hidden text-white font-outfit flex flex-col">
        <div className="flex justify-center px-2 w-full">
          <div className="flex justify-between items-center px-5 mt-8 mb-3 w-full md:mt-12 md:w-4/7">
            <div className="flex justify-center items-center space-x-4">
              <div
                onClick={() => setCurrentPage("Home")}
                className={` hover:text-gray-300 transition-colors ${
                  currentPage === "Home" ? "text-white" : "text-gray-400"
                }`}
              >
                Home
              </div>
              <div
                onClick={() => setCurrentPage("Projects")}
                className={`hover:text-gray-300 transition-colors ${
                  currentPage === "Projects" ? "text-white" : "text-gray-400"
                }`}
              >
                Projects
              </div>
              <div
                onClick={() => setCurrentPage("Thoughts")}
                className={`hover:text-gray-300 transition-colors ${
                  currentPage === "Thoughts" ? "text-white" : "text-gray-400"
                }`}
              >
                Thoughts
              </div>
            </div>
            <div
              onClick={() => navigate("/chat")}
              className="rounded-md px-3 font-bold text-xs py-[7px] bg-[rgb(23,23,23)] hover:bg-[rgb(50,50,50)] transition-colors cursor-pointer"
            >
              {window.innerWidth < 768 ? (
                <ShinyText
                  text="💫"
                  disabled={false}
                  speed={10}
                  className="custom-class"
                />
              ) : (
                <ShinyText
                  text="Terry AI"
                  disabled={false}
                  speed={10}
                  className="custom-class"
                />
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full">
          {currentPage === "Home" && (
            <div className="flex justify-center items-center p-10 mt-10 text-3xl text-center md:pt-20 w-5/7 md:w-full">
              Terry Chang <br /> 常天行
            </div>
          )}
          {/* {currentPage === "Projects" && (
            <div className="flex justify-center items-center pt-10 w-full text-3xl">
              ↓
            </div>
          )} */}
          {currentPage === "Thoughts" && (
            <div className="flex justify-center items-center p-10 pt-20 w-full text-3xl">
              Just a thought.
            </div>
          )}
        </div>
        {currentPage === "Home" && <HomePage />}
        {currentPage === "Projects" && <ProjectsPage />}
        {currentPage === "Thoughts" && <ThoughtsPage />}

        <div className="footer w-full h-30 text-sm justify-center items-center flex text-[rgb(60,60,60)]">
          Copyright @ 2025 RandomSkywalk. All rights reserved.
        </div>
      </div>
    );
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/projects/intermind" element={<InterMindPage />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/projects/cyberlamp" element={<CyberLamp />} />
        <Route path="/projects/freerider_x" element={<FreeRiderX />} />
        <Route path="/projects/rover_a" element={<RoverA />} />
        <Route path="/projects/truth_camera" element={<TruthCamera />} />
        <Route path="/projects/segway" element={<Segway />} />
        <Route path="/projects/dash" element={<Dash />} />
        <Route path="/thoughts/:id" element={<ThoughtPage />} />
        {/* 添加 404 路由 */}
        <Route path="*" element={<Layout />} />
      </Routes>
    </>
  );
}

export default App;
