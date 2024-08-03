// In src/routes/mainRouter.js
import { Router } from "express";
import { productRouter } from "./productRouter.js"; // Ensure '.js' extension
import { userRouter } from "./userRouter.js"; // Ensure '.js' extension

const router = Router();

router.use("/product", productRouter);
router.use("/user", userRouter);
export default router