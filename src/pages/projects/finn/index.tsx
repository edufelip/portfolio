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
    ? "Finn came from the idea of a social media pretty much like reddit. Here users can create their communities and post about everything they want, as long as it's not sensitive or hate speech content. At the moment you subscribe to a community the posts about that subject will start appearing in your feed."
    : 'Finn veio da ideia de ser uma rede social muito parecida com o reddit. Aqui usuário podem criar suas comunidades e postar sobre o que quiserem, contanto que não seja conteúdo sensível e nem discurso de ódio. A partir do momento que um usuário de inscreve em um comunidade, posts sobre aquele assunto começarão a aparecer em seu feed.'
  const projectAboutTwo = isUS
    ? "I used Retrofit to make api calls to the backend and also connected the app to Firebase, which is responsible for the user's authentication. I should also point out that RxJava here is fundamental for processing events asynchronously."
    : 'Eu usei Retrofit para realizar chamadas à api e também conectei o aplicativo ao serviço do Firebase, que é responsável pela autenticação do usuário. Vale também apontar para o papel fundamental que o RxJava tem no projeto, processando eventos de forma assíncrona.'
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
                  <h5>Java</h5>
                  <Image src="/java_icon.png" alt="Java Icon" width={18} height={18} />
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
