import AboutMe from "../Components/AboutMe";
import Expertise from "../Components/Expertise";
import Portfolios from "../Components/Portfolio";
import ContactMe from "../Components/ContactMe";
import Home from "../Components/Home"
import Header from "../Components/Header"
import { Element } from "react-scroll";
const MainPage = () => {
  return (
    <div>
      <Header/>
      <Element name="Home" className="element">
        <Home />
      </Element>
      <Element name="AboutMe" className="element">
        <AboutMe />
        <Expertise />
      </Element>
      <Element name="Portfolio" className="element">
        <Portfolios />
      </Element>
      <Element name="ContactMe" className="element">
        <ContactMe />
      </Element>
    </div>
  );
};

export default MainPage;
