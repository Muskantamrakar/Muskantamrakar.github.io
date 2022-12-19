import React from "react";
import pic2 from "../assets/image.jpg";

import "../Styles/About.css";
const About = () => {
  return (
    <div data-aos="fade-up" className="about-section" id="about">
      <div className="text-about">
        <h1 className="aboutHeading">About Me</h1>
        <p className="intro">
          Hey, I'm Muskan Tamrakar Full-Stack Web Developer
        </p>
        <br />
        <p>
          Currently learning full-stack web development with a specialization in
          MERN stack from Masai School. Quick learner and an aspiring full-stack
          web developer with core knowledge of MERN stack technology. Looking
          forward to applying and enhancing my skills and knowledge as a
          developer. Here are a few technologies I've been working with
          recently:
        </p>
      </div>
      <div>
        <img src={pic2} className="profileImage" />
      </div>
    </div>
  );
};

export default About;
