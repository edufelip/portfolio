import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaGooglePlay, FaAngleLeft } from 'react-icons/fa'
import {MainPageFace, ContactSection, MobileMenu} from "~/styled/home"
import { RiCloseLine } from 'react-icons/ri'
import { BsArrowLeft } from 'react-icons/bs'
import { useRouter } from 'next/router'
import { FinnDetails } from '~/styled/finn'

export async function getStaticProps({ locale }) {
  let dict = {
    "pt-BR": {
      description: "Desenvolvedor de Software",
      about: "Sobre Mim",
      projects: "Projetos",
      contact: "Contato",
      resume: "Currículo",
      checkMe: "Me Encontre",
      back: "Voltar",
      projectAbout: "Sobre",
      projectAboutOne: "Live chat veio de uma idea de fazer um chat muito similar com o Telegram, mas que pudesse permitir o usuário catalogar os seus contatos de acordo com categorias, afim de se ter uma melhor organização de suas conversas",
      projectAboutTwo: "Esse projeto está sendo construído 100% em Jetpack Compose, usando amplamente o recurso de RealTime Database do Firebase, que faz a parte do Backend, permitindo a comunicação em tempo real. Também utilizei o recurso de RoomDB para armazenar as conversas localmente, assim como coroutines e Kotlin Flow para a comunicação assíncrona. Quanto a injeção de dependência usei Hilt"
    },
    "en-US": {
      description: "Software Developer",
      about: "About me",
      projects: "Projects",
      contact: "Contact",
      resume: "Resume",
      checkMe: "Check me out",
      back: "Go back <",
      projectAbout: "About",
      projectAboutOne: "Live chat came from an idea of creating a chat very similar to Telegram but that would allow users to categorize their contacts according to categories in order to have better organization of their conversations",
      projectAboutTwo: "This project is being built 100% in Jetpack Compose, extensively utilizing the Realtime Database feature of Firebase for the backend, enabling real-time communication. I have also used the RoomDB feature to store conversations locally, as well as coroutines and Kotlin Flow for asynchronous communication. As for dependency injection, I have used Hilt"
    }
  }
  
  return {
    props: dict[locale] || dict["en-US"],
  }
}

function LiveChat(props) {
  let router = useRouter()

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

  let resumeLink = props.resume_link == "resume" ?
    <a href="/resume.pdf" target="_blank">{props.resume}</a>
  : <a href="/curriculo.pdf" target="_blank">{props.resume}</a>;
  
  return (
    <motion.div 
      exit={{opacity: 0}} 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
    >
      <Head>
        <title>Eduardo Santos - LiveChat</title>
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
            <li><span>{resumeLink}</span></li>
          </ul>
        </MobileMenu>
        <MainPageFace background="/livechat-bg.svg">
          <div className="header">
            <ul>
              <li>
                <Link href="/" scroll={false}>
                  <a> <BsArrowLeft size={16}/> {props.back}</a>
                </Link>
              </li>
              <li><a href='#contact'>{props.contact}</a></li>
              <li><a href="https://medium.com/@eduardofelipi" target="_blank">Blog</a></li>
              <li><span>{resumeLink}</span></li>
            </ul>
            <Link href="/"><FaAngleLeft className="backMenuBtn" size={36}/></Link>
          </div>
          <FinnDetails>
            <div className="project_spec">
              <div className="project_spec_container">
                <h1>LiveChat</h1>
                <div> 
                  <h5>Kotlin</h5>
                  <img src="/kotlin_icon.png" alt="Kotlin Icon" />
                  <h5>Android</h5>
                  <img className="android_icon" src="/android_icon.png" alt="Android Icon" />
                </div>
                <ul>
                  <li><b>{props.projectAbout}</b></li>
                  <li>{props.projectAboutOne}</li>
                  <li>{props.projectAboutTwo}</li>
                </ul>
                <div className="tags">
                  <p><b>Tags</b></p>
                  <div className="tags_container">
                    <p>Jetpack Compose</p>
                    <p>Kotlin Flow</p>
                    <p>Firebase Realtime Database</p>
                    <p>Firebase Cloud Messaging</p>
                    <p>RoomDB</p>
                    <p>Hilt</p>
                    <p>JUnit</p>
                    <p>Mockito</p>
                    <p>Espresso</p>
                  </div>
                </div>
                <p className="btn_container_title"><b>Github</b></p>
                <div className="btn_container">
                  <a href="https://github.com/edufelip/live-chat_android" target="_blank"><FaGithub size="24"/></a>
                </div>
              </div>
            </div>
          </FinnDetails>
        </MainPageFace>
        <ContactSection id="contact">
          <h2>{props.checkMe}</h2>
          <div className="bundle">
            <a href="https://github.com/edufelip" target="_blank">Github</a>
            <a href="https://www.linkedin.com/in/eduardo-felipe-5593221a5/" target="_blank">Linkedin</a>
            <a href="https://medium.com/@eduardofelipi" target="_blank">Blog</a>
          </div>
          <p>©2023 Eduardo Santos - eduardofelipi@gmail.com</p>
        </ContactSection>
      </main>
    </motion.div>
  )
}

export default (LiveChat);