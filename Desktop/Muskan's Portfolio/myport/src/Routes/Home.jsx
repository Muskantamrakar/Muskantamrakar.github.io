import React, { useState } from "react";
import { Link } from "react-scroll";
// import GithubStats from '../Components/GithubStats';
// import HeroImage from '../Components/HeroImage';
// import Navbar from '../Components/Navbar';
// import About from './About';
import styles from "../Styles/Home.module.css";

import background from "../assets/background.jpg";
const Home = () => {
  const handleDownload = () => {};

  return (
    <div data-aos="fade-up" id="home" className="homemain">
      <div className={styles.mask}>
        <img className={styles.intoImg} src={background} alt="" />
      </div>
      <div className={styles.hero}>
        <div className={styles.content}>
          <p className={styles.helloText}>Hello,I am</p>

          <h3 className={styles.nameheading}>Muskan Tamrakar </h3>

          <p className={styles.designationText}>FULL STACK WEB DEVELOPER</p>

          {/* <div className="buttons">
            <Link
              className={styles.btn}
              to="projects"
              spy={true}
              smooth={true}
              offset={100}
              duration={1000}
            >
              <button>Projects</button>
            </Link>
            <Link
              className={styles.btnLight}
              to="contacts"
              spy={true}
              smooth={true}
              offset={100}
              duration={1000}
            >
              <button onClick={handleDownload}>Contact</button>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
