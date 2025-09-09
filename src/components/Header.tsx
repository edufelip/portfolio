import Link from 'next/link'
import React, { type ReactNode } from 'react'
import { FaAngleLeft } from 'react-icons/fa'

import { MobileMenu } from '~/components/MobileMenu'

type Props = {
  about: string
  projects: string
  contact: string
  resumeNode: ReactNode
  backLabel?: string
  backHref?: string
  onAboutClick?: () => void
  onProjectsClick?: () => void
  onContactClick?: () => void
  onBlogClick?: () => void
}

export default function Header({
  about,
  projects,
  contact,
  resumeNode,
  backLabel,
  backHref,
  onAboutClick,
  onProjectsClick,
  onContactClick,
  onBlogClick,
}: Props) {
  return (
    <div className="header">
      <ul>
        {backLabel && backHref && (
          <li>
            <Link href={backHref} scroll={false}>
              <a>
                <FaAngleLeft size={16} /> {backLabel}
              </a>
            </Link>
          </li>
        )}
        <li>
          <a href="#about" onClick={onAboutClick}>
            {about}
          </a>
        </li>
        <li>
          <a href="#projects" onClick={onProjectsClick}>
            {projects}
          </a>
        </li>
        <li>
          <a href="#contact" onClick={onContactClick}>
            {contact}
          </a>
        </li>
        <li>
          <a
            href="https://medium.com/@eduardofelipi"
            target="_blank"
            rel="noreferrer"
            onClick={onBlogClick}
          >
            Blog
          </a>
        </li>
        <li>
          <span>{resumeNode}</span>
        </li>
      </ul>
      <MobileMenu>
        {backLabel && backHref && (
          <li>
            <Link href={backHref} scroll={false}>
              <a>
                <FaAngleLeft size={16} /> {backLabel}
              </a>
            </Link>
          </li>
        )}
        <li>
          <a href="#about" onClick={onAboutClick}>
            {about}
          </a>
        </li>
        <li>
          <a href="#projects" onClick={onProjectsClick}>
            {projects}
          </a>
        </li>
        <li>
          <a href="#contact" onClick={onContactClick}>
            {contact}
          </a>
        </li>
        <li>
          <a
            href="https://medium.com/@eduardofelipi"
            target="_blank"
            rel="noreferrer"
            onClick={onBlogClick}
          >
            Blog
          </a>
        </li>
        <li>
          <span>{resumeNode}</span>
        </li>
      </MobileMenu>
    </div>
  )
}
