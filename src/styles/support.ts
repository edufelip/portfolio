import styled from 'styled-components'

export const SupportPage = styled.main`
  --support-ink: #0f172a;
  --support-muted: #475569;
  --support-accent: #2563eb;
  --support-border: rgba(15, 23, 42, 0.08);
  --support-surface: #ffffff;
  --support-surface-alt: #f4f5f7;

  min-height: 100vh;
  padding: 72px 20px 96px;
  background: radial-gradient(circle at top, #eef2ff 0%, #f8fafc 55%, #ffffff 100%);
  color: var(--support-ink);
  display: flex;
  justify-content: center;
`

export const SupportCard = styled.div`
  width: min(960px, 100%);
  background: linear-gradient(180deg, var(--support-surface) 0%, var(--support-surface-alt) 100%);
  border: 1px solid var(--support-border);
  border-radius: 26px;
  box-shadow: 0 30px 60px rgba(15, 23, 42, 0.12);
  padding: 56px 64px;
  position: relative;
  overflow: hidden;

  ::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 26px;
    border: 1px solid rgba(255, 255, 255, 0.8);
    pointer-events: none;
  }

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 4px;
    width: 100%;
    background: linear-gradient(90deg, #0f172a 0%, #2563eb 60%, #38bdf8 100%);
  }

  @media (max-width: 720px) {
    padding: 40px 28px;
    border-radius: 20px;
  }
`

export const SupportBody = styled.div`
  .support_body {
    margin: 0;
    align-items: flex-start;
  }

  h1 {
    width: 100%;
    margin: 0 0 16px;
    font-size: 2.2rem;
    letter-spacing: -0.02em;
  }

  h2 {
    padding-left: 0;
    margin-top: 28px;
    font-size: 1.2rem;
    color: var(--support-ink);
  }

  p {
    margin: 0 0 12px;
    color: var(--support-muted);
  }

  a {
    color: var(--support-accent);
    font-weight: 600;
  }

  a:hover {
    opacity: 0.85;
  }

  ul {
    padding-left: 20px;
    margin: 0;
    color: var(--support-muted);
  }

  .support_meta {
    font-size: 0.95rem;
    color: #64748b;
  }
`
