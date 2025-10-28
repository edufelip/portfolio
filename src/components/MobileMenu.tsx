import React, { useState, type ReactNode } from 'react'

import { GiHamburgerMenu, RiCloseLine } from '~/components/icons'
import { MobileMenu as MobileMenuContainer } from '~/styles/home'

type Props = {
  children: ReactNode
}

export function MobileMenu(props: Props) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <GiHamburgerMenu aria-label="Open menu" onClick={() => setOpen(true)} size={36} />
      <MobileMenuContainer open={open}>
        <RiCloseLine aria-label="Close menu" onClick={() => setOpen(false)} size={45} />
        <ul onClick={() => setOpen(false)}>{props.children}</ul>
      </MobileMenuContainer>
    </>
  )
}
