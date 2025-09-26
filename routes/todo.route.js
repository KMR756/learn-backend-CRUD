import express from "express";
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  updateTodo,
} from "../controllers/todo.controller.js";

const router = express.Router();

router.route("/").post(createTodo).get(getAllTodos);
router.route("/:todoId").put(updateTodo).delete(deleteTodo);
// router.route("/:todoId").delete(deleteTodo);
export default router;
