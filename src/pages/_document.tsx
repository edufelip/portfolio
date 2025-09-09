import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700;800&family=Josefin+Sans:wght@300;500;700&display=swap"
            rel="stylesheet"
          />
          <style>{`
            html, body {
              padding: 0;
              margin: 0;
              font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
                Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
              font-family: Montserrat;
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
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
