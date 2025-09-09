import Head from 'next/head'
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Link from 'next/link'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaGooglePlay, FaAngleLeft } from 'react-icons/fa'
import {MainPageFace, ContactSection, MobileMenu} from "~/styled/home"
import { RiCloseLine } from 'react-icons/ri'
import { BsArrowLeft } from 'react-icons/bs'
import { useRouter } from 'next/router'
import { FinnDetails } from '~/styled/finn'

type PageProps = {
  description: string
  about: string
  projects: string
  contact: string
  resume: string
  back: string
  checkMe: string
  projectAbout: string
  projectAboutOne: string
  projectAboutTwo: string
  resume_link: string
}

export const getStaticProps: GetStaticProps<PageProps> = async ({ locale }) => {
  let description = locale == "en-US" ? "Software Developer" : "Desenvolvedor de Software"
  let about = locale == "en-US" ? "About me" : "Sobre Mim"
  let projects = locale == "en-US" ? "Projects" : "Projetos"
  let checkMe = locale == "en-US" ? "Check me out!" : "Me Encontre"
  let contact = locale == "en-US" ? "Contact" : "Contato"
  let resume = locale == "en-US" ? "Resume" : "Currículo"
  let back = locale == "en-US" ? "Turn Back" : "Voltar"
  let projectAbout = locale == "en-US" ? "About" : "Sobre"
  let projectAboutOne = locale == "en-US" ? "My idea was to create a beautiful and clean product focusing on being subtle. With the feature that allows the user to label their notes according to priorities, Amazing Note is the perfect app for someone who wants a simple yet efficient note taking app." : "Minha ideia foi criar um aplicativo bem limpo e preciso no que faz. Com a funcionalidade que permite que o usuário classifique uma nota de acordo com sua prioridade, o Amazing Note é o aplicativo perfeito para quem quer um aplicativos de notas que, apesar de simples, é bonito e eficiente."
  let projectAboutTwo = locale == "en-US" ? "I used RoomDB to store the note data locally inside the user's phone, as well as Coroutines to perform the database operations asynchronously. I also used JUnit and Espresso for Unit and UI Tests." : "Eu usei RoomDB para guardar as notas localmente no aparelho do usuário, assim como Coroutines para a realização das operações no banco de dados assíncronamente. Também utilizei JUnit e Espresso para a realização de testes unitários e de UI."
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
      checkMe,
      resume_link: locale === 'en-US' ? 'resume' : 'curriculo'
    },
  }
}


const AmazingNote: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  let router = useRouter()

  useEffect(() => {
    window.scroll({
      top: 0
    })
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (event: any) => {
        event.preventDefault()
        const href = event.target.href.split('#', 2)[1]
        const element = document.getElementById(href)
        window.scroll({
          behavior: 'smooth',
          top: element ? element.offsetTop : 0
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
            <li><span>{resumeLink}</span></li>
          </ul>
        </MobileMenu>
        <MainPageFace background="/amazingnote-bg-sm.svg">
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
                <h1>Amazing Note</h1>
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
                    <p>MVVM</p>
                    <p>Coroutines</p>
                    <p>LiveData</p>
                    <p>Hilt</p>
                    <p>RoomDB</p>
                    <p>TDD</p>
                    <p>Mockito</p>
                    <p>JUnit</p>
                    <p>Espresso</p>
                  </div>
                </div>
                <p className="btn_container_title"><b>Github - Playstore</b></p>
                <div className="btn_container">
                  <a href="https://github.com/edufelip/amazing-note" target="_blank"><FaGithub size="24"/></a>
                  <a href="https://play.google.com/store/apps/details?id=com.edufelip.amazing_note" target="_blank"><FaGooglePlay size="24"/></a>
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

export default AmazingNote
