import React from "react";
import "./Project1.css";
import ssense from "./assets/ssense.jpeg";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import js from "./assets/js.png";
import css from "./assets/css.png";
import html from "./assets/html.jpg";

const Project1 = () => {
  return (
    <div className="project1" data-aos="fade-up">
      <div className="image-container">
        <img src={ssense} alt="" className="image" />
      </div>
      <div className="info-container">
        <h1 className="project-heading">Ssense.com</h1>
        <p className="project-description">
          Ssense is an E-commerce website where we can buy new dresses
          online.You can filter the dresses by Brands, costs, Price Range
          etc..You can add the items in carts and wishlist then buy the products
          by checking out.
        </p>
        <h4 className="tech-stack-head">Tech Stack</h4>
        <Flex justifyContent="space-evenly" className="tech-stack-info">
          <Image className="stack-images" src={html}></Image>
          <Image className="stack-images" src={js}></Image>
          <Image className="stack-images" src={css}></Image>
        </Flex>
        <div>
          <h3 className="responsibilities-head">Responsibilities:</h3>
          <p className="respon-text">
            This was a group project and i'm responsibile for creating home
            page, navbar and footer.
          </p>
        </div>
        <Flex className="demo-button">
          <a
            href="https://illustrious-tiramisu-a0c050.netlify.app/"
            target={"_blank"}
          >
            <button className="live-demo-button">LIVE DEMO</button>
          </a>
          <a
            href="https://github.com/Rakesh313777/ssense-project"
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
