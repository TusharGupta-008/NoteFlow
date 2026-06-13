import express from "express";
import { createNote, getNotes } from "../controllers/note.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const noteRouter = express.Router();

noteRouter.post("/create", authMiddleware, createNote);
noteRouter.get("/get", authMiddleware, getNotes);

export default noteRouter;
