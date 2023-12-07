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
        <div className="w-full lg:w-auto h-[50vh] md:h-[70vh] px-5 mt-16 lg:mt-0 flex items-center justify-center">
          {/* <h1 className="text-slate-200 text-2xl">You Can Find Me On : </h1> */}
          <div className="w-full lg:w-auto h-[26rem]  text-slate-200 mt-6 flex justify-center items-center">
            <ul className="w-48 h-48 md:w-80 md:h-80 rounded-full border border-opacity-30 border-purple-700 md:text-5xl text-3xl flex justify-center items-center relative move">
              <img
                src="./62-624846_sun-hd-png-sun-png-full-hd-clipart_prev_ui (1).png"
                className="md:w-32 md:h-32 w-24 h-24 rounded-full"
                alt=""
              />
              <li className="md:w-20 md:h-20 w-16 h-16 rounded-full absolute -top-7 right-[75px] md:-top-10 md:right-32 flex justify-center items-center">
                <FaGithub className="cursor-pointer stop" />
              </li>
              <li className="md:w-20 md:h-20 w-16 h-16 rounded-full absolute md:top-10 md:-left-5 top-5 -left-6 flex justify-center items-center">
                <FaTwitter className="cursor-pointer stop" />
              </li>
              <li className=" md:w-20 md:h-20 w-16 h-16 rounded-full absolute bottom-5 -right-[22px] md:bottom-10 md:-right-5 flex justify-center items-center">
                <FaTelegram className="cursor-pointer stop" />
              </li>
              <li className="md:w-20 md:h-20 w-16 h-16 rounded-full absolute md:bottom-10 md:-left-5 bottom-0 -left-4 flex justify-center items-center">
                <BsInstagram className="cursor-pointer stop" />
              </li>
              <li className="md:w-20 md:h-20 w-16 h-16 rounded-full absolute md:top-10 md:-right-5 top-2 -right-3  flex justify-center items-center">
                <ImLinkedin className="cursor-pointer stop" />
              </li>
              <li className="md:w-20 md:h-20 w-16 h-16 rounded-full absolute -bottom-7 right-[40px] md:-bottom-10 md:right-[120px]  flex justify-center items-center">
                <ImFacebook2 className="cursor-pointer stop" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
