import express from "express";
import {
    postUserTask,
    getUserTask,
    getUserTaskById,
    deleteUserTask
} from "./userTask.controller.js";

const router = express.Router();

router.post("/userTask", postUserTask);
router.get("/userTask", getUserTask);
router.get("/userTask:id", getUserTaskById);
router.delete("/userTask:id", deleteUserTask);

export default router;