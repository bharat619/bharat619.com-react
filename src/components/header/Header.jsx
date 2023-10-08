import CTA from "./CTA";
import "./header.css";
import ME from "../../assets/hi.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <div className="header__name">
          <div>B</div>
          <div>H</div>
          <div>A</div>
          <div>R</div>
          <div>A</div>
          <div>T</div>
          &nbsp;&nbsp;
          <div>H</div>
          <div>E</div>
          <div>G</div>
          <div>D</div>
          <div>E</div>
        </div>

        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
