import React from 'react'
import { useMediaQuery } from '@chakra-ui/react';
import { Box,Button,Image,List} from '@chakra-ui/react'

export default function Profile() {
    const isMobileDevice = useMediaQuery({
        query: "(min-device-width: 480px)",
      });
    
      const isTabletDevice = useMediaQuery({
        query: "(min-device-width: 768px)",
      });
    
      const isLaptop = useMediaQuery({
        query: "(min-device-width: 1024px)",
      });
    
      const isDesktop = useMediaQuery({
        query: "(min-device-width: 1200px)",
      });
    
      const isBigScreen = useMediaQuery({
        query: "(min-device-width: 1201px )",
      });
  return (
    <div fontStyle="loresm">
    <div className='profile-c1'> 
    <div className='parent'>
        <div className='detail'>
            <div className='c2'>
                <div className='c2-icon'>
                <a href="https://medium.com/@muskantamrakar2442">
                    <i className='medium'><img  src='https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Medium-512.png' alt='medium' width="20px" height="30px"/></i>
                </a>
                <a href="https://app.netlify.com/teams/muskantamrakar2442/overview">
                    <i className='netlify'><img src='https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/netlify-256.png'  width="20px" height="30px"></img></i>
                </a>
                
                </div>
            </div>
            <div className='profile-details'>
                <span className='primary-t'>
                    {" "}
                    Hello, I'm <span className='highligh'>Muskan</span>
                </span>
            </div>
            <div className='pd-role'>
                <span className='primary-t'>
                    {" "}
                    <h1>
                           
                            <ol> Enthustic Developer </ol>
                            <ol> Mern Stack Developer </ol>
                            <ol>React/React Native
                            </ol>
                               
                    </h1>
                    <span className='profile-tl'>
                        Building Application with frontend and Backend
                    </span>
                </span>
            </div>
            <div className='profile-op'>
                <button className='primary'>
                    {" "}
                    Hire Me{""}
                </button>
                <a href='Muskan_Tamrakar.pdf' download="Muskan_Tamrakar.pdf"><Button className='btn1'>Get Resume</Button></a>
            </div>
        </div>
        <div>
            <div className='profileIMG'>
                <Image src='Resume-Photo.png' width="30%" height="300px"></Image>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}
