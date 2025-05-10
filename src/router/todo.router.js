import { Router } from "express";
import { createTodo, getTodo, updateTodo, deleteTodo } from "../controller/todo.controller.js";


export const todoRouter = Router();


todoRouter.post("/create", createTodo);
todoRouter.get("/get/:_id", getTodo);
todoRouter.put("/update/:_id", updateTodo);
todoRouter.delete("/delete/:_id", deleteTodo);