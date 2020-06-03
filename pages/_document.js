import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => 
      sheet.collectStyles(<App {...proops} />)
    );
    const styleTags = sheet.getStyleElement();
    return {...page, styleTags }
  }

  render() {
    return (
      <html>
        <Head>
          <style>
            {`
            html,
            body {
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
            `,
            this.props.styleTags
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