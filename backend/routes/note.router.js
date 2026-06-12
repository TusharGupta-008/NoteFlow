import express from "express";
import createNote from "../controllers/note.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const noteRouter = express.Router();

noteRouter.post("/create",authMiddleware,createNote);

export default noteRouter;
