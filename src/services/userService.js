import { loadModels } from '../database/db.js';

const createUser = async (userData) => {
  try {
    const { Users } = await loadModels();
    console.log('Users model:', Users);  // Log the Users model to verify
    if (!Users) {
      throw new Error('Users model is not defined');
    }
    const newUser = await Users.create(userData);
    return newUser;
  } catch (error) {
    console.error('Error creating user:', error);
    throw new Error('Unable to create user');
  }
};

const getAllUsers = async () => {
  try {
    const { Users } = await loadModels();
    console.log('Users model for fetching:', Users);  // Log for verification
    if (!Users) {
      throw new Error('Users model is not defined');
    }
    const users = await Users.findAll();
    return users;
  } catch (error) {
    console.error('Error retrieving users:', error);
    throw new Error('Unable to retrieve users');
  }
};

export { createUser, getAllUsers };
