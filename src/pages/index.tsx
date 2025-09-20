import { motion } from 'framer-motion'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
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
  HeroBackground,
} from '~/styles/home'
import { getResumeContent } from '~/utils/i18n/resume'

type ProjectCardContent = {
  title: string
  description: string
  status?: string
}

type HomeProjectsContent = {
  livechat: ProjectCardContent
  amazingNote: ProjectCardContent
  finn: ProjectCardContent
  finnBackend: ProjectCardContent
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en-US', ['common', 'home'])),
    },
  }
}

const Home: NextPage = () => {
  const { bindProjectAnchorClicks } = useScrollMemory()
  const analytics = useAnalytics()
  const { t: tCommon, i18n } = useTranslation('common')
  const { t } = useTranslation('home')

  useEffect(() => {
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

  const resumeContent = getResumeContent(tCommon)
  const resumeAnalyticsKey = i18n.language === 'pt-BR' ? 'resume_br' : 'resume_us'

  const renderResumeLink = (isMobile?: boolean) => (
    <a
      href={resumeContent.href}
      target="_blank"
      rel="noreferrer"
      onClick={() =>
        analytics.logSelectContent(
          isMobile === true ? 'header_btn_mobile' : 'header_btn',
          resumeAnalyticsKey
        )
      }
    >
      {resumeContent.label}
    </a>
  )

  const projectsContent = t('projects.cards', {
    returnObjects: true,
  }) as HomeProjectsContent

  return (
    <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Head>
        <title>Eduardo Santos</title>
        <link rel="icon" href="/icon.ico" />
      </Head>
      <main>
        <MainPageFace>
          <HeroBackground>
            <Image
              src="/background.svg"
              alt="Abstract gradient background"
              layout="fill"
              objectFit="cover"
              priority
            />
          </HeroBackground>
          <Header
            about={tCommon('nav.about')}
            projects={tCommon('nav.projects')}
            contact={tCommon('nav.contact')}
            renderResumeLink={renderResumeLink}
            onAboutClick={() => analytics.logSelectContent('header_btn', 'about_me')}
            onProjectsClick={() => analytics.logSelectContent('header_btn', 'projects')}
            onContactClick={() => analytics.logSelectContent('header_btn', 'contact')}
            onBlogClick={() => analytics.logSelectContent('header_btn', 'blog')}
          />
          <MainContent>
            <div className="contentLeft">
              <div className="container">
                <h1>Eduardo Santos</h1>
                <h2>{t('hero.subtitle')}</h2>
                <a
                  href="#projects"
                  onClick={() => analytics.logSelectContent('cta_btn', 'check_my_projects')}
                >
                  {tCommon('cta.checkProjects')}
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
                    aria-label="Open Eduardo's GitHub profile"
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
                    aria-label="Open Eduardo's LinkedIn profile"
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
                    aria-label="Open Eduardo's YouTube channel"
                  >
                    <FaYoutube size={35} />
                  </a>
                </div>
              </div>
            </div>
          </MainContent>
        </MainPageFace>
        <AboutSection id="about">
          <h2>{t('about.title')}</h2>
          <p>{t('about.descriptionOne')}</p>
          <div className="bar"></div>
          <p>{t('about.descriptionTwo')}</p>
        </AboutSection>
        <ProjectsSection id="projects">
          <h2>{t('projects.title')}</h2>
          <Project className="live-chat" background="/livechat-bg.svg">
            <div className="shadow">
              <div className="wrap">
                <h2>{projectsContent.livechat.title}</h2>
                <p>
                  {projectsContent.livechat.description}
                  {projectsContent.livechat.status && (
                    <>
                      {' '}
                      <b>{projectsContent.livechat.status}</b>
                    </>
                  )}
                </p>
                <div>
                  <Link scroll={false} href="/projects/live-chat">
                    <a
                      className="projectAnchor"
                      onClick={() => analytics.logSelectContent('project_btn', 'details_live_chat')}
                    >
                      {tCommon('cta.access')}
                    </a>
                  </Link>
                  <a
                    href="https://github.com/edufelip/live-chat_android"
                    target="_blank"
                    onClick={() => analytics.logSelectContent('project_btn', 'github_live_chat')}
                    rel="noreferrer"
                    aria-label="View LiveChat source on GitHub"
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
                <h2>{projectsContent.amazingNote.title}</h2>
                <p>{projectsContent.amazingNote.description}</p>
                <div>
                  <Link scroll={false} href="/projects/amazing-note">
                    <a
                      className="projectAnchor"
                      onClick={() =>
                        analytics.logSelectContent('project_btn', 'details_amazing_note')
                      }
                    >
                      {tCommon('cta.access')}
                    </a>
                  </Link>
                  <a
                    href="https://github.com/edufelip/amazing-note"
                    target="_blank"
                    onClick={() => analytics.logSelectContent('project_btn', 'github_amazing_note')}
                    rel="noreferrer"
                    aria-label="View Amazing Note source on GitHub"
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
                    aria-label="Open Amazing Note on Google Play"
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
                <h2>{projectsContent.finn.title}</h2>
                <p>{projectsContent.finn.description}</p>
                <div>
                  <Link scroll={false} href="/projects/finn">
                    <a
                      className="projectAnchor"
                      onClick={() => analytics.logSelectContent('project_btn', 'details_finn')}
                    >
                      {tCommon('cta.access')}
                    </a>
                  </Link>
                  <a
                    href="https://www.github.com/edufelip/finn"
                    target="_blank"
                    onClick={() => analytics.logSelectContent('project_btn', 'github_finn')}
                    rel="noreferrer"
                    aria-label="View Finn source on GitHub"
                  >
                    <FaGithub size="24" />
                  </a>
                  <a
                    href="http://play.google.com/store/apps/details?id=com.edufelip.finn"
                    target="_blank"
                    onClick={() => analytics.logSelectContent('project_btn', 'playstore_finn')}
                    rel="noreferrer"
                    aria-label="Open Finn on Google Play"
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
                <h2>{projectsContent.finnBackend.title}</h2>
                <p>{projectsContent.finnBackend.description}</p>
                <div>
                  <Link scroll={false} href="/projects/finn-backend">
                    <a
                      className="projectAnchor"
                      onClick={() =>
                        analytics.logSelectContent('project_btn', 'details_finn_backend')
                      }
                    >
                      {tCommon('cta.access')}
                    </a>
                  </Link>
                  <a
                    href="https://github.com/edufelip/finn__backend"
                    target="_blank"
                    onClick={() => analytics.logSelectContent('project_btn', 'github_finn_backend')}
                    rel="noreferrer"
                    aria-label="View Finn Backend source on GitHub"
                  >
                    <FaGithub size="24" />
                  </a>
                </div>
              </div>
            </div>
          </Project>
        </ProjectsSection>
        <ContactSection id="contact">
          <h2>{tCommon('contactSection.title')}</h2>
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
