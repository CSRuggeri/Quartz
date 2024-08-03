// In src/routes/productRouter.js
import { Router } from "express";

export const productRouter = Router();

productRouter.get("/", (req, res) => {
    res.send("Product route");
});
