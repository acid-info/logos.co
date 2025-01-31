import React, { useRef } from 'react'
import styles from './StickyImage.module.css'

const StickyImage = () => {
  const imgRef = useRef(null)

  const handleImageClick = () => {
    if (imgRef.current) {
      if (imgRef.current.requestFullscreen) {
        imgRef.current.requestFullscreen()
      } else if (imgRef.current.mozRequestFullScreen) {
        // Firefox
        imgRef.current.mozRequestFullScreen()
      } else if (imgRef.current.webkitRequestFullscreen) {
        // Chrome, Safari, and Opera
        imgRef.current.webkitRequestFullscreen()
      } else if (imgRef.current.msRequestFullscreen) {
        // IE/Edge
        imgRef.current.msRequestFullscreen()
      }
    }
  }

  return (
    <div className={styles.container}>
      <img
        ref={imgRef}
        src="/assets/farewell-to-westphalia.jpg"
        alt="Farewell to Westphalia"
        className={styles.image}
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
