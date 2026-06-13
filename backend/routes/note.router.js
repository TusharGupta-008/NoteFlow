import express from "express";
import {
  createNote,
  deleteNote,
  getNotes,
  singleNote,
} from "../controllers/note.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const noteRouter = express.Router();

noteRouter.post("/create", authMiddleware, createNote);
noteRouter.get("/get", authMiddleware, getNotes);
noteRouter.get("/singleGet/:id", authMiddleware, singleNote);
noteRouter.delete("/delete/:id", authMiddleware, deleteNote);

export default noteRouter;
