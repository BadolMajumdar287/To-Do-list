import { Router } from "express";
import { createTodo,getTodo,updateTodo,deleteTodo } from "../controller/todo.controller.js";


export const todoRouter = Router();


todoRouter.post("/",createTodo);
todoRouter.get("/",getTodo);
todoRouter.put("/update",updateTodo);
todoRouter.delete("/delete",deleteTodo);