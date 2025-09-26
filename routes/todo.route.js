import express from "express";
import { createTodo, getAllTodos } from "../controllers/todo.controller.js";

const router = express.Router();

router.route("/").post(createTodo).get(getAllTodos);
// router.route("/:todoId").put();
export default router;
