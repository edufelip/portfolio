import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { RiCloseLine } from 'react-icons/ri'
import { FaGithub, FaAngleLeft } from 'react-icons/fa'
import {MainPageFace, ContactSection, MobileMenu } from "~/styled/home"
import { BsArrowLeft } from 'react-icons/bs'
import { FinnDetails } from '~/styled/finn'
import { useRouter } from 'next/router'

export async function getStaticProps({ locale }) {
  let description = locale == "en-US" ? "Software Developer" : "Desenvolvedor de Software"
  let about = locale == "en-US" ? "About me" : "Sobre Mim"
  let projects = locale == "en-US" ? "Projects" : "Projetos"
  let contact = locale == "en-US" ? "Contact" : "Contato"
  let resume = locale == "en-US" ? "Resume" : "Currículo"
  let back = locale == "en-US" ? "Turn Back" : "Voltar"
  let checkMe = locale == "en-US" ? "Check me out!" : "Me Encontre"
  let projectAbout = locale == "en-US" ? "About" : "Sobre"
  let projectAboutOne = locale == "en-US" ? "This project came from the necessity of a backend for the Finn Android app. Due to my previous experience in Javascript and Typescript, I felt that Node.js was the ideal choice, as well as using the postgreSQL Database." : "Esse projeto veio da necessidade de um backend para o aplicativo Finn para Android. Devido à minha prévia experiência em Typescript e Javascript, eu senti que Node.js seria a escolha ideal, assim como usar o banco de dados postgreSQL."
  let projectAboutTwo = locale == "en-US" ? "The backend is being hosted on AWS and the Database is running in a Docker container. Lastly, this project follows TDD practices, so I used the Jest library to implement tests." : "O backend está sendo hospedado na AWS e o banco de dados está rodando em um container no Docker. Vale apontar que o projeto foi construído orientado a testes desde o início, sendo assim foi usada a biblioteca Jest para a implementação dos testes."
  return {
    props: {
      description,
      about,
      projects,
      contact,
      resume,
      back,
      projectAbout,
      projectAboutOne,
      projectAboutTwo,
      checkMe
    },
  }
}

function FinnBackend(props) {
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
    <a href="./resume.pdf" target="_blank">{props.resume}</a>
  : <a href="./curriculo.pdf" target="_blank">{props.resume}</a>;

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
            <li><span>{resumeLink}</span></li>
          </ul>
        </MobileMenu>
        <MainPageFace background="/finnbackend-bg-sm.svg">
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
                <h1>Finn Backend</h1>
                <div> 
                  <h5>Typescript</h5>
                  <img src="/typescript_icon.png" alt="Typescript Icon" />
                  <h5>Node.js</h5>
                  <img className="android_icon" src="/node_icon.png" alt="Node Icon" />
                </div>
                <ul>
                  <li><b>{props.projectAbout}</b></li>
                  <li>{props.projectAboutOne}</li>
                  <li>{props.projectAboutTwo}</li>
                </ul>
                <div className="tags">
                  <p><b>Tags</b></p>
                  <div className="tags_container">
                    <p>Express</p>
                    <p>PostgreSQL</p>
                    <p>Docker</p>
                    <p>Aws</p>
                    <p>Clean Architecture</p>
                    <p>Jest</p>
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
          <h2>{props.checkMe}</h2>
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