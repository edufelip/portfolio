import { useCallback, useEffect } from 'react'

const STORAGE_KEY = 'scrollY'

export function useScrollMemory() {
  useEffect(() => {
    const y = typeof window !== 'undefined' ? window.sessionStorage.getItem(STORAGE_KEY) : null
    if (y) {
      const val = parseInt(y, 10)
      if (!Number.isNaN(val)) {
        window.scrollTo({ top: val })
      }
    }
  }, [])

  const save = useCallback(() => {
    if (typeof window === 'undefined') {
      return
    }
    window.sessionStorage.setItem(STORAGE_KEY, String(window.pageYOffset))
  }, [])

  const bindProjectAnchorClicks = useCallback(() => {
    if (typeof document === 'undefined') {
      return
    }
    document.querySelectorAll('.projectAnchor').forEach((el) => {
      el.addEventListener('click', save)
    })
  }, [save])

  return { save, bindProjectAnchorClicks }
}
