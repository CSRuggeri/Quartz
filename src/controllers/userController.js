import { createUser, getUsers, getUserById, getUsersByName, updateUser, deleteUser } from "../services/userService.js";

export const addUser = async (req, res) => {
  try {
    const userData = req.body;
    const newUser = await createUser(userData);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const listUsers = async (req, res) => {
  try {
    const users = await getUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserId = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await getUserById(id);
    if (!result) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(result);
  } catch (error) {
    console.log("Este es el error del controller", error);
    res.status(400).json({ message: "Error retrieving user" });
  }
};

export const getUserByName = async (req, res) => {
  try {
    const { name } = req.params;
    const result = await getUsersByName(name);
    if (result.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(result);
  } catch (error) {
    console.log("Este es el error del controller", error);
    res.status(400).json({ message: "Error retrieving user" });
  }
};

export const editUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const updatedUser = await updateUser(id, updateData);
    res.status(200).json(updatedUser);
  } catch (error) {
    console.log("Este es el error del controller", error);
    res.status(400).json({ message: error.message });
  }
};

export const removeUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await deleteUser(id);
    res.status(200).json(result);
  } catch (error) {
    console.log("Este es el error del controller", error);
    res.status(400).json({ message: error.message });
  }
};
