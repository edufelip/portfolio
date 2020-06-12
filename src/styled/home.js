import styled from 'styled-components';

export const MainPage = styled.div`
  width: 100%;
  height: 80vh;
  min-height: 400px;
  .header {
    height: 60px;
    background-color: #00000010;
    ul {
      height: 60px;
      display: flex;
      align-items: center;
      float: right;
      margin-right: 100px;
      li {
        list-style-type: none;
        display: inline-block;
        margin-right: 25px;
        a {
          letter-spacing: 1px;
        }
      }
    }
  }
`