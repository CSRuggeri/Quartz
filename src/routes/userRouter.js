// In src/routes/productRouter.js
import { Router } from "express";

export const userRouter = Router();

userRouter.get("/", (req, res) => {
    res.send("User route");
});
