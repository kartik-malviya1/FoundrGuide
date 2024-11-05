import { Router } from "express";
import { adminRouter } from "./admin";
import { userRouter } from "./user";

export const router = Router();

router.use("/user", userRouter)
router.use("/admin", adminRouter)