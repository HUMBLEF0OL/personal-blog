const login = (req, res) => {
    const { username, password } = req.body;
    res.send({
        username,
        password
    });
}

const signup = (req, res) => {
    res.send('still trying to signup');
}

module.exports = {
    login,
    signup
}