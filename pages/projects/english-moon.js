import Link from 'next/link'
import Head from 'next/Head'
import Layout from '../../components/Layout'

import withAnalytics from '../../src/hoc/withAnalytics'

function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Posts page</title>
      </Head>
      <h1>First Post</h1>
      <Link href="/">
        <a>Back to home</a>
      </Link>

      <style jsx>{`
        h1 {
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>
    </Layout>
  )
}

export default withAnalytics()(FirstPost);