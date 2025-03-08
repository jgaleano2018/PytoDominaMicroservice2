import express from "express";
import {
    postTask,
    getTask,
    getTaskById,
    putTask,
    deleteTask
} from "./task.controller.js";

const router = express.Router();

router.post("/task", postTask);
router.get("/task", getTask);
router.get("/task:id", getTaskById);
router.put("/task:id", putTask);
router.delete("/task:id", deleteTask);

export default router;