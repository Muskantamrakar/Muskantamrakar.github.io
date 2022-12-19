import React from 'react';
import "./Project2.css";
import orbitz from "./assets/orbitz.jpeg";
import {Box, Button, Flex, Image, Text} from "@chakra-ui/react"
import js from "./assets/js.png"
import css from "./assets/css.png"
import html from "./assets/html.jpg"

const Project1 = () => {
    return (
        <div className='project1' data-aos="fade-up">
            <div className="image-container">
                <img src={orbitz} alt="" className="image" />
            </div>
            <div className="info-container">
                <h1 className='project-heading'>Orbitz.com</h1>
                <p className='project-description'>Orbitz is the real deal, and this travel booking platform can
                help youscore some great travel savings. Just make sure that you
                consider thepros and cons of using a third-party platform like
                this before making a reservation.</p>
                <h4 className='tech-stack-head'>Tech Stack</h4>
                 <Flex justifyContent='space-evenly' className='tech-stack-info'>
                            <Image className='stack-images' src={html}></Image>
                            <Image className='stack-images' src={js}></Image>
                            <Image className='stack-images' src={css}></Image>
                </Flex>
                <div>
                        <h3 className='responsibilities-head'>Responsibilities:</h3>
                        <p className='respon-text'>This was a group project created by total 5 members. My
                  responsibility was to create the footer as well as the some
                  portions of the landing page of the website.{" "}</p> 
                </div>
                <Flex className='demo-button'>
                    <a href="https://orbitz-clone-v1.netlify.app/" target={'_blank'}>
                    <button className='live-demo-button'>LIVE DEMO</button></a> 
                    <a href="https://github.com/ujjawalyt/green-volleyball-8804" target={'_blank'}>
                    <button className='github-link-button'>GITHUB Link</button></a>
                </Flex>
            </div>
        </div>
    );
}

export default Project1;
