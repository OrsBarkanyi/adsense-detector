import fs from "fs"

const csvToArray = (file) =>{
    const csvData = fs.readFileSync(file, { encoding: 'utf-8' })
    const lines = csvData.split('\n')
    const headers = lines[0].split(',')
    const data = lines.slice(1)
    const dataArray = data.map(line => line.split(','))
    return { headers, dataArray }
}

export default csvToArray