import React from "react";
// import gearbest from "../assets/gearbest-img.png"
import ssense from "../assets/ssense.jpeg";
import shop from "../assets/shop.jpeg";
import orbitz from "../assets/orbitz.jpeg";
import age from "../assets/age.jpeg";
// import firstpost from "../assets/firstpost-img.png";
// import naturebasket from "../assets/naturebasket-img.png";
import "../Styles/Project1.css";
// import {AiOutlineTags} from "react-icons/ai"
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import js from "../assets/js.png";
import css from "../assets/css.png";
import react from "../assets/react.png";
import json from "../assets/json.png";
// import swiper from "../assets/swiper.png"
import html from "../assets/html.jpg";
// import chakra from "../assets/chakra.jpg";
// import gitproject from "../assets/gitproject.png";
import ipl from "../assets/ipl.png";
import { useState } from "react";
const Project1 = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="main-projects" id="projects" data-aos="fade-up">
      <h1 className="project-heading-main">My Projects</h1>
      <div className="project-section">
        <Flex className="project">
          <div className="project-image-div">
            <img className="project-image" src={ssense} alt="" />
          </div>
          <div className="info-div">
            <h1 className="project-heading">Ssense.com </h1>
            <p className="project-description">
              Ssense is an E-commerce website where we can buy new dresses
              online.You can filter the dresses by Brands, costs, Price Range
              etc..You can add the items in carts and wishlist then buy the
              products by checking out.
            </p>
            <h4 className="tech-stack-head">Tech Stack</h4>
            <Flex justifyContent="space-evenly" className="tech-stack-info">
              <Image className="stack-images" src={react}></Image>
              <Image className="stack-images" src={js}></Image>
              <Image className="stack-images" src={css}></Image>
              {/* <Image className='stack-images' src={swiper}></Image> */}
              <Image className="stack-images" src={json}></Image>
              {/* <Image className='stack-images' src={chakra}></Image> */}
            </Flex>
            <div>
              <h3 className="responsibilities-head">Responsibilities:</h3>
              <p className="respon-text">
                As this was a individual project so, I was resonsible for
                creating whole UI also i have done some functionalities like
                signup,signin, add to cart functionality. This project was
                created within 4 days
              </p>
            </div>
            <Flex className="demo-button">
              <a
                href="https://gearbest-project-eta.vercel.app/"
                target={"_blank"}
              >
                <button className="live-demo-button">LIVE DEMO</button>
              </a>
              <a
                href="https://github.com/rushi6457/prime-move-3249/tree/main/gearbest.com"
                target={"_blank"}
              >
                <button className="github-link-button">GITHUB Link</button>
              </a>
            </Flex>
          </div>
        </Flex>

        <Flex className="project">
          <div className="project-image-div">
            <img className="project-image" src={shop} alt="" />
          </div>
          <div className="info-div">
            <h1 className="project-heading">shop.com </h1>
            <p className="project-description">
              SHOP.COM Marketplace offers great deals on clothes, beauty, health
              andnutrition, shoes, electronics, and more from over 1500 stores
              with one easy checkout.
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
                This was a group project created by total 3 members. My
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
                href="https://github.com/tamilarasanr27/MasaiGroupProject/uplo"
                target={"_blank"}
              >
                <button className="github-link-button">GITHUB Link</button>
              </a>
            </Flex>
          </div>
        </Flex>

        <Flex className="project">
          <div className="project-image-div">
            <img className="project-image" src={orbitz} alt="" />
          </div>
          <div className="info-div">
            <h1 className="project-heading">orbitz.com </h1>
            <p className="project-description">
              Orbitz is the real deal, and this travel booking platform can help
              youscore some great travel savings. Just make sure that you
              consider thepros and cons of using a third-party platform like
              this before making a reservation.
            </p>
            <h4 className="tech-stack-head">Tech Stack</h4>
            <Flex justifyContent="space-evenly" className="tech-stack-info">
              <Image className="stack-images" src={html}></Image>
              <Image className="stack-images" src={js}></Image>
              <Image className="stack-images" src={css}></Image>
              {/* <Image className='stack-images' src={swiper}></Image> */}
              <Image className="stack-images" src={json}></Image>
            </Flex>
            <div>
              <h3 className="responsibilities-head">Responsibilities:</h3>
              <p className="respon-text">
                This was a group project created by total 5 members. My
                responsibility was to create the footer as well as the some
                portions of the landing page of the website.{" "}
              </p>
            </div>
            <Flex className="demo-button">
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
        </Flex>
        {/* Conditional */}
        <div className={show === true ? "showProjects" : "hideProjects"}>
          <div className="project-section-show" width="95%">
            <Flex className="project">
              <div className="project-image-div">
                <img className="project-image" src={age} alt="" />
              </div>
              <div className="info-div">
                <h1 className="project-heading">Age Calculator</h1>
                <p className="project-description">
                This is the simple age calculator mini project which is
                made by me. Here anyone can see their age just simply put them DOB.
                </p>
                <h4 className="tech-stack-head">Tech Stack</h4>
                <Flex justifyContent="space-evenly" className="tech-stack-info">
                  <Image className="stack-images" src={js}></Image>
                  <Image className="stack-images" src={css}></Image>
                  <Image className="stack-images" src={react}></Image>
                  {/* <Image className="stack-images" src={chakra}></Image> */}
                </Flex>
                <div>
                  <h3 className="responsibilities-head">Responsibilities:</h3>
                  <p className="respon-text">
                  This is a mini project so whole project was created by me
                  where i have used HTML, CSS and JavaScript.{" "}
                  </p>
                </div>
                <Flex className="demo-button">
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
            </Flex>

            <Flex className="project">
              <div className="project-image-div">
                <img className="project-image" src={ipl} alt="" />
              </div>
              <div className="info-div">
                <h1 className="project-heading">IPL ticket booking system</h1>
                <p className="project-description">
                  In this project I have applied my learning about Low Level
                  System design. This project is about booking the tickets for
                  different levels of audience like VVIP VIP and general.
                </p>
                <h4 className="tech-stack-head">Tech Stack</h4>
                <Flex justifyContent="space-evenly" className="tech-stack-info">
                  <Image className="stack-images" src={html}></Image>
                  <Image className="stack-images" src={css}></Image>
                  <Image className="stack-images" src={js}></Image>
                </Flex>
                <div>
                  <h3 className="responsibilities-head">Responsibilities:</h3>
                  <p className="respon-text">
                    This was a individual project so, I was resonsible for
                    implementing functionality to creating UI for the project.
                  </p>
                </div>
                <Flex className="demo-button">
                  <a
                    href="https://cosmic-gingersnap-07f444.netlify.app"
                    target={"_blank"}
                  >
                    <button className="live-demo-button">LIVE DEMO</button>
                  </a>
                  <a
                    href="https://github.com/rushi6457/ticket-booking-system"
                    target={"_blank"}
                  >
                    <button className="github-link-button">GITHUB Link</button>
                  </a>
                </Flex>
              </div>
            </Flex>
          </div>
        </div>
        <div className="show-button-div">
          <p className="show-button" onClick={() => setShow(!show)}>
            {show ? "Show Less" : "Show More"}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Project1;
