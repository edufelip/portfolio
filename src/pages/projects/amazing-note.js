import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import { motion } from 'framer-motion'

import { RiCloseLine } from 'react-icons/ri'
import { GiHamburgerMenu } from 'react-icons/gi'
import {MainPageFace, ContactSection, MobileMenu} from "~/styled/home"
import { BsArrowLeft } from 'react-icons/bs'
import { FinnDetails } from '~/styled/finn'


function AmazingNote() {
  useEffect(() => {
    window.scroll({
      top: 0
    })
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (event) => {
        event.preventDefault()
        const href = event.target.href.split('#', 2)[1]
        const element = document.getElementById(href)
        window.scroll({
          behavior: 'smooth',
          top: element.offsetTop
        })
      })
    })
  }, [])

  return (
    <motion.div 
      exit={{opacity: 0}} 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
    >
      <Head>
        <title>Eduardo Santos - AmazingNote</title>
        <link rel="icon" href="/icon.ico" />
      </Head>
      <main>
        <MobileMenu className="mobileMenu">
          <RiCloseLine className="closeMenuBtn" size={45} />
          <ul>
            <li><a href='#about'>About me</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#contact'>Contact</a></li>
            <li><a href="https://medium.com/@eduardofelipi" target="_blank">Blog</a></li>
            <li><span><a href="/curriculo.pdf" target="_blank">Resume</a></span></li>
          </ul>
        </MobileMenu>
        <MainPageFace background="/finn-bg-sm.svg">
          <div className="header">
            <ul>
              <li>
                <Link href="/" scroll={false}>
                  <a> <BsArrowLeft size={16}/> Turn Back</a>
                </Link>
              </li>
              <li><a href='#contact'>Contact</a></li>
              <li><a href="https://medium.com/@eduardofelipi" target="_blank">Blog</a></li>
              <li><span><a href="/curriculo.pdf" target="_blank">Resume</a></span></li>
            </ul>
            <GiHamburgerMenu className="hambMenuBtn" size={36}/>
          </div>
          <FinnDetails>

          </FinnDetails>
        </MainPageFace>
        <ContactSection id="contact">
          <h2>Check me out!</h2>
          <div className="bundle">
            <a href="https://github.com/edufelip" target="_blank">Github</a>
            <a href="https://www.linkedin.com/in/eduardo-felipe-5593221a5/" target="_blank">Linkedin</a>
            <a href="https://medium.com/@eduardofelipi" target="_blank">Blog</a>
          </div>
          <p>©2021 Eduardo Santos - edu_felip@hotmail.com</p>
        </ContactSection>
      </main>
    </motion.div>
  )
}

export default (AmazingNote);