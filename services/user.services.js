const User = require('../model/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();


class UserService {
    async registerUser(name, email, password, date) {
        try {
            console.log(name, email, password, date);
            const user = new User({
                name,
                email,
                password,
                date
            });
            return await user.save();
        } catch (error) {
            console.log(error);
            throw new Error("Error registering user");

        }
    }

    async loginUser(name, password) {
        try {
            const user = await User.findOne({ name });

            if (!user) {
                throw new Error("User not found");
            }
            console.log(user);
            console.log("JWT Secret:", process.env.JWT_SECRET);


            if (user.password !== password) {
                throw new Error("Incorrect password");
            }

            // Generate JWT Token with expiry time
            const token = jwt.sign(
                { userId: user._id, name: user.email },  // Payload
                process.env.JWT_SECRET,  // Secret key
                { expiresIn: '1h' }  // Token expires in 1 hour
            );


            console.log(token);
            return { user, token };  // Return both user details and token
        } catch (error) {
            throw error;
        }
    }
}
module.exports = UserService;