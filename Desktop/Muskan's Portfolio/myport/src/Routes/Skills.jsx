import html from "../assets/html.jpg";
import css from "../assets/css.png";
import js from "../assets/js.png";
import ts from "../assets/ts.png";
import redux from "../assets/redux.png";
import react from "../assets/react.png";
import material from "../assets/material.png";
import chakra from "../assets/chakra.jpg";
import nextjs from "../assets/nextjs.avif";
import git from "../assets/git.png";
import styles from "../Styles/Skills.module.css";
import node from "../assets/node.png";
import express from "../assets/express.png";
import mongo from "../assets/mongo.jpeg";
import json from "../assets/json.png";
import postman from "../assets/postman.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import React, { useRef, useState } from "react";
import { Box, Flex, Grid, Heading, Image, Stack, Text } from "@chakra-ui/react";

const Skills = () => {
  return (
    <Stack
      data-aos="fade-up"
      className={styles.mainStack}
      marginTop={"5%"}
      width={"85%"}
      margin="auto"
    >
      <Heading
        className={styles.skillsHeading}
        marginTop={"50px"}
        letterSpacing={"3px"}
        fontSize=" 40px"
        as="h1"
        // border={'none'}
        size={"xl"}
      >
        Skills
      </Heading>
      <Box data-aos="fade-up" className={styles.frontEndBox}>
        <Heading textAlign={"center"} textDecoration="underline">
          FRONT-END SKILLS
        </Heading>
        <Grid
          className={styles.frontEndGrid}
          marginTop="5%"
        >
          <Box border="1px solid white" padding={"-10px"}>
            <Image width={"100%"} height="200px" src={html}></Image>
            <Text
              bgColor={"rgb(96, 181, 230)"}
              textAlign={"center"}
              marginTop="20px"
              fontSize="1.5rem"
            >
              HTML
            </Text>
          </Box>
          <Box border="1px solid white">
            <Image width={"100%"} height="200px" src={css}></Image>
            <Text
              bgColor={"rgb(96, 181, 230)"}
              textAlign={"center"}
              marginTop="20px"
              fontSize="1.5rem"
            >
              CSS
            </Text>
          </Box>
          <Box border="1px solid white">
            <Image width={"100%"} height="200px" src={js}></Image>
            <Text
              bgColor={"rgb(96, 181, 230)"}
              textAlign={"center"}
              marginTop="20px"
              fontSize="1.5rem"
            >
              JavaScript
            </Text>
          </Box>
          <Box border="1px solid white">
            <Image width={"100%"} height="200px" src={react}></Image>
            <Text
              bgColor={"rgb(96, 181, 230)"}
              textAlign={"center"}
              marginTop="20px"
              fontSize="1.5rem"
            >
              React JS
            </Text>
          </Box>
          <Box border="1px solid white">
            <Image width={"100%"} height="200px" src={ts}></Image>
            <Text
              bgColor={"rgb(96, 181, 230)"}
              textAlign={"center"}
              marginTop="20px"
              fontSize="1.5rem"
            >
              Typescript
            </Text>
          </Box>
          <Box border="1px solid white">
            <Image width={"100%"} height="200px" src={chakra}></Image>
            <Text
              bgColor={"rgb(96, 181, 230)"}
              textAlign={"center"}
              marginTop="20px"
              fontSize="1.5rem"
            >
              Chakra-UI
            </Text>
          </Box>
          <Box border="1px solid white">
            <Image width={"100%"} height="200px" src={redux}></Image>
            <Text
              bgColor={"rgb(96, 181, 230)"}
              textAlign={"center"}
              marginTop="20px"
              fontSize="1.5rem"
            >
              Redux
            </Text>
          </Box>
          <Box border="1px solid white">
            <Image width={"100%"} height="200px" src={material}></Image>
            <Text
              bgColor={"rgb(96, 181, 230)"}
              textAlign={"center"}
              marginTop="20px"
              fontSize="1.5rem"
            >
              Material-UI
            </Text>
          </Box>
        </Grid>
      </Box>

      <Box data-aos="fade-up" className={styles.backEndBox}>
        <Heading
          marginTop={"4%"}
          textAlign={"center"}
          textDecoration="underline"
        >
          BACK-END SKILLS
        </Heading>
        <Grid className={styles.backEndGrid} marginTop="5%">
          <Box border="1px solid white" padding={"-10px"}>
            <Image width={"100%"} height="200px" src={node}></Image>
            <Text
              bgColor={"rgb(96, 181, 230)"}
              textAlign={"center"}
              marginTop="20px"
              fontSize="1.5rem"
            >
              Node JS
            </Text>
          </Box>
          <Box border="1px solid white">
            <Image width={"100%"} height="200px" src={express}></Image>
            <Text
              bgColor={"rgb(96, 181, 230)"}
              textAlign={"center"}
              marginTop="20px"
              fontSize="1.5rem"
            >
              Express JS
            </Text>
          </Box>
          <Box border="1px solid white">
            <Image width={"100%"} height="200px" src={mongo}></Image>
            <Text
              bgColor={"rgb(96, 181, 230)"}
              textAlign={"center"}
              marginTop="20px"
              fontSize="1.5rem"
            >
              MongoDb JS
            </Text>
          </Box>
          <Box border="1px solid white">
            <Image width={"100%"} height="200px" src={postman}></Image>
            <Text
              bgColor={"rgb(96, 181, 230)"}
              textAlign={"center"}
              marginTop="20px"
              fontSize="1.5rem"
            >
              Postman
            </Text>
          </Box>
          <Box border="1px solid white">
            <Image width={"100%"} height="200px" src={json}></Image>
            <Text
              bgColor={"rgb(96, 181, 230)"}
              textAlign={"center"}
              marginTop="20px"
              fontSize="1.5rem"
            >
              JSON
            </Text>
          </Box>
          <Box border="1px solid white">
            <Image width={"100%"} height="200px" src={nextjs}></Image>
            <Text
              bgColor={"rgb(96, 181, 230)"}
              textAlign={"center"}
              marginTop="20px"
              fontSize="1.5rem"
            >
              Next.JS
            </Text>
          </Box>
          <Box border="1px solid white">
            <Image width={"100%"} height="200px"  src={git}></Image>
            <Text
              bgColor={"rgb(96, 181, 230)"}
              textAlign={"center"}
              marginTop="20px"
              fontSize="1.5rem"
            >
              Git
            </Text>
          </Box>
        </Grid>
      </Box>
    </Stack>
  );
};

export default Skills;
