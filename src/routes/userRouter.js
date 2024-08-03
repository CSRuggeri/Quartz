// In src/routes/productRouter.js
import { Router } from "express";
import { addUser,  listUsers } from '../controllers/userController.js'; // Include '.js' extension

export const userRouter = Router();

userRouter.post('/', addUser);
userRouter.get('/', listUsers);


