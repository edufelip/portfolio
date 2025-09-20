import type { TFunction } from 'next-i18next'

export type ResumeContent = {
  label: string
  href: string
}

export function getResumeContent(t: TFunction): ResumeContent {
  return t('resume', { returnObjects: true }) as ResumeContent
}
