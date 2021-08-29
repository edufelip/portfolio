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
import { useRouter } from 'next/router'
import { ChangeY } from "~/actions/indexActions"

export async function getStaticProps({ locale }) {
  let description = locale == "en-US" ? "Software Developer" : "Desenvolvedor de Software"
  let about = locale == "en-US" ? "About me" : "Sobre Mim"
  let projects = locale == "en-US" ? "Projects" : "Projetos"
  let contact = locale == "en-US" ? "Contact" : "Contato"
  let resume = locale == "en-US" ? "Resume" : "Currículo"
  let check = locale == "en-US" ? "Check my Projects" : "Veja meus Projetos"
  let about_title = locale == "en-US" ? "Hey, I'm Eduardo" : "Olá, Eu sou Eduardo"
  let about_desc_one = locale == "en-US" ? "I'm an Android Developer passionated about finding new ways to improve my projects in order to deliver clean and readable code as well as beautiful design" : "Eu sou um Desenvolvedor de Aplicativos Android em busca de novas maneiras de melhorar meus projetos, consequentemente me ajudando a construir um código cada vez mais limpo e gerar um produto de excelente"
  let about_desc_two = locale == "en-US" ? "I have experience developing and designing native android apps with Java and Kotlin as well. I'm always concerned not only with the design of the product but also with the experience the user may have when using it" : "Eu tenho experiência desenvolvendo aplicativos nativos para Android em Java e também em Kotlin. Sempre prezo não somente pelo design do projeto, mas também pela experiência que o cliente virá a ter usando-o"
  let latest = locale == "en-US" ? "Latest Projects" : "Últimos Projetos"
  let finn_desc = locale == "en-US" ? "Collection of Forums (Social Media)" : "Mídia Social baseada em Fóruns"
  let amazingnote_desc = locale == "en-US" ? "Note App" : "Aplicativo de Notas"
  let checkMe = locale == "en-US" ? "Check me out!" : "Me Encontre"
  let access = locale == "en-US" ? "Access" : "Acessar"
  let resume_link = locale == "en-US" ? "resume" : "curriculo"
  return {
    props: {
      description,
      about,
      projects,
      contact,
      resume,
      check,
      about_title,
      about_desc_one,
      about_desc_two,
      latest,
      finn_desc,
      amazingnote_desc,
      checkMe,
      access,
      resume_link
    },
  }
}

function Home(props) {
  let router = useRouter()

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
          behavior: "smooth",
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
        <title>Eduardo Santos</title>
        <link rel="icon" href="/icon.ico" />
      </Head>
      <main>
        <MobileMenu className="mobileMenu">
          <RiCloseLine className="closeMenuBtn" size={45} />
          <ul>
            <li><a href='#about'>{props.about}</a></li>
            <li><a href='#projects'>{props.projects}</a></li>
            <li><a href='#contact'>{props.contact}</a></li>
            <li><a href="https://medium.com/@eduardofelipi" target="_blank">Blog</a></li>
            <li><span>{resumeLink}</span></li>
          </ul>
        </MobileMenu>
        <MainPageFace background="/background.svg">
          <div className="header">
            <ul>
            <li><a href='#about'>{props.about}</a></li>
            <li><a href='#projects'>{props.projects}</a></li>
            <li><a href='#contact'>{props.contact}</a></li>
            <li><a href="https://medium.com/@eduardofelipi" target="_blank">Blog</a></li>
            <li><span>{resumeLink}</span></li>
            </ul>
            <GiHamburgerMenu className="hambMenuBtn" size={36}/>
          </div>
          <MainContent>
            <div className="contentLeft">
              <div className="container">
                <h1>Eduardo Santos</h1>
                <h2>{props.description}</h2>
                <a href="#projects">{props.check}</a>
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
          <h2>{props.about_title}</h2>
          <p>{props.about_desc_one}</p>
          <div className="bar"></div>
          <p>{props.about_desc_two}</p>
        </AboutSection>
        <ProjectsSection id="projects">
          <h2>{props.latest}</h2>
          <Project className="finn" background="/finn-bg.svg">
            <div className="shadow">
              <div className="wrap">
                <h2>Finn</h2>
                <p>{props.finn_desc}</p>
                <div>
                  <Link scroll={false} href="projects/finn">
                    <a className="projectAnchor">{props.access}</a>
                  </Link>
                  <a href="https://www.github.com/edufelip/finn" target="_blank"><FaGithub size="24"/></a>
                </div>
              </div>
            </div>
          </Project>
          <Project className="amazing-note">
            <div className="shadow">
              <div className="wrap">
                <h2>AmazingNote</h2>
                <p>{props.amazingnote_desc}</p>
                <div>
                  <Link scroll={false} href="projects/amazing-note">
                    <a className="projectAnchor">{props.access}</a>
                  </Link>
                  <a href="google.com"><FaGithub size="24"/></a>
                </div>
              </div>
            </div>
          </Project>
        </ProjectsSection>
        <ContactSection id="contact">
          <h2>{props.checkMe}!</h2>
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

export default (Home);