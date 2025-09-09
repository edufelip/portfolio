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
  let contact = locale == "en-US" ? "Contact" : "Contato"
  let resume = locale == "en-US" ? "Resume" : "Currículo"
  let checkMe = locale == "en-US" ? "Check me out!" : "Me Encontre"
  let back = locale == "en-US" ? "Turn Back" : "Voltar"
  let projectAbout = locale == "en-US" ? "About" : "Sobre"
  let projectAboutOne = locale == "en-US" ? "Finn came from the idea of a social media pretty much like reddit. Here users can create their communities and post about everything they want, as long as it's not sensitive or hate speech content. At the moment you subscribe to a community the posts about that subject will start appearing in your feed." : "Finn veio da ideia de ser uma rede social muito parecida com o reddit. Aqui usuário podem criar suas comunidades e postar sobre o que quiserem, contanto que não seja conteúdo sensível e nem discurso de ódio. A partir do momento que um usuário de inscreve em um comunidade, posts sobre aquele assunto começarão a aparecer em seu feed."
  let projectAboutTwo = locale == "en-US" ? "I used Retrofit to make api calls to the backend and also connected the app to Firebase, which is responsible for the user's authentication. I should also point out that RxJava here is fundamental for processing events asynchronously." : "Eu usei Retrofit para realizar chamadas à api e também conectei o aplicativo ao serviço do Firebase, que é responsável pela autenticação do usuário. Vale também apontar para o papel fundamental que o RxJava tem no projeto, processando eventos de forma assíncrona."
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

const Finn: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
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
        <title>Eduardo Santos - Finn</title>
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
        <MainPageFace background="/finn-bg-sm.svg">
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
                <h1>Finn</h1>
                <div> 
                  <h5>Java</h5>
                  <img src="/java_icon.png" alt="Java Icon" />
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
                    <p>Firebase Remote Config</p>
                    <p>OAuth</p>
                    <p>LiveData</p>
                    <p>MVVM</p>
                    <p>Retrofit</p>
                    <p>RxJava</p>
                    <p>Dependency Injection (Hilt)</p>
                    <p>ViewPager</p>
                  </div>
                </div>
                <p className="btn_container_title"><b>Github - Playstore</b></p>
                <div className="btn_container">
                  <a href="https://github.com/edufelip/finn" target="_blank"><FaGithub size="24"/></a>
                  <a href="http://play.google.com/store/apps/details?id=com.edufelip.finn" target="_blank"><FaGooglePlay size="24"/></a>
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

export default Finn
