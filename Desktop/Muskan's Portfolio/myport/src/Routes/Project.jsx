import React from "react";
import ssense from "../assets/ssense.jpeg";
import shop from "../assets/shop.jpeg";
import age from "../assets/age.jpeg";
import orbitz from "../assets/orbitz.jpeg";
import "../Styles/Project.css";
// import { AiOutlineTags } from "react-icons/ai";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import js from "../assets/js.png";
import css from "../assets/css.png";
import react from "../assets/react.png";
import json from "../assets/json.png";
// import swiper from "../assets/swiper.png";
import html from "../assets/html.jpg";
// import chakra from "../assets/chakra.jpg";
import ipl from "../assets/ipl.png";
import { useState } from "react";
// import { ButtonGroup } from "react-bootstrap";

const Project = () => {
  const [show, setShow] = useState(false);

  return (
    <div id="projects" data-aos="fade-up" className="project-Sec">
      <h1 className="project-main-heading">My Projects</h1>
      <div className="project-section">
        <div className="gear-best">
          <div className="project-img">
            <img className="project-screenshot" src={ssense} alt="gear-best" />
          </div>
          <div className="gearbest-info">
            <h1>Ssense.com </h1>
            <p className="project-description">
              Ssense is an E-commerce website where we can buy new dresses
              online.You can filter the dresses by Brands, costs, Price Range
              etc..You can add the items in carts and wishlist then buy the
              products by checking out.
            </p>
            <h4 className="tech-stack-head">Tech Stack</h4>
            <Flex
              marginTop={"5%"}
              width={"100%"}
              marginBottom="5%"
              justifyContent="space-evenly"
            >
              {/* <Image className='stack-images' src={react}></Image> */}
              <Image className="stack-images" src={js}></Image>
              <Image className="stack-images" src={css}></Image>
              {/* <Image className='stack-images' src={swiper}></Image> */}
              {/* <Image className='stack-images' src={json}></Image> */}
              <Image className="stack-images" src={html}></Image>
            </Flex>

            <div>
              <h3 className="responsibilities-head">Responsibilities:</h3>
              <p textAlign="justify" marginTop="5%">
                As this was a individual project so, I was resonsible for
                creating whole UI also i have done some functionalities like
                signup,signin, add to cart functionality. This project was
                created within 4 days
              </p>
            </div>

            <Flex
              marginTop={"50px"}
              justifyContent="space-evenly"
              className="demo-button"
            >
              <a
                href="https://illustrious-tiramisu-a0c050.netlify.app/"
                target={"_blank"}
              >
                <button className="live-demo-button">LIVE DEMO</button>
              </a>
              <a
                href="https://github.com/Rakesh313777/ssense-project/tree/main/homepage"
                target={"_blank"}
              >
                <button className="github-link-button">GITHUB Link</button>
              </a>
            </Flex>
          </div>
        </div>
        <div className="first-post">
          <div className="project-img-first-post">
            <img className="project-screenshot" src={shop} alt="" />
          </div>
          <div className="firstpost-info">
            <h1>Shop.com </h1>
            <p className="project-description">
              Firstpost is an indian news media website. Users can find world
              news as well as the regional news live also, it is very easy to
              access for those people who are not much aware about the internet
              browsing.
            </p>
            <h4 className="tech-stack-head">Tech Stack</h4>

            <Flex
              marginTop={"5%"}
              width={"100%"}
              marginBottom="5%"
              justifyContent="space-evenly"
            >
              <Image className="stack-images" src={js}></Image>
              <Image className="stack-images" src={css}></Image>
              <Image className="stack-images" src={html}></Image>
            </Flex>

            <div>
              <h3 className="responsibilities-head">Responsibilities:</h3>
              <p textAlign="justify" marginTop="5%">
                This was a group project created by total 3 members. My
                responsibility was to create the navbar of the website with the
                toggling functionality to side-bar as well as search-bar.{" "}
              </p>
            </div>

            <Flex
              align={"center"}
              justifyContent="space-evenly"
              marginTop="60px"
              className="demo-button"
            >
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
        <div className="nature-basket">
          <div className="project-img">
            <img className="project-screenshot" src={orbitz} alt="" />
          </div>
          <div>
            <div className="naturebasket-info">
              <h1>Orbitz.com </h1>
              <p className="project-description">
                Orbitz is the real deal, and this travel booking platform can
                help youscore some great travel savings. Just make sure that you
                consider thepros and cons of using a third-party platform like
                this before making a reservation.
              </p>
              <h4 className="tech-stack-head">Tech Stack</h4>
              <Flex
                width={"100%"}
                justifyContent="space-evenly"
                marginBottom={"5%"}
                marginTop={"5%"}
              >
                <Image className="stack-images" src={html}></Image>
                <Image className="stack-images" src={js}></Image>
                <Image className="stack-images" src={css}></Image>
                <Image className="stack-images" src={json}></Image>
              </Flex>

              <div>
                <h3 className="responsibilities-head">Responsibilities:</h3>
                <p textAlign="justify" marginTop="5%">
                  This was a group project created by total 5 members. My
                  responsibility was to create the footer as well as the some
                  portions of the landing page of the website.{" "}
                </p>
              </div>
          

              <Flex
                align={"center"}
                justifyContent="space-evenly"
                marginTop="30px"
                className="demo-button"
              >
                <a
                  href="https://orbitz-clone-v1.netlify.app/"
                  target={"_blank"}
                >
                  <button className="live-demo-button">LIVE DEMO</button>
                </a>
                <a
                  href="https://github.com/ujjawalyt/green-volleyball-8804"
                  target={"_blank"}
                >
                  <button className="github-link-button">GITHUB Link</button>
                </a>
              </Flex>
            </div>
          </div>
        </div>
      </div>
      {/* Conditional projects */}

      <div className={show === true ? "showProjects" : "hideProjects"}>
        <div className="project-section">
          <div className="github-search">
            <div className="project-img">
              <img className="project-screenshot" src={age} alt="" />
            </div>
            <div className="githubinfo">
              <h1 marginTop="15%">Age Calculator</h1>
              <p className="project-description">
                This is the simple age calculator mini project which is
                made by me. Here anyone can see their age just simply put them DOB
              </p>

              <h4 className="tech-stack-head">Tech Stack</h4>
              <Flex
                width={"100%"}
                justifyContent="space-evenly"
                marginBottom={"5%"}
                marginTop={"5%"}
              >
                <Image className="stack-images" src={js}></Image>
                <Image className="stack-images" src={css}></Image>
                <Image className="stack-images" src={react}></Image>
                {/* <Image className="stack-images" src={chakra}></Image> */}
              </Flex>

              <div>
                <h3 className="responsibilities-head">Responsibilities:</h3>
                <p textAlign="justify" marginTop="5%">
                  This is a mini project so whole project was created by me
                  where i have used HTML, CSS and JavaScript.
                </p>
              </div>

              <Flex
                align={"center"}
                justifyContent="space-evenly"
                marginTop="30px"
                className="demo-button"
              >
                <a
                  href="https://joyful-tulumba-1a3831.netlify.app/"
                  target={"_blank"}
                >
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

          <div className="booking-system">
            <div className="project-img" width="100%" height="100%">
              <img className="project-screenshot" src={ipl} alt="" />
            </div>

            <div className="iplinfo">
              <h1>IPL ticket booking system</h1>
              <p className="project-description">
                In this project I have applied my learning about Low Level
                System design. This project is about booking the tickets for
                different levels of audience like VVIP VIP and general
              </p>

              <h4 className="tech-stack-head">Tech Stack</h4>
              <Flex
                width={"100%"}
                justifyContent="space-evenly"
                marginBottom={"5%"}
                marginTop={"5%"}
              >
                <Image className="stack-images" src={html}></Image>
                <Image className="stack-images" src={css}></Image>
                <Image className="stack-images" src={js}></Image>
              </Flex>

              <div>
                <h3 className="responsibilities-head">Responsibilities:</h3>
                <p textAlign="justify" marginTop="5%">
                  This was a individual project so, I was resonsible for
                  implementing functionality to creating UI for the project.
                </p>
              </div>

              <Flex
                align={"center"}
                justifyContent="space-evenly"
                marginTop="30px"
                className="demo-button"
              >
                <a
                  href="https://velvety-blini-4aab7f.netlify.app/"
                  target={"_blank"}
                >
                  <button className="live-demo-button">LIVE DEMO</button>
                </a>
                <a
                  href="https://github.com/rushi6457/github-search"
                  target={"_blank"}
                >
                  <button className="github-link-button">GITHUB Link</button>
                </a>
              </Flex>
            </div>
          </div>
          {/* </div> */}

          {/* <div className='github-search'>
                      <div className='project-img'>
                          <img className='project-screenshot' src={gitproject} alt="" />
                      </div> 
                  </div> */}
        </div>

      </div>
      <div className="show-button-div">
        <p className="show-button" color={'rgb(96, 181, 230)'} onClick={() => setShow(!show)}>
          {show ? "Show Less" : "Show More"}
        </p>
      </div>
    </div>
  );
};

export default Project;
