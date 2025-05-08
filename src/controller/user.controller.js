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

    const { email,password } = req.body;

     const userEmail = await userModel.findOne({email});
    
     if(!userEmail){

     return res.status(404).json({message: "USER EMAIL IS NOT FOUND"});

     }
         
     const userPassword = await userModel.findOne({password});

     if(!userPassword){

    return res.status(404).json({message: "USER PASSWORD IS NOT Found"});

     }
  
     res.status(200).json({message: "USER IS LOGIN"})
    
  } catch (error) {
    
    console.error(error);
    res.status(500).json({message: "INTERNAL SERVER ERROR"});

  }
         



}