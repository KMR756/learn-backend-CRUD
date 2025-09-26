import express from "express";
import {
  createTodo,
  getAllTodos,
  updateTodo,
} from "../controllers/todo.controller.js";

const router = express.Router();

router.route("/").post(createTodo).get(getAllTodos);
router.route("/:todoId").put(updateTodo);
export default router;
