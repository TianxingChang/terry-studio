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

function App() {
  const { currentPage, setCurrentPage } = useStore(); // 使用 Zustand store
  const Layout = () => {
    const navigate = useNavigate();
    return (
      <div className="min-w-screen bg-black min-h-[100vh] overflow-x-hidden text-white font-outfit flex flex-col">
        <div className="w-full pt-20 text-3xl flex justify-center items-center p-10 ">
          Terry's Studio
        </div>
        <div className="w-full flex justify-center px-2">
          <div className="w-5/7 md:w-4/7 flex justify-between pt-12 pb-3 items-center">
            <div className="flex justify-center space-x-4">
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
              className="rounded-md px-3 text-sm py-1 bg-[rgb(63,63,63)] hover:bg-[rgb(100,100,100)] cursor-pointer"
            >
              {window.innerWidth < 768 ? "💬" : "Chat"}
            </div>
          </div>
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
      </Routes>
    </>
  );
}

export default App;
