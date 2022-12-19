import React from "react";
import "./Project3.css";
import shop from "./assets/shop.jpeg";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import js from "./assets/js.png";
import css from "./assets/css.png";
import json from "./assets/json.png";
import html from "./assets/html.jpg";

const Project1 = () => {
  return (
    <div className="project1" data-aos="fade-up">
      <div className="image-container">
        <img src={shop} alt="" className="image" />
      </div>
      <div className="info-container">
        <h1 className="project-heading">Shop.com</h1>
        <p className="project-description">
          Firstpost is an indian news media website. Users can find world news
          as well as the regional news live also, it is very easy to access for
          those people who are not much aware about the internet browsing.
        </p>
        <h4 className="tech-stack-head">Tech Stack</h4>
        <Flex justifyContent="space-evenly" className="tech-stack-info">
          <Image className="stack-images" src={html}></Image>
          <Image className="stack-images" src={css}></Image>
          <Image className="stack-images" src={js}></Image>
          {/* <Image className="stack-images" src={swiper}></Image> */}
          <Image className="stack-images" src={json}></Image>
        </Flex>
        <div>
          <h3 className="responsibilities-head">Responsibilities:</h3>
          <p className="respon-text">
            This was a group project created by total 5 members. My
            responsibility was to create the navbar of the website with the
            toggling functionality to side-bar as well as search-bar.{" "}
          </p>
        </div>
        <Flex className="demo-button">
          <a
            href="https://bespoke-crumble-d53f91.netlify.app/"
            target={"_blank"}
          >
            <button className="live-demo-button">LIVE DEMO</button>
          </a>
          <a
            href="https://github.com/tamilarasanr27/MasaiGroupProject"
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
