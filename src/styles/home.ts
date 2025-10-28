import { darken, lighten } from 'polished'
import styled from 'styled-components'

export const MobileMenu = styled.div<{ open?: boolean }>`
  position: fixed;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #0e0e0e;
  z-index: 1;
  transition: all 0.4s ease;
  left: ${(props) => (props.open ? '0' : '-100vw')};
  svg {
    color: #f9f9f9;
    float: right;
    margin: 20px;
  }
  ul {
    position: absolute;
    top: 100px;
    left: 10%;
    list-style: none;
    li {
      margin: 0 0 20px 0;
      border-bottom: 1px solid #ffffff30;
      a {
        color: #f9f9f9;
        font-size: 32px;
      }
    }
  }

  @media (max-height: 490px) {
    ul {
      top: 60px;
      li {
        margin: 0 0 10px 0;
        a {
          font-size: 24px;
        }
      }
    }
  }
`

export const MainPageFace = styled.div`
  width: 100%;
  height: 80vh;
  min-height: 400px;
  display: table;
  background-color: #121212;
  position: relative;
  overflow: hidden;
  > :not(:first-child) {
    position: relative;
    z-index: 1;
  }
  .header {
    height: 60px;
    display: table-row;
    ul {
      height: 60px;
      display: flex;
      align-items: center;
      float: right;
      margin-right: 30px;
      li {
        list-style: none;
        display: inline-block;
        margin-right: 35px;
        a {
          font-family:
            'Montserrat',
            'Josefin Sans',
            -apple-system,
            BlinkMacSystemFont,
            'Segoe UI',
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            'Fira Sans',
            'Droid Sans',
            'Helvetica Neue',
            sans-serif;
          font-weight: 300;
          font-size: 16px;
          letter-spacing: 0.5px;
          color: white;
          transition: all 0.3s ease;
          &:hover {
            color: ${darken(0.2, '#f9f9f9')};
          }
        }
        span {
          padding: 5px 15px;
          border: 1px solid #f9f9f9;
          border-radius: 8px;
          transition: all 0.3s ease;
          background: linear-gradient(to right, #f2f2f2 50%, transparent 50%);
          background-size: 200% 100%;
          background-position: right bottom;
          &:hover {
            background-position: left bottom;
          }
          &:hover a {
            color: black;
          }
        }
      }
    }
    svg {
      display: none;
      float: right;
      color: #f9f9f9;
      margin: 25px 25px 0 0;
      &:hover {
        cursor: pointer;
      }
    }
  }

  @media (max-width: 860px) {
    .header {
      ul {
        display: none;
      }
      svg {
        display: block;
      }
    }
  }
`

export const MainContent = styled.div`
  display: table-row;
  height: 100%;
  position: relative;
  z-index: 1;
  .contentLeft {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    float: left;
    width: 50%;
    height: 100%;
    .container {
      float: right;
      margin-bottom: 100px;
      h1,
      h2,
      a {
        color: #f9f9f9;
      }
      h1 {
        font-size: 48px;
        font-weight: 700;
        letter-spacing: 1px;
        margin: 0;
      }
      h2 {
        font-size: 35px;
        font-weight: 300;
        text-align: center;
        letter-spacing: 1px;
        margin-top: -15px;
      }
      a {
        width: 250px;
        background-color: #881111;
        padding: 10px 12px;
        font-size: 15px;
        transition: background 0.3s ease;
        text-align: center;
        &:hover {
          background-color: ${darken(0.05, '#881111')};
        }
      }
    }
  }
  .contentRight {
    float: left;
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    .container {
      margin: 0 0 30px 200px;
      .block {
        width: 100px;
        height: 100px;
        border: 1px solid white;
        transform: rotate(45deg);
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(45deg, #f9f9f9 50%, transparent 50%);
        background-size: 200% 100%;
        background-position: right bottom;
        transition: all 0.4s ease;
        a {
          transform: rotate(-45deg);
          color: #f9f9f9;
          margin-top: 5px;
          transition: all 0.4s ease;
        }
        &:hover {
          background-position: left bottom;
        }
        &:hover a {
          color: black;
          transform: rotate(-45deg) scale(1.1);
        }
      }
      .blockTwo {
        margin: -20px 0 -20px 80px;
      }
    }
  }

  @media (max-width: 860px) {
    .contentLeft {
      width: 100%;
      height: 50%;
      justify-content: center;
      .container {
        margin: 50px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        a {
          font-size: 18px;
        }
      }
    }
    .contentRight {
      width: 100%;
      height: 50%;
      justify-content: center;
      .container {
        transform: rotate(-90deg);
        margin: 0 0 30px 0;
        .block {
          transform: rotate(135deg);
        }
      }
    }
  }

  @media (max-width: 520px) {
    .contentLeft {
      .container {
        h1 {
          font-size: 38px;
        }
        h2 {
          font-size: 28px;
          margin-top: -5px;
        }
      }
    }
  }

  @media (max-width: 350px) {
    .contentLeft {
      .container {
        height: 70%;
        h1 {
          font-size: 30px;
        }
        h2 {
          font-size: 20px;
          margin-top: -5px;
          /* margin-bottom: 35px; */
        }
        a {
          width: 180px;
          font-size: 14px;
        }
      }
    }
  }
`

export const HeroBackground = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
  transform: translateZ(0);
  will-change: opacity;
  background-color: #0e0e0e;

  .heroBackgroundImage {
    position: absolute;
    inset: 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: opacity 0.5s ease;
    opacity: 0;
  }

  .heroBackgroundImage.is-loaded {
    opacity: 1;
  }
`

export const AboutSection = styled.div`
  width: 100%;
  height: 430px;
  background-color: #0e0e0e;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -1px;
  h2,
  p {
    width: 800px;
    margin: 0 auto;
    color: #f9f9f9;
    text-align: start;
    font-weight: 300;
    opacity: 0.9;
  }
  h2 {
    margin-bottom: 10px;
    font-weight: 300;
  }
  p:nth-of-type(3) {
    margin: 15px auto 20px auto;
  }
  .bar {
    height: 5px;
    max-width: 800px;
    background: linear-gradient(to right, #700606 50%, transparent 50%);
    margin: 20px auto 20px auto;
  }

  @media (max-width: 860px) {
    height: fit-content;
    h2,
    p {
      width: 90%;
    }
    p:nth-of-type(2) {
      padding-bottom: 50px;
    }
    .bar {
      width: 90%;
    }
  }
`

export const ProjectsSection = styled.div`
  background-color: #ebebeb;
  overflow: hidden;
  > h2 {
    opacity: 0.9;
    display: block;
    width: fit-content;
    height: fit-content;
    margin: 30px auto;
  }
`

export const Project = styled.div<{ background?: string }>`
  display: block;
  width: 700px;
  height: 380px;
  margin: 0 auto 50px auto;
  box-shadow: 0px 0px 15px 1px #00000060;
  background: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.009);
  }
  .shadow {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    .wrap {
      width: 270px;
      height: 50%;
      position: absolute;
      top: 150px;
      left: 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      h2,
      p {
        margin: 0;
      }
      h2 {
        color: #f9f9f9;
        opacity: 0.85;
        font-size: 35px;
        font-family:
          'Montserrat',
          'Josefin Sans',
          -apple-system,
          BlinkMacSystemFont,
          'Segoe UI',
          Roboto,
          Oxygen,
          Ubuntu,
          Cantarell,
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
          sans-serif;
      }
      p {
        opacity: 0.9;
        color: white;
        font-size: 20px;
        font-weight: 300;
        margin: -10px 0 15px 0;
      }
      div {
        display: flex;
        justify-content: space-between;
        a {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 90px;
          padding: 5px 20px;
          margin-right: 12px;
          opacity: 0.9;
          border-radius: 6px;
          transition: all 0.3s ease;
        }
        a:nth-of-type(1) {
          background-color: #0074bd;
          color: #f9f9f9;
          font-weight: regular;
          font-size: 14px;
          font-family:
            'Montserrat',
            'Josefin Sans',
            -apple-system,
            BlinkMacSystemFont,
            'Segoe UI',
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            'Fira Sans',
            'Droid Sans',
            'Helvetica Neue',
            sans-serif;
          &:hover {
            background-color: ${darken(0.07, '#0074BD')};
            color: ${darken(0.04, '#f9f9f9')};
          }
        }
        a:nth-of-type(2),
        a:nth-of-type(3) {
          background-color: #f8f8f8;
          color: #000000;
          font-size: 16px;
          &:hover {
            background-color: ${lighten(0.08, '#f8f8f8')};
            color: ${lighten(0.008, '#114B79')};
          }
        }
      }
    }
  }

  @media (max-width: 780px) {
    width: 90%;
  }

  @media (max-width: 500px) {
    height: 300px;
    .shadow {
      .wrap {
        width: 100%;
        top: 120px;
        left: 0;
        align-items: center;
        p {
          text-align: center;
          padding: 0 4px;
        }
      }
    }
  }
`

export const ContactSection = styled.div`
  width: 100%;
  height: 260px;
  background-color: #141414;
  text-align: center;
  h2,
  a,
  p {
    color: #f9f9f9;
  }
  h2 {
    display: inline-block;
    margin-top: 50px;
  }
  p {
    font-size: 16px;
    opacity: 0.8;
  }
  .bundle {
    display: flex;
    justify-content: center;
    a {
      display: block;
      margin: 0 10px;
      font-weight: 500;
      transition: all 0.3s ease;
      &:hover {
        color: ${darken(0.2, '#f9f9f9')};
      }
    }
  }
`
