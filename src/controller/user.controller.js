//**
// 
// 
//  */

import { userModel } from "../model/user.model.js"

export const userCreate = async (req,res) => {

  try {

    const {name,email,password} = req.body
     
    const user = await userModel.create({name,email,password});

        if(!user){

            return res.status(404).json({message: "User Not Found"});

        };

        res.status(200).json({message:"User Register",user});
    
  } catch (error) {

    console.error(error);
    res.status(500).json({message: "INTERNAL SERVER ERROR"});
    
  }

}