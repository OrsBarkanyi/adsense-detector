import fs from "fs"

const arrayToCsv = (file, headers, array) =>{
    const csvData = [headers, ...array.map(line => line.join(','))].join('\n')
    console.log(csvData)
    fs.writeFileSync(file, csvData)
}

export default arrayToCsv