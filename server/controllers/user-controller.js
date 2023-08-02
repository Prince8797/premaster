import bcrypt from 'bcryptjs';
import PreMasterUser from '../schemas/user-schema.js';
import { generateToken } from '../utils.js';

export const userLogin = async (request, response) => {
    try {
        const user = await PreMasterUser.findOne({ username: request.body.username });
        if (user) {
            if (bcrypt.compareSync(request.body.password, user.password)) {
                response.send({
                    _id: user._id,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    username: user.username,
                    isAdmin: user.isAdmin,
                    token: generateToken(user)
                });
                return;
            }
        }
        response.status(401).send({ message: 'Invalid email or password' });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}

export const userSignup = async (request, response) => {
    try {
        const newUser = new PreMasterUser({
            firstname: request.body.firstname,
            lastname: request.body.lastname,
            username: request.body.username,
            password: bcrypt.hashSync(request.body.password)
        });
        const user = await newUser.save();
        response.send({
            _id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            username: user.username,
            isAdmin: user.isAdmin,
            token: generateToken(user)
        });
        return;
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}

export const updateAccount = async (request, response) => {
    const user = await PreMasterUser.findById(request.user._id);
    if (user) {
        user.firstname = request.body.firstname,
            user.lastname = request.body.lastname,
            user.username = request.body.username,
            user.password = bcrypt.hashSync(request.body.password, 8);

        const updatedUser = await user.save();
        response.send({
            _id: updatedUser._id,
            firstname: updatedUser.firstname,
            lastname: updatedUser.lastname,
            username: updatedUser.username,
            isAdmin: updatedUser.isAdmin,
            token: generateToken(updatedUser)
        });
    } else {
        console.log('account not updated')
        response.status(404).send({ message: 'user not found' });
    }
}

export default userLogin;
