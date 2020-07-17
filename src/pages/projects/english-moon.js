import Head from 'next/head'
import { useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { BsArrowLeft } from 'react-icons/bs'

import {MainPageFace, MainContent, ContactSection} from "~/styled/home"
import {EnglishMoonDetails} from '~/styled/english-moon'

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
        <MainPageFace background="/project.svg">
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
          <EnglishMoonDetails>

          </EnglishMoonDetails>
          
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