import Link from 'next/link'
import { motion } from 'framer-motion'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

import {MainPageFace, MainContent, ProjectsSection, Project, AboutSection, ContactSection, BlogSection} from "~/styled/home"

import withAnalytics from "~/hoc/withAnalytics"

function EnglishMoon() {
  return (
    <motion.div 
      exit={{opacity: 0}}
      initial={{opacity: 0}} 
      animate={{opacity: 1}}
    >
      <main>
        <MainPageFace>
          <div className="header">
            <ul>
              <li>
                <Link href="/" scroll={false}>
                  <a>Turn Back</a>
                </Link>
              </li>
              <li><a href='#projects'>Projects</a></li>
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
        {/* <AboutSection id="about">
          <h2>Hey, I'm Eduardo</h2>
          <p>I'm a full stack web developer passionated about finding new ways to improve my projects in order to deliver beautiful code as well as beautiful design </p>
          <div className="bar"></div>
          <p>I have experience developing and designing <b>software for the web</b>, from single landing pages to progressive web applications. I'm always concerned not only with the design of the product but also with the experience the user may have when using the software</p>
          <p>Feel free to check out <b><u><a>my blog</a></u></b> where i post several articles about development and a bunch of useful tips</p>
        </AboutSection> */}
      </main>  
    </motion.div>
  )
}

export default withAnalytics()(EnglishMoon);