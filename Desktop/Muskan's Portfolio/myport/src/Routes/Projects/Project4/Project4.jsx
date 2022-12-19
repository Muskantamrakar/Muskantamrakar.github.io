import React from "react";
import "./Project4.css";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import js from "./assets/js.png";
import css from "./assets/css.png";
import html from "./assets/html.jpg";
import age from "./assets/age.jpeg";

const Project1 = () => {
  return (
    <div className="project1" data-aos="fade-up">
      <div className="image-container">
        <img src={age} alt="" className="image" />
      </div>
      <div className="info-container">
        <h1 className="project-heading">Age Calculator</h1>
        <p className="project-description">
          This is the simple age calculator mini project which is made by me.
          Here anyone can see their age just simply put them DOB
        </p>
        <h4 className="tech-stack-head">Tech Stack</h4>
        <Flex justifyContent="space-evenly" className="tech-stack-info">
          {/* <Image className="stack-images" src={react}></Image> */}
          <Image className="stack-images" src={html}></Image>
          <Image className="stack-images" src={css}></Image>
          <Image className="stack-images" src={js}></Image>
          {/* <Image className="stack-images" src={swiper}></Image> */}
        </Flex>
        <div>
          <h3 className="responsibilities-head">Responsibilities:</h3>
          <p className="respon-text">
          This is a mini project so whole project created by me
                  where i had used HTML, CSS and Vanilla JavaScript.
          </p>
        </div>
        <Flex className="demo-button">
          <a href="https://joyful-tulumba-1a3831.netlify.app/" target={"_blank"}>
            <button className="live-demo-button">LIVE DEMO</button>
          </a>
          <a
            href="https://github.com/Muskantamrakar/Age-Calculator"
            target={"_blank"}
          >
            <button className="github-link-button">GITHUB Link</button>
          </a>
        </Flex>
      </div>
    </div>
  );
};

export default Project1;
