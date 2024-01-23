'use server'
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

import User from "./models/user";
import { redirect } from "next/navigation";

export async function dbConnect() {
    if(mongoose.connections[0].readyState) return

    try {
        await mongoose.connect(process.env.MONGODB_URI)
    } catch(ex) {
        throw new Error("Error connecting to Database.")
    }
}

export async function createUser(prevState, formData) {
    await dbConnect()
    if (formData.get('username') === "" || formData.get('password') === "") {
        return { message : "Invalid Data"}
    }
    const user = new User({
        username: formData.get('username'),
        password: formData.get('password')
    })
    await user.save()
    redirect("/login")
}

export async function loginUser(prevState, formData) {
    await dbConnect()
    const username = formData.get('username')
    const password = formData.get('password')
    const user = await User.findOne({username: username, password: password})
    if (user) {
        const token = jwt.sign({
            username: username,
            password:password, 
        }, "this is secret key", { expiresIn: "1d"})
        return { token: token}
    } else {
        return { error: "Username or password is incorrect."}
    }
}

export async function getUserFromToken(token) {
    const decoded = jwt.verify(token, "this is secret key")
    return await User.findOne({username: decoded.username, password: decoded.password}, '_id')
}