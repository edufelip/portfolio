import Head from 'next/head'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

import withAnalytics from "~/hoc/withAnalytics"
import {MainPage, MainContent} from "~/styled/home"

function Home() {
  return (
    <div className="container">
      <Head>
        <title>Eduardo Santos</title>
        <link rel="icon" href="/icon.ico" />
      </Head>
      <main>
        <MainPage>
          <div className="header">
            <ul>
              <li><a>About me</a></li>
              <li><a>Projects</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
          <MainContent>
            <div className="contentLeft">
              <div className="container">
                <h1>Eduardo Santos</h1>
                <h2>Full Stack Web Developer</h2>
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
        </MainPage>
      </main>
    </div>
  )
}

export default withAnalytics()(Home);