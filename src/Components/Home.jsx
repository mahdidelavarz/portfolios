// import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";
import { useTranslate } from "../context/TranslationContext";
const Home = () => {
  const [mac, setMac] = useState("");
  const { lng } = useTranslate();
  useEffect(() => {
    setMac(navigator.userAgent, "ali");
  }, []);
  console.log(mac);

  const handleType = (count) => {
    console.log(count);
  };

  const handleDone = () => {
    // console.log(`Done after 5 loops!`);
  };
  return (
    <div
      className="w-full grid grid-cols-12 mt-24 justify-center items-center"
      dir={lng ? 'ltr' : 'rtl'}
    >
      <div className={` col-span-12 md:col-span-6  text-slate-100 ${lng ? "pl-6 lg:pl-24" : "pr-6 lg:pr-24"}`}>
        <div className="flex gap-3">
          <h1 className="text-slate-100 text-4xl mb-6">{lng ? 'Hi There !' : 'درود بر شما !'}</h1>
          <span className="wave text-4xl" role="img" aria-labelledby="wave">
            👋🏻
          </span>
        </div>
        <h1 className="text-slate-100 text-4xl md:text-5xl">
          {lng ? "I'M" : 'من'} <b className="text-purple-500 shadow-sm">{lng ? "Mahdi Delavar" : 'مهدی دلاور'}</b>{!lng && 'هستم .' }
        </h1>
        <div className="mt-10 text-2xl md:text-3xl lg:text-3xl">
          <Typewriter
            words={
              lng
                ? [
                    "Web Developer",
                    "FrontEnd Developer ",
                    "Software Engineer (not yet lol)",
                  ]
                : [" برنامه نویس وب ", "توسعه دهنده رابط کاربری ", " توسعه دهنده وب اپلیکیشن "]
            }
            loop={50}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={40}
            delaySpeed={1300}
            onLoopDone={handleDone}
            onType={handleType}
          />
        </div>
      </div>
      <div className="col-span-12 md:col-span-6">
        <img
          className="lg:w-[40vw] lg:h-[70vh] bg-gradient-to-t from-[#190229] md:bg-none bg-opacity-5 rounded-xl"
          src="./home-main.541f8179af8209ce03ccf2178fe62dbf.svg"
          alt="main"
        />
      </div>
    </div>
  );
};

export default Home;
