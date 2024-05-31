const fs = require('fs')
const puppeteer = require('puppeteer')

// URL to scrape
const url = 'https://lu.ma/logosevents'

// Function to fetch and parse HTML
async function scrapeData() {
  try {
    // Launch Puppeteer
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url, { waitUntil: 'networkidle2' })

    // Wait for the required elements to load
    await page.waitForSelector('a.event-link.content-link')

    // Scrape the data
    const events = await page.evaluate(() => {
      const eventLinks = document.querySelectorAll('a.event-link.content-link')
      const events = []

      eventLinks.forEach(eventLink => {
        const title = eventLink.getAttribute('aria-label')
        const href = eventLink.href
        const eventContent = eventLink.nextElementSibling
        const location = eventContent
          .querySelector('.attribute:nth-of-type(2) > .text-ellipses')
          ?.textContent.trim()
        const thumbnail = eventContent.querySelector('img')?.src

        const date = eventContent
          .querySelector('.event-time .text-warning')
          ?.textContent.trim()

        events.push({
          title,
          date,
          location,
          href: `https://lu.ma${href}`,
          thumbnail,
        })
      })

      return events
    })

    // Write data to a JSON file
    fs.writeFileSync('events.json', JSON.stringify(events, null, 2))

    console.log('Data scraped and saved to events.json')

    // Close Puppeteer
    await browser.close()
  } catch (error) {
    console.error('Error scraping data:', error)
  }
}

// Execute the function
scrapeData()
