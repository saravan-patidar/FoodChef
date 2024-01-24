import { GITHUB_URL, LINKDIN_URL, GMAIL_URL } from "../utils/constants";
import avatar from "../images/avatar.png";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const About = () => {
  return (
    <div className="pt-28 text-center bg-gray-200  h-screen  ">
      <div className="bg-white w-96 m-auto shadow-my-s rounded-t-xl">
        <p className="font-bold p-3 text-xl">ABOUT ME</p>
        <img className="m-auto w-44" src={avatar} />
      </div>
      <div className="bg-slate-600 w-96 m-auto shadow-my-s rounded-b-xl">
        <p className="text-wrap p-2 w-56 font-bold text-white text-lg m-auto">
          ReactJs | JavaScript | HTML5 | CSS3 | Tailwind CSS | Front End
          Developer
        </p>
        <div className="flex justify-center gap-3 m-2 p-3">
          <div className="bg-gray-400 rounded-full size-14 relative cursor-pointer">
            <a href={GITHUB_URL}>
              <FaGithub className="fa-brands fa-github text-4xl text-white absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" />
            </a>
          </div>
          <div className="bg-blue-500 rounded-full size-14 relative cursor-pointer">
            <a href={LINKDIN_URL}>
              <FaLinkedin className="fa-brands fa-linkedin text-4xl text-white absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" />
            </a>
          </div>
          <div className="bg-red-400 rounded-full size-14 relative cursor-pointer">
            <a href={GMAIL_URL}>
              <FaEnvelope className="fa-solid fa-envelope text-4xl text-white absolute left-1/2 -translate-x-1/2 top-1/2  -translate-y-1/2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
