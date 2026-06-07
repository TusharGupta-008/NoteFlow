import express from "express";
import signUp from "../controllers/user.controller.js";

const appRouter = express.Router();

appRouter.get("/signup", signUp);

export default appRouter;
