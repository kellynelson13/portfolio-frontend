import React, {useRef} from "react";
import CV from "../assets/resume/Kelly-Nelson-Resume.pdf";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { GrDocumentText } from "react-icons/gr";
import emailjs from '@emailjs/browser';

const Contact = () => {

    
        const form = useRef();
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_5c1p49x', 'template_z7tymzv', form.current, 'zDHf_21YYZJkff8A9')
            .then((result) => {
                console.log(result.text);
                console.log("message sent")
            }, (error) => {
                console.log(error.text);
            }); 
            e.target.reset();
        };


  return (
    <section id="contact">
      <div className="contact-div">
        <h1>Let's get in touch.</h1>
        <div id="icon-div">
          <a
            className="a"
            href="https://github.com/kellynelson13"
            target="_blank"
          >
            <BsGithub /> kellynelson13
          </a>
          <a
            className="a"
            href="https://www.linkedin.com/in/kelly-nelson-developer/
"
            target="_blank"
          >
            <BsLinkedin /> kelly-nelson-developer
          </a>
          <p  className="email">
            <MdOutlineMail /> kelnel86@gmail.com
          </p>
          <a className="a" href={CV} download>
            <GrDocumentText /> Resume
          </a>
        </div>
      </div>
      <div className="form-div">
        <h2>Email Me:</h2>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
