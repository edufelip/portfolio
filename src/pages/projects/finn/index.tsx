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
  const contact = isUS ? 'Contact' : 'Contato'
  const resume = isUS ? 'Resume' : 'Currículo'
  const checkMe = isUS ? 'Check me out!' : 'Me Encontre'
  const back = isUS ? 'Turn Back' : 'Voltar'
  const projectAbout = isUS ? 'About' : 'Sobre'
  const projectAboutOne = isUS
    ? 'Finn is a Kotlin-first social network built with Jetpack Compose Multiplatform so Android and iOS share the same UI layer. Coroutines and Flow keep feeds, community discussions, and push notifications reactive.'
    : 'Finn é uma rede social desenvolvida em Kotlin com Jetpack Compose Multiplatform, permitindo que Android e iOS compartilhem a mesma camada de interface. Coroutines e Flow mantêm os feeds, as discussões das comunidades e as notificações push reativos.'
  const projectAboutTwo = isUS
    ? 'The app follows a Clean Architecture split into domain, data, and presentation layers, powered by Hilt for dependency injection, Retrofit plus OkHttp for networking, SQLDelight for caching, and Firebase modules (Auth, Remote Config, FCM) for authentication, feature flags, and messaging. Navigation Compose, Coil on Android, Kamel on iOS, and a pipeline with GitHub Actions, ktlint, detekt, and Lint reinforce a smooth cross-platform experience.'
    : 'O app segue uma Clean Architecture dividida em camadas de domínio, dados e apresentação, usando Hilt para injeção de dependências, Retrofit com OkHttp para rede, SQLDelight para cache e módulos do Firebase (Auth, Remote Config, FCM) para autenticação, feature flags e mensagens. Navigation Compose, Coil no Android, Kamel no iOS e um pipeline com GitHub Actions, ktlint, detekt e Lint reforçam uma experiência multiplataforma fluida.'
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

const Finn: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
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
        <title>Eduardo Santos - Finn</title>
        <link rel="icon" href="/icon.ico" />
      </Head>
      <main>
        <MainPageFace background="/finn-bg-sm.svg">
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
                <h1>Finn</h1>
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
                    <p>Jetpack Compose Multiplatform</p>
                    <p>Coroutines</p>
                    <p>Flow</p>
                    <p>Clean Architecture</p>
                    <p>Hilt</p>
                    <p>Retrofit</p>
                    <p>OkHttp</p>
                    <p>SQLDelight</p>
                    <p>Firebase Auth</p>
                    <p>Remote Config</p>
                    <p>Firebase Cloud Messaging</p>
                    <p>Navigation Compose</p>
                    <p>Coil</p>
                    <p>Kamel</p>
                    <p>ktlint</p>
                    <p>detekt</p>
                    <p>GitHub Actions CI</p>
                  </div>
                </div>
                <p className="btn_container_title">
                  <b>Github - Playstore</b>
                </p>
                <div className="btn_container">
                  <a href="https://github.com/edufelip/finn" target="_blank" rel="noreferrer">
                    <FaGithub size="24" />
                  </a>
                  <a
                    href="http://play.google.com/store/apps/details?id=com.edufelip.finn"
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

export default Finn
