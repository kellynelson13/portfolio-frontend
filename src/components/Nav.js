import React, {useState} from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {BsFilePerson} from 'react-icons/bs'
import {AiOutlineUnorderedList} from 'react-icons/ai'
import {GrProjects} from 'react-icons/gr'
import {BiMessageAltDetail} from 'react-icons/bi'



const Nav = () => {
    const [activeNav, setActiveNav] = useState("#home");

  return (
    <nav>
        <a class={activeNav === "#home" ? "active" : ''} onClick={() => setActiveNav("#home")} href="#home"><AiOutlineHome /></a>
        <a class={activeNav === "#about" ? "active" : ''} onClick={() => setActiveNav("#about")} href="#about" ><BsFilePerson /></a>
        <a class={activeNav === "#skills" ? "active" : ''} onClick={() => setActiveNav("#skills")} href="#skills"><AiOutlineUnorderedList /></a>
        <a class={activeNav === "#projects" ? "active" : ''} onClick={() => setActiveNav("#projects")} href="#projects"><GrProjects /></a>
        <a class={activeNav === "#contact" ? "active" : ''} onClick={() => setActiveNav("#contact")} href="#contact"><BiMessageAltDetail /></a>
    </nav>
  )
}

export default Nav