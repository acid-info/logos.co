const fetch = require('node-fetch')
const fs = require('fs')
const { JSDOM } = require('jsdom')

// URL to scrape
const url = 'https://lu.ma/logosevents'

const urlCompact = 'https://lu.ma/logosevents?compact=true'

// Function to fetch and parse HTML
async function scrapeData() {
  try {
    const response = await fetch(url)
    const html = await response.text()

    const dom = new JSDOM(html)
    const document = dom.window.document

    const events = []

    // Select elements with the .event-link class
    const eventLinks = document.querySelectorAll('a.event-link.content-link')

    eventLinks.forEach(eventLink => {
      const title = eventLink.getAttribute('aria-label')

      const href = eventLink.href

      const eventContent = eventLink.nextElementSibling

      const location = eventContent
        .querySelector('.attribute:nth-of-type(2) > .text-ellipses')
        ?.textContent.trim()

      const thumbnail = eventContent.querySelector('img')?.src

      const date = eventLink
        .querySelector('.jsx-2921306942 > .date')
        ?.textContent.trim()

      // Push the extracted data to the events array
      events.push({
        title,
        date: date,
        location,
        href: `https://lu.ma${href}`,
        thumbnail,
      })
    })

    // Write data to a JSON file
    fs.writeFileSync('events.json', JSON.stringify(events, null, 2))

    console.log('Data scraped and saved to events.json')
  } catch (error) {
    console.error('Error scraping data:', error)
  }
}

async function scrapeEventDate() {
  try {
    const response = await fetch(urlCompact)
    const html = await response.text()

    const dom = new JSDOM(html)
    const document = dom.window.document

    const events = []

    console.log('html', html)
    const eventData = document.querySelectorAll('.section')

    eventData?.forEach(event => {
      const date = event
        .querySelector('.date-inner > .date')
        ?.textContent.trim()

      const time = event
        .querySelector('.time.text-tertiary-alpha')
        ?.textContent.trim()

      console.log('time', time)

      const href = event.querySelector('a')?.href

      if (date && href) {
        events.push({
          date: `${date}\n${time}`,
          href: `https://lu.ma${href}`,
        })
      }

      // Update events.json with the date
      const eventsData = JSON.parse(fs.readFileSync('events.json'))

      const result = eventsData.map(eventData => {
        const eventDate = events.find(event => event.href === eventData.href)
        return {
          ...eventData,
          date: eventDate?.date,
        }
      })

      fs.writeFileSync('events.json', JSON.stringify(result, null, 2))
    })
  } catch (error) {
    console.error('Error scraping data:', error)
  }
}

async function main() {
  await scrapeData()
  await scrapeEventDate()
}

main()
