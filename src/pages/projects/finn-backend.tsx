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
    ? 'This project came from the necessity of a backend for the Finn Android app. Due to my previous experience in Javascript and Typescript, I felt that Node.js was the ideal choice, as well as using the postgreSQL Database.'
    : 'Esse projeto veio da necessidade de um backend para o aplicativo Finn para Android. Devido à minha prévia experiência em Typescript e Javascript, eu senti que Node.js seria a escolha ideal, assim como usar o banco de dados postgreSQL.'
  const projectAboutTwo = isUS
    ? 'The backend is being hosted on AWS and the Database is running in a Docker container. Lastly, this project follows TDD practices, so I used the Jest library to implement tests.'
    : 'O backend está sendo hospedado na AWS e o banco de dados está rodando em um container no Docker. Vale apontar que o projeto foi construído orientado a testes desde o início, sendo assim foi usada a biblioteca Jest para a implementação dos testes.'
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
        <title>Eduardo Santos - Finn Backend</title>
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
                <h1>Finn Backend</h1>
                <div>
                  <h5>Typescript</h5>
                  <Image src="/typescript_icon.png" alt="Typescript Icon" width={18} height={18} />
                  <h5>Node.js</h5>
                  <Image
                    className="android_icon"
                    src="/node_icon.png"
                    alt="Node Icon"
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
                    <p>Express</p>
                    <p>PostgreSQL</p>
                    <p>Docker</p>
                    <p>Aws</p>
                    <p>Clean Architecture</p>
                    <p>Jest</p>
                    <p>Supertest</p>
                    <p>PGMock</p>
                    <p>PM2</p>
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
