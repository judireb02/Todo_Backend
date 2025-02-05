const UserService = require('../services/user.services');

exports.registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const userService = new UserService();
        // need to pass the date as well
        const date = new Date();
        const user = await userService.registerUser(name, email, password, date);
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
};

exports.getUsers = async (req, res) => {
    try {
        const userService = new UserService();
        const users = await userService.getUsers();
        res.status(200).json({ users });
    } catch (error) {
        res.status(500).json({ message: 'Error getting users', error: error.message });
    }
};

exports.loginUser = async (req, res) => {   
    try {
        const { name, password } = req.body;

        if (!name || !password) {
            return res.status(400).json({ message: 'Name and password are required' });
        }

        const userService = new UserService();
        const { user, token } = await userService.loginUser(name, password);

        res.status(200).json({ 
            message: 'User logged in successfully',
            status: true, 
            token 
        });

    } catch (error) {
        console.log(error.message);

        if (error.message === "Incorrect password") {
            return res.status(401).json({ message: 'Invalid password' , status: false });
        }
        if (error.message === "User not found") {
            return res.status(404).json({ message: 'User not found' , status: false });
        }

        return res.status(500).json({ message: 'Error logging in', error: error.message, status: false });
    }
};



