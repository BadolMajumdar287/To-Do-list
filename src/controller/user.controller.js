//**
// 
// 
//  */

import { userModel } from "../model/user.model.js"
import bcrypt from "bcrypt";



export const getCurrentUser = async (req,res) => {

    try {

       const cookie = req.cookies

      const user = await userModel.findById(cookie['session']);

      if(!user){

    return  res.status(400).json({message: "Bad Request"});

      }


       res.status(200).json({ message: "Current user", user })
        
      
    } catch (error) {

      console.log(error);
      res.status(500).json({message: "INTERNAL SERVER ERROR"});
      
    }
    
    

}; 







export const userLogout = async (req,res) => {

         try {
         
          
          res.cookie('session', '', { maxAge: 0 })
           return res.status(200).json({ message: "Logout successful", })
          
         } catch (error) {

          console.log(error);
          res.status(500).json({message: "INTERNAL SERVER ERROR"});

         }



};










export const userCreate = async (req,res) => {

  try {

    const {name,email,password} = req.body
     
    if (!name || !email || !password) {
      return res.status(400).json({ message: "NOT found"});
    }
      


    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);


    const user = await userModel.create({name,email,password: hash});
     
    res.status(200).json({message: "user create",user})


  } catch (error) {

    console.error(error);
    res.status(500).json({message: "INTERNAL SERVER ERROR"});
    
  }   

}





export const userLogin = async (req,res) => {

  try {

    const { email,password } = req.body;

     const user = await userModel.findOne({email});
    
     if(!user){

     return res.status(404).json({message: "USER EMAIL IS NOT FOUND"});

     }
         
     const isMatched = bcrypt.compareSync(password, user.password);

     if(!isMatched){
 
      return res.status(404).json({message: "Password is not valid"})

     }

     res.cookie('session',user._id, { maxAge: 60 * 60 * 24 * 1000 * 3, httpOnly: true, secure: process.env.NODE_ENV === 'production' })



     res.status(200).json({message: "USER IS LOGIN"})
    
  } catch (error) {
    
    console.error(error);
    res.status(500).json({message: "INTERNAL SERVER ERROR"});

  }
         



}