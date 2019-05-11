const fs = require('fs')
const contentFIlePath = './content.json'

function save(content) {
    const contentString = JSON.stringify(content)
    return fs.writeFileSync(contentFIlePath, contentString)
}

function load() {
    const fileBuffer = fs.readFileSync(contentFIlePath, 'utf-8')
    const contentJson = JSON.parse(fileBuffer)
    return contentJson
}

module.exports = {
    save,
    load
}