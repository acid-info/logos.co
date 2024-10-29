// src/components/TopToast.js
import React, { useEffect, useState } from 'react'
import styles from './TopToast.module.css'
import ThemedImage from '@theme/ThemedImage'

type TopToastProps = {
  colorMode: string
  setShowTopToast: (showTopToast: boolean) => void
}

const TopToast = ({ colorMode, setShowTopToast }: TopToastProps) => {
  const [time, setTime] = useState('DD:HH:mm:ss')

  useEffect(() => {
    const targetTime = new Date('2024-11-04T13:00:00Z').getTime()

    const formatTime = (timeInSeconds: number) => {
      const days = Math.floor(timeInSeconds / (3600 * 24))
      const hours = Math.floor((timeInSeconds % (3600 * 24)) / 3600)
      const minutes = Math.floor((timeInSeconds % 3600) / 60)
      const seconds = Math.floor(timeInSeconds % 60)

      return `${String(days).padStart(2, '0')}:${String(hours).padStart(
        2,
        '0',
      )}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
        2,
        '0',
      )}`
    }

    const updateRemainingTime = () => {
      const currentTime = new Date().getTime()
      const remainingTimeInSeconds = Math.floor(
        (targetTime - currentTime) / 1000,
      )

      if (remainingTimeInSeconds >= 0) {
        setTime(formatTime(remainingTimeInSeconds))
      } else {
        setTime('00:00:00:00')
      }
    }

    const interval = setInterval(updateRemainingTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.toast}>
      Logos Operators Ordinals Mint Begins November 4, 2024 at 1pm UTC
      <span>Time remaining: {time}</span>
      <div>
        <button
          className={styles.closeButton}
          onClick={() => setShowTopToast(false)}
        >
          <ThemedImage
            alt="Close"
            sources={{
              light: '/icons/close-white.svg',
              dark: '/icons/close-black.svg',
            }}
          />
        </button>
      </div>
    </div>
  )
}

export default TopToast
