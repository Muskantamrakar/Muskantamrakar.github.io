import { Flex } from "@chakra-ui/react";
import {ImMobile2} from "react-icons/im";
import {VscGithub} from "react-icons/vsc";
import {SiLinkedin} from "react-icons/si";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {TfiEmail} from "react-icons/tfi";
import "../Styles/Contacts1.css"
const Contacts1 = () =>{

       const [show,setShow] = useState(true)
    const [auth,setAuth] = useState(false)
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [loading,setLoading] = useState(false)
    const [message,setMessage] = useState('')

    const form = useRef();
      const sendEmail = (e) => {
        setLoading(true)
    e.preventDefault();

    emailjs.sendForm('service_hx4boim', 'template_mxsh6ri', form.current, 'zYKXfdbRCb8WRJeN0')
      .then((result) => {
          console.log(result.text);
          setLoading(false)
        return  alert("Message send successfully")
        
      }, (error) => {
          console.log(error.text);
        return  alert("Something went wrong")
      });
  };


  const onsubmit = (e) =>{
    e.preventDefault()
    if(name !== '' && email !== '' && message !== '' ){
        return alert("Message send successfully")
    }
  }


    return (
        <div id="contacts" data-aos="fade-up">
        <h2 className="contacts-heading">Contacts</h2>
        <div className="contacts-main" >
            <div className="form">
                <h2 className="query-text">If you have any query?</h2>
                <p className="query-text" >Please send me your queries here📑</p>
                <form action="" className="form-inner">
                    <input 
                    name="user_name"  
                    onChange={({target})=>setName(target.value)} 
                    placeholder="Enter Name" 
                    className="input" 
                     type="text" />
                    <br />
                    <input 
                    name="user_email"  
                    onChange={({target})=>setName(target.value)} 
                    placeholder="Enter Email"  
                    className="input" 
                    type="text" />
                    <br />
                    <textarea 
                    name="message" 
                    placeholder="Enter Message" 
                    onChange={({target})=>setMessage(target.value)} 
                    className="text-area" 
                    id="" 
                    cols="20" 
                    rows="5"></textarea>
                    <button 
                    onClick={onsubmit}  
                     value="Send"
                    className="input-button" 
                    type="submit">
                      <b>Submit</b>
                    </button>
                </form>
                    
            </div>
            <div className="icons-div">
                <h1 className="follow-text">Get In Touch</h1>
                <div className="social-contacts">
                    <Flex className="icons-details"><ImMobile2 className="social-icons"/><a>+91&nbsp;&nbsp;8770613509</a></Flex>

                    <Flex className="icons-details"><VscGithub className="social-icons"/><a href="https://github.com/Muskantamrakar" target={'_blank'}>Github profile</a></Flex>

                    <Flex className="icons-details"><SiLinkedin className="social-icons"/><a href='https://www.linkedin.com/in/muskan-tamrakar-7a5258236' target={'_blank'}>Linkedin profile</a></Flex>

                    <Flex className="icons-details"><TfiEmail className="social-icons"/><a href="https://mail.google.com/" target="_blank" rel="noopener noreferrer">muskantamrakar2442@gmail</a></Flex>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Contacts1;