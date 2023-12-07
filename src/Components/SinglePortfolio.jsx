import { IoCaretBackOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useParams } from "react-router-dom";
import SinglePortfolioSlider from "./SinglePorfolioSliders";
import { SinglePortfolioPhoneSlider } from "./SinglePorfolioSliders";
import { Link } from "react-router-dom";
const SinglePortfolio = () => {
  const { id } = useParams();
  return (
    <>
      <div className="px-6 flex gap-10">
        <div className="w-full h-[96vh] lg:w-[30vw] border-4 border-gray-800 rounded-3xl flex flex-col justify-between relative">
          <div className="w-full h-12 bg-gray-800 border-b-slate-900 border-b rounded-t-2xl flex justify-center items-center">
            <span className="w-3 h-3 rounded-full bg-white"></span>
          </div>
          <div className="w-full h-[82.6vh]">
            <SinglePortfolioPhoneSlider itemId={id} />
          </div>
          <div className="w-full h-12 bg-gray-700 rounded-b-2xl flex lg:justify-center justify-between items-center px-3">
            <Link className="flex text-xs gap-3 items-center px-3 py-2 bg-gray-800 text-slate-50 rounded-lg lg:hidden">
              <FaEye />
              See Online
            </Link>
            <span className="w-10 h-4 rounded-full bg-white"></span>
            <Link className="flex gap-3 items-center text-xs px-3 py-2 bg-fuchsia-950 text-slate-50 rounded-lg lg:hidden">
              <FaGithub />
              Get the source
            </Link>
          </div>
        </div>
        <div className="w-[60vw]  h-fit hidden lg:flex flex-col rounded-3xl ">
          <div className="w-full h-12 bg-gray-700 rounded-t-2xl flex justify-center items-center">
            <span className="w-3 h-3 rounded-full bg-white"></span>
          </div>
          <div className="w-full h-auto">
            <SinglePortfolioSlider itemId={id} />
          </div>
          <div className="w-full h-16 bg-gray-700 rounded-b-2xl flex justify-start items-center px-12 gap-6">
            <Link className="flex gap-3 items-center px-6 py-2 bg-gray-800 text-slate-50 rounded-lg">
              <FaEye />
              See Online
            </Link>
            <Link className="flex gap-3 items-center px-6 py-2 bg-fuchsia-950 text-slate-50 rounded-lg border-inner">
              <FaGithub />
              Get the source
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePortfolio;