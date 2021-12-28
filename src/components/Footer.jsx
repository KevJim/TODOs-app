import React from 'react'
import github from "../assets/img/github.png"
import twitter from "../assets/img/twitter.png"
import ig from "../assets/img/instagram.png"
import "../assets/css/Footer.css"

const Footer = () => {
  return (
    <footer>
      <a href='https://github.com/KevJim' target="_blank" rel="noopener noreferrer"><img src={github} alt='github kevin' /></a>
      <a href='https://twitter.com/Jiokso' target="_blank" rel="noopener noreferrer"><img src={twitter} alt='twitter kevin' /></a>
      <a href='https://www.instagram.com/kevjimoso/' target="_blank" rel="noopener noreferrer"><img src={ig} alt='instagram kevin' /></a>
    </footer>
  )
}

export {Footer}
