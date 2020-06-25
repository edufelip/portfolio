import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => 
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return {...page, styleTags }
  }

  render() {
    return (
      <html>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
          <style>
            {
            this.props.styleTags,
            `
            html, body {
              padding: 0;
              margin: 0;
              font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
                Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
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
            `
            }
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}