const fs = require('fs');
const path = require('path');

// const filepath = path.join(process.cwd(), 'db', 'articles.json');

const generateFilePath = (fileName) => {
    return path.join(process.cwd(), 'db', fileName);
}

const readFile = async (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(generateFilePath(fileName), 'utf8', (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data ? JSON.parse(data) : []);
        })
    })
}

const writeFile = async (fileName, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(generateFilePath(fileName), JSON.stringify(data, null, 2), (writeError) => {
            if (writeError) {
                reject(err);
            }
            resolve({
                messaeg: 'Article Saved!'
            })
        })
    })
}

module.exports = {
    readFile,
    writeFile
}