import { loadModels } from "../database/db.js";
import { Op } from 'sequelize';

// Retrieve all users
const getUsers = async () => {
    const { Users } = await loadModels();
    const allUsers = await Users.findAll();
    return allUsers;
};

// Create a new user
const createUser = async (userData) => {
    const { Users } = await loadModels();
    const newUser = await Users.create(userData);
    console.log('User registered successfully:', newUser);
    return newUser;
};

// Get a user by ID
const getUserById = async (id) => {
    const { Users } = await loadModels();
    const dbUserById = await Users.findByPk(id);
    if (!dbUserById) {
        throw new Error('User not found');
    }
    console.log(dbUserById);
    return dbUserById;
};

// Get users by name
const getUsersByName = async (name) => {
    const { Users } = await loadModels();
    const dbUsersByName = await Users.findAll({
        where: {
            nombre: {
                [Op.like]: `%${name}%`
            }
        }
    });
    console.log(dbUsersByName);
    return dbUsersByName;
};

// Update a user by ID
const updateUser = async (id, updateData) => {
    const { Users } = await loadModels();
    const [updatedRowsCount] = await Users.update(updateData, {
        where: {
            id: id
        }
    });

    if (updatedRowsCount === 0) {
        throw new Error('User not found or no changes were made');
    }

    const updatedUser = await getUserById(id);
    console.log('User updated successfully:', updatedUser);
    return updatedUser;
};

// Delete a user by ID
const deleteUser = async (id) => {
    const { Users } = await loadModels();
    const deletedRowsCount = await Users.destroy({
        where: {
            id: id
        }
    });

    if (deletedRowsCount === 0) {
        throw new Error('User not found');
    }

    console.log('User deleted successfully');
    return { message: 'User deleted successfully' };
};

export { createUser, getUsers, getUserById, getUsersByName, updateUser, deleteUser };
