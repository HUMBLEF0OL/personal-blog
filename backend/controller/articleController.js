const fs = require('fs');
const path = require('path');
const { v4 } = require('uuid');

const filepath = path.join(process.cwd(), 'db', 'articles.json');

const readFile = async () => {
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data ? JSON.parse(data) : []);
        })
    })
}

const writeFile = async (data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filepath, JSON.stringify(data, null, 2), (writeError) => {
            if (writeError) {
                reject(err);
            }
            resolve({
                messaeg: 'Article Saved!'
            })
        })
    })
}

// Helper function to create the file if it doesn’t exist and save the article
const createFileAndSaveArticle = async (articles, res) => {
    try {
        await writeFile(articles);
        return res.json({
            status: 200,
            message: 'Article Saved Successfully!'
        })
    } catch (err) {
        return res.status(500).json({
            status: 500,
            message: 'Failed to save file!'
        })
    }
};

const getAllArticles = async (req, res) => {
    const { limit, offset } = req.body;
    console.log("File path is:", filepath);

    try {
        const articles = await readFile();
        return res.json(articles);
    } catch (err) {
        if (err.code == 'ENOENT') {
            return createFileAndSaveArticle([], res);
        } else {
            res.status(500).json({
                status: 500,
                message: 'Failed to load data'
            })
        }
    }
}

const postArticle = async (req, res) => {
    const { author, content, summary, title } = req.body;
    const id = v4();
    const articleDetail = { id, author, content, summary, title, date: new Date().toISOString() };

    try {
        let articles = await readFile();
        articles.push(articleDetail);
        await writeFile(articleDetail);
        return res.json({
            status: 500,
            message: 'Failed to save article'
        })

    } catch (err) {
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
};

const getArticle = async (req, res) => {
    const { id } = req.params;
    try {
        const articles = await readFile();
        const article = articles.find(current => current.id === id);
        if (article) {
            return res.json(article);
        } else {
            return res.status(404).json({
                status: 404,
                message: 'Article Not Found!'
            })
        }
    } catch (err) {
        return res.status(500).json({
            status: 500,
            message: 'Internal Server Error!'
        })
    }
}

const deleteArticle = async (req, res) => {
    const { id } = req.params;
    try {
        const articles = await readFile();
        const articleToBeDeleted = articles.find(current => current.id === id);
        if (articleToBeDeleted) {
            const updatedList = articles?.filter(current => current.id != id);
            await writeFile(updatedList);
            return res.json({
                status: 200,
                message: 'Article deleted Successfully!'
            })
        } else {
            throw new Error({ message: "Article doesn't exists" });
        }

    } catch (err) {
        return res.status(500).json({
            status: 500,
            message: 'Internal Server Error!'
        })
    }

}

const editArticle = async (req, res) => {
    const { author, content, summary, title } = req.body;
    const { id } = req.params;
    try {
        const articles = await readFile();
        let articleExists = false;
        const updatedArticles = articles.map(current => {
            if (current.id === id) {
                articleExists = true;
                return {
                    ...current,
                    author,
                    content,
                    summary,
                    title
                }
            }
        })
        if (!articleExists) {
            return res.status(404).json({
                status: 404,
                message: 'Article Not Found!'
            })
        }
        await writeFile(updatedArticles);
        return res.json({
            status: 200,
            message: "Article Updated Successfully!"
        })

    } catch (err) {
        return res.status(500).json({
            status: 500,
            message: 'Internal Server Error!'
        })
    }
}

module.exports = {
    getAllArticles,
    postArticle,
    getArticle,
    deleteArticle,
    editArticle
}