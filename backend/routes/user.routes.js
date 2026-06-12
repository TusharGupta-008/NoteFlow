import express from "express";
import {
  signUp,
  login,
  profileController,
} from "../controllers/user.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const appRouter = express.Router();

appRouter.post("/signUp", signUp);
appRouter.post("/login", login);
appRouter.get("/profile", authMiddleware, profileController);

export default appRouter;
