import puppeteer from 'puppeteer'

const runPuppeteer = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  const initialUrl = 'http://localhost:5173/'
  await page.goto('http://localhost:5173/')

  // Click on a div with the attribute row-id="some-value"
  const rowIdValue = '11'
  const selector = `div[row-id="${rowIdValue}"]`
  await page.waitForSelector(selector)
  console.log('The Request to Gragql works and fill the grid')
  await page.click(selector)

  console.log('Click on grid to Open Card')

  const selectorButton = 'button'
  await page.waitForSelector(selectorButton)

  const elementExists = await page.$(selectorButton)
  if (elementExists) {
    console.log('The Card with Client Detail is filled')
    console.log('Button "Go to Profile" exists on the page.')
  } else {
    console.log('The Card with Cliend Detail is not filled')
    console.error('Button does not exist on the page.')
  }

  const buttonSelector =
    'button.inline-flex.items-center.justify-center.whitespace-nowrap.rounded-md.text-sm.font-medium.ring-offset-background.transition-colors.focus-visible\\:outline-none.focus-visible\\:ring-2.focus-visible\\:ring-ring.focus-visible\\:ring-offset-2.disabled\\:pointer-events-none.disabled\\:opacity-50.bg-primary.text-primary-foreground.hover\\:bg-primary\\/90.h-10.px-4.py-2'
  await page.click(buttonSelector)

  const currentUrl = page.url()

  // Assert that the URL has changed
  if (currentUrl !== initialUrl) {
    console.log('Browser navigated to event Page')
  } else {
    console.error('Browser does not navigated to event Page')
  }

  // Close the browser
  await browser.close()
}

runPuppeteer()
