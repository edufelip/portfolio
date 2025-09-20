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
    ? 'Amazing Note is a simple, fast note‑taking app to collect and organize text. It uses Compose Multiplatform UI with a shared Android/iOS codebase and targets Android API 24+ on JDK 17.'
    : 'Amazing Note é um app de notas simples e rápido para coletar e organizar textos. Usa Compose Multiplatform UI com base compartilhada entre Android/iOS e suporta Android API 24+ em JDK 17.'
  const projectAboutTwo = isUS
    ? 'It follows Clean Architecture (UI → ViewModel → UseCases → Repository → Data Source). The shared UI consumes a platform ViewModel (KmpNoteViewModel); data uses SQLDelight, async work uses Kotlin Coroutines, and Android DI is powered by Dagger Hilt. Unit tests run with JUnit and Mockito, and strings are localized via shared keys with Android/iOS providers.'
    : 'Segue Clean Architecture (UI → ViewModel → UseCases → Repository → Data Source). A UI compartilhada consome um ViewModel de plataforma (KmpNoteViewModel); a persistência usa SQLDelight, tarefas assíncronas usam Kotlin Coroutines e a DI no Android é feita com Dagger Hilt. Os testes usam JUnit e Mockito, e as strings são localizadas via chaves compartilhadas com provedores Android/iOS.'
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
                  <h5>Compose Multiplatform</h5>
                  <Image
                    className="android_icon"
                    src="/jetpack_compose_icon.png"
                    alt="Compose Icon"
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
                    <p>Dagger Hilt</p>
                    <p>Clean Architecture</p>
                    <p>JUnit</p>
                    <p>Mockito</p>
                    <p>Localization (i18n)</p>
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
