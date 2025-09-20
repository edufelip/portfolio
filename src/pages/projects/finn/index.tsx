import { motion } from 'framer-motion'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useEffect } from 'react'
import { FaGithub, FaGooglePlay } from 'react-icons/fa'

import Header from '~/components/Header'
import { FinnDetails } from '~/styles/finn'
import { MainPageFace, ContactSection, HeroBackground } from '~/styles/home'
import { getResumeContent } from '~/utils/i18n/resume'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en-US', ['common', 'finn'])),
    },
  }
}

const Finn: NextPage = () => {
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
  const { t } = useTranslation('finn')
  const resumeContent = getResumeContent(tCommon)
  const renderResumeLink = () => (
    <a href={resumeContent.href} target="_blank" rel="noreferrer">
      {resumeContent.label}
    </a>
  )

  return (
    <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Head>
        <title>Eduardo Santos - Finn</title>
        <link rel="icon" href="/icon.ico" />
      </Head>
      <main>
        <MainPageFace>
          <HeroBackground>
            <Image
              src="/finn-bg-sm.svg"
              alt="Finn project background"
              layout="fill"
              objectFit="cover"
            />
          </HeroBackground>
          <Header
            about={tCommon('nav.about')}
            projects={tCommon('nav.projects')}
            contact={tCommon('nav.contact')}
            renderResumeLink={renderResumeLink}
            backLabel={tCommon('back')}
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
                  <a
                    href="https://github.com/edufelip/finn"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="View Finn source on GitHub"
                  >
                    <FaGithub size="24" />
                  </a>
                  <a
                    href="http://play.google.com/store/apps/details?id=com.edufelip.finn"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Open Finn on Google Play"
                  >
                    <FaGooglePlay size="24" />
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

export default Finn
