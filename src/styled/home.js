import styled from 'styled-components';
import { darken } from 'polished';

export const MainPageFace = styled.div`
  width: 100%;
  height: 80vh;
  min-height: 400px;
  display: table;
  background: url("/background.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  .header {
    height: 60px;
    display: table-row;
    ul {
      height: 60px;
      display: flex;
      align-items: center;
      float: right;
      margin-right: 100px;
      li {
        list-style: none;
        display: inline-block;
        margin-right: 35px;
        a {
          letter-spacing: 1px;
          color: white; 
          transition: all 0.3s ease;
        }
        span {
          padding: 5px 15px;
          border: 1px solid #f9f9f9;
          border-radius: 8px;
          transition: all 0.3s ease;
          background: linear-gradient(to right, #f9f9f9 50%, transparent 50%);
          background-size: 200% 100%;
          background-position: right bottom;
          a {
            font-weight: 500;
          }
          &:hover{
            background-position: left bottom;
          }
          &:hover a {
            color: black;
          }
        }
      }
    }
  }
`

export const MainContent = styled.div`
  display: table-row;
  .contentLeft{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    float: left;
    width: 50%;
    height: 100%;
    .container{
      float: right;
      margin-bottom: 100px;
      h1, h2, a {
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
        letter-spacing: 1px;
        margin-top: -15px;
      }
      a {
        background-color: #881111;
        padding: 8px 10px;
        font-size: 15px;
        transition: background 0.3s ease;
        &:hover {
          background-color: ${darken(0.05, '#881111')};
        }
      }
    }
  }
  .contentRight{
    float: left;
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .container {
      margin: 0 0 30px 0;
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
`

export const AboutSection = styled.div`
  width: 100%;
  height: 380px;
  background-color: #141414;
  text-align: center;
  h2, p {
    width: 70%;
    margin: 0 auto;
    color: #f9f9f9;
    display: inline-block;
    text-align: start;
  }
  h2 {
    margin-top: 50px;
    margin-bottom: 10px;
    font-weight: 300;
  }
  p:nth-of-type(3) {
    margin-top: 15px;
  }
  .bar {
    height: 5px;
    width: 200px;
    background-color: #700606;
    margin: 20px 0 20px 15%;
  }

`

export const ProjectsSection = styled.div`
  text-align: center;
  h2 {
    opacity: 0.9;
  }
`

export const Project = styled.div`
  display: block;
  width: 800px;
  height: 500px;
  margin: 0 auto;
  .projectImage {
    width: 100%;
    height: 500px;
    position:relative;
    background: url(${props => props.background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    overflow: hidden;
    .shadow {
      width: 100%;
      height: 500px;
      background-color: #00000070;
      position: absolute;
      h2 {
        color: white;
        font-size: 60px;
      }
    }
  }
`

export const BlogSection = styled.div`

`

export const ContactSection = styled.div`
  width: 100%;
  height: 260px;
  background-color: #141414;
  text-align: center;
  h2, a, p {
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