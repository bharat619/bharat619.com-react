import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

import "./about.css";
import ME from "../../assets/waving-doorway.png";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Experience</h5>
              <small>6+ Years Working</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Career Guidance & Mentoring</h5>
              <small>50+ Sessions</small>
            </article>
          </div>

          <p>
            I'm a dedicated Full-Stack Developer with a versatile skill set
            encompassing both front-end and back-end web development. My passion
            for crafting comprehensive solutions allows me to deliver dynamic
            and efficient web applications, showcasing my commitment to
            excellence in every project.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
