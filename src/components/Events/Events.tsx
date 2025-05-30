import { EventCard } from '../mdx'
import React, { useState } from 'react'
import { Button } from '@acid-info/lsd-react'
import './Events.css'
//@ts-ignore
import eventData from '/events.json'

const Events = () => {
  const [showAllPastEvents, setShowAllPastEvents] = useState(false)

  const parseDate = (dateString: string) => {
    const datePart = dateString.split('\n')[0]
    return new Date(datePart)
  }

  const formatDateWithoutTime = (dateString: string) => {
    return dateString.split('\n')[0]
  }

  // const sortedUpcoming = [...eventData.upcoming].sort(
  //   (a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime(),
  // )
  const sortedUpcoming = [...eventData.upcoming]

  const sortedPast = [...eventData.past].sort(
    (a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime(),
  )

  const displayedPastEvents = showAllPastEvents
    ? sortedPast
    : sortedPast.slice(0, 4)

  const hasMorePastEvents = sortedPast.length > 4

  return (
    <div className="events-wrapper">
      <div className="events-container">
        <section id="upcoming-events">
          <span className="events-section-title">Upcoming</span>
          <div className="events-grid">
            {sortedUpcoming.length > 0 ? (
              sortedUpcoming.map((event, index) => (
                <EventCard
                  key={index}
                  href={event.href}
                  thumbnail={event.thumbnail}
                  title={event.title}
                  date={formatDateWithoutTime(event.date)}
                  location={event.location}
                  target={event.target}
                />
              ))
            ) : (
              <p>No events found.</p>
            )}
          </div>
        </section>

        <section id="past-events">
          <span className="events-section-title">Past events</span>
          <div className="events-grid">
            {displayedPastEvents.map((event, index) => (
              <EventCard
                key={index}
                href={event.href}
                thumbnail={event.thumbnail}
                title={event.title}
                date={formatDateWithoutTime(event.date)}
                location={event.location}
                target={event.target}
              />
            ))}
          </div>
        </section>
      </div>
      {hasMorePastEvents && !showAllPastEvents && (
        <div className="see-more-container">
          <Button onClick={() => setShowAllPastEvents(true)}>See more</Button>
        </div>
      )}
    </div>
  )
}

export default Events
