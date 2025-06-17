import React from 'react'
import './EventsPageHeader.css'
// import { Button } from '@acid-info/lsd-react'

const EventsPageHeader = () => {
  // const scrollToSection = (sectionId: string) => {
  //   const element = document.getElementById(sectionId)
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' })
  //   }
  // }

  return (
    <div className="events-page-header">
      <div className="description">
        Our events are rooted in parallel organising. Instead of relying on
        broken or rigged institutions, we focus on community-driven action,
        shared purpose and mutual support to create meaningful change from the
        ground up. Our inspiration comes from the success of movements such as
        Hungary's Civic Circles and Czechoslovakia's Charter 77.
      </div>
      {/* <div className="actions">
        <Button
          variant="outlined"
          size="small"
          onClick={() => scrollToSection('upcoming-events')}
        >
          Upcoming
        </Button>
        <Button
          variant="outlined"
          size="small"
          onClick={() => scrollToSection('past-events')}
        >
          Past
        </Button>
      </div> */}
    </div>
  )
}

export default EventsPageHeader
