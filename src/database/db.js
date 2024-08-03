// src/database/db.js
import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
import { readdirSync } from 'fs';
import { fileURLToPath, pathToFileURL } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false,
    host: DB_HOST,
    dialect: 'postgres',
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true,
      },
    },
  }
);

const modelDefiners = [];

const modelFiles = readdirSync(path.join(__dirname, './models'))
  .filter((file) => file.indexOf('.') !== 0 && file.slice(-3) === '.js');

const loadModels = async () => {
  for (const file of modelFiles) {
    const modelPath = pathToFileURL(path.join(__dirname, './models', file));
    console.log(`Importing model from: ${modelPath.href}`);

    try {
      const modelDefiner = await import(modelPath.href);
      modelDefiners.push(modelDefiner.default || modelDefiner);
    } catch (err) {
      console.error(`Failed to import ${modelPath.href}:`, err);
    }
  }

  modelDefiners.forEach((model) => model(sequelize));

  const { Products, Users } = sequelize.models;

  // Log the models to ensure they are loaded correctly
  console.log('Loaded models:', { Products, Users });

  return { Products, Users };
};

export { sequelize as db, loadModels };
