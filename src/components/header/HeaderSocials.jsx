import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { AiFillMediumCircle } from "react-icons/ai";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank">
        <FaGithub />
      </a>
      <a href="https://medium.com" target="_blank">
        <AiFillMediumCircle />
      </a>
    </div>
  );
};

export default HeaderSocials;
