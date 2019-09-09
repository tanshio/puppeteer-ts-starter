import puppeteer from 'puppeteer'
// import fs = require('fs')

const wW = 1440,
  wH = 900

const URL = 'https://google.co.jp',
  WAIT = 2000
;(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: [`--window-size=${wW},${wH}`, '--window-position=0,0'],
  })
  const page = await browser.newPage()
  await page.setViewport({ width: wW, height: wH })

  // open page
  await page.goto(URL)
  await page.waitFor(WAIT)

  // search
  await page.type('form[action="/search"] input[name="q"]', 'hello')
  await page.keyboard.press('Enter');

  await page.waitFor(WAIT)
  await browser.close()
})()
