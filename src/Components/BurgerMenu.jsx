import { CgMenuMotion } from "react-icons/cg";
import { BiHomeSmile } from "react-icons/bi";
import { FaUserAstronaut, FaReacteurope } from "react-icons/fa";
import { GiRelationshipBounds } from "react-icons/gi";
import { fallDown as Menu } from "react-burger-menu";
import { useState } from "react";
import { Link, Element, Events } from "react-scroll";
const BurgerMenu = () => {
  const handleSetActive = (to) => {
    console.log(to);
  };
  const [OpenMenu, setOpenMenu] = useState(false);
  return (
    <div className="w-full h-auto">
      <CgMenuMotion
        onClick={() => setOpenMenu(!OpenMenu)}
        className="text-slate-100 text-5xl cursor-pointer "
      />
      <Menu isOpen={OpenMenu} width={"100vw"}>
        <ul className=" w-full px-6">
          <li className="flex gap-2 text-slate-100 cursor-pointer justify-start rounded-md  pl-4 py-1 bg-purple-950 mt-3">
            <Link
            className="flex gap-x-3"
              activeClass="active"
              to="Home"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              onSetActive={handleSetActive}
            >
              <BiHomeSmile className="text-2xl" />
              <span>Home</span>
            </Link>
          </li>
          <li className="flex gap-2 text-slate-100 cursor-pointer justify-start rounded-md  pl-4 py-1 bg-purple-950 mt-3">
            <Link
            className="flex gap-x-3"
              activeClass="active"
              to="AboutMe"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onSetActive={handleSetActive}
            >
              <FaUserAstronaut className="text-xl" />
              <span>About Me</span>
            </Link>
          </li>
          <li className="flex gap-2 text-slate-100 cursor-pointer justify-start rounded-md  pl-4 py-1 bg-purple-950 mt-3">
            <Link
            className="flex gap-x-3"
              activeClass="active"
              to="Portfolio"
              spy={true}
              smooth={true}
              offset={-82}
              duration={500}
              onSetActive={handleSetActive}
            >
              <FaReacteurope className="text-2xl" />
              <span>Projects</span>
            </Link>
          </li>
          <li className="flex gap-2 text-slate-100 cursor-pointer justify-start rounded-md  pl-4 py-1 bg-purple-950 mt-3">
            <Link
            className="flex gap-x-3"
              activeClass="active"
              to="ContactMe"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              onSetActive={handleSetActive}
            >
              <GiRelationshipBounds className="text-2xl" />
              <span>Contact Me</span>
            </Link>
          </li>
        </ul>
      </Menu>
    </div>
  );
};

export default BurgerMenu;
