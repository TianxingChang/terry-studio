import React from "react";
import TextPressure from "../components/TextPursure";

const InterMindPage = () => {
  return (
    <div className="w-full flex-col items-center justify-center">
      {/* Header Section */}
      <div className="w-full flex justify-center mb-8">
        <div className="w-4/7 md:w-4/7 flex items-center justify-center bg-[rgb(10,10,10)] rounded-xl border-[1px] border-[rgb(40,40,40)]">
          <div className="w-full md:w-1/2">
            <TextPressure
              text="InterMind"
              flex={true}
              alpha={false}
              stroke={false}
              italic={true}
              textColor="#ffffff"
              strokeColor="#ff0000"
              minFontSize={36}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full flex justify-center">
        <div className="w-4/7 md:w-4/7 flex flex-col gap-6 text-white">
          {/* Project Overview */}
          <section className="bg-[rgb(10,10,10)] p-6 rounded-xl border-[1px] border-[rgb(40,40,40)]">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-gray-300">
              InterMind is an AI-powered presentation tool developed in 2024. It
              helps users create engaging presentations by leveraging artificial
              intelligence to enhance content creation and delivery.
            </p>
          </section>

          {/* Features Section */}
          <section className="bg-[rgb(10,10,10)] p-6 rounded-xl border-[1px] border-[rgb(40,40,40)]">
            <h2 className="text-2xl font-bold mb-4">Key Features</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>AI-assisted content generation</li>
              <li>Smart slide layout optimization</li>
              <li>Real-time presentation analytics</li>
              <li>Collaborative editing capabilities</li>
            </ul>
          </section>

          {/* Technologies Used */}
          <section className="bg-[rgb(10,10,10)] p-6 rounded-xl border-[1px] border-[rgb(40,40,40)]">
            <h2 className="text-2xl font-bold mb-4">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "AI/ML", "Node.js"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-[rgb(20,20,20)] rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default InterMindPage;
