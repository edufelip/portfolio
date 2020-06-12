import Head from 'next/head'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

import withAnalytics from "~/hoc/withAnalytics"
import {MainPage} from "~/styled/home"

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
        </MainPage>
        {/* <div className="background">
          <div className="bg-central-container">
            <div className="info-container">
              <h1>Eduardo Santos</h1>
              <h2>Full Stack Web Developer</h2>
              <a href="">check my projects</a>
            </div>
            <aside>
              <div className="block blockOne"><a href=""><FaGithub /></a></div>
              <div className="block blockOne"><a href=""><FaLinkedin /></a></div>
              <div className="block blockOne"><a href=""><MdEmail /></a></div>
            </aside>
          </div>
        </div> */}
      </main>
    </div>
  )
}

export default withAnalytics()(Home);