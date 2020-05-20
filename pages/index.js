import Head from 'next/head'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Eduardo Santos</title>
        <link rel="icon" href="/icon.ico" />
      </Head>
      <main>
        <div className="background">
          <div className="header">
            <ul>
              <li><a>About me</a></li>
              <li><a>Projects</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>
          <h1>Eduardo Santos</h1>
          <h2>Full Stack Web Developer</h2>
          <a href="">Check my projects</a>
          <aside>
            <div className="block blockOne"><a href=""><FaGithub /></a></div>
            <div className="block blockOne"><a href=""><FaLinkedin /></a></div>
            <div className="block blockOne"><a href=""><MdEmail /></a></div>
          </aside>
        </div>
      </main>

      <style jsx>{
        `
          .background {
            width: 100%;
            height: 80vh;
            min-heigth: 500px;
            background: url('/background.jpg');
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
          }
        `
      }</style>
    </div>
  )
}
