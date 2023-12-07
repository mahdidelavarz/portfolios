import { TiHtml5, TiCss3 } from "react-icons/ti";
import {
  BiLogoTailwindCss,
  BiLogoRedux,
  BiLogoTypescript,
} from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { BsGit, BsGithub } from "react-icons/bs";
import { RiJavascriptFill } from "react-icons/ri";
import { SiMui } from "react-icons/si";

const Expertise = () => {
  return (
    <div className="w-full h-auto flex flex-col lg:px-40 px-10 justify-center gap-5">
      <h1 className="text-purple-200 text-4xl">
        <b>I am fluent in :</b>
      </h1>
      <div className="w-full h-20 text-slate-200 flex justify-between text-5xl lg:text-7xl md:px-20 mt-10">
        <TiHtml5 className="text-rose-500" />
        <TiCss3 className="text-blue-500" />
        <RiJavascriptFill className="text-yellow-500" />
        <FaReact className="text-purple-500" />
      </div>
      <div className="w-full h-20 text-slate-200 flex justify-between text-5xl lg:text-7xl md:px-20">
        <BiLogoTypescript className="text-blue-500" />
        <BiLogoTailwindCss className="text-teal-500" />
        <SiMui className="text-cyan-500" />
        <BiLogoRedux className="text-indigo-500" />
      </div>
      <div className="w-full h-20 text-slate-200 flex justify-between text-5xl lg:text-7xl xl:gap-28 ">
        <div className="w-1/2 flex justify-center ">
          <BsGit className="text-red-500" />
        </div>
        <div className="w-1/2 flex justify-center">
          <BsGithub />
        </div>
      </div>
    </div>
  );
};

export default Expertise;
