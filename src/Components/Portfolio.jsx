import { NavLink } from "react-router-dom";
import { PortfoliosData } from "../data";
const Portfolios = () => {
  const FirstPart = PortfoliosData.filter((p) => p.order === 1);
  const secondePart = PortfoliosData.filter((p) => p.order === 2);
  return (
    <div className="w-full mt-20 md:px-16 lg:px-20 ">
      <div className="w-full h-20 rounded-xl bg-gradient-to-b from-purple-950 bg-opacity-30 flex justify-center text-slate-100 text-3xl items-center">
        <h1>Portfolios</h1>
      </div>
      <div className="w-full px-6 mt-6 gap-20 pb-8 flex flex-col lg:flex-row">
        {FirstPart.map((portfolio) => {
          return (
            <div className=" w-full border border-[#005] bg-gradient-to-b from-[#002] bg-opacity-30 rounded-xl xl:h-[73vh] flex flex-col justify-between">
              <div>
                <img
                  src={portfolio.img}
                  alt={portfolio.title}
                  className="w-full"
                />
                <h1 className="px-4 py-2 mt-4 w-full text-slate-100 text-3xl">
                  {portfolio.title}
                </h1>
                <div className="w-full flex justify-start gap-4 text-slate-100 text-xs md:text-sm lg:text-base xl:text-lg px-2 md:px-4 mt-4 flex-wrap">
                 {portfolio.tools.map((tool)=>{
                  return <span className="px-2 lg:px-4 py-1 rounded-t-xl rounded-br-xl bg-gradient-to-r from-fuchsia-950 ">
                    {tool}
                  </span>
                 })}
                </div>
              </div>
              <NavLink to={`/Portfolio/${portfolio.id}`}>
          <button className="w-full flex h-12 justify-center items-center text-slate-100 bg-purple-950 rounded-xl mt-6 bg-opacity-70 hover:bg-opacity-100 duration-300">
            See The Details{" "}
          </button>
          </NavLink>
            </div>
          );
        })}
      </div>
      {/* 2 */}
      <div className="w-full px-6 mt-6 gap-20 pb-8 flex flex-col lg:flex-row">
      {secondePart.map((portfolio) => {
          return (
            <div className=" w-full border border-[#005] bg-gradient-to-b from-[#002] bg-opacity-30 rounded-xl xl:h-[73vh] flex flex-col justify-between">
              <div>
                <img
                  src={portfolio.img}
                  alt={portfolio.title}
                  className="w-full"
                />
                <h1 className="px-4 py-2 mt-4 w-full text-slate-100 text-3xl">
                  {portfolio.title}
                </h1>
                <div className="w-full flex justify-start gap-4 text-slate-100 text-xs md:text-sm lg:text-base xl:text-lg px-2 md:px-4 mt-4 flex-wrap">
                 {portfolio.tools.map((tool)=>{
                  return <span className="px-2 lg:px-4 py-1 rounded-t-xl rounded-br-xl bg-gradient-to-r from-fuchsia-950">
                    {tool}
                  </span>
                 })}
                </div>
              </div>
              <NavLink to={`/Portfolio/${portfolio.id}`}>
          <button className="w-full flex h-12 justify-center items-center text-slate-100 bg-purple-950 rounded-xl mt-6 bg-opacity-70 hover:bg-opacity-100 duration-300">
            See The Details{" "}
          </button>
          </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolios;

// 1
{
  /* <div className=" w-full border border-[#005] bg-gradient-to-b from-[#002] bg-opacity-30 rounded-xl xl:h-[73vh]  flex flex-col justify-between">
          <div className="w-full">
            <img src="./digitize-pic.png" alt="digitize" className="w-full" />
            <h1 className="px-4 py-2 mt-4 w-full text-slate-100 text-2xl">
              DigiTize
            </h1>
            <div className="w-full flex justify-start gap-4 text-slate-100 text-xs md:text-sm lg:text-base xl:text-lg md:px-4 mt-4 flex-wrap">
              <span className="px-2 lg:px-4 py-1 rounded-t-xl rounded-br-xl bg-purple-700">
                React Js
              </span>
              <span className="px-2 lg:px-4 py-1 rounded-t-xl rounded-br-xl bg-blue-700">
                Tailwind Css
              </span>
              <span className="px-2 lg:px-4 py-1  rounded-t-xl rounded-br-xl bg-yellow-600">
                Swiper Js
              </span>
              <span className="px-2 lg:px-4 py-1 rounded-t-xl rounded-br-xl bg-cyan-800">
                Formik React
              </span>
              <span className="px-2 lg:px-4 py-1 rounded-t-xl rounded-br-xl bg-gray-800">
                NextUi
              </span>
              <span className="px-2 lg:px-4 py-1 rounded-t-xl rounded-br-xl bg-green-700">
                Axios
              </span>
              <span className="px-2 lg:px-4 py-1 rounded-t-xl rounded-br-xl bg-indigo-900">
                Redux
              </span>
            </div>
          </div>
          <NavLink to={'/Portfolio/1'}>
          <button className="w-full flex h-12 justify-center items-center text-slate-100 bg-purple-950 rounded-xl mt-6 bg-opacity-70 hover:bg-opacity-100 duration-300">
            See The Details{" "}
          </button>
          </NavLink>
        </div> */
}
// 2
// <div className=" w-full border border-[#005] bg-gradient-to-b from-[#002] bg-opacity-30 rounded-xl xl:h-[73vh] flex flex-col justify-between">
//   <div>
//     <img src="./booking-hotel.png" alt="digitize" className="w-full" />
//     <h1 className="px-4 py-2 mt-4 w-full text-slate-100 text-3xl">
//       Booking Hotel
//     </h1>
//     <div className="w-full flex justify-start gap-4 text-slate-100 text-xs md:text-sm lg:text-base xl:text-lg md:px-4 mt-4 flex-wrap">
//       <span className="px-2 lg:px-4 py-1 rounded-t-xl rounded-br-xl bg-purple-700">
//         React Js
//       </span>
//       <span className="px-2 lg:px-4 py-1 rounded-t-xl rounded-br-xl bg-blue-700">
//         Tailwind Css
//       </span>
//       <span className="px-2 lg:px-4 py-1  rounded-t-xl rounded-br-xl bg-yellow-600">
//         Leaflet Js
//       </span>
//       <span className="px-2 lg:px-4 py-1 rounded-t-xl rounded-br-xl bg-green-700">
//         Axios
//       </span>
//       <span className="px-2 lg:px-4 py-1 rounded-t-xl rounded-br-xl bg-rose-500">
//         React DateRange
//       </span>
//     </div>
//   </div>
//   <button className="w-full flex h-12 justify-center items-center text-slate-100 bg-purple-950 rounded-xl mt-6 bg-opacity-70 hover:bg-opacity-100 duration-300">
//     See The Details{" "}
//   </button>
// </div>
// 3
// <div className="w-full border border-[#005] bg-gradient-to-b from-[#002] bg-opacity-30 rounded-xl xl:h-[73vh] flex flex-col justify-between">
//   <div>
//     <img src="./portfolios.png" alt="digitize" className="w-full" />
//     <h1 className="px-4 py-2 mt-4 w-full text-slate-100 text-3xl">
//       Inventory WebApplication
//     </h1>
//     <div className="w-full flex justify-start gap-4 text-slate-100 text-xs md:text-sm lg:text-base xl:text-lg md:px-4 mt-4">
//       <span className="px-2 lg:px-4 py-1 rounded-t-xl rounded-br-xl bg-purple-700 text-slate-100">
//         React Js
//       </span>
//       <span className="px-2 lg:px-4 py-1 rounded-t-xl rounded-br-xl bg-blue-700">
//         Tailwind Css
//       </span>
//       <span className="px-2 lg:px-4 py-1 rounded-t-xl rounded-br-xl bg-stone-700">
//         Particle Js
//       </span>
//     </div>
//   </div>
//   <button className="w-full flex h-12 justify-center items-center text-slate-100 bg-purple-950 rounded-xl mt-6 bg-opacity-70 hover:bg-opacity-100 duration-300">
//     See The Details{" "}
//   </button>
// </div>
// 4
//   <div className="w-full border border-[#005] bg-gradient-to-b from-[#002] bg-opacity-30 rounded-xl xl:h-[73vh] flex flex-col justify-between">
//   <div>
//     <img src="./inventory.png" alt="digitize" className="w-full" />
//     <h1 className="px-4 py-2 mt-4 w-full text-slate-100 text-3xl">
//       Inventory WebApplication
//     </h1>
//     <div className="w-full flex justify-start gap-4 text-slate-100 text-xs md:text-sm lg:text-base xl:text-lg md:px-4 mt-4 ">
//       <span className="px-2 lg:px-4 py-1 rounded-t-xl rounded-br-xl bg-yellow-400 text-slate-500">
//         JavaScript
//       </span>
//       <span className="px-2 lg:px-4 py-1 rounded-t-xl rounded-br-xl bg-blue-700">
//         Tailwind Css
//       </span>
//       <span className="px-2 lg:px-4 py-1 rounded-t-xl rounded-br-xl bg-teal-700">
//         OOP
//       </span>
//     </div>
//   </div>
//   <button className="w-full flex h-12 justify-center items-center text-slate-100 bg-purple-950 rounded-xl mt-6 bg-opacity-70 hover:bg-opacity-100 duration-300">
//     See The Details{" "}
//   </button>
// </div>
