import { FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { RiArrowGoBackLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { PortfoliosData } from "../data";
const SinglePortfolio = () => {
  const { id } = useParams();
  const itemsData = PortfoliosData.filter((i) => i.id == id);
  const data = itemsData[0];
  return (
    <>
      <div className="w-full h-auto">
        {/* header */}
        <div className="w-full px-8 items-center h-20 bg-purple-950 lg:bg-red-500  fixed top-0 right-0 left-0 rounded-b-3xl flex justify-between ">
          <h1 className="text-slate-200 text-2xl">{data.enTitle}</h1>
          <Link to={"/"}>
            <button className="text-2xl text-slate-200 py-2 px-6 rounded-xl border-2 border-purple-600 ">
              <RiArrowGoBackLine />
            </button>
          </Link>
        </div>
        {/* main */}
        <div className="w-full h-auto  mt-20 p-4 container mx-auto flex flex-col items-center">
          <div className="flex flex-col lg:flex-row-reverse items-center  ">
            <div className="border-2 border-opacity-60 rounded-md border-purple-950 h-fit">
              <div className="flex">
                <img
                  src={data.mainImages.pImg}
                  className="w-80 object-cover p-2"
                />
                <img
                  src={data.mainImages.dImg}
                  alt="digitize"
                  className="w-[50vw] hidden xl:flex p-2 object-cover"
                />
              </div>
              <div className="w-full ">
                <div className="w-full h-full  rounded-md flex justify-between items-center border-t border-purple-950 shadow-md shadow-purple-950">
                  <div className="px-8 py-3  text-slate-200 flex gap-3 cursor-pointer">
                    <FaEye className="text-lg mt-[4px]" />
                    <span className="text-base">See online</span>
                  </div>
                  <div className="px-8 py-3  text-slate-200 flex gap-3 cursor-pointer">
                    <FaGithub className="text-lg mt-[2px]" />
                    <span className="text-base">Github</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-96 xl:w-60 h-auto flex flex-wrap text-slate-100 gap-4 mt-10 lg:mt-0 justify-center">
              {data.tools.map((t) => (
                <div className="w-40 h-12 bg-gradient-to-tl  from-purple-950  shadow-sm shadow-stone-600 py-2 px-4 flex justify-center rounded-t-xl rounded-bl-xl items-center gap-x-3 text-sm">
                  <span>{t.title}</span>
                  <div className="text-xl">{t.icon}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full grid grid-cols-12 lg:mt-20  ">
            {data.description.map((d) => {
              return (
                <div className="col-span-12 lg:col-span-6 flex justify-start md:px-7  mt-12 text-slate-200 gap-4">
                  <img src={d.pImg} alt="digi" className="w-40" />
                  <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-bold text-rose-400 mb-3">
                      {d.enTitle}
                    </h1>
                    {d.enParas.map((p) => (
                      <p>{p}</p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePortfolio;
