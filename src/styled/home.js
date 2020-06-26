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
        padding: 10px 12px;
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
`

export const AboutSection = styled.div`
  width: 100%;
  height: 380px;
  background-color: #141414;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2, p {
    width: 800px;
    margin: 0 auto;
    color: #f9f9f9;
    text-align: start;
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
    width: 200px;
    background-color: #700606;
    margin: 20px 600px 20px 0;
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

export const Project = styled.div`
  display: block;
  width: 700px;
  height: 380px;
  margin: 0 auto 50px auto;
  box-shadow: 0px 0px 15px 1px #00000060;
  background: url(${props => props.background});
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
    position:relative;
    overflow: hidden;
    background-color: #0f102490;
    .wrap {
      width: 50%;
      height: 50%;
      position: absolute;
      top: 150px;
      left: 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;
      h2, p {
        margin: 0;
      }
      h2 {
        color: #f9f9f9;
        opacity: 0.85;
        font-size: 35px;
        font-family: 'Montserrat', sans-serif;
      }
      p {
        opacity: 0.9;
        color: white;
        font-size: 20px;
        font-weight: 300;
        margin: -10px 0 15px 0;
      }
      div {
        width: 210px;
        display: flex;
        justify-content: space-between;
        a {
          display: inline-block;
          width: 100px;
          padding: 5px 20px;
          background-color: white;
          text-align: center;
          opacity: 0.9;
        }
        a:nth-of-type(1){
          background-color: #13487d;
          color: #f9f9f9;
          font-weight: regular;
          font-size: 16px;
          transition: background 0.3s ease;
          &:hover {
            background-color: ${darken(0.05, '#13487d')}
          }
        }
        a:nth-of-type(2){
          background-color: #f8f8f8;
          /* border: 2px solid #13487d; */
          color: #13487d;
          font-weight: regular;
          font-size: 16px;
        }
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