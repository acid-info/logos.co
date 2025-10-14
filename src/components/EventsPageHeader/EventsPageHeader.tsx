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
        Logos Circles are self-organised groups that take action to solve 
        issues that matter locally. They are a form of parallel governance: 
        instead of reforming broken or rigged institutions, they build better 
        ones that live on or are sustained by the network.
      </div>
      Find a Circle near you to join the movement. Don’t see a Circle near you? 
      [Join the server](https://discord.com/invite/logosnetwork) and share a proposal to start your own.
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
