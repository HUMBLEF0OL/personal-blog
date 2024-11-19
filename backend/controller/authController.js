const { readFile, writeFile } = require("../services/dbService");
const jwt = require('jsonwebtoken');
const usersDB = 'users.json';

const generateToken = (data) => {
    console.log('inside token:', data);
    let token = jwt.sign(data, process.env.SECRET_KEY, { expiresIn: '1h' })
    return token;
}

const authenticateUser = async (username, password) => {
    const userList = await readFile(usersDB);
    const existingUser = userList.find(current => current?.username === username);
    if (!existingUser) {
        return {
            status: 404,
            message: 'User Not found!'
        }
    } else if (existingUser && existingUser.password !== password) {
        return {
            status: 400,
            message: 'Invalid Credentials'
        }
    }
    return {
        status: 200,
        data: {
            username,
            password,
            token: generateToken({ username, password })
        }
    }

}

const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const response = await authenticateUser(username, password);

        return res.json(response)
    } catch (err) {
        res.status(500).json({
            status: 500,
            message: 'Internal Server Error'
        })
    }
}

const signup = async (req, res) => {
    const { username, password } = req.body;
    try {
        const users = await readFile(usersDB);
        const existingUser = users?.find(current => current.username === username);
        if (existingUser) {
            const loginResponse = await authenticateUser(existingUser.username, existingUser.password);
            return res.status(loginResponse.status).json({
                status: loginResponse.status,
                message: "User already exists. Logged in successfully.",
                data: loginResponse.data
            });
        }
        users.push({
            username,
            password
        })

        const result = await writeFile(usersDB, users)
        return res.json({
            status: 200,
            message: 'Account Created',
            token: generateToken({ username, password })
        })
    } catch (err) {
        return res.status(500).json({
            status: 500,
            message: 'Internal Server Error'
        })
    }
}

module.exports = {
    login,
    signup
}