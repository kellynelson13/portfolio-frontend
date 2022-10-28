import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {BsFilePerson} from 'react-icons/bs'
import {AiOutlineUnorderedList} from 'react-icons/ai'
import {GrProjects} from 'react-icons/gr'
import {BiMessageAltDetail} from 'react-icons/bi'


const Nav = () => {
  return (
    <nav>
        <a class="active" href="#home"><AiOutlineHome /></a>
        <a href="#about"><BsFilePerson /></a>
        <a href="#skills"><AiOutlineUnorderedList /></a>
        <a href="#projects"><GrProjects /></a>
        <a href="#contact"><BiMessageAltDetail /></a>
    </nav>
  )
}

export default Nav