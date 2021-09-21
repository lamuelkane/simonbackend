import express from 'express'
import bcrypt from 'bcrypt'
import expressAsyncHandler from 'express-async-handler'
import data from '../products.js'
import User from '../module/usermodule.js'
import { generateToken } from '../utils.js'

const userRouter = express.Router()

userRouter.get('/seed', expressAsyncHandler(async(req, res) => {
    console.log("received reqest");
    await User.remove({}) 
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
}))

userRouter.post('/signin', expressAsyncHandler( async (req, res) => {
    console.log("received reqest");
    const user = await User.findOne({email: req.body.email})
    if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
            res.send({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user)
            })
            return
        }
        else {
            res.status(401).send({message: "Invalid password!"})
        }
    }
res.status(404).send({message: "User Not Found"})
}))

userRouter.post('/register', expressAsyncHandler(async (req, res) => {
    const userExist = await User.findOne({email: req.body.email})
    if (userExist) {
        res.status(400).send({message: "user with email already exist"})
        return
    }
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8) ,
            })
        const createdUser = await user.save()
        res.send({
            _id: createdUser._id,
            name: createdUser.name,
            email: createdUser.email,
            isAdmin: createdUser.isAdmin,
            token: generateToken(createdUser)
        })
}))

export default userRouter