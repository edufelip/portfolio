import Head from 'next/head'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

import styled from 'styled-components';

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
          .background .header {
            width: 100%;
            min-height: 60px;
            display: flex;
            justify-content: flex-end;
          }
          .background .header ul {
            margin: 0;
            display: flex;
            width: 500px;
            justify-content: space-evenly;
            margin: 20px 0 0 0 ;
          }
          .background .header ul li {
            list-style: none;
            display: inline-block;
          }
          .background .header ul li a {
            color: #f9f9f9;
            opacity: 0.8;
          }
          .background .bg-central-container {
            width: 100%;
            min-height: 440px;
            height: 
            posititon: relative;
          }
          .background .bg-central-container .info-container{
            display: inline-block;
            width: 60%;
            height: ;
          }
          .background .bg-central-container .info-container h1{
            letter-spacing: 3px;
            width: fit-content;
          }
          .background .bg-central-container .info-container h2{
            font-weight: 300;
            letter-spacing: 2px;
            width: fit-content;
          }
          .background .bg-central-container .info-container h1,h2,a{
            color: #ffffff;
            opacity: 0.95;
            margin: 0 0 0 0px;
          }
          .background .bg-central-container .info-container a{
            padding: 10px;
            background-color: #5A0000;
          }
          .background .bg-central-container aside {
            display: inline-block;
            posititon: absolute;
            width: 30%;
            top: 0;
          }
          .background .bg-central-container aside .block {
            padding: 30px;
          }
        `
      }</style>
    </div>
  )
}
