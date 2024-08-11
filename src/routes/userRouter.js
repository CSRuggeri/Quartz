// In src/routes/userRouter.js
import { Router } from "express";
import { 
    addUser, 
    listUsers, 
    getUserId, 
    editUser, 
    removeUser 
} from '../controllers/userController.js'; // Include '.js' extension

export const userRouter = Router();

// Create a new user
userRouter.post('/', addUser);

// Retrieve all users
userRouter.get('/', listUsers);

// Retrieve a user by ID
userRouter.get('/:id', getUserId);

// Update a user by ID
userRouter.put('/:id', editUser);

// Delete a user by ID
userRouter.delete('/:id', removeUser);

