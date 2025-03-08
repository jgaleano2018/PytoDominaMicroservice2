import express from "express";
import {
    postUser,
    getUser,
    getUserById,
    putUser,
    deleteUser
} from "./user.controller.js";

const router = express.Router();

router.post("/user", postUser);
router.get("/user", getUser);
router.get("/user:id", getUserById);
router.put("/user:id", putUser);
router.delete("/user:id", deleteUser);

export default router;