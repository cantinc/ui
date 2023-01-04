export function bindWindowHeight () {
  const listener = () => {
    document.body.style.setProperty('--window-height', `${window.innerHeight}px`)
  }

  window.addEventListener('resize', listener)

  listener()

  return () => window.removeEventListener('resize', listener)
}
