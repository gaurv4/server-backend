import express from "express";
import { register, login } from "../controllers/authController.js";
import validate from "../middlewares/validate-middleware.js";
import { signInSchema, signupSchema } from "../validators/auth-validator.js";
import { getAllUsers } from "../controllers/getAllUsers.js";

const router = express.Router();

router.post("/auth/register", validate(signupSchema), register);

router.post("/auth/login", validate(signInSchema), login);

router.get("/users", getAllUsers);

export default router;
