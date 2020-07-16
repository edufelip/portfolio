import Head from 'next/head'
import { useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { BsArrowLeft } from 'react-icons/bs'

import {MainPageFace, MainContent, ContactSection, BlogSection} from "~/styled/home"

import withAnalytics from "~/hoc/withAnalytics"

function EnglishMoon() {

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
        <title>Eduardo Santos - English Moon</title>
        <link rel="icon" href="/icon.ico" />
      </Head>
      <main>
        <MainPageFace background="/project.jpg">
          <div className="header">
            <ul>
              <li>
                <Link href="/" scroll={false}>
                  <a> <BsArrowLeft size={16}/> Turn Back</a>
                </Link>
              </li>
              <li><a href='#contact'>Contact</a></li>
              <li><a>Blog</a></li>
              <li><span><a>Resume</a></span></li>
            </ul>
          </div>
          <MainContent>
            <div className="contentLeft">
              <div className="container">
                <h1>Eduardo Santos</h1>
                <h2>Software Developer</h2>
                <a href="#projects">CHECK MY PROJECTS</a>
              </div>
            </div>
            <div className="contentRight">
              <div className="container">
                <div className="block blockOne"><a href=""><FaGithub size={35} /></a></div>
                <div className="block blockTwo"><a href=""><FaLinkedin size={35} /></a></div>
                <div className="block blockThree"><a href=""><MdEmail size={35} /></a></div>
              </div>  
            </div>
          </MainContent>
        </MainPageFace>
        <ContactSection id="contact">
          <h2>Check me out!</h2>
          <div className="bundle">
            <a href="https://github.com/edufelip" target="_blank">Github</a>
            <a href="https://www.linkedin.com/in/eduardo-felipe-5593221a5/" target="_blank">Linkedin</a>
            <a href="">Blog</a>
          </div>
          <p>©2020 Eduardo Santos - edu_felip@hotmail.com</p>
        </ContactSection>
      </main>  
    </motion.div>
  )
}

export default withAnalytics()(EnglishMoon);