

import { todoModel } from "../model/todo.model.js"


export const createTodo = async (req, res) => {

  try {
    const userId = req.user._id;

    const { title, completed } = req.body;


    if (!userId && !title) {
      res.status(404).json({ message: "NOT FOUND" });
    }

    const todoTask = await todoModel.create({ userId, title, completed });

    res.status(200).json(todoTask);


  } catch (error) {

    console.error(error);
    res.status(500).json({ message: "error message" });

  }

}





export const getAllTodoOfUser = async (req, res) => {

  try {

    const userId = req.user

    const todoTask = await todoModel.find({ userId });

    if (!todoTask) {

      return res.status(404).json({ message: "TODO NOT FOUND" });

    }

    res.status(200).json(todoTask);

  } catch (error) {

    console.error(error);
    res.status(500).json({ message: "error message" });

  }
}

export const getTodoById = async (req, res) => {

  try {

    const { id } = req.params
    const userId = req.userId

    const todoTask = await todoModel.findOne({ _id: id, userId });

    if (!todoTask) {

      return res.status(404).json({ message: "Todo Not Found" });

    }

    res.status(200).json(todoTask);

  } catch (error) {

    console.error(error);
    res.status(500).json({ message: "error message" });

  }
}





export const updateTodo = async (req, res) => {

  try {

    const { id } = req.params;

    const totoTaskUpdate = await todoModel.findByIdAndUpdate(
      id,
      { $set: { title, completed } }
    );

    if (!totoTaskUpdate) {
      return res.status(400).json({ message: "NOT UPDATE TOTO" });
    }

    res.status(200).json(totoTaskUpdate);

  } catch (error) {

    console.log(error);
    res.status(500).json({ message: "INTERNAL SERVER ERROR" });

  }



}







export const deleteTodo = async (req, res) => {

  try {

    const { id } = req.params;

    const todoDelete = await todoModel.findOneAndDelete(id);

    if (!todoDelete) {
      return res.status(404).json({ message: "NOT DELETE USER" });

    }

    res.status(200).json(todoDelete);

  } catch (error) {

    console.log(error);
    res.status(500).json({ message: "INTERNAL SERVER ERROR" });

  }



}