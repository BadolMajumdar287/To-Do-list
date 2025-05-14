//**
// 
// 
//  */

import { userModel } from "../model/user.model.js"
import { response } from "../lib/response.js";
import { hash,compare } from "../lib/hash.js";
import { cookieSet } from "../lib/cookie.js";


export const getCurrentUser = async (req,res) => {

    try {

       const cookie = req.cookies

      const user = await userModel.findById(cookie['session']);

      if(!user) return response(res,400,{error: "User Not Found"});


       return response(res,200,{message: "Current User",user});
        
      
    } catch (error) {

      console.log(error);
      return response(res,500,{error: "Internal Server Error"});

    }
    
    

}; 







export const LogoutUser = async (req,res) => {

         try {
         
          
          res.cookie('session', '', { maxAge: 0 });
          return response(res,200,{message: "User logged out successfully."});
          
         } catch (error) {

          console.log(error);
          return response(res,500,{error: "Internal Server Error"});


         }



};










export const RegisterUser = async (req,res) => {

  try {

    

    const {name,email,password} = req.body
     
    if (!name || !email || !password) return response(res,403,{error: "Missing Required Params."});
      
    
    const existingUser = await userModel.findOne({email});

    if(existingUser) return response(res,403,{error: "Email Already Use In."});

      const hashPassword = hash(password);

    const user = await userModel.create({name,email,password: hashPassword});
     
   return response(res,200,{message: "User Registered successfully."},user);

  } catch (error) {

    console.error(error);
    return response(res,500,{Error: "Registration Failed."});
    
  }   

}





export const LoginUser = async (req,res) => {

  try {

    const { email,password } = req.body;

     const userEmail = await userModel.findOne({email});
    
     if(!userEmail) return response(res,403,{error: "Missing Required Params Or Email."});

         
      const comparePassword = await compare(password,userEmail.password);

     if(!comparePassword) return response(res,401,{error: "Password Is Not Found."});
 
       cookieSet(res,userEmail);

     return response(res,200,{Message: "User Login successfully."});
    
  } catch (error) {
    
    console.error(error);
    return response(res,500,{message: "User Login Failed"});

  }
         



}