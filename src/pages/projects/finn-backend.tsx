import { motion } from 'framer-motion'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useEffect } from 'react'
import { FaGithub } from 'react-icons/fa'

import Header from '~/components/Header'
import { FinnDetails } from '~/styles/finn'
import { MainPageFace, ContactSection, HeroBackground } from '~/styles/home'
import { getResumeContent } from '~/utils/i18n/resume'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en-US', ['common', 'finn-backend'])),
    },
  }
}

const FinnBackend: NextPage = () => {
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
  const { t } = useTranslation('finn-backend')
  const resumeContent = getResumeContent(tCommon)
  const renderResumeLink = () => (
    <a href={resumeContent.href} target="_blank" rel="noreferrer">
      {resumeContent.label}
    </a>
  )

  return (
    <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Head>
        <title>Eduardo Santos - Finn Server</title>
        <meta
          name="description"
          content="Finn Server is a Kotlin + Spring Boot backend with PostgreSQL, Firebase security, and CI pipelines. Explore architecture details and repository links."
        />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <main>
        <MainPageFace>
          <HeroBackground>
            <Image
              src="/finnbackend-bg-sm.svg"
              alt="Finn Backend project background"
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
            backLabel={tCommon('back')}
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
                    aria-label="View Finn Backend source on GitHub"
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

export default FinnBackend
