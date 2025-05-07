//**
// 
// 
//  */

import { userModel } from "../model/user.model.js"

export const userCreate = async (req,res) => {

  try {

    const {name,email,password} = req.body
     
    if (!name || !email || !password) {
      return res.status(400).json({ message: "NOT found"});
    }
      
    const user = await userModel.create({name,email,password});
     
    res.status(200).json({message: "user create",user})


  } catch (error) {

    console.error(error);
    res.status(500).json({message: "INTERNAL SERVER ERROR"});
    
  }   

}





export const userLogin = async (req,res) => {

  try {

         
    
  } catch (error) {
    
    console.error(error);
    res.status(500).json({message: "INTERNAL SERVER ERROR"});

  }
         



}