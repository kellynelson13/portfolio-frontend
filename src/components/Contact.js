import React from "react";
import CV from "../assets/resume/resume.pdf"
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {MdOutlineMail} from 'react-icons/md'
import {GrDocumentText} from 'react-icons/gr'

const Contact = () => {
  return (
    <section id="contact"> 
    <div className="contact-div">
      <h1>Let's get in touch.</h1>
      <div id="icon-div">
        <a className="a" href="https://github.com/kellynelson13" target="_blank"><BsGithub />  kellynelson13</a>
        <a
           className="a"
          href="https://www.linkedin.com/in/kelly-nelson-developer/
"
          target="_blank"
        ><BsLinkedin/>  kelly-nelson-developer</a>
        <a className="a" href="" target="_blank"><MdOutlineMail/>  kelnel86@gmail.com</a>
        <a className="a" href={CV} download><GrDocumentText/>  Resume</a>
      </div>
      </div>
    </section>
  );
};

export default Contact;
