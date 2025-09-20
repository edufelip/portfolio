import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', 'Josefin Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.6;
    font-size: 18px;
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    cursor: pointer;
  }
  ul {
    margin: 0;
  }
  .stop-scrolling {
    height: 100%;
    overflow: hidden;
  }
`
