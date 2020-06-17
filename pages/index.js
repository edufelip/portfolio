import Head from 'next/head'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

import withAnalytics from "~/hoc/withAnalytics"
import {MainPageFace, MainContent, ProjectsSection, Project, AboutSection, ContactSection, BlogSection} from "~/styled/home"

function Home() {
  return (
    <div className="container">
      <Head>
        <title>Eduardo Santos</title>
        <link rel="icon" href="/icon.ico" />
      </Head>
      <main>
        <MainPageFace>
          <div className="header">
            <ul>
              <li><a>About me</a></li>
              <li><a>Projects</a></li>
              <li><a>Contact</a></li>
              <li><a>Blog</a></li>
              <li><span><a>Resume</a></span></li>
            </ul>
          </div>
          <MainContent>
            <div className="contentLeft">
              <div className="container">
                <h1>Eduardo Santos</h1>
                <h2>Full Stack Javascript Developer</h2>
                <a href="">CHECK MY PROJECTS</a>
              </div>
            </div>
            <div className="contentRight">
              <div className="container">
                <div className="block blockOne"><a href=""><FaGithub size={35} /></a></div>
                <div className="block blockTwo"><a href=""><FaLinkedin size={35} /></a></div>
                <div className="block blockThree"><a href=""><MdEmail size={35} /></a></div>
              </div>  
            </div>
          </MainContent>
        </MainPageFace>
        <AboutSection>
          <h2>About me</h2>
          <p>I'm a full stack web developer wanting to get a react.js developer job </p>
        </AboutSection>
        <ProjectsSection>
          <h2>My Projects</h2>
          <Project>
          
          </Project>
        </ProjectsSection>
        <ContactSection>

        </ContactSection>
        <BlogSection>

        </BlogSection>
      </main>
    </div>
  )
}

export default withAnalytics()(Home);