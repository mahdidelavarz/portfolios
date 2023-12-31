// import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";
const Home = () => {
  const [mac, setMac] = useState('');
  useEffect(() => {
      setMac(navigator.userAgent , 'ali');
    }, []); 
    console.log(mac);
  
  const handleType = (count) => {
    // console.log(count);
  };

  const handleDone = () => {
    // console.log(`Done after 5 loops!`);
  };
  return (
    <div className="w-full grid grid-cols-12 mt-24 justify-center items-center">
      <div className=" col-span-12 md:col-span-6  text-slate-100 pl-6 lg:pl-24">
        <h1 className="text-slate-100 text-4xl">Hi There !</h1>
        <h1 className="text-slate-100 text-4xl">
          I'M <b className="text-purple-500 shadow-sm">Mahdi Delavar</b>{" "}
        </h1>
        <div className="mt-6 text-xl md:text-2xl lg:text-3xl">
          <Typewriter
            words={[
              "Web Developer",
              "FrontEnd Developer ",
              "Software Engineer (not yet lol)",
            ]}
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
