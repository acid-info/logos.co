import React, { useState, useEffect } from 'react'

interface YouTubeVideoProps {
  videoId: string
  title?: string
}

export const YouTubeVideo: React.FC<YouTubeVideoProps> = ({
  videoId,
  title = '',
}) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent,
        ) || window.innerWidth <= 768
      setIsMobile(isMobileDevice)
    }

    checkMobile()
  }, [])

  const baseUrl = `https://www.youtube.com/embed/${videoId}`

  const params = isMobile
    ? `loop=1&playlist=${videoId}` // Mobile: no autoplay, no mute
    : `autoplay=1&mute=1&loop=1&playlist=${videoId}` // Desktop: autoplay with mute

  return (
    <div
      style={{
        maxWidth: '100%',
        position: 'relative',
        paddingBottom: '56.25%',
        height: 0,
        overflow: 'hidden',
      }}
    >
      <iframe
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        src={`${baseUrl}?${params}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  )
}
