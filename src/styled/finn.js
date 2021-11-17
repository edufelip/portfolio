import styled from 'styled-components'
import { darken, lighten } from 'polished';

export const FinnDetails = styled.div`
  width:100%;
  height:100%;
  display: flex;
  justify-content: start;
  margin: 20px 0 0 200px;
  align-items: top;
  .project_spec {
    display: flex;
    align-items: center;
    height: 90%;
    width: 700px;
    margin-bottom: 50px;
    background-color: #121212;
    border-radius: 24px;
    -webkit-box-shadow: 1px 0px 17px 2px rgba(0,0,0,0.6); 
    box-shadow: 1px 0px 17px 2px rgba(0,0,0,0.6);
    .project_spec_container {
      width: 100%;
      height: 90%;
      margin: 40px 0 60px 0;
      h1, h5 {
        color: #fafafa;
        text-align: center;
        margin: 0px 0 0 0;
      }
      h5 {
        margin: 12px;
      }
      div {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 8px 0;
        img {
          width: 18px;
          height: 18px;
        }
        img.android_icon {
          width: 22px;
          height: 22px;
        }
      }
      ul {
        width: 80%;
        display: block;
        margin: 20px auto 0 auto;
        li {
          color: #c7c7c7;
          font-size: 15px;
          list-style-type: none;
          margin-bottom: 12px;
        }
      }
      .btn_container_title {
        color: #c7c7c7;
        font-size: 15px;
        width: 80%;
        display:block;
        padding: 0 0 0 40px;
        margin: 25px auto 0 auto;
      }
      .btn_container {
        width: 80%;
        padding: 0 0 0 40px;
        margin: 25px auto 0 auto;
        display: flex;
        justify-content: start;
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
          background-color: #f8f8f8;
          color: #000000;
          font-size: 16px;
          &:hover {
            background-color: ${lighten(0.08,"#f8f8f8")};
            color: ${lighten(0.008, "#114B79")};
          }
        }
      }
      .tags {
        display: block;
        width: 80%;
        padding: 0 0 0 40px;
        margin: 0 auto;
        p {
          color: #c7c7c7;
          font-size: 15px;
        }
        .tags_container {
          display: flex;
          flex-flow: wrap;
          justify-content: start;
          align-items: top;
          p {
            color: white;
            font-size: 14px;
            padding: 4px 12px;
            background: #0074BD;
            border-radius: 10px;
            margin: 10px 8px 0 0;
          }
        }
      }
    }
  }

  @media (max-width: 1110px) {
    width: 90%;
    margin: 20px auto;
    .project_spec {
      width: 100%;
    }
  }

  @media (max-width: 580px) {
    .project_spec {
      .project_spec_container {
        ul, .tags, .btn_container_title, .btn_container {
          width: 90%;
          margin: 0 auto;
          padding: 0 5px;
        }
        .btn_container_title, .btn_container {
          margin-top: 20px;
        }
      }
    }
  }
`