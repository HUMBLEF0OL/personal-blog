const fs = require('fs');
const path = require('path');

const getAllArticles = async (req, res) => {
    const filepath = path.join(process.cwd(), 'db', 'articles.json');
    const { limit, offset } = req.body;
    console.log("File path is:", filepath);

    fs.readFile(filepath, 'utf8', (err, data) => {
        if (err) {
            // Handle "file not found" error specifically
            if (err.code === 'ENOENT') {
                const emptyData = JSON.stringify({});

                // Create an empty file since it doesn't exist
                fs.writeFile(filepath, emptyData, (writeErr) => {
                    if (writeErr) {
                        console.error("Failed to create an empty file:", writeErr);
                        return res.status(500).json({
                            status: 500,
                            message: 'Failed to create file'
                        });
                    }

                    // Respond with a 404 and an empty data object after creating the file
                    return res.status(404).json({
                        status: 404,
                        message: 'No article exists',
                        data: {}
                    });
                });
                return;
            }

            // For other read errors
            console.error("Failed to load data:", err);
            return res.status(500).json({
                status: 500,
                message: 'Failed to load data'
            });
        }

        // Successfully read file, parse and respond
        try {
            const parsedData = JSON.parse(data);
            return res.status(200).json(parsedData.slice(offset, limit + 1));
        } catch (parseErr) {
            console.error("Failed to parse JSON data:", parseErr);
            return res.status(500).json({
                status: 500,
                message: 'Invalid JSON format in file'
            });
        }
    });

}

const postArticle = (req, res) => {

}

module.exports = {
    getAllArticles
}