import { motion } from 'framer-motion'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useEffect } from 'react'
import { BsArrowLeft } from 'react-icons/bs'
import { FaGithub, FaAngleLeft } from 'react-icons/fa'

import { MobileMenu } from '~/components/MobileMenu'
import { FinnDetails } from '~/styles/finn'
import { MainPageFace, ContactSection, HeroBackground } from '~/styles/home'
import { getResumeContent } from '~/utils/i18n/resume'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en-US', ['common', 'live-chat'])),
    },
  }
}

const LiveChat: NextPage = () => {
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

  const { t: tCommon } = useTranslation('common')
  const { t } = useTranslation('live-chat')
  const resumeContent = getResumeContent(tCommon)
  const resumeLink = (
    <a href={resumeContent.href} target="_blank" rel="noreferrer">
      {resumeContent.label}
    </a>
  )

  return (
    <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Head>
        <title>Eduardo Santos - LiveChat</title>
        <meta
          name="description"
          content="LiveChat is a Kotlin Multiplatform chat prototype sharing data layers across Android and SwiftUI. Review its stack, features, and GitHub repository."
        />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <main>
        <MainPageFace>
          <HeroBackground>
            <Image
              src="/livechat-bg.svg"
              alt="LiveChat project background"
              layout="fill"
              objectFit="cover"
            />
          </HeroBackground>
          <div className="header">
            <ul>
              <li>
                <Link href="/" scroll={false}>
                  <a>
                    <BsArrowLeft size={16} /> {tCommon('back')}
                  </a>
                </Link>
              </li>
              <li>
                <a href="#contact">{tCommon('nav.contact')}</a>
              </li>
              <li>
                <a href="https://medium.com/@eduardofelipi" target="_blank" rel="noreferrer">
                  {tCommon('nav.blog')}
                </a>
              </li>
              <li>
                <span>{resumeLink}</span>
              </li>
            </ul>
            <Link href="/">
              <FaAngleLeft className="backMenuBtn" size={36} />
            </Link>
            <MobileMenu>
              <li>
                <a href="#about">{tCommon('nav.about')}</a>
              </li>
              <li>
                <a href="#projects">{tCommon('nav.projects')}</a>
              </li>
              <li>
                <a href="#contact">{tCommon('nav.contact')}</a>
              </li>
              <li>
                <a href="https://medium.com/@eduardofelipi" target="_blank" rel="noreferrer">
                  {tCommon('nav.blog')}
                </a>
              </li>
              <li>
                <span>{resumeLink}</span>
              </li>
            </MobileMenu>
          </div>
          <FinnDetails>
            <div className="project_spec">
              <div className="project_spec_container">
                <h1>LiveChat</h1>
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
                  <h5>Swift UI</h5>
                  <Image
                    className="android_icon"
                    src="/swift_ui.png"
                    alt="Swift UI Icon"
                    width={22}
                    height={22}
                  />
                </div>
                <ul>
                  <li>
                    <b>{t('sections.about')}</b>
                  </li>
                  <li>{t('paragraphs.one')}</li>
                  <li>{t('paragraphs.two')}</li>
                </ul>
                <div className="tags">
                  <p>
                    <b>Tags</b>
                  </p>
                  <div className="tags_container">
                    <p>Jetpack Compose</p>
                    <p>SwiftUI</p>
                    <p>Kotlin Coroutines</p>
                    <p>Flow</p>
                    <p>Koin</p>
                    <p>SQLDelight</p>
                    <p>Ktor</p>
                    <p>Firebase Auth</p>
                    <p>Firestore REST</p>
                    <p>XCFramework</p>
                    <p>Gradle</p>
                  </div>
                </div>
                <p className="btn_container_title">
                  <b>Github</b>
                </p>
                <div className="btn_container">
                  <a
                    href="https://github.com/edufelip/live-chat_android"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="View LiveChat source on GitHub"
                  >
                    <FaGithub size="24" />
                  </a>
                </div>
              </div>
            </div>
          </FinnDetails>
        </MainPageFace>
        <ContactSection id="contact">
          <h2>{tCommon('contactSection.title')}</h2>
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

export default LiveChat
