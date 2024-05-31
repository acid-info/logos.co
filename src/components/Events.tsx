import { EventCardList } from './mdx'
import React from 'react'
//@ts-ignore
import eventData from '/events.json'

const Events = () => {
  return <EventCardList upcoming={eventData} past={[]} />
}

export default Events
