import { motion } from 'framer-motion'
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { FaGithub, FaGooglePlay } from 'react-icons/fa'

import Header from '~/components/Header'
import { FinnDetails } from '~/styles/finn'
import { MainPageFace, ContactSection } from '~/styles/home'
import type { NavLabels } from '~/types/content'

type PageProps = NavLabels & {
  description: string
  projectAbout: string
  projectAboutOne: string
  projectAboutTwo: string
}

export const getStaticProps: GetStaticProps<PageProps> = async ({ locale }) => {
  const isUS = locale === 'en-US'
  const description = isUS ? 'Software Developer' : 'Desenvolvedor de Software'
  const about = isUS ? 'About me' : 'Sobre Mim'
  const projects = isUS ? 'Projects' : 'Projetos'
  const checkMe = isUS ? 'Check me out!' : 'Me Encontre'
  const contact = isUS ? 'Contact' : 'Contato'
  const resume = isUS ? 'Resume' : 'Currículo'
  const back = isUS ? 'Turn Back' : 'Voltar'
  const projectAbout = isUS ? 'About' : 'Sobre'
  const projectAboutOne = isUS
    ? 'Amazing Note is now built with Compose Multiplatform UI (shared Android/iOS), providing a clean, responsive note‑taking experience with categorized notes and a modern design.'
    : 'O Amazing Note agora é construído com Compose Multiplatform UI (compartilhado Android/iOS), oferecendo uma experiência de anotações limpa e responsiva com categorização de notas e design moderno.'
  const projectAboutTwo = isUS
    ? 'The app follows Clean Architecture (UI → ViewModel → UseCases → Repository → Data Source). It uses SQLDelight for persistence, Kotlin Coroutines for async work, and Hilt for DI. Tests are covered with JUnit and Mockito.'
    : 'O app segue Clean Architecture (UI → ViewModel → UseCases → Repository → Data Source). Usa SQLDelight para persistência, Kotlin Coroutines para tarefas assíncronas e Hilt para injeção de dependências. Os testes são feitos com JUnit e Mockito.'
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
      resume_link: isUS ? 'resume' : 'curriculo',
    },
  }
}

const AmazingNote: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  useEffect(() => {
    window.scroll({
      top: 0,
    })
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (event: Event) => {
        event.preventDefault()
        const href = (event.currentTarget as HTMLAnchorElement).href.split('#', 2)[1]
        const element = document.getElementById(href)
        window.scroll({
          behavior: 'smooth',
          top: element ? element.offsetTop : 0,
        })
      })
    })
  }, [])

  const resumeLink =
    props.resume_link == 'resume' ? (
      <a href="/resume.pdf" target="_blank">
        {props.resume}
      </a>
    ) : (
      <a href="/curriculo.pdf" target="_blank">
        {props.resume}
      </a>
    )

  return (
    <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Head>
        <title>Eduardo Santos - AmazingNote</title>
        <link rel="icon" href="/icon.ico" />
      </Head>
      <main>
        <MainPageFace background="/amazingnote-bg-sm.svg">
          <Header
            about={props.about}
            projects={props.projects}
            contact={props.contact}
            resumeNode={resumeLink}
            backLabel={props.back}
            backHref="/"
          />
          <FinnDetails>
            <div className="project_spec">
              <div className="project_spec_container">
                <h1>Amazing Note</h1>
                <div>
                  <h5>Kotlin</h5>
                  <Image src="/kotlin_icon.png" alt="Kotlin Icon" width={18} height={18} />
                  <h5>Android</h5>
                  <Image
                    className="android_icon"
                    src="/android_icon.png"
                    alt="Android Icon"
                    width={22}
                    height={22}
                  />
                </div>
                <ul>
                  <li>
                    <b>{props.projectAbout}</b>
                  </li>
                  <li>{props.projectAboutOne}</li>
                  <li>{props.projectAboutTwo}</li>
                </ul>
                <div className="tags">
                  <p>
                    <b>Tags</b>
                  </p>
                  <div className="tags_container">
                    <p>Compose Multiplatform</p>
                    <p>Kotlin Multiplatform</p>
                    <p>SQLDelight</p>
                    <p>Coroutines</p>
                    <p>Hilt</p>
                    <p>Clean Architecture</p>
                    <p>Mockito</p>
                    <p>JUnit</p>
                  </div>
                </div>
                <p className="btn_container_title">
                  <b>Github - Playstore</b>
                </p>
                <div className="btn_container">
                  <a
                    href="https://github.com/edufelip/amazing-note"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub size="24" />
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.edufelip.amazing_note"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGooglePlay size="24" />
                  </a>
                </div>
              </div>
            </div>
          </FinnDetails>
        </MainPageFace>
        <ContactSection id="contact">
          <h2>{props.checkMe}</h2>
          <div className="bundle">
            <a href="https://github.com/edufelip" target="_blank" rel="noreferrer">
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/eduardo-felipe-5593221a5/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
            <a href="https://medium.com/@eduardofelipi" target="_blank" rel="noreferrer">
              Blog
            </a>
          </div>
          <p>©2023 Eduardo Santos - eduardofelipi@gmail.com</p>
        </ContactSection>
      </main>
    </motion.div>
  )
}

export default AmazingNote
