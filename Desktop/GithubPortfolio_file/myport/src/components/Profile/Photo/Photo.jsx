import React from 'react';
import style from "./photo.module.css"
import image from "../assets/image.jpg"
function Photo() {
    return (
      <div className={style.photobody}>
        <div className={style.photodiv}>
          <img className={style.mypic} width="200px"  src={image} alt="" />
        </div>
      </div>
    );
}

export default Photo
