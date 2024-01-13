import EmailForm from "./EmailForm";
import { FaTelegram, FaTwitter, FaGithub } from "react-icons/fa";
import { ImLinkedin, ImFacebook2 } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
const ContactMe = () => {
  return (
    <div>
      <div className=" md:px-20 lg:px-24 mt-16">
        <div className="w-full h-20 rounded-xl bg-gradient-to-b from-fuchsia-950 bg-opacity-30 flex justify-center text-slate-100 text-3xl items-center">
          <h1>Contact Me</h1>
        </div>
      </div>
      <div className="w-auto h-auto lg:flex mt-10 pb-10">
        <EmailForm />
        <div className="w-full px-2 md:w-[30vw] flex">
          {/* <h1 className="text-slate-200 text-2xl">You Can Find Me On : </h1> */}
          <div className="text-slate-200 w-full">
            <ul className="flex flex-wrap w-full gap-4 justify-center mt-20">
              <li className="w-[100px] h-[100px] flex justify-center items-center bg-gradient-to-r from-purple-950 to-rose-950 rounded-xl text-4xl shadow-md">
                <FaGithub className="cursor-pointer shadow-md" />
              </li>
              <li className="w-[100px] h-[100px] flex justify-center items-center bg-gradient-to-r from-purple-950 to-rose-950 rounded-xl text-4xl shadow-md">
                <FaTwitter className="cursor-pointer shadow-md" />
              </li>
              <li className="w-[100px] h-[100px] flex justify-center items-center bg-gradient-to-r from-purple-950 to-rose-950 rounded-xl text-4xl shadow-md">
                <FaTelegram className="cursor-pointer shadow-md" />
              </li>
              <li className="w-[100px] h-[100px] flex justify-center items-center bg-gradient-to-r from-purple-950 to-rose-950 rounded-xl text-4xl shadow-md">
                <BsInstagram className="cursor-pointer shadow-md" />
              </li>
              <li className="w-[100px] h-[100px] flex justify-center items-center bg-gradient-to-r from-purple-950 to-rose-950 rounded-xl text-4xl shadow-md">
                <ImLinkedin className="cursor-pointer shadow-md" />
              </li>
              <li className="w-[100px] h-[100px] flex justify-center items-center bg-gradient-to-r from-purple-950 to-rose-950 rounded-xl text-4xl shadow-md">
                <ImFacebook2 className="cursor-pointer shadow-md" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
