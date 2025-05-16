import { Router } from "express";
import { createTodo, getAllTodoOfUser, updateTodo, deleteTodo, getTodoById } from "../controller/todo.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";


export const todoRouter = Router();


todoRouter.post("/create", authMiddleware, createTodo);
todoRouter.get("/get", authMiddleware, getAllTodoOfUser);
todoRouter.get("/get/:id", authMiddleware, getTodoById);
todoRouter.put("/update/:id", authMiddleware, updateTodo);
todoRouter.delete("/delete/:id", authMiddleware, deleteTodo);