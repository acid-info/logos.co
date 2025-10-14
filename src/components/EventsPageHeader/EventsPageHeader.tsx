import React from 'react'
import './EventsPageHeader.css'
import Link from '@docusaurus/Link'

const EventsPageHeader = () => {
  return (
    <div className="events-page-header">
      <div className="description">
        Logos Circles are self-organised groups that take action to solve issues
        that matter locally. They are a form of parallel governance: instead of
        reforming broken or rigged institutions, they build better ones that
        live on or are sustained by the network.
      </div>
      <div>
        Find a Circle near you to join the movement. Don’t see a Circle near
        you?
        <br />
        <span>
          <Link href="https://discord.com/invite/logosnetwork" target="_blank">
            Join the server
          </Link>
          {' and share a proposal to start your own.'}
        </span>
      </div>
    </div>
  )
}

export default EventsPageHeader
