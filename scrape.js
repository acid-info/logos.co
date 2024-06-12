const fetch = require('node-fetch')
const fs = require('fs')
const path = require('path')
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

    for (const eventLink of eventLinks) {
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

      // Download and save the image
      let imagePath = ''
      if (thumbnail) {
        imagePath = await downloadImage(thumbnail, href)
      }

      // Push the extracted data to the events array
      events.push({
        title,
        date,
        location,
        href: `https://lu.ma${href}`,
        thumbnail: imagePath.replace('static', ''), // Remove 'static' from the path
        target: '_blank',
      })
    }

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

    const eventData = document.querySelectorAll('.section')

    eventData?.forEach(event => {
      const date = event
        .querySelector('.date-inner > .date')
        ?.textContent.trim()

      const time = event
        .querySelector('.time.text-tertiary-alpha')
        ?.textContent.trim()

      const href = event.querySelector('a')?.href

      if (date && href) {
        events.push({
          date: `${date}\n${time} GMT`,
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

// Function to download image
async function downloadImage(url, href) {
  const response = await fetch(url)
  const buffer = await response.buffer()
  const cleanHref = href
    .split('/')
    .pop()
    .toLowerCase() // Use the last part of the href, in lowercase
  const folder = path.join(__dirname, 'static', 'events', cleanHref)

  // Create directory if it doesn't exist
  fs.mkdirSync(folder, { recursive: true })

  const imagePath = path.join(folder, 'thumbnail.png')
  fs.writeFileSync(imagePath, buffer)
  console.log(`Image downloaded: ${imagePath}`)
  return path.join('/events', cleanHref, 'thumbnail.png') // Ensure the path does not include 'static'
}

async function main() {
  await scrapeData()
  await scrapeEventDate()
}

main()
