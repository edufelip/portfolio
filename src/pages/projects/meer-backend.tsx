import { motion } from 'framer-motion'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useEffect } from 'react'

import Header from '~/components/Header'
import { FaGithub } from '~/components/icons'
import { FinnDetails } from '~/styles/finn'
import { MainPageFace, ContactSection, HeroBackground } from '~/styles/home'
import { getResumeContent } from '~/utils/i18n/resume'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en-US', ['common', 'meer-backend'])),
    },
  }
}

const MeerBackend: NextPage = () => {
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
  const { t } = useTranslation('meer-backend')
  const resumeContent = getResumeContent(tCommon)
  const renderResumeLink = () => (
    <a href={resumeContent.href} target="_blank" rel="noreferrer">
      {resumeContent.label}
    </a>
  )

  return (
    <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Head>
        <title>Eduardo Santos - Meer Backend</title>
        <meta
          name="description"
          content="Meer Backend is the Java + Spring Boot API that powers the Meer thrift-store guide with documented REST endpoints."
        />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <main>
        <MainPageFace>
          <HeroBackground>
            <Image
              src="/meerbackend-bg-sm.png"
              alt="Meer Backend project background"
              fill
              sizes="100vw"
              style={{ objectFit: 'cover' }}
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
                <h1>Meer Backend</h1>
                <div>
                  <h5>Java</h5>
                  <Image src="/java_icon.png" alt="Java Icon" width={18} height={18} />
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
                    alt="PostgreSQL Icon"
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
                    <p>Java</p>
                    <p>PostgreSQL</p>
                    <p>OpenAPI</p>
                    <p>Swagger</p>
                    <p>Flyway</p>
                    <p>Docker</p>
                    <p>Gradle</p>
                    <p>REST</p>
                    <p>Validation</p>
                    <p>CI/CD</p>
                  </div>
                </div>
                <p className="btn_container_title">
                  <b>Github</b>
                </p>
                <div className="btn_container">
                  <a
                    href="https://github.com/edufelip/meer-api"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="View Meer Backend source on GitHub"
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

export default MeerBackend
