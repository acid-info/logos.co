import React from 'react'
import './LumaCalendar.css'
import { useColorMode } from '@docusaurus/theme-common'

const LumaCalendar = () => {
  const { colorMode } = useColorMode()
  return (
    <div className="events-calendar">
      <iframe
        src={`https://lu.ma/embed/calendar/cal-S3pdMJmDQDY9aT4/events?lt=${
          colorMode === 'dark' ? 'dark' : 'light'
        }`}
        width="600"
        height="600"
        frameBorder="0"
        allowFullScreen
        aria-hidden="false"
        tabIndex={0}
      ></iframe>
    </div>
  )
}

export default LumaCalendar
