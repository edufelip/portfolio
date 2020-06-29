import Head from 'next/head'
import Link from 'next/link'
import {useEffect} from 'react'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

import {MainPageFace, MainContent, ProjectsSection, Project, AboutSection, ContactSection, BlogSection} from "~/styled/home"

import withAnalytics from "~/hoc/withAnalytics"

function Home() {

  useEffect(() => {
    window.addEventListener('scroll', () => {
      // const returnButton = document.querySelector()
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
  }, [])

  return (
    <div className="container">
      <Head>
        <title>Eduardo Santos</title>
        <link rel="icon" href="/icon.ico" />
      </Head>
      <main>
        <MainPageFace>
          <div className="header">
            <ul>
              <li><a href='#about'>About me</a></li>
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
          <Project background="/project.jpg">
            <div className="shadow">
              <div className="wrap">
                <h2>English Moon</h2>
                <p>English course website</p>
                <div>
                  <Link href="projects/english-moon">
                    <a>Details</a>
                  </Link>
                  <a href="google.com"><FaGithub size="24"/></a>
                </div>
              </div>
            </div>
          </Project>
          <Project>
          
          </Project>
        </ProjectsSection>
        <BlogSection>

        </BlogSection>
        <ContactSection id="contact">
          <h2>Check me out!</h2>
          <div className="bundle">
            <a href="">Github</a>
            <a href="">Linkedin</a>
            <a href="">Blog</a>
          </div>
          <p>©2020 Eduardo Santos - edu_felip@hotmail.com</p>
        </ContactSection>
      </main>
    </div>
  )
}

export default withAnalytics()(Home);