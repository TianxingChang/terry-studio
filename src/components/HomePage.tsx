import Lanyard from "./myLinyard/Linyard.tsx";
import { GithubFill, XFill, LinkedinFill, Envelope } from "akar-icons";

const HomePage = () => {
  return (
    <div className="w-full mb-70 md:mb-44 md:mt-6">
      <div className="flex justify-center w-full rounded-3xl h-100">
        <div className="w-5/7  md:w-2/7 rounded-2xl border-[1px] border-[rgb(46,46,46)] bg-[rgb(26,26,26)]">
          <Lanyard position={[0, 0, 13]} gravity={[0, -40, 0]} />
        </div>
      </div>
      <div className="flex justify-center mt-10 w-full text-lg space-x-30">
        <div className="flex-col justify-center items-center text-sm w-5/7 md:text-base">
          <div>
            <div className="flex gap-3 items-center md:justify-center">
              <div className="border-[1px] p-1 border-black rounded-md  hover:border-[rgb(100,100,100)]">
                <a href="https://github.com/tianxingchang">
                  <GithubFill strokeWidth={2} size={18} />
                </a>
              </div>
              <div className="border-[1px] p-1 border-black rounded-md  hover:border-[rgb(100,100,100)]">
                <a href="https://x.com/crazibility">
                  <XFill strokeWidth={2} size={18} />
                </a>
              </div>
              <div className="border-[1px] p-1 border-black rounded-md  hover:border-[rgb(100,100,100)]">
                <a href="https://www.linkedin.com/in/terry-chang-hkust/">
                  <LinkedinFill strokeWidth={2} size={18} />
                </a>
              </div>

              <div className="border-[1px] p-1 border-black rounded-md  hover:border-[rgb(100,100,100)]">
                <a href="mailto:tchangac@connect.ust.hk">
                  <Envelope strokeWidth={2} size={18} />
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center mt-6 w-full md:justify-center">
            💡 Building The Knowledge Engine for Mankind.
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-20 w-full h-screen md:mt-26">
        <div className="w-5/7 md:w-3/7">
          <div className="mb-4 text-xl">About Me</div>
          <div className="text-[rgb(140,140,140)]">
            Hi, I'm Terry Chang. <br />
            I'm an MPhil student @ HKUST TIE, supervised by Prof Zhang Qian.
            Previously, I earned my BSc degree @ HKUST ISD, with a minor in Big
            Data Technology. I'm an LLM enthusiast and full stack developer.
            Beyond coding, I'm passionate about design (3D, UI/UX, HCI,
            product). I also enjoy playing football, music, and cycling.
          </div>
          <div className="mb-4 text-xl mt-18">Research Interest</div>
          <div className="text-[rgb(140,140,140)]">
            • Multimodal Learning <br />
            • Human-AI Interaction <br />
            • AI for Education <br />
            • LLM4Rec <br />
          </div>
          <div className="mb-4 text-xl mt-18">Awards</div>
          <div className="text-[rgb(140,140,140)]">
            • hackUST 2023 champion <br />
            • Best Insight Award @Shenzhen Innox <br />
            • HKSTP Ideation <br />
          </div>
          <div className="mb-4 text-xl mt-18">Education</div>
          <div className="text-[rgb(140,140,140)]">
            • MPhil TIE @HKUST <br />
            • Bsc ISD + minor BDT @HKUST <br />
            • Northeast Yucai School
            <br />
          </div>
          <div className="mb-4 text-xl mt-18">Work Experience</div>
          <div className="text-[rgb(140,140,140)]">
            • ML Engineer -- NEU NLP Group <br />
            • Software Engineer -- NiusTrans <br />
            • Lab Assistant -- HKUST Mitch Group <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
