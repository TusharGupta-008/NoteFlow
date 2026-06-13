import express from "express";
import {
  createNote,
  getNotes,
  singleNote,
} from "../controllers/note.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const noteRouter = express.Router();

noteRouter.post("/create", authMiddleware, createNote);
noteRouter.get("/get", authMiddleware, getNotes);
noteRouter.get("/singleGet/:id", authMiddleware, singleNote);

export default noteRouter;
