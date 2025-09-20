import { motion } from 'framer-motion'
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { FaGithub } from 'react-icons/fa'

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
  const back = isUS ? 'Turn Back' : 'Voltar'
  const checkMe = isUS ? 'Check me out!' : 'Me Encontre'
  const projectAbout = isUS ? 'About' : 'Sobre'
  const projectAboutOne = isUS
    ? 'Finn Server is the Kotlin + Spring Boot API that powers the Finn social app, exposing REST endpoints documented with OpenAPI/Swagger. It persists communities, posts, and comments in PostgreSQL with Flyway migrations and ships Docker assets for local or cloud deployments.'
    : 'Finn Server é a API em Kotlin + Spring Boot que alimenta o aplicativo social Finn, expondo endpoints REST documentados com OpenAPI/Swagger. Ela persiste comunidades, posts e comentários em PostgreSQL com migrações Flyway e oferece artefatos Docker para executar localmente ou na nuvem.'
  const projectAboutTwo = isUS
    ? 'Environment-driven configuration wires DB credentials and Firebase Admin keys while layered guards (App header, Firebase App Check, Firebase Auth) protect every request. Gradle scripts (`run-local.sh`, `run-tests.sh`) spin up Testcontainers Postgres for integration tests and CI on GitHub Actions keeps the pipelines linted and healthy.'
    : 'A configuração orientada a variáveis de ambiente injeta credenciais do banco e chaves do Firebase Admin enquanto camadas de segurança (cabeçalho do app, Firebase App Check, Firebase Auth) protegem cada requisição. Scripts Gradle (`run-local.sh`, `run-tests.sh`) sobem Postgres via Testcontainers para testes de integração e o CI no GitHub Actions mantém os pipelines com lint e verificações em dia.'
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

const FinnBackend: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
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
        <title>Eduardo Santos - Finn Server</title>
        <link rel="icon" href="/icon.ico" />
      </Head>
      <main>
        <MainPageFace background="/finnbackend-bg-sm.svg">
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
                <h1>Finn Server</h1>
                <div>
                  <h5>Kotlin</h5>
                  <Image src="/kotlin_icon.png" alt="Kotlin Icon" width={18} height={18} />
                  <h5>Spring Boot</h5>
                  <Image
                    className="android_icon"
                    src="/spring-logo.png"
                    alt="Spring Icon"
                    width={22}
                    height={22}
                  />
                  <h5>PostgreSQL</h5>
                  <Image
                    className="android_icon"
                    src="/postgre.png"
                    alt="Postgre Icon"
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
                    <p>Spring Boot</p>
                    <p>Kotlin</p>
                    <p>PostgreSQL</p>
                    <p>Flyway</p>
                    <p>Docker</p>
                    <p>Testcontainers</p>
                    <p>Firebase Admin</p>
                    <p>Firebase App Check</p>
                    <p>Firebase Auth</p>
                    <p>Guard Filters</p>
                    <p>Swagger UI</p>
                    <p>OpenAPI</p>
                    <p>Gradle</p>
                    <p>GitHub Actions CI</p>
                  </div>
                </div>
                <p className="btn_container_title">
                  <b>Github</b>
                </p>
                <div className="btn_container">
                  <a
                    href="https://github.com/edufelip/finn__backend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub size="24" />
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

export default FinnBackend
