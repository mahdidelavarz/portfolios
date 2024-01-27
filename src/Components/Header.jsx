import { MdGTranslate } from "react-icons/md";
import { BiHomeSmile } from "react-icons/bi";
import { FaUserAstronaut, FaReacteurope } from "react-icons/fa";
import BurgerMenu from "./BurgerMenu";
import { GiRelationshipBounds } from "react-icons/gi";
import { Link } from "react-scroll";
import { useTranslate } from "../context/TranslationContext";
const Header = () => {
  const handleSetActive = (to) => {
    console.log(to);
  };
  const { lng, setLng } = useTranslate();
  return (
    <div className="w-full h-20 bg-[#190229] fixed top-0 shadow-md shadow-[#2d183d] flex justify-between items-center z-50 md:px-10" dir={lng ? 'ltr' : 'rtl'}>
      <ul className=" h-full items-center gap-10 px-10 hidden md:flex">
        <li className="flex gap-2 text-slate-100 cursor-pointer items-center">
          <Link
            className="flex gap-2"
            activeClass="active"
            to="Home"
            spy={true}
            smooth={true}
            offset={-60}
            duration={500}
            onSetActive={handleSetActive}
          >
            <BiHomeSmile className="text-2xl" />
            <span>{lng ? 'Home' : 'خانه'}</span>
          </Link>
        </li>
        <li className="flex gap-2 text-slate-100 cursor-pointer items-center">
          <Link
            className="flex gap-2"
            activeClass="active"
            to="AboutMe"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={handleSetActive}
          >
            <FaUserAstronaut className="text-xl" />
            <span>{lng ? 'About me' : 'درباره من'}</span>
          </Link>
        </li>
        <li className="flex gap-2 text-slate-100 cursor-pointer items-center">
          <Link
            className="flex gap-2"
            activeClass="active"
            to="Portfolio"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
            onSetActive={handleSetActive}
          >
            <FaReacteurope className="text-2xl" />
            <span>{lng ? 'Projects' : 'پروژه ها'}</span>
          </Link>
        </li>
        <li className="flex gap-2 text-slate-100 cursor-pointer items-center">
          <Link
            className="flex gap-2"
            activeClass="active"
            to="ContactMe"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
            onSetActive={handleSetActive}
          >
            <GiRelationshipBounds className="text-2xl" />
            <span>{lng ? 'Contact Me' : 'تماس با من'}</span>
          </Link>
        </li>
      </ul>
      <button
        className="w-16 h-10 text-slate-600 p-2 rounded-xl  bg-purple-100 md:flex gap-2 items-center hidden "
        onClick={() => setLng(!lng)}
      >
        <MdGTranslate />
        <span className="text-lg">{lng ? "en" : "fr"}</span>
      </button>
      <div className="w-full h-full flex items-center justify-between px-10 md:hidden">
        <BurgerMenu />
        <button
          className="text-slate-600 p-2 rounded-xl  bg-purple-100 flex gap-2 items-center"
          onClick={() => setLng(!lng)}
        >
          <MdGTranslate />
          <span className="text-lg">{lng ? "en" : "fr"}</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
