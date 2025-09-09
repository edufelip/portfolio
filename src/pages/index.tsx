import { motion } from 'framer-motion'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import Link from 'next/link'
// import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { FaGithub, FaLinkedin, FaGooglePlay, FaYoutube } from 'react-icons/fa'

import Header from '~/components/Header'
import { useScrollMemory } from '~/hooks/useScrollMemory'
import { useAnalytics } from '~/lib/analytics/provider'
import {
  MainPageFace,
  MainContent,
  ProjectsSection,
  Project,
  AboutSection,
  ContactSection,
} from '~/styles/home'

type HomeProps = {
  description: string
  about: string
  projects: string
  contact: string
  resume: string
  check: string
  about_title: string
  about_desc_one: string
  about_desc_two: string
  latest: string
  livechat_desc: string
  finn_desc: string
  amazingnote_desc: string
  checkMe: string
  access: string
  resume_link: string
  finnbackend_desc: string
}

export const getStaticProps: GetStaticProps<HomeProps> = async ({ locale }) => {
  const isUS = locale === 'en-US'
  const description = isUS ? 'Software Engineer' : 'Engenheiro de Software'
  const about = isUS ? 'About me' : 'Sobre Mim'
  const projects = isUS ? 'Projects' : 'Projetos'
  const contact = isUS ? 'Contact' : 'Contato'
  const resume = isUS ? 'Resume' : 'Currículo'
  const check = isUS ? 'Check my Projects' : 'Veja meus Projetos'
  const about_title = isUS ? "Hey, I'm Eduardo" : 'Olá, eu sou Eduardo'
  const about_desc_one = isUS
    ? 'I am a highly motivated Android Engineer with a relentless focus on delivering outstanding products. Passionate about innovation, I continuously seek cutting-edge solutions to refine my work and stay ahead in an ever-evolving industry.'
    : 'Sou um Desenvolvedor Android altamente motivado, com um foco incansável em entregar produtos excepcionais. Apaixonado por inovação, busco continuamente soluções de ponta para aprimorar meu trabalho e me manter à frente em um setor em constante evolução.'
  const about_desc_two = isUS
    ? 'Since beginning my coding journey in 2017, I have transitioned from web development to specializing in mobile development with Java and Kotlin, where I found my true passion. Combining technical expertise with a commitment to staying current on industry trends, I deliver fresh, impactful solutions. My dedication ensures visually striking and highly functional applications that resonate with users.'
    : 'Desde o início da minha jornada na programação em 2017, transitei do desenvolvimento web para me especializar no desenvolvimento móvel com Java e Kotlin, onde encontrei minha verdadeira paixão. Combinando expertise técnica e comprometimento em acompanhar as tendências do setor, entrego soluções inovadoras e impactantes. Minha dedicação garante aplicativos visualmente atraentes e altamente funcionais, que encantam os usuários.'
  const latest = isUS ? 'Latest Projects' : 'Últimos Projetos'
  const livechat_desc = isUS ? 'Online Realtime Chat' : 'Chat Online em Tempo Real'
  const finn_desc = isUS
    ? 'A Social Media of Forums (like Reddit)'
    : 'Mídia Social baseada em Fóruns'
  const amazingnote_desc = isUS ? 'Your Note App' : 'Aplicativo de Notas'
  const checkMe = isUS ? 'Check me out!' : 'Me Encontre'
  const access = isUS ? 'Access' : 'Acessar'
  const resume_link = isUS ? 'resume' : 'curriculo'
  const finnbackend_desc = isUS ? 'Backend for Finn app' : 'Backend para o app Finn'
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
      livechat_desc,
      finn_desc,
      amazingnote_desc,
      checkMe,
      access,
      resume_link,
      finnbackend_desc,
    },
  }
}

function Home(props: InferGetStaticPropsType<typeof getStaticProps>) {
  // const router = useRouter()

  const { bindProjectAnchorClicks } = useScrollMemory()
  const analytics = useAnalytics()

  useEffect(() => {
    // restore handled by useScrollMemory
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (event: Event) => {
        event.preventDefault()
        const href = (event.currentTarget as HTMLAnchorElement).href.split('#', 2)[1]
        const element = document.getElementById(href)
        window.scroll({
          behavior: 'smooth',
          top: element ? (href === 'about' ? element.offsetTop - 150 : element.offsetTop) : 0,
        })
      })
    })
    bindProjectAnchorClicks()
  }, [bindProjectAnchorClicks])

  function getResumeLink(isMobile?: boolean) {
    return props.resume_link == 'resume' ? (
      <a
        href="./resume.pdf"
        target="_blank"
        rel="noreferrer"
        onClick={() =>
          analytics.logSelectContent(
            isMobile == true ? 'header_btn_mobile' : 'header_btn',
            'resume_us'
          )
        }
      >
        {props.resume}
      </a>
    ) : (
      <a
        href="./curriculo.pdf"
        target="_blank"
        rel="noreferrer"
        onClick={() =>
          analytics.logSelectContent(
            isMobile == true ? 'header_btn_mobile' : 'header_btn',
            'resume_br'
          )
        }
      >
        {props.resume}
      </a>
    )
  }

  return (
    <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Head>
        <title>Eduardo Santos</title>
        <link rel="icon" href="/icon.ico" />
      </Head>
      <main>
        <MainPageFace background="/background.svg">
          <Header
            about={props.about}
            projects={props.projects}
            contact={props.contact}
            resumeNode={getResumeLink()}
            onAboutClick={() => analytics.logSelectContent('header_btn', 'about_me')}
            onProjectsClick={() => analytics.logSelectContent('header_btn', 'projects')}
            onContactClick={() => analytics.logSelectContent('header_btn', 'contact')}
            onBlogClick={() => analytics.logSelectContent('header_btn', 'blog')}
          />
          <MainContent>
            <div className="contentLeft">
              <div className="container">
                <h1>Eduardo Santos</h1>
                <h2>{props.description}</h2>
                <a
                  href="#projects"
                  onClick={() => analytics.logSelectContent('cta_btn', 'check_my_projects')}
                >
                  {props.check}
                </a>
              </div>
            </div>
            <div className="contentRight">
              <div className="container">
                <div className="block blockOne">
                  <a
                    href="https://github.com/edufelip"
                    target="_blank"
                    onClick={() => analytics.logSelectContent('cta_btn', 'github')}
                    rel="noreferrer"
                  >
                    <FaGithub size={35} />
                  </a>
                </div>
                <div className="block blockTwo">
                  <a
                    href="https://www.linkedin.com/in/eduardo-felipe-5593221a5/"
                    target="_blank"
                    onClick={() => analytics.logSelectContent('cta_btn', 'linkedin')}
                    rel="noreferrer"
                  >
                    <FaLinkedin size={35} />
                  </a>
                </div>
                <div className="block blockThree">
                  <a
                    href="https://www.youtube.com/@eduardofelipedev"
                    target="_blank"
                    onClick={() => analytics.logSelectContent('cta_btn', 'ytb')}
                    rel="noreferrer"
                  >
                    <FaYoutube size={35} />
                  </a>
                </div>
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
          <Project className="live-chat" background="/livechat-bg.svg">
            <div className="shadow">
              <div className="wrap">
                <h2>LiveChat</h2>
                <p>
                  {props.livechat_desc} <b>(in progress...)</b>
                </p>
                <div>
                  <Link scroll={false} href="/projects/live-chat">
                    <a
                      className="projectAnchor"
                      onClick={() => analytics.logSelectContent('project_btn', 'details_live_chat')}
                    >
                      {props.access}
                    </a>
                  </Link>
                  <a
                    href="https://github.com/edufelip/live-chat_android"
                    target="_blank"
                    onClick={() => analytics.logSelectContent('project_btn', 'github_live_chat')}
                    rel="noreferrer"
                  >
                    <FaGithub size="24" />
                  </a>
                </div>
              </div>
            </div>
          </Project>
          <Project className="amazing-note" background="/amazingnote-bg.svg">
            <div className="shadow">
              <div className="wrap">
                <h2>Amazing Note</h2>
                <p>{props.amazingnote_desc}</p>
                <div>
                  <Link scroll={false} href="/projects/amazing-note">
                    <a
                      className="projectAnchor"
                      onClick={() =>
                        analytics.logSelectContent('project_btn', 'details_amazing_note')
                      }
                    >
                      {props.access}
                    </a>
                  </Link>
                  <a
                    href="https://github.com/edufelip/amazing-note"
                    target="_blank"
                    onClick={() => analytics.logSelectContent('project_btn', 'github_amazing_note')}
                    rel="noreferrer"
                  >
                    <FaGithub size="24" />
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.edufelip.amazing_note"
                    target="_blank"
                    onClick={() =>
                      analytics.logSelectContent('project_btn', 'playstore_amazing_note')
                    }
                    rel="noreferrer"
                  >
                    <FaGooglePlay size="24" />
                  </a>
                </div>
              </div>
            </div>
          </Project>
          <Project className="finn" background="/finn-bg.svg">
            <div className="shadow">
              <div className="wrap">
                <h2>Finn</h2>
                <p>{props.finn_desc}</p>
                <div>
                  <Link scroll={false} href="/projects/finn">
                    <a
                      className="projectAnchor"
                      onClick={() => analytics.logSelectContent('project_btn', 'details_finn')}
                    >
                      {props.access}
                    </a>
                  </Link>
                  <a
                    href="https://www.github.com/edufelip/finn"
                    target="_blank"
                    onClick={() => analytics.logSelectContent('project_btn', 'github_finn')}
                    rel="noreferrer"
                  >
                    <FaGithub size="24" />
                  </a>
                  <a
                    href="http://play.google.com/store/apps/details?id=com.edufelip.finn"
                    target="_blank"
                    onClick={() => analytics.logSelectContent('project_btn', 'playstore_finn')}
                    rel="noreferrer"
                  >
                    <FaGooglePlay size="24" />
                  </a>
                </div>
              </div>
            </div>
          </Project>
          <Project className="finn-backend" background="/finnbackend-bg.svg">
            <div className="shadow">
              <div className="wrap">
                <h2>Finn Backend</h2>
                <p>{props.finnbackend_desc}</p>
                <div>
                  <Link scroll={false} href="/projects/finn-backend">
                    <a
                      className="projectAnchor"
                      onClick={() =>
                        analytics.logSelectContent('project_btn', 'details_finn_backend')
                      }
                    >
                      {props.access}
                    </a>
                  </Link>
                  <a
                    href="https://github.com/edufelip/finn__backend"
                    target="_blank"
                    onClick={() => analytics.logSelectContent('project_btn', 'github_finn_backend')}
                    rel="noreferrer"
                  >
                    <FaGithub size="24" />
                  </a>
                </div>
              </div>
            </div>
          </Project>
        </ProjectsSection>
        <ContactSection id="contact">
          <h2>{props.checkMe}!</h2>
          <div className="bundle">
            <a
              href="https://github.com/edufelip"
              target="_blank"
              onClick={() => analytics.logSelectContent('bottom_nav_btn', 'github')}
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/eduardo-felipe-5593221a5/"
              target="_blank"
              onClick={() => analytics.logSelectContent('bottom_nav_btn', 'linkedin')}
              rel="noreferrer"
            >
              Linkedin
            </a>
            <a
              href="https://medium.com/@eduardofelipi"
              target="_blank"
              onClick={() => analytics.logSelectContent('bottom_nav_btn', 'blog')}
              rel="noreferrer"
            >
              Blog
            </a>
            <a
              href="https://www.youtube.com/@eduardofelipedev"
              target="_blank"
              onClick={() => analytics.logSelectContent('bottom_nav_btn', 'ytb')}
              rel="noreferrer"
            >
              Youtube
            </a>
          </div>
          <p>©2023 Eduardo Santos - eduardofelipi@gmail.com</p>
        </ContactSection>
      </main>
    </motion.div>
  )
}

export default Home
