import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { RiCloseLine } from 'react-icons/ri'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdEmail } from 'react-icons/md'
import {MainPageFace, MainContent, ProjectsSection, Project, AboutSection, ContactSection, MobileMenu} from "~/styled/home"

import withAnalytics from "~/hoc/withAnalytics"
import { ChangeY } from "~/actions/indexActions"

function Home() {
  const pageYOffset = useSelector(state => state.pageYOffset)
  const dispatch = useDispatch()

  useEffect(() => {
    window.scroll({
      top: pageYOffset
    })
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (event) => {
        event.preventDefault()
        const href = event.target.href.split('#', 2)[1]
        const element = document.getElementById(href)
        window.scroll({
          behavior: 'smooth',
          top: href === "about" ? element.offsetTop - 150 : element.offsetTop
        })
      })
    })
    document.querySelectorAll('.projectAnchor').forEach(anchor => {
      anchor.addEventListener('click', (event) => {
        dispatch(ChangeY(window.pageYOffset))
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
        <title>Eduardo Santos</title>
        <link rel="icon" href="/icon.ico" />
      </Head>
      <main>
        <MobileMenu className="mobileMenu">
          <RiCloseLine className="closeMenuBtn" size={45} />
          <ul>
            <li><a href='#about'>About me</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#contact'>Contact</a></li>
            <li><a>Blog</a></li>
            <li><span><a>Resume</a></span></li>
          </ul>
        </MobileMenu>
        <MainPageFace background="/background.svg">
          <div className="header">
            <ul>
              <li><a href='#about'>About me</a></li>
              <li><a href='#projects'>Projects</a></li>
              <li><a href='#contact'>Contact</a></li>
              <li><a>Blog</a></li>
              <li><span><a>Resume</a></span></li>
            </ul>
            <GiHamburgerMenu className="hambMenuBtn" size={36}/>
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
                <div className="block blockOne"><a href="https://github.com/edufelip" target="_blank"><FaGithub size={35} /></a></div>
                <div className="block blockTwo"><a href="https://www.linkedin.com/in/eduardo-felipe-5593221a5/" target="_blank"><FaLinkedin size={35} /></a></div>
                <div className="block blockThree"><a href="mailto:edu_felip@hotmail.com"><MdEmail size={35} /></a></div>
              </div>  
            </div>
          </MainContent>
        </MainPageFace>
        <AboutSection id="about">
          <h2>Hey, I'm Eduardo</h2>
          <p>I'm a full stack web developer passionated about finding new ways to improve my projects in order to deliver beautiful code as well as beautiful design </p>
          <div className="bar"></div>
          <p>I have experience developing and designing <b>software for the web</b>, from single landing pages to progressive web applications. I'm always concerned not only with the design of the product but also with the experience the user may have when using the software</p>
          <p>Feel free to check out <b><u><a>my blog</a></u></b> where i post several articles about development and a bunch of useful tips</p>
        </AboutSection>
        <ProjectsSection id="projects">
          <h2>Latest Projects</h2>
          <Project className="english-moon" background="/project.svg">
            <div className="shadow">
              <div className="wrap">
                <h2>English Moon</h2>
                <p>English course website</p>
                <div>
                  <Link scroll={false} href="projects/english-moon">
                    <a className="projectAnchor">Details</a>
                  </Link>
                  <a href="google.com"><FaGithub size="24"/></a>
                </div>
              </div>
            </div>
          </Project>
          <Project className="denim-stars">
            <div className="shadow">
              <div className="wrap">
                <h2>Denim Stars</h2>
                <p>Clothing e-commerce</p>
                <div>
                  <Link scroll={false} href="projects/denim-stars">
                    <a className="projectAnchor">Details</a>
                  </Link>
                  <a href="google.com"><FaGithub size="24"/></a>
                </div>
              </div>
            </div>
          </Project>
          <Project className="portfolio">
            <div className="shadow">
              <div className="wrap">
                <h2>Porfolio</h2>
                <p>My portfolio made with NextJS</p>
                <div>
                  <Link scroll={false} href="projects/portfolio">
                    <a className="projectAnchor">Details</a>
                  </Link>
                  <a href="google.com"><FaGithub size="24"/></a>
                </div>
              </div>
            </div>
          </Project>
          <Project className="">
            <div className="shadow">
              <div className="wrap">
                <h2>Next Project</h2>
                <p>Future Project to be filled</p>
                <div>
                  <Link scroll={false} scroll={false} href="projects/english-moon">
                    <a className="projectAnchor">Details</a>
                  </Link>
                  <a href="google.com"><FaGithub size="24"/></a>
                </div>
              </div>
            </div>
          </Project>
        </ProjectsSection>
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

export default withAnalytics()(Home);