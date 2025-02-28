// import TextPressure from "./TextPursure";
// import InfiniteScroll from "./InfiniteScroll";
import { ProjectCard } from "./ProjectCard";

const ProjectsPage = () => {
  return (
    <div className="flex-col justify-center items-center px-4 w-screen">
      <div className="flex justify-center px-2 w-full">
        <div className="w-4/7 md:w-4/7 flex items-center justify-center  rounded-xl mt-4 mb-0 border-[rgb(40,40,40)]">
          {/* <div className="px-10 my-10 w-full rounded-2xl md:w-1/3">
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
          </div> */}
          <div className="my-16 text-3xl">Projects Gallery</div>
        </div>
      </div>
      <div className="flex justify-center p-2 w-full">
        <div className="bg-[rgb(30,30,30)] px-2 py-1 rounded-2xl w-fit flex-col justify-center">
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
        </div>
      </div>
      {/* <div className="flex justify-center mb-10 w-full h-100">
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
