import bcrypt from "bcrypt"
import { User } from "../model/user.js"
import jwt from "jsonwebtoken"
export const register = async (req, res) => {
    try {
        const { FullName, email, password } = req.body

        const existingUser = await User.findOne({ email })
        console.log(existingUser, "existing")

        if (existingUser) {
            return res.status(400).json({
                message: "Email already exists"
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            FullName: req.body.FullName,
            email: email,
            password: hashedPassword
        })
        res.json({
            message: "user created Successfully",
            user: {
                email: user.email,
                FullName: user.FullName
            }
        })
        //const fullName=req.body.fullName //old way
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: "Server error" })
    }
}
export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const existingUser = await User.findOne({ email: email })
        if (!existingUser) {
            return res.status(400).json({ message: "User not found" })
        }
        const isMatch = await bcrypt.compare(password, existingUser.password)
        if (!isMatch) {
            return res.status(400).json("wrong credentials")
        }
        else {

            const token = jwt.sign({
                _id: existingUser._id,
                email: existingUser.email,
                FullName: existingUser.FullName
            },"mernstack")
            //{expiresIn:"1h"} usually for big companies 
            res.status(200).json({
                message:"user logged sucessfully",
                user:{
                    email:existingUser.email,
                    FullName: existingUser.FullName 
                },
                token:token
            })
            
        }
    }

    catch (error) {
        console.log(error)
    }
}