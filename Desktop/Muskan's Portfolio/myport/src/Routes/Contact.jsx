import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { SiLinkedin } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { ImMobile2 } from "react-icons/im";
import styles from "../Styles/Contact.module.css";
import {
  Box,
  Container,
  Flex,
  Input,
  Textarea,
  Form,
  FormControl,
  Button,
  Text,
} from "@chakra-ui/react";
const Contact = () => {
  const [show, setShow] = useState(true);
  const [auth, setAuth] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const form = useRef();
  const sendEmail = (e) => {
    setLoading(true);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hx4boim",
        "template_mxsh6ri",
        form.current,
        "zYKXfdbRCb8WRJeN0"
      )
      .then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          return alert("Message send successfully");
        },
        (error) => {
          console.log(error.text);
          return alert("Something went wrong");
        }
      );
  };

  const onsubmit = (e) => {
    e.preventDefault();
    if (name !== "" && email !== "" && message !== "") {
      return alert("Message send successfully");
    }
  };

  return (
    <div className={styles.contacts}>
      <h1 className={styles.mainContactheading}>Contacts</h1>

      <Flex className={styles.mainFlex} id="contacts">
        <Flex className={styles.iconsFlex}>
          <ImMobile2 className={styles.icons} />
          <Text>+91&nbsp;&nbsp;7709499930</Text>
        </Flex>
        <Flex className={styles.iconsFlex}>
          <VscGithub className={styles.icons} />
          <a href="https://github.com/rushi6457" target={"_blank"}>
            Github profile
          </a>
        </Flex>
        <Flex className={styles.iconsFlex}>
          <SiLinkedin className={styles.icons} />
          <a
            href="https://www.linkedin.com/in/rushikesh-patil-4a66b8236"
            target={"_blank"}
          >
            Linkedin profile
          </a>
        </Flex>
      </Flex>
    </div>
  );
};

export default Contact;
