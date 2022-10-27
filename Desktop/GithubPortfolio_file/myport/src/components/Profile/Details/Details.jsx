import React from "react";
import style from "./detail.module.css";
import image from "../assets/image.jpg";
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
function Details() {
  return (

    <div className={style.detailsbody}>
      
      <div className={style.contentbody}>

        <div className={style.smalldiv}>
          <p className={style.hi}>Hello, I'm</p>
          <h1 className={style.name}>Muskan Tamrakar</h1>
          <p className={style.fullstack}>
            Full stack Web Developer 
          </p>
          <div style={{ marginTop: "20px", display:"flex", gap:"15px"}}>
            <div>
            <a target="_blank" href="https://github.com/Muskantamrakar">
              <BsGithub color="black"/>
            </a>
            </div>
            <div>
            <a target="_blank" href="https://www.linkedin.com/in/muskan-tamrakar-7a5258236">
              <BsLinkedin color="black"/>
            </a>
            </div>
          </div>
        </div>
        
      </div>

    </div>
  );
}

export default Details;



 //"react-router": "^6.4.0",
