const AboutMe = () => {
  return (
    <div className="w-full h-[90vh] flex flex-col flex-col-revers gap-20 md:gap-0 md:flex-row justify-center  items-center  px-6">
      <div className="md:w-2/3 h-auto text-slate-100 flex gap-6 flex-col pl-6 lg:pl-24">  
        <h1 className="text-3xl  lg:text-5xl xl:translate-x-12 xl:-translate-y-10">
          LET ME <b className="text-purple-600">INTRODUCE</b> MYSELF
        </h1>
        <p className="text-xl lg:text-2xl mt-5">I am <b className="text-purple-600">FrontEnd</b> Web Developer </p>
        <p className="text-xl lg:text-2xl">
          Currently , My focus is on <b className="text-purple-600">JavaScript</b> and <b className="text-purple-600">React</b> library
        </p>
        <p className="text-xl lg:text-2xl">I debug more than I code.</p>
      </div>
      <div className="md:w-1/3 flex justify-center">
        <img src="./avatar.5852f40fbb38aa284829fa3fb7722225.svg" alt="avatar" />
      </div>
    </div>
  );
};

export default AboutMe;
