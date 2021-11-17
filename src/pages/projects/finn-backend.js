import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { RiCloseLine } from 'react-icons/ri'
import { FaGithub, FaGooglePlay, FaAngleLeft } from 'react-icons/fa'
import {MainPageFace, ContactSection, MobileMenu } from "~/styled/home"
import { BsArrowLeft } from 'react-icons/bs'
import { FinnDetails } from '~/styled/finn'


function FinnBackend() {
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
        <title>Eduardo Santos - Finn Backend</title>
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
        <MainPageFace background="/finnbackend-bg-sm.svg">
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
            <Link href="/"><FaAngleLeft className="backMenuBtn" size={36}/></Link>
          </div>
          <FinnDetails>
            <div className="project_spec">
              <div className="project_spec_container">
                <h1>Finn Backend</h1>
                <div> 
                  <h5>Typescript</h5>
                  <img src="/typescript_icon.png" alt="Typescript Icon" />
                  <h5>Node.js</h5>
                  <img className="android_icon" src="/node_icon.png" alt="Node Icon" />
                </div>
                <ul>
                  <li><b>About</b></li>
                  <li>This project came from the necessity of a backend for the Finn Android app. Due to my previous experience in Javascript and Typescript, I felt that Node.js was the ideal choice, as well as using the postgreSQL Database</li>
                  <li>The backend is being hosted on AWS and the Database is running in a Docker container</li>
                </ul>
                <div className="tags">
                  <p><b>Tags</b></p>
                  <div className="tags_container">
                    <p>Express</p>
                    <p>PostgreSQL</p>
                    <p>Docker</p>
                    <p>Aws</p>
                    <p>Clean Architecture</p>
                  </div>
                </div>
                <p className="btn_container_title"><b>Github - Playstore</b></p>
                <div className="btn_container">
                  <a href="https://github.com/edufelip/finn__backend" target="_blank"><FaGithub size="24"/></a>
                </div>
              </div>
            </div>
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

export default (FinnBackend);