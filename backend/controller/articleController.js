const fs = require('fs');
const path = require('path');
const { v4 } = require('uuid');

const filepath = path.join(process.cwd(), 'db', 'articles.json');

// Helper function to create the file if it doesn’t exist and save the article
const createFileAndSaveArticle = (articles, res) => {
    fs.writeFile(filepath, JSON.stringify(articles, null, 2), (writeErr) => {
        if (writeErr) {
            console.error("Failed to create file:", writeErr);
            return res.status(500).json({
                status: 500,
                message: 'Failed to create file'
            });
        }
        return res.json({
            status: 200,
            message: 'Article successfully saved'
        });
    });
};

const getAllArticles = async (req, res) => {
    const { limit, offset } = req.body;
    console.log("File path is:", filepath);

    fs.readFile(filepath, 'utf8', (err, data) => {
        if (err) {
            // Handle "file not found" error specifically
            if (err.code === 'ENOENT') {

                // Create an empty file since it doesn't exist
                return createFileAndSaveArticle([], res);
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
            // return res.status(200).json(parsedData.slice(offset || 0, 0 || limit + 1));
            return res.json(parsedData);
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
    const { author, content, summary, title } = req.body;
    const id = v4();
    const articleDetail = { id, author, content, summary, title, date: new Date().toISOString() };

    fs.readFile(filepath, 'utf-8', (err, data) => {
        if (err) {
            // Handle "file not found" error specifically
            if (err.code === 'ENOENT') {
                // Create an empty file since it doesn't exist
                return createFileAndSaveArticle([articleDetail], res);
            } else {
                // For other read errors
                console.error("Failed to load data:", err);
                return res.status(500).json({
                    status: 500,
                    message: 'Failed to load data'
                });
            }
        }

        // Parse existing articles if file exists, or start with an empty array
        const articles = data ? JSON.parse(data) : [];
        articles.push(articleDetail);

        // Write the updated array back to the file as a JSON string
        fs.writeFile(filepath, JSON.stringify(articles, null, 2), (writeErr) => {
            if (writeErr) {
                return res.status(500).json({
                    status: 500,
                    message: 'Failed to save article'
                });
            }
            return res.json({
                status: 200,
                message: 'Article successfully saved'
            });
        });
    });
};

const getArticle = (req, res) => {
    const { id } = req.params;

    fs.readFile(filepath, 'utf-8', (err, data) => {
        if (err) {
            return res.status(404).json({
                status: 404,
                message: 'Article Not Found!'
            })
        }
        const articles = data ? JSON.parse(data) : [];
        const article = articles.find(current => current.id === id);
        if (article) {
            return res.json(article);
        } else {
            return res.status(404).json({
                status: 404,
                message: 'Article Not Found!'
            })
        }
    })

}

module.exports = {
    getAllArticles,
    postArticle,
    getArticle
}