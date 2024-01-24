import { GITHUB_URL, LINKDIN_URL, GMAIL_URL } from "../utils/constants";
import avatar from "../images/avatar.png";

const About = () => {
  return (
    <div className="pt-28 text-center bg-gray-200 h-screen">
      <div className="bg-white w-96 m-auto">
        <p className="font-bold p-3 text-xl">ABOUT ME</p>
        <img className="m-auto w-44" src={avatar} />
      </div>
      <div className="bg-slate-600 w-96 m-auto">
        <p className="text-wrap p-2 w-56 font-bold text-white text-lg m-auto">
          ReactJs | JavaScript | HTML5 | CSS3 | Tailwind CSS | Front End
          Developer
        </p>
        <div className="flex justify-center gap-3 m-2 p-3">
          <div className="bg-gray-400 rounded-full size-14 relative cursor-pointer">
            <a href={GITHUB_URL}>
              <i className="fa-brands fa-github text-4xl text-white absolute left-3 top-3"></i>
            </a>
          </div>
          <div className="bg-blue-500 rounded-full size-14 relative cursor-pointer">
            <a href={LINKDIN_URL}>
              <i className="fa-brands fa-linkedin text-4xl text-white absolute left-3 top-3"></i>
            </a>
          </div>
          <div className="bg-red-400 rounded-full size-14 relative cursor-pointer">
            <a href={GMAIL_URL}>
              <i className="fa-solid fa-envelope text-4xl rounded-full text-white absolute left-3 top-3"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
