import styled from 'styled-components';

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

`

export const ProjectsSection = styled.div`

`

export const Project = styled.div`

`

export const ContactSection = styled.div`

`

export const BlogSection = styled.div`

`