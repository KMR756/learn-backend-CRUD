import { Todo } from "../models/todo.js";

export const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(403).json({
        success: false,
        message: "title is required",
      });
    }
    const todo = new Todo({ title, description });
    todo.save();
    return res.status(201).json({
      success: true,
      message: "todo created",
      todo,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    return res.status(200).json({
      success: true,
      todos,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo = async (req, res) => {
  try {
    const todoId = req.params.todoId;
    const { title, description } = req.body;
    // const todo = await Todo.findById(todoId);
    // todo.title = title;
    // todo.description = description;
    const todo = await Todo.findByIdAndUpdate(
      todoId,
      { title, description },
      { new: true }
    );
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "todo is not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "todo update succesfully",
      todo,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const todoId = req.params.todoId;
    const todo = await Todo.findByIdAndDelete(todoId);
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "todo is not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "todo deleted susccessfully",
    });
  } catch (error) {
    console.log(error);
  }
};
