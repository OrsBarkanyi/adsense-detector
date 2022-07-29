import puppeteer from "puppeteer"

let browser

const evaluateOnPage = async (url, evaluateFn) => {
    if (!browser) browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)
    const result = await page.evaluate(evaluateFn)
    await page.close()
    return result
}

export default evaluateOnPage