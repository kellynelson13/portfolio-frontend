import React from "react";
import CV from "../assets/resume/resume.pdf"
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {MdOutlineMail} from 'react-icons/md'
import {GrDocumentText} from 'react-icons/gr'

const Contact = () => {
  return (
    <section id="contact"> 
      <h1>Let's get in touch.</h1>
      <div id="icon-div">
        <a href="https://github.com/kellynelson13" target="_blank"><BsGithub />  kellynelson13</a>
        <a
          href="https://www.linkedin.com/in/kelly-nelson-developer/
"
          target="_blank"
        ><BsLinkedin/>  kelly-nelson-developer</a>
        <a href="" target="_blank"><MdOutlineMail/>  kelnel86@gmail.com</a>
        <a href={CV} download><GrDocumentText/>  Resume</a>
      </div>
    </section>
  );
};

export default Contact;
