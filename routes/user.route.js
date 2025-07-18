import express from "express";
import { createUser, deleteUser, getUsers, updateUser } from "../controllers/user.controller.js";

const router = express.Router();
router.get('/', getUsers);
router.put('/:id', updateUser);
router.post('/', createUser);
router.delete("/:id", deleteUser);
export default router;