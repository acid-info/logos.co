import React from 'react'
import './LumaCalendar.css'
import { useColorMode } from '@docusaurus/theme-common'

const LumaCalendar = () => {
  const { colorMode } = useColorMode()
  return (
    <div className="calendar-wrapper">
      <iframe
        src={`https://lu.ma/embed/calendar/cal-S3pdMJmDQDY9aT4/events?lt=${
          colorMode === 'dark' ? 'dark' : 'light'
        }`}
        frameBorder="0"
        allowFullScreen
        aria-hidden="false"
        tabIndex={0}
      ></iframe>
    </div>
  )
}

export default LumaCalendar
