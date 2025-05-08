

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





}







export const deleteTodo = async (req,res) => {





}