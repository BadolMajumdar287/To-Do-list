

import { todoModel } from "../model/todo.model.js"
import { userModel } from "../model/user.model.js";

export const createTodo = async (req,res) => {

   try {

    const {userId,title,completed} = req.body;
    
    if(!userId && !title){
    
        res.status(404).json({messege: "NOT FOUND"});

    }

    const todoTask = await todoModel.create({userId,title,completed});

    res.status(200).json(todoTask);
    
    
   } catch (error) {
    
        console.error(error);
        res.status(500).json({messege: "error messege"});

   }

}





export const  getTodo = async (req,res) => {

    try {

       const { _id } = req.params

       const user = await userModel.findOne({ _id });

       if(!user){
           
        return res.status(404).json({message: "USER NOT FOUND",});

       }

       const todoTask = await todoModel.find({ userId:user._id});

       if(!todoTask){

        return res.status(404).json({message: "TODO NOT FOUND"});

       }

       res.status(200).json(todoTask);


        
        
    } catch (error) {

        console.error(error);
        res.status(500).json({messege: "error messege"});
        
    }





}





export const updateTodo = async (req,res) => {

      try {

        const { _id } = req.params;
        const{ title,completed} = req.body;

          const user = await userModel.findOne({ _id });
            
          if(!user){
            return res.status(400).json({message: "USER NOT FOUND"});
          }

          const totoTaskUpdate = await todoModel.updateOne(
            {userId: user._id},
            {$set: {title,completed}}
          );

          if(!totoTaskUpdate){
            return res.status(400).json({message: "NOT UPDATE TOTO"});
          }

           res.status(200).json(totoTaskUpdate);
        
      } catch (error) {
        
        console.log(error);
        res.status(500).json({message: "INTERNAL SERVER ERROR"});

      }



}







export const deleteTodo = async (req,res) => {

         try {

          const { _id } = req.params;

          const user = await userModel.findOne({ _id });

          if(!user){
           
          return  res.status(404).json({message: "USER NOT FOUND"});

          }

          const todoDelete = await todoModel.deleteOne({ userId: user._id});

          if(!todoDelete){

            return res.status(404).json({message: "NOT DELETE USER"});

          }

          res.status(200).json(todoDelete);
          
         } catch (error) {

          console.log(error);
          res.status(500).json({message: "INTERNAL SERVER ERROR"});
          
         }



}