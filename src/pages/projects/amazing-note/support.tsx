import type { NextPage } from 'next'
import Head from 'next/head'

import { PrivacyPolicyBody } from '~/styles/privacy_policy'

const AmazingNoteSupport: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Eduardo Santos - Amazing Note Support</title>
        <meta
          name="description"
          content="Support page for the Amazing Note app with contact details and response time."
        />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <main>
        <PrivacyPolicyBody>
          <h1>Amazing Note Support</h1>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Amazing Note is a Compose Multiplatform note-taking app.
            This page provides support information and ways to get help with the app.
          </p>
          <h2>Contact</h2>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;For support, email us at{' '}
            <a href="mailto:guiabrechoapp@gmail.com">guiabrechoapp@gmail.com</a>.
          </p>
          <h2>How to Get Help</h2>
          <div className="bulletContainer">
            <ul>
              <li>Describe the issue and the steps you took.</li>
              <li>Include your device model and OS version.</li>
              <li>Attach screenshots if they help explain the problem.</li>
            </ul>
          </div>
          <h2>Response Time</h2>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We typically respond within 3 business days.</p>
          <h2>Last Updated</h2>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;January 7, 2026</p>
        </PrivacyPolicyBody>
      </main>
    </div>
  )
}

export default AmazingNoteSupport
