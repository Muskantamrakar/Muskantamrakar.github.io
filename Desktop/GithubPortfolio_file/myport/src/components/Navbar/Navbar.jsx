import React, { useContext, useState } from "react";
import style from "./navbar.module.css";

function Navbar() {

    const [click , setClick ] = useState(false)
    const [color , setColor] = useState(false)
    const handleClick = () =>setClick(!click)
    
    const changeColor = () =>{
        if(window.scrollY >= 50){
            setColor(true)
        }
        else{
            setColor(false)
        }
    }
    window.addEventListener("scroll" , changeColor)

       const [tclick, settClick] = useState(false)
    const handletClick = () => settClick(!click)

    const closeMenu = () => settClick(false)


  return (
    <div className={style.navbody}>
      <div className={style.hs}><a style={{textDecoration:"none",color:"#286DAB"}} href="#home">MUSKAN</a></div>
      <div className={style.flexx}>
        <a href="#home" className={style.a1}>
          Home
        </a>
        <a href="#about" className={style.a2}>
          About
        </a>
        <a href="#project" className={style.a3}>
          Project
        </a>
        <a href="#skills" className={style.a4}>
          Skills
        </a>
        <a href="#contact" className={style.a5}>
          Contact
        </a>
      </div>
    </div>
  );
}

export default Navbar;
