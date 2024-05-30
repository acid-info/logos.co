const fetch = require('node-fetch')
const fs = require('fs')
const { JSDOM } = require('jsdom')

// URL to scrape
const url = 'https://lu.ma/logosevents'

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
      const link = eventLink.href

      const eventContent = eventLink.nextElementSibling
      const location = eventContent
        .querySelector('.attribute:nth-of-type(2) > .text-ellipses')
        ?.textContent.trim()
      const thumbnail = eventContent.querySelector('img')?.src

      // Push the extracted data to the events array
      events.push({
        title,
        location,
        link,
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

// Execute the function
scrapeData()
