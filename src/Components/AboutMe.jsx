import { useTranslate } from "../context/TranslationContext";

const AboutMe = () => {
  const { lng } = useTranslate();
  return (
    <div
      className="w-full h-[90vh] flex flex-col flex-col-revers gap-20 md:gap-0 md:flex-row justify-center  items-center  px-6"
      dir={lng ? "ltr" : "rtl"}
    >
      <div
        className={`md:w-2/3 h-auto text-slate-100 flex gap-6 flex-col ${
          lng ? "pl-6 lg:pl-24" : "pr-6 lg:pr-24"
        }`}
      >
        <h1 className="text-3xl  lg:text-5xl xl:translate-x-12 xl:-translate-y-10">
          {lng ? "LET ME" : "بگذارید خودم را"}{" "}
          <b className="text-purple-600">{lng ? "INTRODUCE" : "معرفی"}</b>{" "}
          {lng ? "MYSELF" : "کنم"}
        </h1>
        <p className="text-xl lg:text-2xl mt-5">
          {lng ? "I am" : "من توسعه دهنده"}{" "}
          <b className="text-purple-600">{lng ? "FrontEnd" : "رابط کاربری"}</b>{" "}
          {lng ? "Web Developer" : "هستم ."}
        </p>
        <p className="text-xl lg:text-2xl">
          {lng ? "Currently , My focus is on" : " درحال حاضر ، تمرکزم بر روی "}
          <b className="text-purple-600 mx-1">
            {lng ? "JavaScript" : "جاوااسکریپت"}
          </b>{" "}
          {lng ? "and" : "و"}
          <b className="text-purple-600 mx-1">
            {lng ? "react" : "کتابخانه ریکت"}
          </b>{" "}
          {lng ? "library" : "است ."}
        </p>
        <p className="text-xl lg:text-2xl">
          {lng
            ? "I debug more than I code."
            : "من بیشتر از کدنویسی ، به دیباگ کردن مشغولم !!"}
        </p>
      </div>
      <div className="md:w-1/3 flex justify-center">
        <img src="./avatar.5852f40fbb38aa284829fa3fb7722225.svg" alt="avatar" />
      </div>
    </div>
  );
};

export default AboutMe;
