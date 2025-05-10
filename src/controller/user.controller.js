//**
// 
// 
//  */

import { response } from "../lib/response.js";
import { userModel } from "../model/user.model.js"
import bcrypt from "bcryptjs";


export const GetCurrentUser = async (req, res) => {
  const cookies = req.cookies


  const user = await userModel.findById(cookies['session']);

  return res.status(200).json({ message: "Current user", user })
}



/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @returns 
 */
export const LogoutUser = async (req, res) => {


  res.cookie('session', '', { maxAge: 0 })
  return res.status(200).json({ message: "Logout successful", })
}



export const RegisterUser = async (req, res) => {

  try {

    const { name, email, password } = req.body

    if (!name || !email || !password) return response(res, 403, { error: "Missing required params" })

    // Check for existing user
    const existingUser = await userModel.findOne({ email });
    if (existingUser) return response(res, 403, { error: "Email already in use" })

    // Generating password hash
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);


    const user = await userModel.create({ name, email, password: hash });

    return res.status(200).json({ message: "user create", user })


  } catch (error) {

    console.error(error);
    res.status(500).json({ message: "INTERNAL SERVER ERROR" });

  }

}




/**
 * 
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @returns 
 */
export const LoginUser = async (req, res) => {

  try {


    const { email, password } = req.body;
    if (!email || !password) return response(res, 403, { error: "Missing required params" })


    const existingUser = await userModel.findOne({ email });
    if (!existingUser) return response(res, 404, { error: "User not found" })

    // Check the password with hashed password
    const isMatched = bcrypt.compareSync(password, existingUser.password);
    if (!isMatched) return response(res, 403, { error: "Invalid password" })


    res.cookie('session', existingUser._id, { maxAge: 60 * 60 * 24 * 1000 * 3, httpOnly: true, secure: process.env.NODE_END === 'production' })


    return response(res, 200, { message: "Login successful!" })

  } catch (error) {

    console.error(error);
    return response(res, 500, { error: "Internal server error" })

  }

}