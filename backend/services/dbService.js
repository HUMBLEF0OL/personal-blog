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

const ensureDirectoryExistence = (filePath) => {
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
};

const writeFile = async (fileName, data) => {
    return new Promise((resolve, reject) => {
        const filePath = generateFilePath(fileName);
        ensureDirectoryExistence(filePath);
        fs.writeFile(filePath, JSON.stringify(data, null, 2), (writeError) => {
            if (writeError) {
                reject(writeError);
            } else {
                resolve({
                    message: 'File Saved!',
                });
            }
        });
    });
};

module.exports = {
    readFile,
    writeFile
}