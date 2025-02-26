import React from "react";
import TextPressure from "./TextPursure";
import InfiniteScroll from "./InfiniteScroll";
import { ProjectCard } from "./ProjectCard";

const ProjectsPage = () => {
  const items = [
    { content: "Text Item 1" },
    { content: <p>Paragraph Item 2</p> },
    { content: "Text Item 3" },
    { content: <p>Paragraph Item 4</p> },
    { content: "Text Item 5" },
    { content: <p>Paragraph Item 6</p> },
    { content: "Text Item 7" },
    { content: <p>Paragraph Item 8</p> },
    { content: "Text Item 9" },
    { content: <p>Paragraph Item 10</p> },
    { content: "Text Item 11" },
    { content: <p>Paragraph Item 12</p> },
    { content: "Text Item 13" },
    { content: <p>Paragraph Item 14</p> },
  ];

  return (
    <div className="w-full flex-col items-center justify-center  ">
      <div className="w-full flex justify-center ">
        <div className="w-4/7 md:w-4/7 flex items-center justify-center  rounded-xl mt-10 mb-0 border-[rgb(40,40,40)]">
          <div className="w-full md:w-1/3  ">
            <TextPressure
              className=""
              text="Projects"
              flex={true}
              alpha={false}
              stroke={false}
              // width={true}
              // weight={true}
              italic={true}
              textColor="#ffffff"
              strokeColor="#ff0000"
              minFontSize={36}
            />
          </div>
          <div className="h-10"></div>
        </div>
      </div>
      <ProjectCard
        title="InterMind"
        description="AI-powered presentation tool  -- [2024]"
        image="/intermind/idea_image.jpg"
        link="/projects/intermind"
      />
      <ProjectCard
        title="Dash"
        description="Web app "
        image="/dash/dash_demo.png"
        link="/projects/dash"
      />
      <ProjectCard
        title="Truth Camera"
        description="Hackathon project"
        image="/truthcamera/hackUST_2.jpg"
        link="/projects/truth_camera"
      />
      <ProjectCard
        title="FreeRider X"
        description="HCI project -- [2022]"
        image="/freerider/freerider_1.jpg"
        link="/projects/freerider_x"
      />
      <ProjectCard
        title="Rover A"
        description="DIY project -- [2021]"
        image="https://i.ytimg.com/vi/-0G5-Zo1iWw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBx1l4ZjzZRjTxvwbCZYtGKjNql-w"
        link="/projects/rover_a"
      />
      <ProjectCard
        title="Not a Segway"
        description="Concept Design -- [2020]"
        image="/segway/segway.png"
        link="/projects/segway"
      />
      <ProjectCard
        title="CyberLamp"
        description="Design of a desk lamp"
        image="/lampfi/lampfi_cover.png"
        link="/projects/cyberlamp"
      />
      {/* <div className="w-full flex justify-center h-100 mb-10">
        <div className="w-5/7 md:w-4/7 justify-center flex bg-[rgb(10,10,10)] rounded-b-lg border-[rgb(40,40,40)] border-[1px] overflow-hidden">
          <div style={{ position: "relative" }} className="w-full h-full">
            <InfiniteScroll
              items={items}
              isTilted={false}
              tiltDirection="left"
              autoplay={true}
              autoplaySpeed={0.01}
              autoplayDirection="down"
              pauseOnHover={true}
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ProjectsPage;
