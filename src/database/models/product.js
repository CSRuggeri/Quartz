// En src/database/models/product.js
import { DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid'; 

export default (sequelize) => {
  const Products = sequelize.define('Products', {
    id: {
      type: DataTypes.UUID,
      defaultValue: () => uuidv4(), 
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    available: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return Products;
};
