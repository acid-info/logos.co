import React, { useEffect, useRef, useState } from 'react'
import styles from './StickyImage.module.css'

const StickyImage = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)

  const [isFixed, setIsFixed] = useState(true)
  const [absoluteTop, setAbsoluteTop] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer')
      if (!footer || !containerRef.current) return

      const footerTop = footer.getBoundingClientRect().top + window.scrollY
      const scrollTop = window.scrollY
      const containerHeight = containerRef.current.offsetHeight
      const threshold = 860

      const shouldStick = scrollTop + threshold + containerHeight < footerTop

      if (shouldStick) {
        if (!isFixed) setIsFixed(true)
      } else {
        if (isFixed) {
          setAbsoluteTop(scrollTop)
          setIsFixed(false)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [isFixed])

  const handleImageClick = () => {
    if (imgRef.current?.requestFullscreen) {
      imgRef.current.requestFullscreen()
    }
  }

  return (
    <div
      ref={containerRef}
      className={`${styles.container} ${
        isFixed ? styles.fixed : styles.absolute
      }`}
      style={!isFixed ? { top: `${absoluteTop}px` } : undefined}
    >
      <img
        ref={imgRef}
        src="/assets/farewell-to-westphalia.jpg"
        alt="Farewell to Westphalia"
        onClick={handleImageClick}
      />
      <p>
        <i>Farewell to Westphalia</i>
        <br />
        by Jarrad Hope, Peter Ludlow
      </p>
    </div>
  )
}

export default StickyImage
