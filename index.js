import * as fs from "fs"
import csvToArray from "./csvToArray.js"
import evaluateOnPage from "./evaluateOnPage.js"
import arrayToCsv from "./arrayToCsv.js"

const data = csvToArray('./urls.csv').dataArray

const adsenseDataPromises = data.map(line => {
    const url = line[0]
    return evaluateOnPage(url, () => {
        return window.adsbygoogle?.loaded || false
    })
})

const adsenseData = await Promise.all(adsenseDataPromises)

const results = data.map((line, index) => [line[0], adsenseData[index]])

arrayToCsv('./adsenseData.csv', ["url", "adsense"], results)

process.exit()